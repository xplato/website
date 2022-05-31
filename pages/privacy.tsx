import ELi from '../components/ELi';
import Entity from '../components/Entity';
import Li from '../components/Li';
import PageMeta from '../components/PageMeta';

import { variants, transition } from '../logic/motion';

const Privacy = () => {
	return (
		<>
			<PageMeta
				meta={{
					title: 'Privacy',
					description: `TL;DR: You're anonymous as far as I'm concerned.`,
				}}
			/>

			<section className='section flex-c pb-3r'>
				<div className='x-container flex-c'>
					<Entity
						variants={variants.fadeIn}
						transition={{
							...transition.default,
							delay: 0.2,
						}}
					>
						<article>
							<div className='text-container'>
								<h1>Privacy</h1>
								<p>Last updated: 19th May, 2022</p>
								<p>
									<span className="fw-600">TL;DR:&nbsp;</span>
									You're anonymous as far as I'm concerned.
								</p>
								<p>
									This website is owned and operated my me,
									one person. I don't show ads ("ads aren't
									cool") nor do I make money from this site. In addition, the source code is <ELi href='https://github.com/xplato/website'>open source.</ELi>
								</p>
								<p>
									I do not ask for any of your information,
									and I do not want it.
								</p>
								<p>
									I use{' '}
									<ELi href='https://vercel.com'>Vercel</ELi>{' '}
									to host this site because it makes my life easier. I cannot
									control what information they, as my web
									host, log; you'll have to check their
									privacy policy for information about that.
								</p>
								<p>
									This site itself <span className="fw-600">does not collect any information whatsoever.</span>
								</p>
								<p>
									I use <code>localStorage</code> occasionally to save your
									preferences and make your experience a bit
									more memorable. This information is saved
									directly in your browser and it is not sent
									to my servers. You can delete this
									information at any time by either clearing
									your browser cache and site data or by
									opening the developer tools and manually
									delting the "settings" row.
								</p>
								<p>
									If you have any questions about the privacy
									practices of this website, feel free to{' '}
									<Li href='/contact'>reach out.</Li>
								</p>
							</div>
						</article>
					</Entity>
				</div>
			</section>
		</>
	);
};

export default Privacy;
