import { writings } from '../data/writings';
import { projects } from '../data/projects';
import { helpPages, pages } from '../data/pages';
import { pins } from '../data/pins';
import { tools } from '../data/tools';

const Schema = {
	Writing: ['title', 'date', 'tags', 'type'],
	Page: ['title', 'tags', 'type'],
	Help: ['id', 'title', 'tags', 'type'],
	Tool: ['title', 'type', 'tags'],
	Project: ['title', 'description', 'tags', 'type'],
	Pin: ['title', 'type', 'date'],
};

const wrap = (d: any, t: string, o: string, ex: any = {}) => d.map((e: any) => ({
	...e,
	type: t,
	_order: o,
	...ex,
}))

const RESOURCES = [
	...wrap(pages, 'Page', 'A'),
	...wrap(helpPages, 'Help', 'B'),
	...pins.map((e) => ({
		...e,
		type: 'Pin',
		href: `/pins?h=${e.date}#${e.date}`,
		_order: `C ${e.title}`,
	})),
	...writings.map((e) => ({
		...e,
		type: 'Writing',
		href: `/writings/${e.slug}`,
		_order: `D ${e.title}`,
	})),
	...wrap(tools, 'Tool', 'E'),
	...wrap(projects, 'Project', 'F'),
];

const SUGGESTIONS = [
	...pages
		.map((e) => ({
			...e,
			type: 'Page',
			caption: '',
			_order: 'A',
		}))
		.slice(0, 3),
	{
		...writings[0],
		type: 'Writing',
		caption: 'Latest Writing',
		href: `/writings/${writings[0].slug}`,
		_order: 'B',
	},
	{
		...pins[0],
		type: 'Pin',
		caption: 'Latest Pin',
		href: `/pins?h=${pins[0].date}#${pins[0].date}`,
		_order: 'C',
	},
	{
		...tools[0],
		type: 'Tool',
		caption: 'Latest Tool',
		href: `/tools/${tools[0].id}`,
		_order: 'D',
	},
	{
		...projects[0],
		type: 'Project',
		caption: 'Latest Project',
		href: `/code?h=${projects[0].id}#${projects[0].id}`,
		_order: 'E',
	},
];

export {
	Schema,
	RESOURCES,
	SUGGESTIONS,
}