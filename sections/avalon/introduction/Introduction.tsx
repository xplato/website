import AnimatedView from '../../../components/AnimatedView';
import Title from '../../../components/Title';

import { textAreaEntityProps } from '../../../logic/motion';

const Introduction = () => {
	return (
		<>
			<section className='section pt-6r pb-0'>
				<div className='x-container flex-c'>
					<AnimatedView {...textAreaEntityProps}>
						<div className='text-container'>
							<Title>Introduction</Title>
							<p className='fs-lg'>
								This is a multi-part series covering something I
								call—as an umbrella term—Avalon.
							</p>
							<p className='fs-lg'>
								By "umbrella term" I mean that "Avalon" is
								short for a few sub-categories that I'll talk
								about in this series: AvalonUI, AvalonOS, and
								a few others. Although these sub-categories
								aren't related by necessity, I am choosing to
								talk about them in one series because they all
								share similar, albeit abstract, similarities.
							</p>
							<p className='fs-lg'>
								In this section, part #1, I'll be talking about
								AvalonUI. In later sections, I'll describe
								AvalonOS and other parts of this series. Right
								now, this conceptual "AvalonOS" serves as the
								canvas for AvalonUI. I've omitted certain parts
								of AvalonOS from the demonstration images, as
								these will be explained in detail later.
							</p>

							<div className='mt-4r'></div>

							<Title>Inspiration</Title>
							<p className='fs-lg'>
								Again due to the multi-part nature of this
								series, there are a few direct inspirations.
								AvalonUI was inspired mostly by my exploration
								in more futuristic, "gooey" interfaces. It
								serves as the foundation for the (as I like to
								describe it) "fluid" AvalonOS.
							</p>

							<p className='fs-lg'>
								Without further delays, let's get into
								AvalonUI.
							</p>
						</div>
					</AnimatedView>
				</div>
			</section>
		</>
	);
};

export default Introduction;
