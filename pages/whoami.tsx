import ELi from '../components/ELi';
import Layout from '../components/layout/Layout';
import PageMeta from '../components/PageMeta';
import Wrapper from '../components/Wrapper';

const Whoami = () => {
	return (
		<>
			<PageMeta
				meta={{
					title: 'whoami',
					description: 'About me.',
				}}
			/>

			<section className='whoami-section'>
				<div className='image-wrapper'>
					<div className='image'></div>
				</div>
				<div className='content'>
					<div className='container text-white'>
						<div className='w-100p grid grid-2 landscape-grid-1'>
							<div className='grid-block landscape-align-c landscape-text-c'>
								<h1 className='fw-600 fs-7xl tablet-fs-6xl landscape-fs-5xl'>whoami</h1>
								<h4 className='fs-lg'>I build things for the web and the command-line.</h4>
							</div>
							<div className='grid-block align-e landscape-align-c landscape-text-c'>
								<p className='mb-0 caption-text white'>Zion National Park</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Wrapper s='ui-1 dark-ui mod-padding' c='primary-text flex-c'>
				<article className='w-100p mw-40r'>
					<p className='fs-lg mb-0-5r'>
						I'm Tristan, a full-stack software engineer specializing
						in websites. I develop unique and professional solutions
						through a wide variety of mediums.
					</p>
					<p>
						I spend about half of my time working on open-source
						projects. The other half is spent freelancing or working
						for my business Infinium.
					</p>
					<p>
						I'm available for hire on certain web- or
						software-related projects. Contact info at the bottom.
					</p>

					<h2>My Work</h2>

					<p>I am a developer who can design. I am not a designer.</p>

					<p>
						Against popular opinion, I'm a big fan of JavaScript.
						There's... freedom in a terrible type system. That's why
						I use TypeScript—to maximize the best of both.
					</p>

					<p>
						That said, I've been working on websites for a long
						time. As of now, I'm rather bored with it (yes, I am
						still making websites on a professional level, don't
						worry). Lately, I've been focusing my research on
						systems-level programming with languages I'm very fond
						of like Rust and Go.
					</p>

					<h3>What I Use</h3>

					<p>
						I would love to use Linux, but my hardware has a
						vendetta against it. Therefore, I use MacOS.
					</p>
					<p>
						I use <ELi href='https://iterm2.com/'>iTerm2</ELi>{' '}
						(MacOS only, unfortunately). It's perhaps the best
						terminal emulator I've ever used. For my shell, I use{' '}
						<ELi href='https://fishshell.com/'>
							The Friendly Interactive Shell (Fish)
						</ELi>{' '}
						(thanks for telling me about it,{' '}
						<ELi href='https://codeberg.org/ar324'>ar324</ELi>). I
						also use the{' '}
						<ELi href='https://starship.rs/'>Starship</ELi> prompt
						within Fish. I abhor normal shell prompts and Starship
						makes it more or less easy to modify (their docs are
						pretty high-level; once you get over the initial
						understanding, it's really easy to use).
					</p>
					<p>
						I use a combination of{' '}
						<ELi href='https://vscodium.com/'>VSCodium</ELi> and Vim
						for editing. VSCodium's keybindings truly unlock the
						one-mode way of editing. This is in opposition to, say,
						Vim, where you have different modes of editing, not just
						insertion like GUI editors.
					</p>
					<p>
						The editor I use depends on the project I'm working on.
						When I work on websites, for instance, they usually
						involve so many files that navigation in Vim (even with
						something awesome like{' '}
						<ELi href='https://github.com/ctrlpvim/ctrlp.vim'>
							CtrlP
						</ELi>{' '}
						or{' '}
						<ELi href='https://github.com/preservim/nerdtree'>
							NERDTree
						</ELi>
						) becomes a hinderance. Not to mention, front-end code
						(in my workflow) generally involves a lot of selections
						for which VSCodium, being a GUI, is espescially suited.
					</p>

					<h2>Contact Me</h2>

					<p>
						For general questions, comments on writings,
						business-related inquiries and so on, you can email me.
						If you're reporting an issue with this website, please{' '}
						<ELi href='https://github.com/xplato/website/issues'>
							open an issue on GitHub
						</ELi>{' '}
						instead.
					</p>
					<p>
						My email address is encoded with the{' '}
						<ELi href='https://cryptii.com/pipes/caesar-cipher'>
							Caesar Cipher
						</ELi>{' '}
						with a shift value of 7. Simply click on that link,
						paste the text, click "decode," set the shift value to
						"7" and boom! you've got my email.
					</p>
					<code>aypzahu@pumpupbt.lhyao</code>
					<p className='mt-1r'>Sorry, man. It's the bots.</p>
				</article>
			</Wrapper>
		</>
	);
};

Whoami.layout = Layout;

export default Whoami;
