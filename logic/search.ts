const MAX_TITLE_LENGTH = 30;

const truncate = (s: string) => {
	if (s.length < MAX_TITLE_LENGTH) return s;
	return `${new String(s).substring(0, MAX_TITLE_LENGTH)}...`;
};

export {
	truncate,
}