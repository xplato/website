import type { ChildrenOnly } from "../../types";

const Badge = ({ children }: ChildrenOnly) => (
	<div className='badge'>
		<span>{children}</span>
	</div>
);

export default Badge;