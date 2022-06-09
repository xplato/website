import AnimatedView from '../../components/AnimatedView';
import Title from '../../components/Title';

import { textAreaEntityProps } from '../../logic/motion';

const References = () => {
	return (
		<>
			<section className='section pt-6r pb-0'>
				<div className='x-container flex-c'>
					<AnimatedView {...textAreaEntityProps}>
						<div className='text-container'>
							<Title>References</Title>

							<ul>
								<li>
									<p className='mb-0'>
										[1]: "just like it's important that
										dropdown menus open naturally instead of
										all at once." this is important only if
										your goal is to create a natural
										interface.
									</p>
								</li>
							</ul>
						</div>
					</AnimatedView>
				</div>
			</section>
		</>
	);
};

export default References;
