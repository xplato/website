import Card from '../components/Card';
import Entity from '../components/Entity';

import { variants, transition } from '../logic/motion';

const cards = [
	{
		href: '/avalon',
		title: 'Avalon #1: Experimenting in futuristic UI/UX',
		image: '/images/showcase/avalonos.png',
		alt: "AvalonOS's blurred widgets and top complications being shown with Athens, Greece as a wallpaper.",
		color: 'orange',
	},
	{
		href: '/avalon/philosophy',
		title: 'Avalon #2: Philosophies of a modular operating system',
		image: '/images/showcase/philosophy-featured.png',
		alt: 'A modern search component using Scavenger showing the default results for my personal website.',
		color: 'red',
	},
	{
		href: 'https://gofe.app',
		title: 'Private web searching with Gofë',
		image: '/images/showcase/gofe.png',
		alt: 'Gofë displaying the search results for the query "git"',
		color: 'cyan',
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
