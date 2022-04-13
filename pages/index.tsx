import ELi from '../components/ELi';
import Li from '../components/Li';
import PageMeta from '../components/PageMeta';
import Spacer from '../components/Spacer';
import Layout from '../components/layout/Layout';
import Pins from '../components/Pins';
import Pin from '../components/Pin';

import { getRandomString } from '../logic/rand';

import config from '../data/config';
import global from '../data/global';
import { pins } from '../data/pins';
import { quotes } from '../data/random';

const titles = ['home', 'index', '127.0.0.1', 'mod main', 'hello', 'welcome'];

const Home = () => {
	const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

	return (
		<>
			<PageMeta
				meta={{
					title: 'home',
					description: "~athena's personal website.",
				}}
			/>

			<h1 id='fancyboi' className='title index-title'>
				{getRandomString(titles)}
			</h1>
			<p>
				<Li href='/whoami'>whoami?</Li>
			</p>
			<p>Find me @:</p>
			<ul>
				{global.social.map((social) => {
					let inner = `${social.username} on ${social.title}`;
				
					if (social.title === 'Mastodon') {
						inner = 'Follow me on Mastodon';
					}

					return (
						<li key={social.title}>
							{social.href ? (
								<ELi href={social.href} rel={social.title === 'Mastodon' ? 'me' : ''}>{inner}</ELi>
							) : (
								<span>{inner}</span>
							)}
						</li>
					);
				})}
			</ul>

			<Spacer />

			<div className='mw-35r'>
				<h3>Latest Pins</h3>
				<Pins>
					{pins.map((pin, i) => {
						if (i + 1 > config.homePinCount) {
							return <></>;
						}

						return (
							<Pin key={pin.date} {...pin} highlight={false} />
						);
					})}
				</Pins>
			</div>

			{pins.length > config.homePinCount && (
				<Li href='/pins'>View all pins</Li>
			)}

			<Spacer />
			<Spacer />

			<p>Random thought:</p>
			<p>{randomQuote}</p>
		</>
	);
};

Home.layout = Layout;

export default Home;
