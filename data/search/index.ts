import { projects } from '../projects';
import { writings } from '../writings';
import { helpPages, pages } from '../pages';
import { pins } from '../pins';

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

const KeyResources = {
	All: resources,
	Project: projects,
	Writing: writings,
	Page: pages,
	Pin: pins,
	Help: helpPages,
}

export {
	resources,
	suggestions,
	KeyResources,
}