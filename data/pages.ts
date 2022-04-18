interface Page {
	id?: string;
	href?: string;
	title: string;
	tags: string[];
}

const pages: Page[] = [
	{
		href: '/',
		title: 'Home',
		tags: ['landing', 'first', '1'],
	},
	{
		href: '/writings',
		title: 'Writings',
		tags: ['blog'],
	},
	{
		href: '/code',
		title: 'Code & Projects',
		tags: ['projects'],
	},
	{
		href: '/pins',
		title: 'Pins',
		tags: [''],
	},
	{
		href: '/whoami',
		title: 'Whoami',
		tags: ['about me'],
	},
	{
		href: '/help',
		title: 'Help',
		tags: [''],
	},
	{
		href: '/privacy',
		title: 'Privacy',
		tags: [''],
	},
	{
		href: '/samara',
		title: 'Samara',
		tags: [''],
	},
];

const helpPages: Page[] = [
	{
		id: 'shortcuts',
		title: 'Keyboard Shortcuts',
		href: '/help?h=shortcuts#shortcuts',
		tags: [''],
	},
];

export { pages, helpPages };

export type { Page };
