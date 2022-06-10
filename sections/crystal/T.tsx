import classNames from 'classnames';

interface TProps {
	className?: string;
	children?: React.ReactNode;
}

const T = ({ className, children }: TProps) => (
	<p className={classNames('fs-lg', className)}>{children}</p>
);

export default T;