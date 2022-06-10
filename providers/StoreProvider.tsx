// This is the global site Store of data. It is a single
// object that tracks misc. information that many components—
// in particular, many _different_ components—need access to.

import React, { createContext, useContext, useState } from 'react';

interface Store {
	accent: string;
}

interface TStoreContext {
	store: Store;
	update(v: Store): void;
}

interface Props {
	children: React.ReactNode;
}

const StoreContext = createContext<any>({});

const StoreProvider = ({ children }: Props) => {
	const [store, setStore] = useState<Store>({
		accent: 'blue',
	});

	const update = (value: Store | ((v: Store) => Store)) => {
		if (typeof value === 'function') {
			setStore((m) => ({
				...m,
				...value(m),
			}));
		} else {
			setStore((m) => ({
				...m,
				...value,
			}));
		}
	};

	const value: TStoreContext = {
		store,
		update,
	};

	return (
		<StoreContext.Provider value={value}>{children}</StoreContext.Provider>
	);
};

const useStore = () => {
	return useContext(StoreContext);
};

export default StoreProvider;

export { useStore };

export type { Store };
