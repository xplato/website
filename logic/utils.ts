const copyToClipboard = (text: string) => {
	const type = "text/plain";
	const blob = new Blob([text], { type });
	// @ts-ignore
	const data = [new ClipboardItem({ [type]: blob })];
	return navigator.clipboard.write(data);
}

export {
	copyToClipboard,
}