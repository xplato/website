import { useRouter } from 'next/router';

import Navigation from './shell/Navigation';
import Footer from './shell/Footer';

import type { ChildrenOnly } from '../types';

const RootView = ({ children }: ChildrenOnly) => {
	const { pathname, push } = useRouter();

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
