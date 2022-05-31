import { ArrowLeftIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

import Li from '../Li';

const Navigation = () => {
	const { pathname } = useRouter();

	if (pathname === '/') {
		return <></>;
	}

	return (
		<Li href='/' className='nav-button'>
			<div>
				<i className='icon sm'>
					<ArrowLeftIcon />
				</i>
			</div>
		</Li>
	);
}

export default Navigation;
