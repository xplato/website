import Image from 'next/image';

import ELi from './ELi';

import { icons } from '../data/icons';

const Social = () => (
	<div>
		<div className='mb-0-5r'>
			<p className='caption-text'>Find me on</p>
		</div>
		<div className='w-100p flex align-c justify-s flex-row'>
			<ELi href='https://codeberg.org/athena' className='social-button'>
				<i className='j-icon md'>
					<Image
						src='/images/social/codeberg.png'
						width={32}
						height={32}
					/>
				</i>
			</ELi>
			<ELi href='https://github.com/xplato' className='social-button'>
				<i className='j-icon md'>{icons.github}</i>
			</ELi>
			<ELi
				href='https://fosstodon.org/web/@xplato'
				className='social-button'
			>
				<i className='j-icon md'>
					<Image
						src='/images/social/mastodon.png'
						width={32}
						height={32}
					/>
				</i>
			</ELi>
		</div>
	</div>
);

export default Social;
