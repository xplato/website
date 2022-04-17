import { useCallback, useEffect, useState } from 'react';
import { useScavenger } from '@infinium/scavenger';
import { motion } from 'framer-motion';
import { ArrowUpIcon } from '@heroicons/react/solid';

import { usePrevious } from '../../hooks/usePrevious';

import InputArea, { Types } from './InputArea';
import CaptionArea from './CaptionArea';
import ResultsArea from './ResultsArea';
import Keyboard from '../Keyboard';


const Search = ({ setSearch }: any) => {
	const [value, setValue] = useState<string>('');

	const [scope, setScope] = useState('All');
	const [sortBy, setSortBy] = useState('_order');
	const [selected, setSelected] = useState(0);

	const previousScope = usePrevious(scope);

	const scavenger = useScavenger(
		value,
		scope === 'All' ? 'root' : scope,
		{ sortBy },
	);

	useEffect(() => {
		if (scope !== previousScope) {
			setSelected(0);
		}
	}, [scope, selected]);

	const variants = {
		container: {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
		},
		inner: {
			initial: { scale: 0.95, y: 16 },
			animate: { scale: 1, y: 0 },
			exit: { scale: 0.95, y: 16 },
		}
	};

	useEffect(() => {
		setValue('');

		if (scope !== previousScope) {
			if (scope === 'Pin') {
				setSortBy('date');
			}
		}
	}, [scope]);

	const baseTransition = {
		type: 'spring',
		bounce: 0.4,
		duration: 0.6,
	};

	return (
		<motion.div
			variants={variants.container}
			initial='initial'
			animate='animate'
			exit='exit'
			transition={baseTransition}
			className='i-modal pt-10r flex align-c justify-s'
			onClick={() => {
				setSearch(false);
			}}
		>
			<motion.div variants={variants.inner} transition={baseTransition} className='inner' onClick={(ev: any) => ev.stopPropagation()}>
				<InputArea
					value={value}
					setValue={setValue}
					scope={scope}
					setScope={setScope}
				/>
				<CaptionArea numResults={scavenger.results.length} />
				<ResultsArea
					results={scavenger.results}
					selected={selected}
					setSearch={setSearch}
				/>

				<div className="w-100p border-top-ui-2 px-1-5r py-1r flex-sb">
					<p className='fs-sm text-dynamic-07 mb-0'>{scavenger.results.length} result{scavenger.results.length === 1 ? '' : 's'}</p>
					<div className="flex align-c justify-c flex-row arrow-block-container portrait-hide">
						<div className="arrow-block up"><i className='j-icon xs'><ArrowUpIcon /></i></div>
						<div className="arrow-block down"><i className='j-icon xs'><ArrowUpIcon /></i></div>
						<span>Select result</span>

						<div className="w-1r"></div>

						<div className="arrow-block left"><i className='j-icon xs'><ArrowUpIcon /></i></div>
						<div className="arrow-block right"><i className='j-icon xs'><ArrowUpIcon /></i></div>
						<span>Select tab</span>
					</div>
				</div>
			</motion.div>

			<Keyboard
				keys={['esc', 'up', 'down', 'right', 'left']}
				callback={useCallback((key, ev) => {
					if (key === 'esc') {
						setSearch(false);
						return;
					}

					// Prevent scrolling when this is open.
					ev.preventDefault();

					if (key === 'right' || key === 'left') {
						const currentScopeIndex = Types.indexOf(scope);

						if (key === 'right') {
							if (currentScopeIndex + 1 === Types.length) {
								setScope(Types[0]);
							} else {
								setScope(Types[currentScopeIndex + 1]);
							}
						} else {
							if (currentScopeIndex === 0) {
								setScope(Types[Types.length - 1]);
							} else {
								setScope(Types[currentScopeIndex - 1]);
							}
						}
						
						return;
					}

					const isUp = key === 'up';
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
				}, [scope, setScope, selected, setSelected, scavenger.results])}
				handleFocusableElements
			/>
		</motion.div>
	);
};

export default Search;
