import { ChevronRightIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import Li from './Li';

const Breadcrumbs = () => {
	const { pathname } = useRouter();
	const a = [
		'home',
		...pathname.split('/').filter((e) => e !== '' && e !== '/'),
	];

	return (
		<div className='d-inline-flex justify-c align-c flex-row mb-2r'>
			{a.map((path, i) => {
				const isLastItem = i === a.length - 1;

				return (
					<>
						{path !== 'home' && (
							<i className='icon sm mx-0-25r opacity-08'>
								<ChevronRightIcon />
							</i>
						)}
						{!isLastItem ? (
							<Li
								href={path === 'home' ? '/' : `/${path.toLowerCase()}`}
								className='link capitalize'
							>
								{path}
							</Li>
						) : (
							<p className='fs-base mb-0 capitalize'>
								{path}
							</p>
						)}
					</>
				);
			})}
		</div>
	);
};

export default Breadcrumbs;
