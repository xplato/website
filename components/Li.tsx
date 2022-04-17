import Link from 'next/link';

interface Props {
	href: string;
	className?: string;
	children: React.ReactNode;
	[key: string]: any;
}

const Li = ({ href, className, children, ...props }: Props) => (
	<Link href={href}>
		<a className={className ? className : 'default-link'} {...props}>{children}</a>
	</Link>
);

export default Li;
