interface Global {
	social: Social[];
}

interface Social {
	title: string;
	username: string;
	url?: string;
}

const global: Global = {
	social: [
		{
			title: 'Codeberg',
			username: 'athena',
			url: 'https://codeberg.org/athena',
		},
		{
			title: 'GitHub',
			username: 'xplato',
			url: 'https://github.com/xplato',
		},
		{
			title: 'Matrix',
			username: '@xplato:matrix.org',
		}
	]
}

export default global;