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

	return (
		<div className="w-100p nav-search-container flex-c">
			<input
				ref={inputRef}
				type='text'
				placeholder='Search for something...'
				value={query}
				onChange={onChange}
				className='nav-search w-100p'
				autoFocus
			/>
		</div>
	);
};

export default Search;