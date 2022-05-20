import WritingItem from '../components/writing/WritingItem';
import Entity from '../components/Entity';
import Title from '../components/Title';

import { writings } from '../data/writings';
import { variants, transition } from '../logic/motion';
import PageMeta from '../components/PageMeta';

const Writings = () => {
	return (
		<>
			<PageMeta
				meta={{
					title: 'Writings',
					description: 'I write sometimes.',
				}}
			/>

			<section className='section'>
				<div className='x-container'>
					<Entity
						variants={variants.fadeInUp}
						transition={{
							...transition.default,
							delay: 0.2,
						}}
						className='w-100p'
					>
						<div className='w-100p grid grid-2 tp-grid-1'>
							<div>
								<Title mods='serif'>Writings</Title>
								<p className='opacity-08'>I write. Most of the time in code, some of the time in English.</p>
							</div>

							<div className='w-100p flex-c'>
								{writings.map((writing, i) => (
									<Entity
										variants={variants.fadeInUp}
										transition={{
											...transition.default,
											delay: i > 20 ? 6.5 : (i * 3) / 10 + 0.5,
										}}
										className='w-100p flex'
										noVis
									>
										<WritingItem {...writing} />
									</Entity>
								))}
							</div>
						</div>
					</Entity>
				</div>
			</section>
		</>
	);
};

export default Writings;
