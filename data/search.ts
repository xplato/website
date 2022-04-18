import { projects } from './projects';
import { writings } from './writings';
import { helpPages, pages } from './pages';
import { pins } from './pins';

const Schema = {
	Writing: ['title', 'date', 'tags', 'type'],
	Page: ['title', 'tags', 'type'],
	Help: ['id', 'title', 'tags', 'type'],
	Tool: ['title', 'type', 'tags'],
	Project: ['title', 'description', 'tags', 'type'],
	Pin: ['title', 'type', 'date'],
};

const resources = [
	...projects,
	...writings,
	...pages,
	...pins,
	...helpPages,
];

const suggestions = [
	pages[0],
	pages[1],
	pages[2],
	pages[3],
	writings[writings.length - 1],
	pins[0],
];

export {
	Schema,
	resources,
	suggestions,
}