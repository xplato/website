import { ArrowRightIcon } from '@heroicons/react/solid';

import Entity from '../components/Entity';
import Link from '../components/Link';
import Title from '../components/Title';

import { variants, transition } from '../logic/motion';

const Contact = () => {
	return (
		<>
			<section className='section pb-0' id='contact'>
				<div className='x-container flex-c'>
					<div className='text-container'>
						<Entity
							variants={variants.fadeInUp}
							transition={{
								...transition.default,
								delay: 0.2,
							}}
						>
							<Title>Contact</Title>

							<div className='flex align-c justify-s flex-row links'>
								<Link
									href='mailto:tristan@infinium.dev'
									icon={<ArrowRightIcon />}
								>
									Email
								</Link>
								<Link
									href='https://github.com/xplato'
									icon={<ArrowRightIcon />}
								>
									GitHub
								</Link>
								<Link
									href='https://codeberg.org/xplato'
									icon={<ArrowRightIcon />}
								>
									Codeberg
								</Link>
							</div>
						</Entity>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
