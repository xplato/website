import { memo, useState } from 'react';
import { useRouter } from 'next/router';

const emojis = [
	'🐬',
	'🦊',
	'🐻',
	'🦄',
	'🦉',
	'🦅',
	'🐍',
	'🦖',
	'🦀',
	'🌴',
	'🦁',
	'🐨',
	'🐻‍❄️',
	'🐺',
	'🦋',
	'🐝',
	'🐙',
	'🐆',
	'🐅',
	'🐃',
	'🌲',
	'🐲',
	'🌿',
	'🍄',
	'🐿',
	'🦫',
	'🦒',
	'🐘',
	'🦣',
	'🦈',
	'🐊',
];

const getRandomEmoji = () => {
	return Math.floor(Math.random() * emojis.length);
};

const Logo = memo(() => {
	const { push, pathname } = useRouter();
	const [emoji, setEmoji] = useState<number>(getRandomEmoji());

	const onClick = () => {
		if (pathname !== '/') push('/');
		setEmoji((e) => (e === emojis.length - 1 ? 0 : e + 1));
	};

	return (
		<button className='logo-container' onClick={onClick} tabIndex={0}>
			<span className='sr-only'>Home page</span>
			<div className='logo flex-r'>
				<p className='mb-0 fs-2xl'>{emojis[emoji]}</p>
				<p className='mb-0 logo-text ml-0-75r ml-hide'>
					xplato
				</p>
			</div>
		</button>
	);
});

export default Logo;
