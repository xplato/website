import { useRef, useState } from 'react';

import { useSearchPanel } from '../../providers/SearchPanelProvider';

import Search from '../Search';
import Navigation from '../shell/Navigation';
import Shortcuts from '../shell/Shortcuts';
import Keyboard from '../Keyboard';

import type { ChildrenOnly } from '../../types';


const View = ({ children }: ChildrenOnly) => {
	const { showSearch, setShowSearch } = useSearchPanel();
	const [query, setQuery] = useState('');
	const inputRef = useRef();

	return (
		<div className='view'>
			{showSearch && <Search setSearch={setShowSearch} />}

			<Navigation />

			{children}
			
			<Shortcuts />

			<Keyboard
				keys={['s', '/']}
				callback={(key, ev) => {
					if (!showSearch) {
						ev.preventDefault();
						setShowSearch(true);

						try {
							// @ts-ignore
							inputRef.current.focus();
							
							// @ts-ignore
							inputRef.current.select();
						} catch {}
					}
				}}
				handleFocusableElements
			/>
		</div>
	);
};

export default View;
