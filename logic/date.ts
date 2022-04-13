import moment from "moment";

const getPrettyDate = (date: string) => {
	// Format date and time separately
	const fd = moment(date).format('D MMMM, Y');
	const ft = moment(date).format('h:mm A');
	const today = moment().format('D MMMM, Y');

	// If the date is today
	if (moment(today).isSame(fd)) {
		return date.length > 10 ? `Today @ ${ft}` : `Today`;
	}

	return moment(date).fromNow();
}

export {
	getPrettyDate,
}