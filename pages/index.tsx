import ELi from "../components/ELi";
import Li from "../components/Li";
import PageMeta from "../components/PageMeta";
import Spacer from "../components/Spacer";
import Layout from "../components/layout/Layout";

import { getRandomString } from "../logic/rand";

import { quotes } from "../data/random";

const titles = [
	'home',
	'index',
	'127.0.0.1',
	'mod main',
	'hello',
	'welcome',
];

const Home = () => {
	const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

	return (
		<>
			<PageMeta meta={{
				title: 'home',
				description: "~athena's personal website.",
			}} />

			<h1 id='fancyboi' className='title index-title'>
				{getRandomString(titles)}
			</h1>
			<p>
				<Li href='/whoami'>whoami?</Li>
			</p>
			<p>Find me @:</p>
			<ul>
				<li>
					<ELi href="https://github.com/xplato">xplato on Github</ELi>
				</li>
				<li>
					<ELi href="https://codeberg.org/athena">athena on Codeberg</ELi>
				</li>
			</ul>

			<Spacer />

			<h3>Pinned</h3>
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

			<hr></hr>

			<p>Words of wisdom:</p>
			<p>{randomQuote}</p>
			
			{randomQuote === 'Bingo!' && (
				<Li href='/partner'>You've made it, partner.</Li>
			)}
		</>
	);
};

Home.layout = Layout;

export default Home;
