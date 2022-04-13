import classNames from 'classnames';

import { getPrettyDate } from '../logic/date';

import type { Pin as TPin } from '../data/pins';

interface Props extends TPin {
	highlight: boolean;
}

const Pin = ({ date, content, highlight }: Props) => {
	return (
		<div
			className={classNames('pin w-100p', highlight && 'highlight')}
			id={date}
		>
			<div className='w-100p flex align-c justify-s flex-row mb-0-75r'>
				<div className='tag accentuate'>
					<span>{getPrettyDate(date)}</span>
				</div>
			</div>
			{content}
		</div>
	);
}

export default Pin;
