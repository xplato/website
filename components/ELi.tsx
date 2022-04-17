interface Props {
	href: string;
	rel?: string;
	className?: string;
	children: React.ReactNode;
	[key: string]: any;
}

const ELi = ({ href, rel, className, children, ...props }: Props) => (
	<a
		href={href}
		target='_blank'
		rel={rel ? rel : 'nofollow noopener noreferrer'}
		className={className ? className : 'default-link'}
		{...props}
	>
		{children}
	</a>
);

export default ELi;
