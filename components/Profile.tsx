import { ArrowRightIcon } from '@heroicons/react/solid';
import Image from 'next/image';

import Link from './Link';

const Profile = () => {
	return (
		<div className='flex-c'>
			<div className='radius-0-5r overflow-hidden mb-2r'>
				<Image src='/images/profile.jpg' width={120} height={120} />
			</div>
			<div className='flex align-c justify-s flex-row links'>
				<Link
					href='mailto:tristan@infinium.dev'
					icon={<ArrowRightIcon />}
				>
					Email
				</Link>
				<Link
					href='https://github.com/xplato'
					icon={<ArrowRightIcon />}
				>
					GitHub
				</Link>
				<Link
					href='https://codeberg.org/xplato'
					icon={<ArrowRightIcon />}
				>
					Codeberg
				</Link>
			</div>
		</div>
	);
};

export default Profile;
