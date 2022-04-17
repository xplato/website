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


export { writings };

export type { Writing };
