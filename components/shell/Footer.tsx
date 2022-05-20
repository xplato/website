import { HeartIcon } from '@heroicons/react/solid';
import { ExternalLinkIcon } from '@heroicons/react/outline';

import Li from '../Li';

import { footerLinks } from '../../data/links';
import ELi from '../ELi';
import ThemeButton from '../ThemeButton';

const Footer = () => {
	return (
		<div className='w-100p flex-c my-3r'>
			<footer className='w-100p flex-c'>
				<div className='container flex-c'>
					<div className='text-container'>
						<div className='w-100p d-flex flex-wrap flex-row'>
							{footerLinks.map((link) => {
								let Component = Li;

								if (link.external) {
									Component = ELi;
								}

								return (
									<Component
										key={link.label}
										href={link.href}
										className='link in-grid'
									>
										{link.label}
									</Component>
								)
							})}
						</div>
						<div className='w-100p border-top-ui-2 mt-1r pt-2r'>
							<div className='w-100p grid grid-2 ml-grid-1'>
								<div className='grid-block ml-align-c ml-text-c'>
									<p className='mb-0 opacity-07 fs-sm'>
										Copyright &copy; 2022
									</p>
								</div>
								<div className='grid-block flex-row align-c justify-e ml-justify-c mp-text-c'>
									<ThemeButton />
									<div className='flex align-c justify-c flex-row ml-0-5r'>
										<p className='mb-0 opacity-07 fs-sm'>
											Made with
										</p>
										<i className='icon sm mx-0-25r'>
											<span className='text-red-500'>
												<HeartIcon />
											</span>
										</i>
										<p className='mb-0 opacity-07 fs-sm'>
											in SLC
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
