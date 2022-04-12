interface Global {
	social: Social[];
}

interface Social {
	title: string;
	username: string;
	href?: string;
}

const global: Global = {
	social: [
		{
			title: 'Codeberg',
			username: 'athena',
			href: 'https://codeberg.org/athena',
		},
		{
			title: 'GitHub',
			username: 'xplato',
			href: 'https://github.com/xplato',
		},
		{
			title: 'Matrix',
			username: '@xplato:matrix.org',
		},
	],
};

export default global;
