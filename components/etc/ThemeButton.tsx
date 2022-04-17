import { useCallback } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

import Button from "../Button";

const ThemeButton = () => {
	const { theme, setTheme } = useTheme();

	const onClick = useCallback(() => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	}, [theme]);

	return (
		<Button.Action className='hy-button icon-only' onClick={onClick} title="Toggle theme color">
			<span className="sr-only">Toggle theme color</span>
			<span className='text'>
				<i className='j-icon'>
					{theme === 'light' ? <MoonIcon /> : <SunIcon />}
				</i>
			</span>
		</Button.Action>
	);
};

export default ThemeButton;
