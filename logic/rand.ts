const getRandomString = (opts: string[]) => {
	return opts[Math.floor(Math.random() * opts.length)];
}

export {
	getRandomString,
}