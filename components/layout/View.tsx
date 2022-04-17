import { useRef } from 'react';

import { useSearchPanel } from '../../providers/SearchPanelProvider';

import Search from '../Search';
import Shortcuts from '../shell/Shortcuts';
import Keyboard from '../Keyboard';

import type { ChildrenOnly } from '../../types';


const View = ({ children }: ChildrenOnly) => {
	const { showSearch, setShowSearch } = useSearchPanel();
	const inputRef = useRef();

	return (
		<div className='view'>

			{children}
			
			{showSearch && <Search setSearch={setShowSearch} />}
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
