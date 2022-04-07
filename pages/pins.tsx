import PageMeta from "../components/PageMeta";
import Layout from "../components/layout/Layout";
import PinsGrid from "../components/PinsGrid";
import Pin from "../components/Pin";

import { getRandomString } from "../logic/rand";

import pins from "../data/pins";

const titles = [
	'pins',
	'thougts',
	'updates',
	'tweets?',
];

const Pins = () => {
	return (
		<>
			<PageMeta meta={{
				title: 'home',
				description: "~athena's personal website.",
			}} />

			<h1 id='fancyboi' className='title index-title'>
				{getRandomString(titles)}
			</h1>

			<PinsGrid>
				{pins.map(pin => <Pin key={pin.date} {...pin} />)}
			</PinsGrid>
		</>
	);
};

Pins.layout = Layout;

export default Pins;
