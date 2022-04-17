import moment from "moment";

const FORMAT = 'YYYY-MM-DD hh:mm';

const getPrettyDate = (date: string) => {
	// Format date and time separately
	const fd = moment(date, FORMAT).format('D MMMM, Y');
	const ft = moment(date, FORMAT).format('h:mm A');
	const today = moment().format('D MMMM, Y');

	// If the date is today
	if (moment(today).isSame(fd)) {
		return date.length > 10 ? ft : `Today`;
	}

	return moment(date, FORMAT).fromNow();
}

export {
	getPrettyDate,
}