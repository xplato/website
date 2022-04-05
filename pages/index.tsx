import ELi from "../components/ELi";
import Li from "../components/Li";
import PageMeta from "../components/PageMeta";
import Spacer from "../components/Spacer";

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

			<p>
				Injury-free since June, when I broke my finger flipping the injury countdown calendar.
			</p>

			<hr></hr>

			<p>{quotes[Math.floor(Math.random() * quotes.length)]}</p>
		</>
	);
};

export default Home;
