import PageTitle from '../components/PageTitle';
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
			<PageTitle>articles</PageTitle>
			<h1 id='fancyboi' className='title'>{getRandomString(titles)}</h1>
			<p>I write occasionally.</p>

			<ul>
				{articles.map(article => (
					<li key={article.slug}>
						<Li href={`/articles/${article.slug}`}>{article.title} ({article.date})</Li>
					</li>
				))}
				<li>
					<Li href='/articles/archive/'>...more</Li>
				</li>
			</ul>
		</>
	);
};

Articles.layout = Layout;

export default Articles;
