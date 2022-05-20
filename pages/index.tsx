import { DocumentIcon } from '@heroicons/react/outline';

import Card from '../components/Card';
import Entity from '../components/Entity';
import Li from '../components/Li';
import PageMeta from '../components/PageMeta';
import Social from '../components/Social';
import Title from '../components/Title';

import { variants, transition } from '../logic/motion';

const cards = [
	{
		href: 'https://gofe.app',
		title: 'Private web searching with Gofë',
		content: 'Gofë is a private front-end for Google. Get top-notch search results while remaining anonymous.',
		image: '/images/showcase/gofe.png',
		color: 'cyan',
	},
	{
		href: 'https://codeberg.org/xplato/Scavenger',
		title: 'Lightning-fast results with Scavenger',
		content: 'Scavenger is a React library for lightning-fast static resource searching.',
		image: '/images/showcase/scavenger.png',
		color: 'green',
	},
	{
		href: 'https://kiri.vercel.app',
		title: 'Beautiful mind-maps with Kiri',
		content: 'Kiri is a super-simple one-page web application allowing you to create elegant mind maps.',
		image: '/images/showcase/kiri.png',
		color: 'purple',
	},
]

const Home = () => {
	return (
		<>
			<PageMeta
				meta={{
					title: 'Home',
					description: 'I write sometimes.',
				}}
			/>

			<section className='section pt-8r pb-6r'>
				<div className='container flex-c'>
					<Entity
						variants={variants.fadeInUp}
						transition={{
							...transition.default,
							delay: 0.2,
						}}
					>
						<div className='text-container'>
							<Title>Hello 👋</Title>
							<p className='p-text'>
								Hi, I'm Tristan. I'm a software engineer
								specializing in websites. I develop unique and
								professional solutions through a wide variety of
								mediums.
							</p>
							<p className="p-text">
								Feel free to take a look around. If you're curious about my work, I've got a curated showcase of recent projects below.
							</p>
							
							<div className="flex align-c justify-s flex-row">
								<Li href='/writings' className='button gray'>
									<i className="icon sm">
										<DocumentIcon />
									</i>
									<span>Writings</span>
								</Li>
							</div>

							<div className="mt-2r">
								<Social />
							</div>
						</div>
					</Entity>
				</div>
			</section>

			<section className="section pt-0 pb-0">
				<div className="container">
					<div className="w-100p grid grid-3 gap-2r tp-grid-1">
					{cards.map((card, i) => (
						<div key={card.title} className="grid-block justify-s">
							<Entity
								variants={variants.fadeInUp}
								transition={{
									...transition.default,
									delay: ((i * 2) / 10) + 0.5
								}}
								className='w-100p'
							>
								<Card
									mods={card.color}
									{...card}
								/>
							</Entity>
						</div>
					))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
