import Image from 'next/image';
import { isMobile } from 'react-device-detect';

import Button from '../components/Button';
import Layout from '../components/layout/Layout';
import PageMeta from '../components/PageMeta';
import Wrapper from '../components/Wrapper';

const FourOhFour = () => {
	return (
		<>
			<PageMeta
				meta={{
					title: '404!',
					description: 'Page not found.',
				}}
			/>
			<Wrapper c='py-2r flex-c large-text text-c'>
				<h1 className='fs-10xl tablet-fs-9xl landscape-fs-7xl portrait-fs-6xl fw-700 flex align-c justify-c flex-row text-c'>
					4{' '}
					<Image
						src='/images/etc/ghost.png'
						width={isMobile ? 75 : 150}
						height={isMobile ? 100 : 200}
					/>
					{' '}4
				</h1>
				<p>This is some spooky shit, man.</p>
				<p>You can head back home, or try a search {!isMobile && `(press "/" to search)`}.</p>
				<Button.Internal href='/'>I gotta get outta here!</Button.Internal>
			</Wrapper>
		</>
	);
};

FourOhFour.layout = Layout;

export default FourOhFour;
