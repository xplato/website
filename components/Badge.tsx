import classNames from "classnames";

interface Props {
	mods?: string;
	children: React.ReactNode;
}

const Badge = ({ mods, children }: Props) => {
	return (
		<div className={classNames('badge', mods)}>
			<span>{children}</span>
		</div>
	);
};

export default Badge;