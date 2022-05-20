interface Global {
	email: string;
	social: Social[];
}

interface Social {
	title: string;
	username: string;
	href?: string;
}

const global: Global = {
	email: 'tristan@infinium.earth',
	social: [
		{
			title: 'Codeberg',
			username: 'xplato',
			href: 'https://codeberg.org/xplato',
		},
		{
			title: 'GitHub',
			username: 'xplato',
			href: 'https://github.com/xplato',
		},
		{
			title: 'Mastodon',
			username: 'xplato',
			href: 'https://fosstodon.org/@xplato',
		},
		{
			title: 'Matrix',
			username: '@xplato:matrix.org',
		},
	],
};

export default global;
