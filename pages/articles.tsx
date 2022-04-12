import PageMeta from '../components/PageMeta';
import Layout from '../components/layout/Layout';
import Li from '../components/Li';

import { articles } from '../data/articles';
import { getRandomString } from '../logic/rand';

const titles = [
	'articles',
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
					title: 'articles',
					description: 'I write occasionally.',
				}}
			/>
			<h1 id='fancyboi' className='title'>
				{getRandomString(titles)}
			</h1>
			<p>I write occasionally.</p>

			<ul>
				{articles.map((article) => (
					<li key={article.slug}>
						<Li
							href={`/articles/${article.slug}`}
							className='multiline'
						>
							{article.title} ({article.date})
						</Li>
					</li>
				))}
				<li>
					<Li href='/articles/archive/' className='multiline'>
						...more
					</Li>
				</li>
			</ul>
		</>
	);
};

Articles.layout = Layout;

export default Articles;
