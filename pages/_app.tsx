import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

import SettingsProvider from '../providers/SettingsProvider';
import View from '../components/layout/View';

import '../styles/jupiterui.css';
import '../styles/global.scss';
import '@infinium/hydro/dist/style.css';


const App = ({ Component, pageProps }: AppProps) => {
	// @ts-ignore
	const RootLayout = Component.layout || (({ children }: ChildrenOnly) => <>{children}</>);

	return (
		<SettingsProvider>
			<View>
				<RootLayout>
					<Component {...pageProps} />
				</RootLayout>
			</View>
		</SettingsProvider>
	);
}

export default dynamic(() => Promise.resolve(App), {
	ssr: false,
});