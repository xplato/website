import Wrapper from '../components/Wrapper';
import PageMeta from '../components/PageMeta';
import Layout from '../components/layout/Layout';
import Li from '../components/Li';

const K = ({ children }: any) => <div className="key">{children}</div>

const Help = () => {
	return (
		<>
			<PageMeta
				meta={{
					title: 'help',
					description: 'Help, keyboard shortcuts, and more.',
				}}
			/>

			<Wrapper s='ui-1 dark-ui' c='flex-c'>
				<article className='w-100p mw-40r'>
					<h1 className='fw-600 mb-1r'>
						Help {'&'} Info
					</h1>
					<p className='fs-lg'>
						If you notice any bugs or have any questions about this
						site, don't hesitate to reach out.
					</p>
					<p>
						You can find contact info on the{' '}
						<Li href='/whoami'>whoami</Li> page.
					</p>

					<h2 id='shortcuts'>Keyboard Shortcuts</h2>
					<p>
						Although it may not look like it, this site is packed
						with keyboard shortcuts that make navigation super fast.
					</p>
					<p>
						The primary means of navigation is the search interface.
					</p>
					<p>
						You can open the search interface in 3 ways: pressing
						"/", pressing "s", or using the button in the navigation
						bar.
					</p>
					<p>
						Within the search interface, you can press Escape to
						close it, or click on the outside area. You can use the
						up and down arrow keys to pick a result. Pressing Enter
						on the selected result will navigate to it.
					</p>
					<p>
						You can "filter" or "change the scope" of the search by
						pressing the left and right arrow keys or by clicking
						the visual tabs beneath the input box.
					</p>

					<div className='h-1 my-2r ui-3'></div>

					<p>
						Due to how the search bar works, certain key
						combinations made in order will take you to certain
						pages.
					</p>
					<p>
						For instance, pressing <K>s</K> and then <K>enter</K> will take
						you to the home page.
					</p>
					<p>Some common key combinations include:</p>
					<ul>
						<li>
							<p><K>s</K><K>c</K><K>enter</K> — Code page</p>
						</li>
						<li>
							<p><K>s</K><K>h</K><K>enter</K> — Help page</p>
						</li>
						<li>
							<p><K>s</K><K>w</K><K>enter</K> — Whoami page</p>
						</li>
					</ul>

					<p>...and so on.</p>

					<div className='h-1 my-2r ui-3'></div>

					<p>
						As an added convenience, certain keys map to certain
						pages by default. Those are:
					</p>

					<ul>
						<li>
							<p><K>.</K> — Home page</p>
						</li>
						<li>
							<p><K>h</K> — Help page</p>
						</li>
						<li>
							<p><K>k</K> — Keyboard shortcuts</p>
						</li>
						<li>
							<p><K>a</K> — Writings page</p>
						</li>
						<li>
							<p><K>p</K> — Pins page</p>
						</li>
						<li>
							<p><K>c</K> — Code page</p>
						</li>
						<li>
							<p><K>w</K> — Whoami page</p>
						</li>
					</ul>

					<p>There are also some extra keybindings that effect certain areas of the site.</p>
					<ul>
						<li>
							<p><K>t</K> — Toggle theme</p>
						</li>
					</ul>
				</article>
			</Wrapper>
		</>
	);
};

Help.layout = Layout;

export default Help;
