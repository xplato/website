import classNames from "classnames";

interface Props {
	mods?: string;
	children: React.ReactNode;
}

const Title = ({ mods, children }: Props) => (
	<h1 className={classNames(
		'fs-5xl tl-fs-4xl',
		mods,
	)}>{children}</h1>
);

export default Title;