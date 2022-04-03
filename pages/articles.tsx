import Layout from '../components/layout/Layout';
import Li from '../components/Li';
import { articles } from '../data/articles';

const Articles = () => {
	return (
		<>
			<h1 id='fancyboi' className='title'>Articles</h1>
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
