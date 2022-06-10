import { useCallback } from 'react';
import { useTheme } from 'next-themes';

const ThemeButton = () => {
	const { theme, setTheme } = useTheme();

	const toggleTheme = useCallback(() => {
		if (theme === 'system') {
			setTheme('dark');
		} else if (theme === 'dark') {
			setTheme('light');
		} else {
			setTheme('system');
		}
	}, [theme]);

	return (
		<button onClick={toggleTheme} className='normal-link btn opacity-05'>
			Toggle theme (
			{typeof theme !== 'undefined' &&
				(theme === 'system'
					? 'Auto'
					: `${theme?.charAt(0).toUpperCase()}${theme?.slice(1)}`)}
			)
		</button>
	);
};

export default ThemeButton;
