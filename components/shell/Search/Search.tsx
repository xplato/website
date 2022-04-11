import { motion } from 'framer-motion';
import { MutableRefObject } from 'react';


interface Props {
	inputRef: MutableRefObject<any>;
	query: string;
	setQuery(v: string): void;
}

const Search = ({ inputRef, query, setQuery }: Props) => {
	const onChange = (ev: any) => {
		setQuery(ev.target.value);
	}

	const variants = {
		initial: { opacity: 0, scale: 0.98 },
		animate: { opacity: 1, scale: 1 },
		exit: { opacity: 0, scale: 0.98 },
	}

	return (
		<motion.div
			key='search'
			variants={variants}
			initial='initial'
			animate='animate'
			exit='exit'
			transition={{
				type: 'tween',
				duration: 0.3,
			}}
			className="w-100p nav-search-container flex-c"
		>
			<input
				ref={inputRef}
				type='text'
				placeholder='Search for something...'
				value={query}
				onChange={onChange}
				className='nav-search w-100p'
				autoFocus
			/>
		</motion.div>
	);
};

export default Search;