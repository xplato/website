import PageMeta from '../components/PageMeta';
import Layout from '../components/layout/Layout';
import Li from '../components/Li';

import { writings } from '../data/writings';
import { getRandomString } from '../logic/rand';
import { getPrettyDate } from '../logic/date';

const titles = [
	'writings',
	'blog',
	'sea log',
	'What, you egg?',
	'[He Stabs Him]',
];

const Articles = () => {
	return (
		<>
			<PageMeta
				meta={{
					title: 'writings',
					description: 'I write occasionally.',
				}}
			/>
			<h1 id='fancyboi' className='title'>
				{getRandomString(titles)}
			</h1>
			<p>I write occasionally.</p>

			<ul>
				{writings.map((article) => (
					<li key={article.slug}>
						<Li
							href={`/writings/${article.slug}`}
							className='multiline'
						>
							{article.title} ({getPrettyDate(article.date)})
						</Li>
					</li>
				))}
				<li>
					<Li href='/writings/archive/' className='multiline'>
						...more
					</Li>
				</li>
			</ul>
		</>
	);
};

Articles.layout = Layout;

export default Articles;
