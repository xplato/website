import dynamic from 'next/dynamic';

import Footer from './shell/Footer';

import { ChildrenOnly } from '../types';
import { useRouter } from 'next/router';

const Navigation = dynamic(import('./shell/Navigation'), { ssr: false });

const RootView = ({ children }: ChildrenOnly) => {
	const { pathname, push } = useRouter();

	const onClick = () => {
		push(`${pathname}/#content`);
	}

	return (
		<div className='view'>
			<button onClick={onClick} className='sr-only'>Skip to content</button>
			<Navigation />
			{children}
			<Footer />
		</div>
	);
};

export default RootView;
