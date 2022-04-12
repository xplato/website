import PageMeta from "../components/PageMeta";
import Layout from "../components/layout/Layout";
import Pins from "../components/Pins";
import Pin from "../components/Pin";

import { getRandomString } from "../logic/rand";

import { pins } from "../data/pins";

const titles = [
	'pins',
	'thougts',
	'updates',
	'tweets?',
];

const PinsPage = () => {
	const url = new URLSearchParams(window.location.search);

	return (
		<>
			<PageMeta meta={{
				title: 'home',
				description: "~athena's personal website.",
			}} />

			<h1 id='fancyboi' className='title index-title'>
				{getRandomString(titles)}
			</h1>

			<div className="mw-35r">
				<Pins>
					{pins.map(pin => <Pin key={pin.date} {...pin} highlight={url.get('h')?.trim() === pin.date} />)}
				</Pins>
			</div>
		</>
	);
};

PinsPage.layout = Layout;

export default PinsPage;
