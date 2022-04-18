interface Tool {
	id: string;
	title: string;
	href: string;
	tags: string[];
}

const tools: Tool[] = [
	{
		id: 'color-converter',
		title: 'Color Converter',
		href: '/tools/color-converter',
		tags: [''],
	}
];

export {
	tools,
}