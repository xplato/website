import Card from '../components/Card';
import Entity from '../components/Entity';

import { variants, transition } from '../logic/motion';

const cards = [
	{
		href: 'https://gofe.app',
		title: 'Private web searching with Gofë',
		content:
			'Gofë is a private front-end for Google. Get top-notch search results while remaining anonymous.',
		image: '/images/showcase/gofe.png',
		color: 'cyan',
	},
	{
		href: 'https://codeberg.org/xplato/Scavenger',
		title: 'Lightning-fast results with Scavenger',
		content:
			'Scavenger is a React library for lightning-fast static resource searching.',
		image: '/images/showcase/scavenger.png',
		color: 'green',
	},
	{
		href: 'https://kiri.vercel.app',
		title: 'Beautiful mind-maps with Kiri',
		content:
			'Kiri is a super-simple one-page web application allowing you to create elegant mind maps.',
		image: '/images/showcase/kiri.png',
		color: 'purple',
	},
];

const Portfolio = () => {
	return (
		<>
			<section className='section pt-2r pb-0'>
				<div className='container'>
					<div className='w-100p grid grid-3 gap-2r tp-grid-1'>
						{cards.map((card, i) => (
							<div
								key={card.title}
								className='grid-block justify-s'
							>
								<Entity
									variants={variants.fadeInUp}
									transition={{
										...transition.default,
										delay: (i * 2) / 10 + 0.5,
									}}
									className='w-100p'
								>
									<Card mods={card.color} {...card} />
								</Entity>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Portfolio;
