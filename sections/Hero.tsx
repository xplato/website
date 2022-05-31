import Entity from '../components/Entity';
import Social from '../components/Social';
import Title from '../components/Title';

import { variants, transition } from '../logic/motion';

const Hero = () => {
	return (
		<>
			<section className='section pt-8r pb-4r'>
				<div className='container flex-c'>
					<Entity
						variants={variants.fadeInUp}
						transition={{
							...transition.default,
							delay: 0.2,
						}}
					>
						<div className='text-container flex-c text-c'>
							<Title mods='no-octo'>Tristan</Title>
							<h1 className="fs-3xl fw-500 mb-0">I'm a freelance developer from Salt Lake City.</h1>

							<div className='mt-2r'>
								<Social />
							</div>
						</div>
					</Entity>
				</div>
			</section>
		</>
	);
};

export default Hero;
