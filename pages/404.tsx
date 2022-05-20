import Image from 'next/image';
import { isMobile } from 'react-device-detect';

import Entity from '../components/Entity';
import Li from '../components/Li';

import { variants, transition } from '../logic/motion';

const FourOhFour = () => {
	return (
		<>
			<section className='section p-0 flex-c special-section'>
				<div className='container flex-c h-100p'>
					<Entity
						variants={variants.fadeInUp}
						transition={{
							...transition.default,
							delay: 0.2,
						}}
						className='h-100p'
					>
						<div className='text-container h-100p flex-c text-c'>
							<h1 className='fs-10xl tablet-fs-9xl landscape-fs-7xl portrait-fs-6xl fw-700 flex align-c justify-c flex-row text-c'>
								4{' '}
								<Image
									src='/images/etc/ghost.png'
									width={isMobile ? 75 : 150}
									height={isMobile ? 100 : 200}
								/>{' '}
								4
							</h1>
							<p className='fs-lg'>
								This is some spooky shit, man. Try heading back home.
							</p>
							<Li href='/' className='button'>Go home</Li>
						</div>
					</Entity>
				</div>
			</section>
		</>
	);
};

export default FourOhFour;
