import moment from "moment";

import type { Pin as TPin } from "../data/pins";

const Pin = ({ date, content }: TPin) => (
	<div className='pin w-100p'>
		<div className="w-100p flex align-c justify-s flex-row mb-0-75r">
			<div className='tag accentuate'>
				<span>{moment(date).format('D MMMM, Y')}</span>
			</div>
		</div>
		{content}
	</div>
);

export default Pin;