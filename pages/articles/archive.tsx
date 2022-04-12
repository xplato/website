import Li from "../../components/Li";
import PageMeta from "../../components/PageMeta";

import { archivedArticles } from "../../data/articles";
import { getRandomString } from "../../logic/rand";

const titles = [
	'Archived articles',
	'The graveyard',
	'Here lies...',
	'Abandon all hope ye who enter here!',
];

const Archive = () => {
	return (
		<>
			<PageMeta meta={{
				title: 'Archived articles',
				description: "Stuff you shouldn't see...",
			}} />
			<h1 id='fancyboi' className='title'>
				{getRandomString(titles)}
			</h1>
			<p>
				I prefer not to unpublish something that was once live. As such,
				here is a collection of <i>my</i> least favorite articles. Read
				them at your peril.
			</p>

			<p>
				Most of these... I wasn't "in the normal state of mind," if you know what I mean.
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
