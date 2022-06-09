import moment from 'moment';

const copyToClipboard = (text: string) => {
	const type = "text/plain";
	const blob = new Blob([text], { type });
	// @ts-ignore
	const data = [new ClipboardItem({ [type]: blob })];
	return navigator.clipboard.write(data);
}

/*
*  Takes a string date of format YYYY/MM/DD and
*  returns a friendly date in format MMMM D, YYYY.
*  
*  in: 1970/01/01
*  out: January 1, 1970
*/
const getDate = (date: string | undefined): string => {
	return moment(date, 'YYYY/MM/DD').format('MMMM D, YYYY');
};

const getEdgePath = (file: string) => {
	return `https://infinium-proper.sfo3.cdn.digitaloceanspaces.com/crystal/${file}`;
};

export {
	copyToClipboard,
	getDate,
	getEdgePath,
}