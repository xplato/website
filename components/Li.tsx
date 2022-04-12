import Link from 'next/link';

interface Props {
	href: string;
	children: React.ReactNode;
	[key: string]: any;
}

const Li = ({ href, children, ...props }: Props) => (
	<Link href={href}>
		<a {...props}>{children}</a>
	</Link>
);

export default Li;
