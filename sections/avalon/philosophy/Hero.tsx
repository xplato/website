import AnimatedView from '../../../components/AnimatedView';
import FeaturedImage from '../../../components/shared/FeaturedImage';
import Title from '../../../components/Title';
import ContentsDropdown from '../ContentsDropdown';

import { textAreaEntityProps } from '../../../logic/motion';
import { getEdgePath } from '../../../logic/utils';

const Hero = () => {
	return (
		<>
			<section className='section pt-8r pb-0'>
				<div className='container flex-c'>
					<AnimatedView {...textAreaEntityProps}>
						<div className='text-container flex-c text-c'>
							<Title mods='no-octo'>Principles {'&'} Methodologies</Title>

							<div className='mw-40r flex-c text-c'>
								<h1 className='fs-3xl fw-500 mb-2r'>
									The Philosophy of AvalonOS
								</h1>

								<ContentsDropdown />
							</div>
						</div>
					</AnimatedView>

					<FeaturedImage
						src={getEdgePath('avalon/part-2/desktop-fish-wallpaper.png')}
						caption='Demonstration of the color-related adaptability of AvalonUI.'
						alt='Demonstration of the color-related adaptability of AvalonUI via a black wallpaper with a prominent red fish.'
						delay={0.3}
					/>
				</div>
			</section>
		</>
	);
};

export default Hero;
