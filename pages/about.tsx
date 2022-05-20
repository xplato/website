import Breadcrumbs from '../components/Breadcrumbs';
import ELi from '../components/ELi';
import Entity from '../components/Entity';
import Li from '../components/Li';
import P from '../components/P';
import PageMeta from '../components/PageMeta';
import Title from '../components/Title';

import { variants, transition } from '../logic/motion';

const A = (props: any) => (
	<ELi className='j-link underline d-inline' {...props}>
		{props.children}
	</ELi>
);

const Contact = () => {
	return (
		<>
			<PageMeta
				meta={{
					title: 'About',
					description: 'Whoami, really?',
				}}
			/>

			<section className='section'>
				<div className='container flex-c'>
					<Entity
						variants={variants.fadeInUp}
						transition={{
							...transition.default,
							delay: 0.2,
						}}
					>
						<article className='text-container whoami'>
							<Breadcrumbs />
							<Title>Whoami</Title>
							<P>
								I'm a full-stack software engineer specializing
								in websites. I use a variety of technologies in
								varying degrees of abstraction to do my work.
							</P>
							<P>
								I'm available for hire on certain web- or
								software-related projects.{' '}
								<Li href='/contact'>Contact me</Li> if you're
								interested or if you'd like more information on what I do.
							</P>

							<h2>What I Do</h2>
							<P>
								I design and build websites and command-line
								applications. I utilize a variety of
								technologies and frameworks to do so. A full
								list of the stuff I use is below.
							</P>

							<h3>My Stack</h3>

							<ul className='list'>
								<li>
									<P>Languages</P>
									<ul>
										<li>
											<p>
												<A href='https://en.wikipedia.org/wiki/JavaScript'>
													JavaScript
												</A>
											</p>
											<ul>
												<li>
													<p>
														<A href='https://www.typescriptlang.org/'>
															TypeScript
														</A>
													</p>
												</li>
												<li>
													<p>
														<A href='https://reactjs.org'>
															React
														</A>{' '}
														(via{' '}
														<A href='https://create-react-app.dev/'>
															CRA
														</A>
														,{' '}
														<A href='https://nextjs.org/'>
															NextJS
														</A>
														,{' '}
														<A href='https://www.gatsbyjs.com/'>
															Gatsby
														</A>
														)
													</p>
												</li>
												<li>
													<p>
														<A href='https://nodejs.org/en/'>
															NodeJS
														</A>
													</p>
												</li>
											</ul>
										</li>
										<li>
											<p>
												<A href='https://python.org'>
													Python
												</A>
											</p>
											<ul>
												<li>
													<p>
														<A href='https://fastapi.tiangolo.com/'>
															FastAPI
														</A>
													</p>
												</li>
												<li>
													<p>
														<A href='https://flask.palletsprojects.com/en/2.1.x/'>
															Flask
														</A>
													</p>
												</li>
												<li>
													<p>
														<A href='https://www.djangoproject.com/'>
															Django
														</A>
													</p>
												</li>
												<li>
													<p>
														<A href='https://typer.tiangolo.com/'>
															Typer
														</A>
													</p>
												</li>
												<li>
													<p>
														<A href='https://click.palletsprojects.com/'>
															Click
														</A>
													</p>
												</li>
											</ul>
										</li>
										<li>
											<p>
												<A href='https://go.dev'>Go</A>
											</p>
										</li>
										<li>
											<p>
												<A href='https://www.rust-lang.org/'>
													Rust
												</A>
											</p>
										</li>
										<li>
											<p>
												<A href='https://www.php.net/'>
													PHP
												</A>
											</p>
										</li>
										<li>
											<p>As well as...</p>
											<ul>
												<li>
													<p>
														<A href='https://en.wikipedia.org/wiki/HTML'>
															HTML
														</A>
													</p>
												</li>
												<li>
													<p>
														<A href='https://en.wikipedia.org/wiki/CSS'>
															CSS
														</A>
													</p>
												</li>
												<li>
													<p>
														<A href='https://en.wikipedia.org/wiki/Shell_script'>
															Shell script
														</A>
													</p>
												</li>
											</ul>
										</li>
									</ul>
								</li>
								<li>
									<P>Tools {'&'} Technologies</P>
									<ul>
										<li>
											<P>Development</P>
											<ul>
												<li>
													<p>
														<A href='https://git-scm.com/'>
															Git
														</A>
													</p>
												</li>
												<li>
													<p>
														<A href='https://httpd.apache.org/'>
															Apache Server
														</A>
													</p>
												</li>
												<li>
													<p>
														<A href='https://en.wikipedia.org/wiki/Vim_(text_editor)'>
															Vim
														</A>
													</p>
												</li>
												<li>
													<p>
														<A href='https://code.visualstudio.com/'>
															VSCode
														</A>{' '}
														(via{' '}
														<A href='https://vscodium.com/'>
															VSCodium
														</A>
														)
													</p>
												</li>
											</ul>
										</li>
										<li>
											<P>Design</P>
											<ul>
												<li>
													<p>
														<A href='https://framer.com'>
															Framer
														</A>
													</p>
												</li>
												<li>
													<p>
														<A href='https://sketch.com'>
															Sketch
														</A>
													</p>
												</li>
												<li>
													<p>
														<A href='https://www.adobe.com/products/xd.html'>
															Adobe XD
														</A>
													</p>
												</li>
											</ul>
										</li>
										<li>
											<P>Design {'&'} Development</P>
											<ul>
												<li>
													<p>
														<A href='https://wordpress.org'>
															Wordpress
														</A>
													</p>
												</li>
												<li>
													<p>
														<A href='https://webflow.com'>
															Webflow
														</A>
													</p>
												</li>
											</ul>
										</li>
									</ul>
								</li>
							</ul>

							<hr />

							<P>
								I use all of the above tools at least once every
								week—about half of them I use daily.
							</P>
						</article>
					</Entity>
				</div>
			</section>
		</>
	);
};

export default Contact;
