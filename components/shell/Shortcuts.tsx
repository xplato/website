import { useRouter } from 'next/router';

import Keyboard from '../Keyboard';

interface TKeys {
	[shortcut: string]: string;
}

const KEYS: TKeys = {
	'.': 'home',
	'c': 'code',
	'a': 'articles',
	'w': 'whoami',
	'p': 'pins',
	'h': 'help',
	'k': 'keyboard shortcuts',
};

const Shortcuts = () => {
	const { push } = useRouter();

	const onPress = (key: string, ev: any) => {
		switch (key) {
			case '~':
				push('/');
				break;
			case '.':
				push('/');
				break;
			case 'c':
				push('/code');
				break;
			case 'a':
				push('/articles');
				break;
			case 'w':
				push('/whoami');
				break;
			case 'p':
				push('/pins');
				break;
			case 'h':
				push('/help');
				break;
			case 'k':
				push('/help?h=shortcuts#shortcuts');
				break;
			default:
				break;
		}
	}

	return <Keyboard keys={Object.keys(KEYS)} callback={onPress} />;
};

export default Shortcuts;

export {
	KEYS,
}