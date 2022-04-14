import Li from "../../components/Li";
import PageMeta from "../../components/PageMeta";

import { archivedWritings } from "../../data/writings";
import { getRandomString } from "../../logic/rand";

const titles = [
	'Archived writings',
	'The graveyard',
	'Here lies...',
	'Abandon all hope ye who enter here!',
];

const Archive = () => {
	return (
		<>
			<PageMeta meta={{
				title: 'Archived writings',
				description: "Stuff you shouldn't see...",
			}} />
			<h1 id='fancyboi' className='title'>
				{getRandomString(titles)}
			</h1>
			<p>
				I prefer not to unpublish something that was once live. As such,
				here is a collection of <i>my</i> least favorite writings. Read
				them at your peril.
			</p>

			<p>
				Most of these... I wasn't "in the normal state of mind," if you know what I mean.
			</p>

			<ul>
				{archivedWritings.map(writing => (
					<li key={writing.slug}>
						<Li href={`/writings/archive/${writing.slug}`}>{writing.title} ({writing.date})</Li>
					</li>
				))}
			</ul>
		</>
	);
};

export default Archive;
