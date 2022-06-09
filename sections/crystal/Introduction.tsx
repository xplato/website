import Entity from '../../components/Entity';
import Title from '../../components/Title';

import { variants, transition } from '../../logic/motion';

const Introduction = () => {
	return (
		<>
			<section className='section pt-6r pb-0'>
				<div className='x-container flex-c'>
					<Entity
						variants={variants.fadeInUp}
						transition={{
							...transition.default,
							delay: 0.2,
						}}
					>
						<div className='text-container'>
							<Title>Introduction</Title>
							<p className='fs-lg'>
								This is a multi-part series covering something I
								call—as an umbrella term—Crystal.
							</p>
							<p className='fs-lg'>
								By "umbrella term" I mean that "Crystal" is
								short for a few sub-categories that I'll talk
								about in this series: CrystalUI, CrystalOS, and
								a few others. Although these sub-categories
								aren't related by necessity, I am choosing to
								talk about them in one series because they all
								share similar, albeit abstract, similarities.
							</p>
							<p className='fs-lg'>
								In this section, part #1, I'll be talking about
								CrystalUI. In later sections, I'll describe
								CrystalOS and other parts of this series. Right
								now, this conceptual "CrystalOS" serves as the
								canvas for CrystalUI. I've omitted certain parts
								of CrystalOS from the demonstration images, as
								these will be explained in detail later.
							</p>
							<p className='fs-lg'>
								Check back in a few days for part 2!
							</p>

							<div className='mt-4r'></div>

							<Title>Inspiration</Title>
							<p className='fs-lg'>
								Again due to the multi-part nature of this
								series, there are a few direct inspirations.
								CrystalUI was inspired mostly by my exploration
								in more futuristic, "gooey" interfaces. It
								serves as the foundation for the (as I like to
								describe it) "fluid" CrystalOS.
							</p>

							<p className='fs-lg'>
								Without further delays, let's get into
								CrystalUI.
							</p>
						</div>
					</Entity>
				</div>
			</section>
		</>
	);
};

export default Introduction;
