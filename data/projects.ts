interface Project {
	id: string;
	title: string;
	repository: string;
	description?: string;
	liveURL?: string;
	isNew?: boolean;
	tags: string[];
}

const projects: Project[] = [
	{
		id: 'gofe',
		title: 'Gofë',
		description: 'A private and minimal front-end for Google Search.',
		repository: 'https://codeberg.org/ar324/gofe',
		liveURL: 'https://gofe.app',
		isNew: true,
		tags: ['search', 'private', 'google', 'gofe', 'javascript', 'go'],
	},
	{
		id: 'use-undoable',
		title: 'useUndoable',
		description: 'React hook for undo/redo functionality (with batteries included)',
		repository: 'https://github.com/Infinium8/useUndoable',
		liveURL: 'https://codesandbox.io/s/use-undoable-zi0b4',
		tags: ['javascript', 'react', 'typescript', 'undo/redo'],
	},
	{
		id: 'jupiterui',
		title: 'JupiterUI',
		description: 'The elegant and reliable UI kit for web artisans.',
		repository: 'https://github.com/Infinium8/JupiterUI',
		liveURL: 'https://jupiter-ui.vercel.app/',
		tags: ['css design system'],
	},
	{
		id: 'hydro',
		title: 'Hydro',
		description: 'A fluid set of general React components for modern web apps.',
		repository: 'https://github.com/Infinium8/Hydro',
		liveURL: 'https://neqd5.csb.app/',
		tags: ['react components', 'javascript', 'typescript'],
	},
	{
		id: 'supervisor',
		title: 'Supervisor',
		description: 'Effortlessly run scripts or commands when certain files change.',
		repository: 'https://github.com/Infinium8/Supervisor',
		tags: ['python', 'file', 'watcher'],
	},
	{
		id: 'hyper',
		title: 'Hyper',
		description: 'A tiny, hook-based request library for React',
		repository: 'https://github.com/Infinium8/Hyper',
		tags: ['request', 'http', 'javascript', 'typescript'],
	},
	{
		id: 'tree',
		title: 'Tree',
		description: 'Easily manage, manipulate, and traverse a JavaScript Tree',
		repository: 'https://github.com/Infinium8/Tree',
		tags: ['javascript'],
	},
	{
		id: 'use-settings',
		title: 'useSettings',
		description: 'Easily manage application settings in localStorage with a React hook',
		repository: 'https://github.com/Infinium8/useSettings',
		tags: ['settings', 'localstorage'],
	},
	// {
	// 	title: '',
	// 	repository: '',
	// },
	// {
	// 	title: '',
	// 	repository: '',
	// },
	// {
	// 	title: '',
	// 	repository: '',
	// },
];

const deprecatedProjects: Project[] = [
	
];

export {
	projects,
	deprecatedProjects,
}

export type {
	Project,
}