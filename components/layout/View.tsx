import useBodyModifier from "../../hooks/useBodyModifier";
import { useSettings } from "../../providers/SettingsProvider";

import Navigation from "../shell/Navigation";
import Footer from "../shell/Footer";

import type { ChildrenOnly } from "../../types";

const View = ({ children }: ChildrenOnly) => {
	const settings = useSettings();

	useBodyModifier(settings.theme);
	useBodyModifier(settings.font);

	return (
		<div className="view">
			<Navigation />
			{children}
			<Footer />
		</div>
	);
};

export default View;