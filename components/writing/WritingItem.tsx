import moment from 'moment';
import Li from '../Li';

interface Props {
	slug: string;
	title: string;
	date: string;
}

const WritingItem = ({ slug, title, date }: Props) => {
	return (
		<div className="writing-item">
			<Li href={`/writing/${slug}`} className='simple-link'>
				<h4 className='fs-lg fw-400'>{title}</h4>
			</Li>
			<p
				className='mb-0 fs-sm opacity-06 d-inline'
				title={moment(date).format('Mo MMMM, YYYY')}
			>
				{moment(date).fromNow()}
			</p>
		</div>
	);
};

export default WritingItem;
