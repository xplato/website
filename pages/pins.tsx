import PageMeta from '../components/PageMeta';
import Layout from '../components/layout/Layout';
import Pins from '../components/Pins';
import Wrapper from '../components/Wrapper';
import HObject from '../components/HObject';

import { pins } from '../data/pins';

const PinsPage = () => {
	const url = new URLSearchParams(window.location.search);

	return (
		<>
			<PageMeta
				meta={{
					title: 'pins',
					description: 'Updates, tweets, pins.',
				}}
			/>

			<Wrapper s='ui-1 dark-ui mod-padding' c='flex-c'>
				<div className='mw-35r flex-c'>
					<Pins>
						{pins.map((pin) => (
							<HObject
								key={pin.date}
								id={pin.date}
								obj={{
									...pin,
								}}
								highlight={url.get('h')?.trim() === pin.date}
							/>
						))}
					</Pins>

					<p className='text-dynamic-07 mt-2r'>{pins.length} pins</p>
				</div>
			</Wrapper>
		</>
	);
};

PinsPage.layout = Layout;

export default PinsPage;
