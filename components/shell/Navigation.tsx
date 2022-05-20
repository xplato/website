import Entity from '../Entity';
import Logo from '../Logo';

import { variants } from '../../logic/motion';
import Li from '../Li';
import { navLinks } from '../../data/links';
import { useRouter } from 'next/router';
import classNames from 'classnames';

const Navigation = () => {
	const { pathname } = useRouter();

	return (
		<nav>
			<div className='border-wrapper'>
				<Entity variants={variants.fadeIn} className='nav-container x-container h-100p'>
					<div className='w-100p h-100p flex-sb'>
						<div className='h-100p flex align-c justify-s flex-row'>
							<Logo />
						</div>
						<div className='h-100p flex align-c justify-e flex-row relative'>
							{navLinks.map(link => (
								<div key={link.href} className="link-wrapper">
									<Li href={link.href} className={classNames(
										'nav-link', 
										pathname === link.href && 'active'
									)}>
										<span>{link.label}</span>
									</Li>
								</div>
							))}
						</div>
					</div>
				</Entity>
			</div>
		</nav>
	);
};

export default Navigation;
