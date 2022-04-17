import Image from 'next/image';

import ELi from './ELi';

import { icons } from '../data/icons';

const Social = () => (
	<div>
		<div className='mb-0-5r'>
			<p className='caption-text'>Find me on</p>
		</div>
		<div className='w-100p flex align-c justify-s flex-row'>
			<ELi
				href='https://codeberg.org/athena'
				className='social-button'
				title='My Codeberg Profile'
			>
				<i className='j-icon md'>
					<Image
						src='/images/social/codeberg.png'
						alt='Codeberg Logo'
						width={32}
						height={32}
					/>
				</i>
				<span className='sr-only'>My Codeberg Profile</span>
			</ELi>
			<ELi
				href='https://github.com/xplato'
				className='social-button'
				title='My GitHub Profile'
			>
				<i className='j-icon md'>{icons.github}</i>
				<span className='sr-only'>My GitHub Profile</span>
			</ELi>
			<ELi
				href='https://fosstodon.org/web/@xplato'
				className='social-button'
				title='My Mastodon Profile'
			>
				<i className='j-icon md'>
					<Image
						src='/images/social/mastodon.png'
						alt='Mastodon Logo'
						width={32}
						height={32}
					/>
				</i>
				<span className='sr-only'>My Mastodon Profile</span>
			</ELi>
		</div>
	</div>
);

export default Social;
