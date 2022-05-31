import classNames from 'classnames';

interface Props {
	mods?: string;
	children: React.ReactNode;
}

const Title = ({ mods, children }: Props) => (
	<p className={classNames('mb-1r fs-xl fw-500 opacity-04 x-title', mods)}>
		{children}
	</p>
);

export default Title;
