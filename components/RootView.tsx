import { useRouter } from 'next/router';

import { useStore } from '../providers/StoreProvider';

import Navigation from './shell/Navigation';
import Footer from './shell/Footer';

import type { ChildrenOnly } from '../types';
import { useEffect } from 'react';

const RootView = ({ children }: ChildrenOnly) => {
	const { pathname, push } = useRouter();
	const { store } = useStore();

	useEffect(() => {
		if (typeof store.accent !== 'undefined') {
			document.querySelector('body')?.classList.add(store.accent);
		}

		return () => {
			document.querySelector('body')?.classList.remove(store.accent);
		};
	}, [store]);

	const onClick = () => {
		push(`${pathname}/#content`);
	};

	return (
		<div className='view'>
			<button onClick={onClick} className='sr-only'>
				Skip to content
			</button>
			<Navigation />
			{children}
			<Footer />
		</div>
	);
};

export default RootView;
