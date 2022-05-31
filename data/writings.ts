interface Writing {
	slug: string;
	title: string;
	date: string;
	time?: string;
	excerpt?: string;
	tags: string[];
	category?: string;
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
		excerpt: `Pseudocode Innovation.`,
		tags: [''],
		category: 'Philosophy',
	},
	{
		slug: 'the-internet-an-extension-of-google',
		title: 'The Internet: An Extension of Google',
		date: '2022-03-27',
		time: '13:00',
		excerpt: `Using Inspect Element. Literally.`,
		tags: ['google', 'the internet'],
		category: 'Technology',
	},
	{
		slug: 'on-realization',
		title: 'On Realization',
		date: '2022-03-20',
		time: '13:00',
		excerpt: `Maps & Destinations.`,
		tags: ['realization', 'sherlock lol'],
		category: 'Philosophy',
	},
	{
		slug: 'write-maintainable-code-the-first-time',
		title: 'Write Maintainable Code the First Time',
		date: '2021/11/14',
		time: '12:00',
		excerpt: `Clean. Modular. Simple.`,
		tags: [''],
		category: 'Programming',
	},
];


export { writings };

export type { Writing };
