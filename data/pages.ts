interface Page {
	id?: string;
	href?: string;
	title: string;
	tags: string[];
}

const pages: Page[] = [
	{
		href: '/',
		title: 'home',
		tags: ['landing', 'first', '1'],
	},
	{
		href: '/writings',
		title: 'writings',
		tags: ['blog'],
	},
	{
		href: '/code',
		title: 'code',
		tags: ['projects'],
	},
	{
		href: '/pins',
		title: 'pins',
		tags: [''],
	},
	{
		href: '/whoami',
		title: 'whoami',
		tags: ['about me'],
	},
	{
		href: '/help',
		title: 'help',
		tags: [''],
	},
	{
		href: '/privacy',
		title: 'privacy',
		tags: [''],
	},
	{
		href: '/samara',
		title: 'samara',
		tags: [''],
	},
];

const helpPages: Page[] = [
	{
		id: 'shortcuts',
		title: 'Keyboard shortcuts',
		href: '/help?h=shortcuts#shortcuts',
		tags: [''],
	},
];

export { pages, helpPages };

export type { Page };
