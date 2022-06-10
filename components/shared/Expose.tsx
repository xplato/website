import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { usePrevious } from '../../hooks/usePrevious';

import { Store, useStore } from '../../providers/StoreProvider';

import type { ChildrenOnly } from '../../types';

const Expose = ({ children }: ChildrenOnly) => {
	const { store, update } = useStore();
	const { pathname } = useRouter();
	const previousPathname = usePrevious(pathname);

	useEffect(() => {
		if (pathname !== previousPathname) {
			update((s: Store) => ({
				...s,
				accent: 'blue',
			}));
		}
	}, [pathname, previousPathname]);

	useEffect(() => {
		if (typeof store.accent !== 'undefined') {
			document.querySelector('body')?.classList.add(store.accent);
		}

		return () => {
			document.querySelector('body')?.classList.remove(store.accent);
		};
	}, [store.accent]);

	return <div className='expose'>{children}</div>;
};

export default Expose;
