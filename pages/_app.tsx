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
import { writings } from '../data/writings';
import { projects } from '../data/projects';
import { helpPages, pages } from '../data/pages';
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
				...writings.map((e) => ({ ...e, type: 'Writing' })),
				...pages.map((e) => ({ ...e, type: 'Page' })),
				...helpPages.map((e) => ({ ...e, type: 'Help' })),
				...projects.map((e) => ({ ...e, type: 'Project' })),
				...pins.map((e) => ({ ...e, type: 'Pin' })),
			]}
			suggestions={[
				...pages.map((e) => ({ ...e, type: 'Page', caption: '' })).slice(0, 5),
				{
					...writings[0],
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
