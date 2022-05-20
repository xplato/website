import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

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
					<section className='section mnh-screen'>
						<div className='container flex-c'>
							<div className='mw-40r flex-c text-c'>
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
							<div className='article-container w-100p'>
								<p className='mt-0-5r fs-base fw-500 opacity-08'>
									{getDate(writing.date)}
								</p>
								<h1>{writing.title}</h1>
								<div
									dangerouslySetInnerHTML={{
										// @ts-ignore
										__html: writing.content,
									}}
								></div>
							</div>
						</div>
					</>
				)}
			</Writing>
		</>
	);
};

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
