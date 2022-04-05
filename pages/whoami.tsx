import ELi from '../components/ELi';
import Layout from '../components/layout/Layout';
import PageMeta from '../components/PageMeta';

import { getRandomString } from '../logic/rand';

const titles = [
	'whoami',
	'who',
	'echo $USER',
	'id athena',
];

const Whoami = () => {
	return (
		<>
			<PageMeta meta={{
				title: 'whoami',
				description: 'About me.',
			}} />

			<h1 id="fancyboi" className="title">{getRandomString(titles)}</h1>
			<p>
				I'm Tristan. This is my very minimal personal website. This is the place I write
				(when I don't write for{' '}
				<ELi href='https://infinium.earth'>
					Infinium
				</ELi>
				).
			</p>
			<p>
				I'm a full-stack software engineer. I've been focused on web-related
				tech for many years, but I'm now completely bored with it. As of late,
				I've been more interested in lower-level systems programming.
			</p>
			<p>
				I'm currently working on a variety of projects. The most useful one is{' '}
				<ELi href="https://gofe.app">Gofë,</ELi> which is a private front-end for
				Google Search.
			</p>
			<p>...</p>
			<p>
				If you are interested in hiring me or my company, contact us{' '}
				<ELi href='https://www.infinium.earth/contact'>
					on our website.
				</ELi>
			</p>
		</>
	);
};

Whoami.layout = Layout;

export default Whoami;
