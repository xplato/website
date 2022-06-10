import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import StoreProvider from '../providers/StoreProvider';
import RootView from '../components/RootView';

import '../styles/jupiterui.css';
import '../styles/global.scss';

// Fonts
import '../assets/fonts/be_vietnam_pro/be_vietnam_pro.css';
import '../assets/fonts/inter/inter.css';
import '../assets/fonts/cascadia-code-pl/cascadia.css';
import { ChildrenOnly, CustomPage } from '../types';
// import '../assets/fonts/plex/mono/mono.css';
// import '../assets/fonts/plex/sans/sans.css';
// import '../assets/fonts/plex/serif/serif.css';

const App = ({ Component, pageProps }: AppProps) => {
	const Page = Component as CustomPage;

	const PageLayout =
		Page.layout || (({ children }: ChildrenOnly) => <>{children}</>);

	return (
		<ThemeProvider attribute='class'>
			<StoreProvider>
				<RootView>
					<PageLayout>
						<div id='content'>
							<Component {...pageProps} />
						</div>
					</PageLayout>
				</RootView>
			</StoreProvider>
		</ThemeProvider>
	);
};

export default App;
