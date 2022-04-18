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

import { Schema } from '../data/search';
import { writings } from '../data/writings';
import { projects } from '../data/projects';
import { helpPages, pages } from '../data/pages';
import { pins } from '../data/pins';

// STYLES

import '../styles/jupiterui.css';
import '../styles/global.scss';
import '../styles/hydro.css';

/// FONTS
import '../assets/fonts/inter/inter.css';
import { tools } from '../data/tools';


const App = ({ Component, pageProps }: AppProps) => {
	// @ts-ignore
	const RootLayout = Component.layout || (({ children }: ChildrenOnly) => <>{children}</>);

	return (
		<ScavengerProvider
			initialResources={[
				...pages.map((e) => ({
					...e,
					type: 'Page',
					_order: `A ${e.title}`,
				})),
				...helpPages.map((e) => ({
					...e,
					type: 'Help',
					_order: `B ${e.title}`,
				})),
				...pins.map((e) => ({
					...e,
					type: 'Pin',
					href: `/pins?h=${e.date}#${e.date}`,
					_order: `C ${e.title}`,
				})),
				...writings.map((e) => ({
					...e,
					type: 'Writing',
					href: `/writings/${e.slug}`,
					_order: `D ${e.title}`,
				})),
				...tools.map((e) => ({
					...e,
					type: 'Tool',
					_order: `E ${e.title}`,
				})),
				...projects.map((e) => ({
					...e,
					type: 'Project',
					_order: `F ${e.title}`,
				})),
			]}
			suggestions={[
				...pages
					.map((e) => ({
						...e,
						type: 'Page',
						caption: '',
						_order: 'A',
					}))
					.slice(0, 3),
				{
					...writings[0],
					type: 'Writing',
					caption: 'Latest Writing',
					href: `/writings/${writings[0].slug}`,
					_order: 'B',
				},
				{
					...pins[0],
					type: 'Pin',
					caption: 'Latest Pin',
					href: `/pins?h=${pins[0].date}#${pins[0].date}`,
					_order: 'C',
				},
				{
					...tools[0],
					type: 'Tool',
					caption: 'Latest Tool',
					href: `/tools/${tools[0].id}`,
					_order: 'D',
				},
				{
					...projects[0],
					type: 'Project',
					caption: 'Latest Project',
					href: `/code?h=${projects[0].id}#${projects[0].id}`,
					_order: 'E',
				},
			]}
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
