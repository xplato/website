import { HeartIcon } from '@heroicons/react/solid';

import Button from '../Button';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='w-100p grid grid-3 landscape-grid-2'>
				<div className='grid-block'>
					<div className='flex align-c justify-c flex-row'>
						<p className='caption-text low-weight'>
							Copyright &copy; 2022
						</p>
					</div>
				</div>

				<div className='grid-block align-c landscape-hide'>
					<div className='flex-sb'>
						<Button.Internal href='/privacy' className='hy-button'>Privacy</Button.Internal>
						<Button.External href='https://github.com/xplato/website' className='hy-button'>Source code</Button.External>
					</div>
				</div>

				<div className='grid-block align-e'>
					<div className="flex align-c justify-c flex-row">
						<p className="mb-0">Made with</p>
						<i className='j-icon mx-0-25r'>
							<span className='text-red-500'>
								<HeartIcon />
							</span>
						</i>
						<p className="mb-0">in SLC</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
