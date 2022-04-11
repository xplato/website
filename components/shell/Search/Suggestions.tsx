import { useState } from 'react';
import { useScavenger } from '@infinium/scavenger';
import { motion } from 'framer-motion';
import { Keyboard } from '@infinium/hydro';

import Suggestion from './Suggestion';
import { noResultQuotes } from '../../../data/random';

interface Props {
	query: string;
	setShowSearch(v: boolean): void;
}

const Suggestions = ({ query, setShowSearch }: Props) => {
	const [selected, setSelected] = useState(0);
	const scavenger = useScavenger(query, 'root', {
		sortBy: 'type',
	});

	const variants = {
		initial: { opacity: 0, scale: 0.98 },
		animate: { opacity: 1, scale: 1 },
		exit: { opacity: 0, scale: 0.98 },
	}

	return (
		<>
			<motion.div
				variants={variants}
				initial='initial'
				animate='animate'
				exit='exit'
				transition={{
					type: 'tween',
					duration: 0.4,
					delay: 0.2
				}}
				className='nav-suggestions'
				onClick={(ev: any) => {
					ev.stopPropagation();
				}}
			>
				{scavenger.results.length === 0 ? (
					<p className='nav-search-caption'>{noResultQuotes[Math.floor(Math.random() * noResultQuotes.length)]}</p>
				) : (
					scavenger.results.map((result: any, index: number) => (
						<Suggestion
							key={result.title || result.date}
							index={index}
							result={result}
							selected={selected}
							setShowSearch={setShowSearch}
						/>
					))
				)}
			</motion.div>

			<Keyboard
				keys={['up', 'down', 'right', 'left']}
				callback={(key, ev) => {
					// Prevent scrolling when this is open.
					ev.preventDefault();

					const isUp = (key === 'up' || key === 'left');
					const relativeIndex = scavenger.results.length - 1;

					if (isUp) {
						// If going UP and:
						// 	- Selected is FIRST item, return last item
						//	- Selected is not FIRST item, return selected - 1
						setSelected(s => selected === 0 ? relativeIndex : s - 1);
					} else {
						// If going DOWN and:
						// 	- Selected is LAST item, return FIRST item
						//	- Selected is not LAST item, return selected + 1
						setSelected(s => selected === relativeIndex ? 0 : s + 1);
					}
				}}
				handleFocusableElements
			/>
		</>
	);
};

export default Suggestions;