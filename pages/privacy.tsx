import ELi from '../components/ELi';
import Li from '../components/Li';
import Layout from '../components/layout/Layout';
import PageMeta from '../components/PageMeta';
import Wrapper from '../components/Wrapper';

const Privacy = () => {
	return (
		<>
			<PageMeta
				meta={{
					title: 'Privacy',
					description: `Short version: you're anonymous`,
				}}
			/>
			<Wrapper s='top' c='flex-c'>
				<article className='mw-35r w-100p'>
					<h1>Privacy</h1>
					<p>Last updated: 15 April, 2022</p>
					<p>This website is owned and operated my me, one person. I don't show ads ("ads aren't cool") nor do I make money from this site.</p>
					<p>I do not ask for any of your information, and I do not want it.</p>
					<p>I use <ELi href='https://vercel.com' className='j-link'>Vercel</ELi> to host this site because they are awesome and it makes my life easier. I cannot control what information they, as my web host, log; you'll have to check their privacy policy for information about that.</p>
					<p>This site itself collects no analytics, sends no requests (via AJAX, I mean), logs nothing directly, and so on.</p>
					<p>I use localStorage occasionally to save your preferences and make your experience a bit more memorable. This information is saved directly in your browser and it is not sent to my servers. You can delete this information at any time by either clearing your browser cache and site data or by opening the developer tools and manually delting the "settings" row.</p>
					<p>If you have any questions about the privacy practices of this website, feel free to reach out.</p>
					<p>See the <Li href='/whoami'>whoami</Li> page for contact information.</p>
				</article>
			</Wrapper>
		</>
	);
};

Privacy.layout = Layout;

export default Privacy;
