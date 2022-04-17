import React, {
	createContext,
	useContext,
	useState,
} from 'react';

const SearchPanelContext = createContext<any>({});

const SearchPanelProvider = ({ children }: any) => {
	const [showSearch, setShowSearch] = useState(false);

	const value = {
		showSearch,
		setShowSearch
	};

	return (
		<SearchPanelContext.Provider value={value}>
			{children}
		</SearchPanelContext.Provider>
	);
}

const useSearchPanel = () => {
	return useContext(SearchPanelContext);
}

export default SearchPanelProvider;

export {
	useSearchPanel,
}