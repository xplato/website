interface Props {
	href: string;
	rel?: string;
	children: React.ReactNode;
	[key: string]: any;
}

const ELi = ({ href, rel, children, ...props }: Props) => (
	<a
		href={href}
		target='_blank'
		rel={rel ? rel : 'nofollow noopener noreferrer'}
		{...props}
	>
		{children}
	</a>
);

export default ELi;
