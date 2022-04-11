interface Article {
	slug: string;
	title: string;
	date: string;
	tags: string[];
}

const articles: Article[] = [
	{
		slug: 'the-internet-an-extension-of-google',
		title: 'The Internet: An Extension of Google',
		date: '27 March 2022',
		tags: ['google', 'the internet'],
	},
	{
		slug: 'on-realization',
		title: 'On Realization',
		date: '20 March 2022',
		tags: ['realization', 'sherlock lol'],
	},
];

const archivedArticles = [
	{
		slug: 'on-life-as-an-extension-of-experience',
		title: 'On Life as an Extension of Experience',
		date: '21 March 2022'
	},
	{
		slug: 'on-search-and-suggestions',
		title: 'On Search & Suggestions',
		date: '18 March 2022'
	},
];

export {
	articles,
	archivedArticles,
}

export type {
	Article,
}