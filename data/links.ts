interface Link {
	href: string;
	label: string;
	external?: boolean;
}

const navLinks: Link[] = [
	{ href: '/about', label: 'About' },
	{ href: '/writings', label: 'Writings' },
	{ href: '/contact', label: 'Contact' },
];

const footerLinks: Link[] = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/contact', label: 'Contact' },
	{ href: '/writings', label: 'Writings' },
	{ href: '/quotes', label: 'Quotes' },
	{ href: '/privacy', label: 'Privacy' },
	{ href: 'https://codeberg.org/xplato', label: 'Codeberg', external: true },
	{ href: 'https://github.com/xplato', label: 'GitHub', external: true },
	{ href: 'https://infinium.earth', label: 'Infinium', external: true },
	{ href: 'https://github.com/xplato/website', label: 'Source Code', external: true },
	{ href: 'https://github.com/xplato/website/issues', label: 'Report a bug', external: true },
];

export {
	navLinks,
	footerLinks,
}