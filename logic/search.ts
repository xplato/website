const Schema = {
	Writing: ['title', 'date', 'tags', 'type'],
	Page: ['title', 'tags', 'type'],
	Help: ['id', 'title', 'tags', 'type'],
	Project: ['title', 'description', 'tags', 'type'],
	Pin: ['title', 'type', 'date'],
};

const MAX_TITLE_LENGTH = 30;

const truncate = (s: string) => {
	if (s.length < MAX_TITLE_LENGTH) return s;
	return `${new String(s).substring(0, MAX_TITLE_LENGTH)}...`;
};

export {
	Schema,
	truncate,
}