import ELi from '../components/ELi';
import Layout from '../components/layout/Layout';

const Articles = () => {
	return (
		<>
			<h1 id="fancyboi" className="title">whoami</h1>

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
		</>
	);
};

Articles.layout = Layout;

export default Articles;
