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
		slug: 'on-the-representation-of-innovation',
		title: 'On the Representation of Innovation',
		date: '2022-04-30',
		time: '02:25',
		excerpt: `There's this whole category within life. It's like this general wrapper around an entire way of thinking. On the one hand, you've got survival to think about...`,
		tags: [''],
	},
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
	{
		slug: 'write-maintainable-code-the-first-time',
		title: 'Write Maintainable Code the First Time',
		date: '2021/11/14',
		time: '12:00',
		excerpt: `Maintainability is a major aspect of programming. Get it right and you'll be worry-free. Get it wrong, however...`,
		tags: [''],
	},
];


export { writings };

export type { Writing };
