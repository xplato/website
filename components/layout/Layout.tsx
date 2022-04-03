import type { ChildrenOnly } from "../../types";


const Layout = ({ children }: ChildrenOnly) => {
	return (
		<div className="layout">
			{children}
		</div>
	);
};

export default Layout;