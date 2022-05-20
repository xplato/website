import Image from 'next/image';

import ELi from './ELi';

import { icons } from '../data/icons';

const Social = () => (
	<div>
		<div className='w-100p flex align-c justify-s flex-row'>
			<ELi
				href='https://codeberg.org/xplato'
				className='social-button'
				title='My Codeberg Profile'
			>
				<i className='icon lg'>
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
				<i className='icon lg'>{icons.github}</i>
				<span className='sr-only'>My GitHub Profile</span>
			</ELi>
			<ELi
				href='https://fosstodon.org/web/@xplato'
				className='social-button'
				title='My Mastodon Profile'
			>
				<i className='icon lg'>
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
