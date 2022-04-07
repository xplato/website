import ELi from "../components/ELi";
import Li from "../components/Li";
import PageMeta from "../components/PageMeta";
import Spacer from "../components/Spacer";
import Layout from "../components/layout/Layout";
import Pin from "../components/Pin";

import { getRandomString } from "../logic/rand";

import config from "../data/config";
import pins from "../data/pins";
import { quotes } from "../data/random";
import PinsGrid from "../components/PinsGrid";

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

			<h3>Pins</h3>
			<PinsGrid>
				{pins.map((pin, i) => {
					if (i + 1 > config.homePinCount) {
						return <></>;
					}

					return <Pin key={pin.date} {...pin} />
				})}
			</PinsGrid>

			{pins.length > config.homePinCount && (
				<Li href='/pins'>Show all pins</Li>
			)}

			<hr></hr>

			<p>Random thought:</p>
			<p>{randomQuote}</p>
			
			{randomQuote === 'Bingo!' && (
				<Li href='/partner'>You've made it, partner.</Li>
			)}
		</>
	);
};

Home.layout = Layout;

export default Home;
