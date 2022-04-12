const colors = [
	'hacker-green',
	'cyan',
	'white',
	'black',
	'amber',
	'purple',
	'rose',
	'pink',
	'fuchsia',
	'violet',
	'indigo',
	'blue',
	'sky',
	'teal',
	'emerald',
	'green',
	'lime',
	'yellow',
	'orange',
	'red',
];

interface NiceThemes {
	[key: string]: string;
}

let niceThemes: NiceThemes = {
	'hacker-green': 'Hacker Green',
};

const cap = (w: string) => w.charAt(0).toUpperCase() + w.slice(1);

colors.slice(1).forEach((color) => {
	niceThemes[color] = cap(color);
});

export { colors, niceThemes };
