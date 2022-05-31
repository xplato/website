import classNames from 'classnames';

import ELi from './ELi';

interface Props {
	href: string;
	mods?: string;
	icon?: React.ReactNode;
	children: React.ReactNode;
}

const Link = ({ href, mods, icon, children }: Props) => {
	return (
		<ELi href={href} className={classNames('link', mods, icon && 'with-icon')}>
			<span>{children}</span>
			{icon && <i className='icon'>{icon}</i>}
		</ELi>
	);
};

export default Link;
