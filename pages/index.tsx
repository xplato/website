import Layout from '../components/layout/Layout';
import Li from '../components/Li';
import Social from '../components/Social';
import HomePanel from '../components/HomePanel';
import PageMeta from '../components/PageMeta';
import Spacer from '../components/Spacer';
import ELi from '../components/ELi';

const Home = () => {
	return (
		<>
			<PageMeta
				meta={{
					title: 'Home',
					description: '',
				}}
			/>

			<section className='full-view flex-c index-page'>
				<div className='w-100p h-100p grid grid-2 landscape-grid-1 gap-0'>
					<div className='grid-block relative justify-s'>
						<div className='h-screen landscape-h-auto flex justify-sb p-4r pt-6r landscape-p-2r landscape-pt-8r sticky top-0'>
							<div className='flex landscape-mb-5r large-text'>
								<h1>Hello 👋</h1>
								<div className='mw-35r'>
									<p className='mb-0-5r'>
										Hi, I'm Tristan. I'm a software engineer
										specializing in websites. I primarily
										work on open-source software.
									</p>
								</div>
								<Li
									href='/whoami'
									className='j-link underline lh-1-2'
								>
									Learn more
								</Li>

								<Spacer />
								<Spacer />

								<div className='mw-35r'>
									<p>
										I've recently been working on{' '}
										<ELi href='https://gofe.app'>Gofë,</ELi>{' '}
										which is a private front-end for Google.
										In other words, it uses Google's results
										while letting you remain anonymous.
									</p>
									<p>
										If you use React, you might be
										interested in my other search-related
										project,{' '}
										<Li href='/code?h=scavenger#scavenger'>
											Scavenger,
										</Li>{' '}
										which powers the search behind this
										website.
									</p>
								</div>
							</div>

							<Social />
						</div>
					</div>
					<div
						id='t'
						className='grid-block justify-s pt-4r ui-1 landscape-pt-2r w-100p border-left-ui-2'
					>
						<HomePanel />
					</div>
				</div>
			</section>
		</>
	);
};

Home.layout = ({ children }: any) => <Layout affixNav hideFooter>{children}</Layout>;

export default Home;
