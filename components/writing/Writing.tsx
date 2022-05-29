import { transition, variants } from '../../logic/motion';
import Entity from '../Entity';
import TopButton from '../TopButton';

interface Props {
	children: React.ReactNode;
}

const Writing = ({ children }: Props) => {
	return (
		<>
			<section className='section pt-8r ml-pt-4r pb-5r relative'>
				<div className='x-container flex-c'>
					<article className='w-100p flex-c'>
						<div className='text-container'>
							<Entity
								variants={variants.fadeIn}
								transition={transition.default}
							>
								{children}
							</Entity>
						</div>
					</article>
				</div>
			</section>
			<TopButton />
		</>
	);
};

export default Writing;
