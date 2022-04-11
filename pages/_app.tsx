import type { AppProps } from 'next/app';
import { ScavengerProvider } from '@infinium/scavenger';
import dynamic from 'next/dynamic';

import SettingsProvider from '../providers/SettingsProvider';

import View from '../components/layout/View';
import { Schema, truncate } from '../logic/search';

import { articles } from '../data/articles';
import { projects } from '../data/projects';
import { pages } from '../data/pages';

import '../styles/jupiterui.css';
import '../styles/global.scss';
import '@infinium/hydro/dist/style.css';

import '../assets/fonts/inter/inter.css';
import '../assets/fonts/courier/courier.css';

const App = ({ Component, pageProps }: AppProps) => {
	// @ts-ignore
	const RootLayout = Component.layout || (({ children }: ChildrenOnly) => <>{children}</>);

	return (
		<ScavengerProvider
			initialResources={[
				...articles.map(e => ({ ...e, type: 'Article' })),
				...pages.map(e => ({ ...e, type: 'Page' })),
				...projects.map(e => ({ ...e, type: 'Project' })),
			]}
			suggestions={[
				...pages.map(e => ({ ...e, type: 'Page' })),
				{
					...articles[0],
					type: 'Article',
				},
			]}
			schema={Schema}
		>
			<SettingsProvider>
				<View>
					<RootLayout>
						<Component {...pageProps} />
					</RootLayout>
				</View>
			</SettingsProvider>
		</ScavengerProvider>
	);
}

export default dynamic(() => Promise.resolve(App), {
	ssr: false,
});