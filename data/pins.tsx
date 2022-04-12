import ELi from "../components/ELi";

interface Pin {
	date: string,
	title: string,
	content: React.ReactNode;
	tags: string[];
}

const pins: Pin[] = [
	{
		date: '2022-04-12 13:40',
		title: 'Remember the previous puzzle',
		content: (
			<>
				<p>One mustn't forget that the previous puzzle involved arrays of four numbers.</p>
			</>
		),
		tags: ['hint for puzzle 2 second'],
	},
	{
		date: '2022-04-12 11:00',
		title: 'On the new puzzle difficulty rating',
		content: (
			<>
				<p>I'm introducing a new "difficulty rating" for my puzzles. Some of them, like the first one, look rather daunting at first, but are actually very simple to solve. Yet others, like my upcoming one, look simple, but hide behind it a mountain of complexity.</p>
				<p>To better help you interpret the effort required to solve any given puzzle, I'll be including a difficulty rating between 0 and 9.</p>
				<p>9 is maximum difficultly. Characteristics of level 9 include me, myself forgetting how to solve certain parts of it.</p>
				<p>Whereas a level 0 would indicate it's practically solved in its default state, just a minor change needed.</p>
				<p>April's first puzzle is an example of a level 2 puzzle. The solution was to throw the string into a hex-to-string converter, and then take only the numbers of that output and throw that into the same hex-to-string converter.</p>
				<p>Puzzles will generally be rated on their complexity rather than the knowledge required to solve them. For instance, April's first puzzle, while simple for those of us who know what hex representation is, might seem like a level 9 to my non-techie brother.</p>
				<p>Puzzles are also rather low-key. There's no direct view of them like there are articles or pins. Instead, puzzles are found in random places throughout the site, so keep your eye out!</p>
				<p>Avoid the temptation to use my commit history as a list of the puzzles. The solutions will not be included in the commits (obviously) but the location will be... somewhat apparent.</p>
				<p>Happy solving :)</p>
			</>
		),
		tags: ['puzzle', 'april'],
	},
	{
		date: '2022-04-11',
		title: 'SiteGround for WordPress, HTML, and PHP hosting',
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
		tags: [''],
	},
	{
		date: '2022-04-08',
		title: 'April Puzzle',
		content: (
			<>
				<p>
					April's first puzzle was solved by <ELi href='https://codeberg.org/ar324'>ar324!</ELi> Very well done.
				</p>
			</>
		),
		tags: [''],
	},
	{
		date: '2022-04-06',
		title: 'Vercel Customer Service, more',
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
		tags: [''],
	},
];

export {
	pins,
};

export type {
	Pin,
}