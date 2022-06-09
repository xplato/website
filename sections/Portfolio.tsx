import Card from '../components/Card';
import Entity from '../components/Entity';

import { variants, transition } from '../logic/motion';

const cards = [
	{
		href: '/crystal',
		title: 'Experimenting in conceptional UI/UX with Crystal',
		image: '/images/showcase/crystalos.png',
		alt: "CrystalOS's blurred widgets and top complications being shown with Athens, Greece as a wallpaper.",
		color: 'orange',
	},
	{
		href: 'https://gofe.app',
		title: 'Private web searching with Gofë',
		content:
			'Gofë is a private front-end for Google. Get top-notch search results while remaining anonymous.',
		image: '/images/showcase/gofe.png',
		alt: 'Gofë displaying the search results for the query "git"',
		color: 'cyan',
	},
	{
		href: 'https://codeberg.org/xplato/Scavenger',
		title: 'Lightning-fast results with Scavenger',
		content:
			'Scavenger is a React library for lightning-fast static resource searching.',
		image: '/images/showcase/scavenger.png',
		alt: 'A modern search component using Scavenger showing the default results for my personal website.',
		color: 'green',
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
