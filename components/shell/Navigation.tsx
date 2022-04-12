import { useEffect, useRef, useState } from 'react';
import { SearchIcon, XIcon } from '@heroicons/react/outline';

import Li from "../Li";
import Search from './Search';
import Suggestions from './Search/Suggestions';
import Keyboard from '../Keyboard';

import classNames from 'classnames';


const links = [
	{
		label: '~hydra',
		href: '/',
	},
	{
		label: 'code',
		href: '/code',
	},
	{
		label: 'articles',
		href: '/articles',
	},
	{
		label: 'whoami',
		href: '/whoami',
	},
];

const NavigationInner = () => (
	<div className='w-100p flex-sb'>
		<div className="flex flex-row align-c justify-c nav-links">
			{links.map(link => (
				<Li
					key={link.label}
					href={link.href}
					className={classNames(
						'nav-link',
						link.label !== '~hydra' && 'portrait-hide'
					)}
				>{link.label}</Li>
			))}
		</div>
	</div>
);

const Navigation = () => {
	const [query, setQuery] = useState('');
	const [showSearch, setShowSearch] = useState(false);
	const inputRef = useRef();

	useEffect(() => {
		if (!showSearch) {
			try {
				// @ts-ignore
				inputRef?.current.blur();
			} catch {}
		}
	}, [showSearch, inputRef]);

	const beginSearch = (ev: any) => {
		ev.preventDefault();
		setShowSearch(true);

		setTimeout(() => {
			try {
				// @ts-ignore
				inputRef?.current.select();
			} catch {}
		}, 10);
	}

	return (
		<>
			<header className={showSearch ? 'sticky' : ''}>
				<div id="navbar" className="flex-sb">
					<div className="w-100p h-100p">
						{showSearch ? (
							<Search
								key='search'
								inputRef={inputRef}
								query={query}
								setQuery={setQuery}
							/>
						) : (
							<NavigationInner />
						)}
					</div>

					<div className="flex flex-row align-c justify-c">
						<a className="nav-link search-button" onClick={() => setShowSearch(!showSearch)}>
							<i className="j-icon">
								{showSearch ? <XIcon /> : <SearchIcon />}
							</i>
						</a>
					</div>
				</div>
			</header>

			{showSearch && (
				<div
					className="nav-overlay px-1r"
					onClick={() => setShowSearch(false)}
				>
					<div className="w-100p flex-c">
						<Suggestions
							key='suggestions'
							query={query}
							setShowSearch={setShowSearch}
						/>
					</div>
				</div>
			)}

			<Keyboard
				keys={['esc', '/', 's']}
				callback={(key, ev) => {
					if (key === 'esc') {
						setShowSearch(false);
						return;
					}

					if (!showSearch) {
						if (key === 's' || key === '/') {
							beginSearch(ev);
						}
					}
				}}
				handleFocusableElements
			/>
		</>
	);
};

export default Navigation;