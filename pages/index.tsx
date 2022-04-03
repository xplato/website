import ELi from "../components/ELi";
import Li from "../components/Li";
import PageMeta from "../components/PageMeta";

import { getRandomString } from "../logic/rand";

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
				I'm Tristan. This is my very minimal personal website. This is the place I write
				(when I don't write for{' '}
				<ELi href='https://infinium.earth'>
					Infinium
				</ELi>
				).
			</p>
			<p>
				If you are interested in hiring me or my company, contact me via
				my Tilde email address. If you're not on Tilde, contact us{' '}
				<ELi href='https://www.infinium.earth/contact'>
					on our website.
				</ELi>
			</p>
			<p>
				You can <Li href='/articles'>see my writings</Li> or{' '}
				<Li href='/code'>some of my code</Li>{' '}
				if you're into that sort of thing.
			</p>
			<p>Find me:</p>
			<ul>
				<li>
					<ELi href="https://github.com/xplato">xplato on Github</ELi>
				</li>
				<li>
					<ELi href="https://github.com/xplato">athena on Codeberg</ELi>
				</li>
			</ul>
		</>
	);
};

export default Home;
