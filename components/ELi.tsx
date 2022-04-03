interface Props {
	href: string;
	children: React.ReactNode;
	[key: string]: any;
}

const ELi = ({ href, children, ...props }: Props) => (
	<a href={href} target='_blank' rel='nofollow noopener noreferrer' {...props}>
		{children}
	</a>
);

export default ELi;