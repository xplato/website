import classNames from 'classnames';

import ELi from '../components/ELi';
import Entity from '../components/Entity';
import Title from '../components/Title';

import { variants, transition } from '../logic/motion';

const T = ({ h, c, children }: any) => (
	<ELi href={h} className={classNames('tag', c)}>
		<span>{children}</span>
	</ELi>
);

const About = () => {
	return (
		<>
			<section className='section' id='about'>
				<div className='x-container flex-c'>
					<Entity
						variants={variants.fadeInUp}
						transition={{
							...transition.default,
							delay: 0.2,
						}}
					>
						<div className='text-container'>
							<Title>About</Title>
							<p className='fs-lg'>
								Nice to meet you, I'm Tristan. I currently work as a freelance
								software engineer and UI/UX designer. I specialize in the
								development and design of websites and
								applications.
							</p>
							<p className='fs-lg'>
								In my free time, I maintain and contribute to a
								few open-source projects. The most popular of
								which are{' '}
								<ELi href='https://gofe.app'>Gofë</ELi> and{' '}
								<ELi href='https://github.com/Infinium8/useUndoable'>
									useUndoable.
								</ELi>
							</p>
							<p className='fs-lg'>
								Although my professional work is largely
								web-focused, I also spend a decent amount of
								time working on native computer programs and
								desktop or mobile applications.
							</p>

							<p className='fw-500 opacity-05 mt-2r'>
								Skills {'&'} Tooling
							</p>
							<div className='flex flex-wrap flex-row'>
								<T h='https://typescriptlang.org/' c='blue'>TypeScript</T>
								<T h='https://nodejs.org/' c='green'>NodeJS</T>
								<T h='https://reactjs.org/' c='cyan'>React</T>
								<T h='https://nextjs.org/' c='blue'>NextJS</T>
								<T h='https://www.python.org/' c='sky'>Python</T>
								<T h='https://fastapi.tiangolo.com/' c='teal'>FastAPI</T>
								<T h='https://go.dev/' c='sky'>Go</T>
								<T h='https://www.rust-lang.org/' c='orange'>Rust</T>
								<T h='https://www.php.net/' c='blue'>PHP</T>
								<T h='https://git-scm.com/' c='orange'>Git</T>
								<T h='https://sass-lang.com/' c='pink'>Sass</T>
								<T h='https://www.framer.com/' c='sky'>Framer</T>
								<T h='https://www.figma.com/' c='emerald'>Figma</T>
								<T h='https://www.adobe.com/products/xd.html' c='fuchsia'>Adobe XD</T>
								<T h='https://webflow.com/' c='blue'>Webflow</T>
								<T h='https://wordpress.org/' c='blue'>Wordpress</T>
							</div>
						</div>
					</Entity>
				</div>
			</section>
		</>
	);
};

export default About;
