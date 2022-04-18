// THIRD-PARTY

import { ScavengerProvider } from '@infinium/scavenger';
import { Notifications } from '@infinium/hydro';
import { ThemeProvider } from 'next-themes';
import dynamic from 'next/dynamic';

import type { AppProps } from 'next/app';

// COMPONENTS

import SettingsProvider from '../providers/SettingsProvider';
import SearchPanelProvider from '../providers/SearchPanelProvider';
import View from '../components/layout/View';

// DATA

import { RESOURCES, Schema, SUGGESTIONS } from '../data/search';


// STYLES

import '../styles/jupiterui.css';
import '../styles/global.scss';
import '../styles/hydro.css';

/// FONTS
import '../assets/fonts/inter/inter.css';


const App = ({ Component, pageProps }: AppProps) => {
	// @ts-ignore
	const RootLayout = Component.layout || (({ children }: ChildrenOnly) => <>{children}</>);

	return (
		<ScavengerProvider
			initialResources={RESOURCES}
			suggestions={SUGGESTIONS}
			schema={Schema}
		>
			<Notifications />

			<SettingsProvider>
				<ThemeProvider attribute='class'>
					<SearchPanelProvider>
						<View>
							<RootLayout>
								<Component {...pageProps} />
							</RootLayout>
						</View>
					</SearchPanelProvider>
				</ThemeProvider>
			</SettingsProvider>
		</ScavengerProvider>
	);
};

export default dynamic(() => Promise.resolve(App), {
	ssr: false,
});
