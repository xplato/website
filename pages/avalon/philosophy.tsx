import { useEffect } from 'react';

import { Store, useStore } from '../../providers/StoreProvider';

import PageMeta from '../../components/PageMeta';

import Hero from '../../sections/avalon/philosophy/Hero';
import Article from '../../sections/avalon/philosophy/Article';
import References from '../../sections/avalon/philosophy/References';
import View from '../../components/shared/Expose';
import Expose from '../../components/shared/Expose';

const Philosophy = () => {
	const { store, update } = useStore();

	useEffect(() => {
		if (store.accent !== 'red') {
			update((s: Store) => ({
				...s,
				accent: 'red',
			}));
		}
	}, [store]);

	return (
		<>
			<PageMeta
				meta={{
					title: 'Avalon Philosophy',
					description: 'Experimenting in futuristic UI/UX',
				}}
			/>

			<Expose>
				<Hero />
				<Article />
				<References />
			</Expose>
		</>
	);
};

Philosophy.layout = View;

export default Philosophy;
