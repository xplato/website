import dynamic from 'next/dynamic';
import { HeartIcon } from '@heroicons/react/solid';

import Entity from '../Entity';
import Li from '../Li';
import Bullet from '../shared/Bullet';

import { transition, variants } from '../../logic/motion';

const ThemeButton = dynamic(import('../ThemeButton'), { ssr: false });

const Tagline = () => (
	<div className='flex align-c justify-c flex-row'>
		<p className='mb-0 opacity-05'>Made with</p>
		<i className='icon mx-0-25r text-red-500'>
			<HeartIcon />
		</i>
		<p className='mb-0 opacity-05'>in SLC</p>
	</div>
);

const Footer = () => {
	return (
		<>
			<section className='section py-4r' id='end'>
				<div className='x-container flex-c'>
					<div className='text-container'>
						<Entity
							variants={variants.fadeInUp}
							transition={{
								...transition.default,
								delay: 0.2,
							}}
						>
							<div className='w-100p flex-sb tp-flex-c tp-text-c'>
								<p className='mb-0 opacity-05'>
									Copyright &copy; 2022
								</p>
								<div className='flex align-c justify-c flex-row ml-flex-c tp-mt-0-5r'>
									<ThemeButton />
									<div className="ml-hide"><Bullet /></div>
									<Li
										href='/privacy'
										className='normal-link opacity-05 ml-my-0-5r'
									>
										Privacy
									</Li>
									<div className="ml-hide"><Bullet /></div>
									<Tagline />
								</div>
							</div>
						</Entity>
					</div>
				</div>
			</section>
		</>
	);
};

export default Footer;
