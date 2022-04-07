import type { ChildrenOnly } from "../types";

const PinsGrid = ({ children }: ChildrenOnly) => (
	<div className='pins-grid w-100p grid gap-1-5r grid-2 portrait-grid-1 mb-2r'>
		{children}
	</div>
);

export default PinsGrid;