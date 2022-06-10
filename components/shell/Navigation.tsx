import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ArrowLeftIcon } from '@heroicons/react/solid';

import Li from '../Li';

const Navigation = () => {
	const [href, setHref] = useState('/');
	const { pathname } = useRouter();

	useEffect(() => {
		const paths = pathname.split('/').filter(e => e !== '');

		if (paths.length > 1) {
			setHref(`/${paths[paths.length - 2]}`);
		} else {
			setHref('/');
		}
	}, [pathname]);

	if (pathname === '/') {
		return <></>;
	}

	return (
		<Li href={href} className='nav-button'>
			<div>
				<i className='icon sm'>
					<ArrowLeftIcon />
				</i>
			</div>
		</Li>
	);
};

export default Navigation;
