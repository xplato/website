import PageMeta from '../components/PageMeta';
import Layout from '../components/layout/Layout';
import Li from '../components/Li';

import { KEYS } from '../components/shell/Shortcuts';

interface TShortcutBlock {
	type: string;
	keys: {
		[key: string]: string;
	};
}

const SHORTCUTS: TShortcutBlock[] = [
	{
		type: 'Navigational',
		keys: KEYS,
	},
	{
		type: 'Action',
		keys: {
			'/ or s': 'open search',
			'esc': 'cancel',
		},
	}
];

const ShortcutBlock = ({ keys, type }: TShortcutBlock) => {
	return (
		<div className="ui-1 radius-8 d-inline-flex align-s justify-s flex-column">
			<div className="w-100p shortcut-block-header">
				<h4>{type}</h4>
			</div>
			<div className="p-1r">
				{Object.keys(keys).map((key, index) => (
					<p className={index === Object.keys(keys).length - 1 ? 'mb-0' : ''}><strong>{key}</strong> {'—>'} <strong>{keys[key]}</strong></p>
				))}
			</div>
		</div>
	);
}

const Help = () => {
	const url = new URLSearchParams(window.location.search);

	return (
		<>
			<PageMeta
				meta={{
					title: 'help',
					description: "Help, keyboard shortcuts, and more.",
				}}
			/>

			<h1 id='fancyboi' className='title index-title'>Help {'&'} Info</h1>
			<p>If you notice any bugs or have any questions about this site, don't hesitate to reach out. You can find contact info on the <Li href='/whoami'>whoami</Li> page.</p>

			<h2>Keyboard Shortcuts</h2>
			<p>Although it may not look like it, this site is packed with keyboard shortcuts that make navigation super fast.</p>
			<p>The following keyboard shortcuts will navigate to certain pages.</p>

			<div id="shortcuts" className={url.get('h')?.trim() === 'shortcuts' ? 'highlight' : ''}>
				<div className="w-100p grid grid-3 landscape-grid-1">
					{SHORTCUTS.map(block => (
						<ShortcutBlock key={block.type} {...block} />
					))}
				</div>
			</div>

			<p></p>
		</>
	);
};

Help.layout = Layout;

export default Help;
