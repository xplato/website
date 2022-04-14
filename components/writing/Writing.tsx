import { useSettings } from '../../providers/SettingsProvider';

import type { ChildrenOnly } from '../../types';

const Writing = ({ children }: ChildrenOnly) => {
	const settings = useSettings();

	const toggleFont = () => {
		// Since it defaults to mono, if they haven't
		// specified the font, we set it to `inter` first.
		if (!settings.font) {
			settings.set('font', 'inter');
			return;
		}

		settings.set('font', settings.font === 'mono' ? 'inter' : 'mono');
	};

	return (
		// Lol, can't change this
		<article>
			<div className='mt-2r'>
				<a onClick={toggleFont}>
					{settings.font === 'mono' ? 'Sans' : 'Mono'} font
				</a>
			</div>

			{children}
		</article>
	);
};

export default Writing;
