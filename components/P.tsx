import type { ChildrenOnly } from "../types";

const P = ({ children }: ChildrenOnly) => (
	<p className="p-text">{children}</p>
);

export default P;