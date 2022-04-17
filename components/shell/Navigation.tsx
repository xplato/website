import { useRouter } from 'next/router';
import classNames from 'classnames';

import Logo from '../Logo';
import SearchButton from '../Search/SearchButton';
import ThemeButton from '../etc/ThemeButton';
import Button from '../Button';

const links = ['whoami', 'code', 'writings'];

const Navigation = () => {
	const { pathname } = useRouter();

	return (
		<nav>
			<div className='w-100p grid grid-3'>
				<div className='grid-block'>
					<Logo />
				</div>

				<div className='grid-block align-c'>
					<div className='flex-sb landscape-hide'>
						{links.map((link, index) => (
							<Button.Internal
								key={link}
								href={`/${link}`}
								className={classNames(
									'hy-button',
									index === 1 ? 'mx-1r' : '',
									pathname === `/${link}`
										? 'active'
										: ''
								)}
							>
								<span className="text">{link}</span>
							</Button.Internal>
						))}
					</div>
				</div>

				<div className='grid-block align-c justify-e flex-row'>
					<ThemeButton />
					<SearchButton />
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
