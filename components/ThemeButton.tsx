import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

const ThemeButton = () => {
	const { theme, setTheme } = useTheme();

	const onClick = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	}

	return (
		<button className="icon-button" onClick={onClick}>
			<span className="sr-only">Switch to {theme === 'dark' ? 'light' : 'dark'} mode.</span>
			<i className="icon opacity-07">
				{theme === 'dark' ? <SunIcon /> : <MoonIcon />}
			</i>
		</button>
	);
};

export default ThemeButton;