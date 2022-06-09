import AnimatedView from '../../components/AnimatedView';
import FeaturedImage from '../../components/shared/FeaturedImage';
import Title from '../../components/Title';

import { textAreaEntityProps } from '../../logic/motion';
import { getEdgePath } from '../../logic/utils';

const Hero = () => {
	return (
		<>
			<section className='section pt-8r pb-0'>
				<div className='container flex-c'>
					<AnimatedView {...textAreaEntityProps}>
						<div className='text-container flex-c text-c'>
							<Title mods='no-octo'>Introducing Crystal</Title>

							<div className='mw-40r flex-c text-c'>
								<h1 className='fs-3xl fw-500 mb-0'>
									Crystal is a multi-part, futuristic UI/UX
									concept.
								</h1>
							</div>
						</div>
					</AnimatedView>

					<FeaturedImage
						src={getEdgePath('crystal/part-1/desktop-widgets-closed-light.jpg')}
						caption='The conceptual—and pre-release teaser of the—CrystalOS Desktop'
						useCaptionAsAlt
					/>
				</div>
			</section>
		</>
	);
};

export default Hero;
