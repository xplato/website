import ELi from "../components/ELi";

interface Pin {
	date: string,
	content: React.ReactNode;
	tags: string[];
}

const pins: Pin[] = [
	{
		date: '2022-04-08',
		content: (
			<>
				<p>
					April's first puzzle was solved by <ELi href='https://codeberg.org/ar324'>ar324!</ELi> Very well done.
				</p>
			</>
		),
		tags: ['puzzle', 'april'],
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
		tags: ['vercel', 'pin 1'],
	},
];

export {
	pins,
};

export type {
	Pin,
}