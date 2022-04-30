import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import Layout from '../../components/layout/Layout';
import PageMeta from '../../components/PageMeta';
import Writing from '../../components/writing/Writing';

import markdownToHtml from '../../logic/markdownToHtml';
import { getWritingBySlug, getAllWritings } from '../../logic/writings';
import { getDate } from '../../logic/utils';

import type { Writing as TWriting } from '../../data/writings';

interface Props {
	writing: TWriting;
}

const SingleWriting = ({ writing }: Props) => {
	const router = useRouter();

	if (!router.isFallback && !writing?.slug) {
		return <ErrorPage statusCode={404} />;
	}

	return (
		<>
			<Writing>
				{router.isFallback ? (
					<section className="section mnh-screen">
						<div className="container flex-c">
							<div className="mw-40r flex-c text-c">
								<h1>Hang in there...</h1>
								<p>Fetching this writing...</p>
							</div>
						</div>
					</section>
				) : (
					<>
						<PageMeta
							meta={{
								title: writing.title,
								// @ts-ignore
								description: writing.excerpt,
							}}
						/>

						<div className='w-100p flex-c'>
							<div className='w-100p mw-50r mb-2r'>
								<p className='mt-0-5r fs-lg fw-500 text-dynamic-08'>
									{getDate(writing.date)}
								</p>
								<h1 className='fs-5xl tablet-fs-4xl fw-600 mb-1-5r'>
									{writing.title}
								</h1>
							</div>

							<article
								dangerouslySetInnerHTML={{
									// @ts-ignore
									__html: writing.content,
								}}
							></article>
						</div>
					</>
				)}
			</Writing>
		</>
	);
};

SingleWriting.layout = Layout;

export default SingleWriting;

export async function getStaticProps({ params }: { params: any }) {
	const writing = getWritingBySlug(params.slug, [
		'title',
		'date',
		'slug',
		'content',
		'excerpt',
		'type',
	]);
	const content = await markdownToHtml(writing.content || '');

	return {
		props: {
			writing: {
				...writing,
				content,
			},
		},
	};
}

export async function getStaticPaths() {
	const writings = getAllWritings(['slug']);

	return {
		paths: writings.map((writing: TWriting) => {
			return {
				params: {
					slug: writing.slug,
				},
			};
		}),
		fallback: false,
	};
}
