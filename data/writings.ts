interface Writing {
	slug: string;
	title: string;
	date: string;
	time: string;
	excerpt?: string;
	tags: string[];
}

const writings: Writing[] = [
	// {
	// 	slug: '',
	// 	title: '',
	// 	date: '',
	// 	time: '',
	// 	excerpt: ``,
	// 	tags: [''],
	// },
	{
		slug: 'the-internet-an-extension-of-google',
		title: 'The Internet: An Extension of Google',
		date: '2022-03-27',
		time: '13:00',
		excerpt: `There exist many tech companies who are right around or above the size of Google. We usually group them into this subtly suggestive term...`,
		tags: ['google', 'the internet'],
	},
	{
		slug: 'on-realization',
		title: 'On Realization',
		date: '2022-03-20',
		time: '13:00',
		excerpt: `Lately, I’ve found myself thinking, perhaps more often than I should, about realization in a general sense. We are all aware of those scenes in movies where the protagonist comes to a sudden...`,
		tags: ['realization', 'sherlock lol'],
	},
];

const archivedWritings: Writing[] = [
	{
		slug: 'on-life-as-an-extension-of-experience',
		title: 'On Life as an Extension of Experience',
		date: '2022-03-21',
		time: '13:00',
		excerpt: `I see the world as a series of interconnected systems. “Systems” here is rather general; they can be of any size, shape, or purpose. Most, if not all, however, do serve some purpose...`,
		tags: [''],
	},
	{
		slug: 'on-search-and-suggestions',
		title: 'On Search & Suggestions',
		date: '2022-03-18',
		time: '13:00',
		excerpt: `In the last few months, my work has been primarily focused on web-related projects with a similar (often identical) tech stack. I opened GitHub today, as I always do, and I happened to...`,
		tags: [''],
	},
];

export { writings, archivedWritings };

export type { Writing };
