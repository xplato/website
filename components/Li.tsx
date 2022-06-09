import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';

interface Props {
	href: string;
	className?: string;
	children: React.ReactNode;
	[key: string]: any;
}

const Li = ({ href, className, children, ...props }: Props) => {
	const { pathname } = useRouter();

	return (
		<Link href={href}>
			<a
				className={
					className
						? classNames(className, pathname === href && 'active')
						: 'default-link'
				}
				{...props}
			>
				{children}
			</a>
		</Link>
	);
};

export default Li;
