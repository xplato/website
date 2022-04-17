import { XIcon, SearchIcon } from '@heroicons/react/solid';

import { useSearchPanel } from '../../providers/SearchPanelProvider';

const SearchButton = () => {
	const { showSearch, setShowSearch } = useSearchPanel();

	const onClick = () => {
		setShowSearch((s: boolean) => !s);
	}

	return (
		<button className='hy-button' onClick={onClick}>
			<span className='text'>Search</span>
			<i className='j-icon sm ml-0-5r'>
				{showSearch ? <XIcon /> : <SearchIcon />}
			</i>
		</button>
	);
};

export default SearchButton;