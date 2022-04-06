import { useSettings } from '../../providers/SettingsProvider';

import type { ChildrenOnly } from "../../types";

const Article = ({ children }: ChildrenOnly) => {
	const settings = useSettings();

	const toggleFont = () => {
		// Since it defaults to mono, if they haven't
		// specified the font, we set it to `inter` first.
		if (!settings.font) {
			settings.set('font', 'inter');
			return;
		}

		settings.set('font', settings.font === 'mono' ? 'inter' : 'mono');
	}

	return (
		<article>
			<div className="mt-2r">
				<button className='button' onClick={toggleFont}>Toggle font</button>
			</div>

			{children}
		</article>
	);
};

export default Article;