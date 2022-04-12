// THIRD-PARTY

import { ScavengerProvider } from '@infinium/scavenger';
import { Notifications } from '@infinium/hydro';
import dynamic from 'next/dynamic';

import type { AppProps } from 'next/app';

// COMPONENTS

import SettingsProvider from '../providers/SettingsProvider';
import View from '../components/layout/View';

// DATA

import { Schema } from '../logic/search';
import { articles } from '../data/articles';
import { projects } from '../data/projects';
import { pages } from '../data/pages';
import { pins } from '../data/pins';

// STYLES

import '../styles/jupiterui.css';
import '../styles/global.scss';
import '@infinium/hydro/dist/style.css';

/// FONTS
import '../assets/fonts/inter/inter.css';
import '../assets/fonts/courier/courier.css';

const App = ({ Component, pageProps }: AppProps) => {
	// @ts-ignore
	const RootLayout = Component.layout || (({ children }: ChildrenOnly) => <>{children}</>);

	return (
		<ScavengerProvider
			initialResources={[
				...articles.map((e) => ({ ...e, type: 'Article' })),
				...pages.map((e) => ({ ...e, type: 'Page' })),
				...projects.map((e) => ({ ...e, type: 'Project' })),
				...pins.map((e) => ({ ...e, type: 'Pin' })),
			]}
			suggestions={[
				...pages.map((e) => ({ ...e, type: 'Page', caption: '' })).slice(0, 5),
				{
					...articles[0],
					type: 'Article',
					caption: 'Latest Article',
				},
				{
					...pins[0],
					type: 'Pin',
					caption: 'Latest Pin',
				},
			]}
			schema={Schema}
		>
			<Notifications />

			<SettingsProvider>
				<View>
					<RootLayout>
						<Component {...pageProps} />
					</RootLayout>
				</View>
			</SettingsProvider>
		</ScavengerProvider>
	);
};

export default dynamic(() => Promise.resolve(App), {
	ssr: false,
});
