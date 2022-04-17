import { default as NextLink } from 'next/link';
import classNames from 'classnames';

interface Props {
	href: string,
	children: React.ReactNode,
	newTab?: boolean,
	mods?: string
	isJLink?: boolean
}

const Link = ({ href, children, newTab = false, mods = '', isJLink = true }: Props) => (
	<NextLink href={href} passHref>
		<a
			className={classNames(isJLink && 'j-link', mods)}
			target={newTab ? '_blank' : '_self'}
			rel='noreferrer noopener nofollow'
		>
			{children}
		</a>
	</NextLink>
);

export default Link;