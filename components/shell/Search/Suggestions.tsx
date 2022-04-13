import { useState } from 'react';
import { useScavenger, sortObjectsInSpecificOrder } from '@infinium/scavenger';

import Suggestion from './Suggestion';
import Keyboard from '../../Keyboard';

import { noResultQuotes } from '../../../data/random';

interface Props {
	query: string;
	setShowSearch(v: boolean): void;
}

const Suggestions = ({ query, setShowSearch }: Props) => {
	const [selected, setSelected] = useState(0);
	const scavenger = useScavenger(query, 'root', {
		sortBy: 'title',
	});

	const order = ['Page', 'Pin', 'Article', 'Project', 'HelpPage'];

	return (
		<>
			<div
				className='nav-suggestions'
				onClick={(ev: any) => {
					ev.stopPropagation();
				}}
			>
				{scavenger.results.length === 0 ? (
					<p className='nav-search-caption'>
						{
							noResultQuotes[
								Math.floor(
									Math.random() * noResultQuotes.length
								)
							]
						}
					</p>
				) : (
					sortObjectsInSpecificOrder(scavenger.results, order, 'type').map((result: any, index: number) => (
						<Suggestion
							key={result.title || result.date}
							index={index}
							result={result}
							selected={selected}
							setShowSearch={setShowSearch}
							setSelected={setSelected}
						/>
					))
				)}
			</div>

			<Keyboard
				keys={['up', 'down', 'right', 'left']}
				callback={(key, ev) => {
					// Prevent scrolling when this is open.
					ev.preventDefault();

					const isUp = key === 'up' || key === 'left';
					const relativeIndex = scavenger.results.length - 1;

					if (isUp) {
						// If going UP and:
						// 	- Selected is FIRST item, return last item
						//	- Selected is not FIRST item, return selected - 1
						setSelected((s) =>
							selected === 0 ? relativeIndex : s - 1
						);
					} else {
						// If going DOWN and:
						// 	- Selected is LAST item, return FIRST item
						//	- Selected is not LAST item, return selected + 1
						setSelected((s) =>
							selected === relativeIndex ? 0 : s + 1
						);
					}
				}}
				handleFocusableElements
			/>
		</>
	);
};

export default Suggestions;
