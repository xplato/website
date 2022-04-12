import classNames from "classnames";
import moment from "moment";

import type { Pin as TPin } from "../data/pins";

interface Props extends TPin {
	highlight: boolean;
}

const Pin = ({ date, content, highlight }: Props) => (
	<div className={classNames(
		'pin w-100p',
		highlight && 'highlight'
	)} id={date}>
		<div className="w-100p flex align-c justify-s flex-row mb-0-75r">
			<div className='tag accentuate'>
				<span>{moment(date).format('D MMMM, Y')}</span>
			</div>
		</div>
		{content}
	</div>
);

export default Pin;