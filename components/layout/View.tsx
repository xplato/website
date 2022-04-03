import { useEffect } from "react";

import { useSettings } from "../../providers/SettingsProvider";

import Navigation from "../shell/Navigation";
import Footer from "../shell/Footer";

import type { ChildrenOnly } from "../../types";

const View = ({ children }: ChildrenOnly) => {
	const settings = useSettings();

	useEffect(() => {
		if (settings.theme) {
			document.body.classList.add(settings.theme);
		}

		return () => {
			document.body.classList.remove(settings.theme);
		}
	}, [settings.theme]);

	return (
		<div className="view">
			<Navigation />
			{children}
			<Footer />
		</div>
	);
};

export default View;