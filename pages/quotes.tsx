import Entity from '../components/Entity';
import Quote from '../components/etc/Quote';

import { variants, transition } from '../logic/motion';

const Quotes = () => {
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
						<div className='text-container h-100p serif'>
							<Quote />
						</div>
					</Entity>
				</div>
			</section>
		</>
	);
};

export default Quotes;
