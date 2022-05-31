import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import RootView from '../components/RootView';

import '../styles/jupiterui.css';
import '../styles/global.scss';

// Fonts

/// IBM Plex
import '../assets/fonts/be_vietnam_pro/be_vietnam_pro.css';
import '../assets/fonts/plex/mono/mono.css';
import '../assets/fonts/plex/sans/sans.css';
import '../assets/fonts/plex/serif/serif.css';

/// Cascadia
import '../assets/fonts/cascadia-code-pl/cascadia.css';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider attribute='class'>
			<RootView>
				<div id='content'>
					<Component {...pageProps} />
				</div>
			</RootView>
		</ThemeProvider>
	);
};

export default App;
