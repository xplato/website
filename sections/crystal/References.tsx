import Entity from '../../components/Entity';
import Title from '../../components/Title';

import { variants, transition } from '../../logic/motion';

const References = () => {
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
					</Entity>
				</div>
			</section>
		</>
	);
};

export default References;
