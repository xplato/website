import dynamic from 'next/dynamic';
import ELi from '../ELi';

const ThemeSwitcher = dynamic(
	() => import('../ThemeSwitcher'),
	{ ssr: false }
);

const Footer = () => {
	return (
		<div className='footer mt-5r mb-2r pt-2r'>
			<div className='grid grid-2 landscape-grid-1'>
				<div className='grid-block justify-s landscape-align-c landscape-text-c'>
					<p className='mb-0 fs-sm lh-1'>
						This website is <ELi href="https://github.com/xplato/website">open-source.</ELi>
					</p>
					<p className='mb-0 fs-sm lh-1-5'>
						Copyright &copy; 2022. All rights reserved.
					</p>
				</div>
				<div className='grid-block align-e landscape-align-c landscape-text-c'>
					<p className='mb-0 fs-sm footer-caption'></p>
					<div className='flex align-c justify-c flex-row mt-0-5r'>
						<ThemeSwitcher />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
