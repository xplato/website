import Li from '../Li';

import type { Writing } from '../../data/writings';
import moment from 'moment';

const WritingItem = ({ slug, title, excerpt, date }: Writing) => {
	return (
		<div className='writing-item'>
			<Li href={`/writing/${slug}`} className='simple-link'>
				<h4 className='fs-lg fw-500'>{title}</h4>
			</Li>
			<div className="flex align-c justify-c flex-row">
				<p className='mb-0 opacity-06 d-inline'>{moment(date).fromNow()}</p>
				<p className="mb-0 mx-0-5r opacity-03 fs-sm">{' • '}</p>
				<p className='mb-0 opacity-06 d-inline'>{excerpt}</p>
			</div>
		</div>
	);
};

export default WritingItem;
