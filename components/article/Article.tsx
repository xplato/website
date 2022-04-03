import type { ChildrenOnly } from "../../types";

const Article = ({ children }: ChildrenOnly) => {
	return (
		<article>
			{children}
		</article>
	);
};

export default Article;