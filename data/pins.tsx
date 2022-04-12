import ELi from "../components/ELi";

interface Pin {
	date: string,
	content: React.ReactNode;
}

const pins: Pin[] = [
	{
		date: '2022-04-11',
		content: (
			<>
				<p>
					<ELi href='https://www.siteground.com/'>SiteGround</ELi> is an exceptional web host for Wordpress, static HTML, or PHP websites.
				</p>
				<p>
					They offer a fantastic interface that allows me, as a developer, to make the specific
					modifications I need without hassle. Other web hosts that I've used (HostGator *cough
					cough*) baby-proof their interface which makes my life, as a developer, very difficult.
				</p>
				<p>
					If you're a more "advanced" user than normal and are working on a Wordpress/HTML/PHP
					site, you can't go wrong with SiteGround.
				</p>
			</>
		),
	},
	{
		date: '2022-04-08',
		content: (
			<>
				<p>
					April's first puzzle was solved by <ELi href='https://codeberg.org/ar324'>ar324!</ELi> Very well done.
				</p>
			</>
		),
	},
	{
		date: '2022-04-06',
		content: (
			<>
				<p>
					I simply cannot recommend <ELi href="https://vercel.app">Vercel</ELi> enough.
					On top of their already top-notch platform, the company itself is really something
					to admire. Their support team is unlike anything I have seen. And they really do
					read your reviews, I've tested it!
				</p>
				<p>
					Note that I am not endorsed by or affiliated with Vercel in any capacity. I've
					just been a happy user for over 2 years, way back when it was{' '}
					<ELi href='https://vercel.com/blog/zeit-is-now-vercel'>ZEIT!</ELi>
				</p>
			</>
		),
	},
];

export {
	pins,
};

export type {
	Pin,
}