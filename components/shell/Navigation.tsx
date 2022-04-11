import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Keyboard } from '@infinium/hydro';
import { SearchIcon, XIcon } from '@heroicons/react/outline';

import Li from "../Li";
import Search from './Search';
import Suggestions from './Search/Suggestions';

import { gVariants } from '../../data/motion';
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

const variants = {
	initial: { opacity: 0, scale: 0.98 },
	animate: { opacity: 1, scale: 1 },
	exit: { opacity: 0, scale: 0.98 },
}

const NavigationInner = () => (
	<motion.div
		variants={variants}
		initial='initial'
		animate='animate'
		exit='exit'
		transition={{
			type: 'tween',
			duration: 0.3,
		}}
		className='w-100p flex-sb'
	>
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
	</motion.div>
);

const Navigation = () => {
	const [query, setQuery] = useState('');
	const [showSearch, setShowSearch] = useState(false);
	const inputRef = useRef();

	return (
		<>
			<header className={showSearch ? 'sticky' : ''}>
				<div id="navbar" className="flex-sb">
					<div className="w-100p h-100p">
						<AnimatePresence exitBeforeEnter>
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
						</AnimatePresence>
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

			<AnimatePresence exitBeforeEnter>
				{showSearch && (
					<motion.div
						variants={gVariants.fadeIn}
						initial='initial'
						animate='animate'
						exit='exit'
						className="nav-overlay"
						onClick={() => setShowSearch(false)}
					>
						<div className="w-100p flex-c">
							<Suggestions
								key='suggestions'
								query={query}
								setShowSearch={setShowSearch}
							/>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			<Keyboard
				keys={['esc', '/']}
				callback={(key) => {
					if (key === 'esc') {
						setShowSearch(false);
						return;
					}

					setShowSearch(true);

					setTimeout(() => {
						try {
							// @ts-ignore
							inputRef?.current.select();
						} catch {}
					}, 300);
				}}
				handleFocusableElements
			/>
		</>
	);
};

export default Navigation;