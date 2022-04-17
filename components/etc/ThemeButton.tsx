import { useCallback } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

const ThemeButton = () => {
	const { theme, setTheme } = useTheme();

	const onClick = useCallback(() => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	}, [theme]);

	return (
		<button className='hy-button icon-only' onClick={onClick}>
			<span className='text'>
				<i className='j-icon'>
					{theme === 'light' ? <MoonIcon /> : <SunIcon />}
				</i>
			</span>
		</button>
	);
};

export default ThemeButton;
