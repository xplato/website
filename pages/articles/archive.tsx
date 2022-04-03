import Li from "../../components/Li";
import { archivedArticles } from "../../data/articles";

const Archive = () => {
	return (
		<>
			<h1 id='fancyboi' className='title'>
				Archived articles
			</h1>
			<p>
				I prefer not to unpublish something that was once live. As such,
				here is a collection of <i>my</i> least favorite articles. Read
				them at your peril.
			</p>

			<ul>
				{archivedArticles.map(article => (
					<li key={article.slug}>
						<Li href={`/articles/archive/${article.slug}`}>{article.title} ({article.date})</Li>
					</li>
				))}
			</ul>
		</>
	);
};

export default Archive;
