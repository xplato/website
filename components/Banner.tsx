import type { ChildrenOnly } from "../types";

const Banner = ({ children }: ChildrenOnly) => {
	return (
		<div className="w-100p bg-accent flex-c text-c text-white py-0-5r">
			<p className="mb-0 fs-sm">{children}</p>
		</div>
	);
};

export default Banner;