import ELi from "../components/ELi";
import Li from "../components/Li";
import PageMeta from "../components/PageMeta";
import Spacer from "../components/Spacer";
import Layout from "../components/layout/Layout";
import PinsGrid from "../components/PinsGrid";
import Pin from "../components/Pin";

import { getRandomString } from "../logic/rand";

import config from "../data/config";
import pins from "../data/pins";
import global from "../data/global";
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
				{global.social.map(social => {
					const inner = `${social.username} on ${social.title}`;

					return (
						<li key={social.title}>
							{social.url ? (
								<ELi href={social.url}>{inner}</ELi>
							) : (
								<span>{inner}</span>
							)}
						</li>
					);
				})}
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
		</>
	);
};

Home.layout = Layout;

export default Home;
