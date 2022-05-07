import type { Quote as TQuote } from "../../data/quotes";

const Quote = ({ q, a }: TQuote) => {
	return (
		<div>
			<div className='flex align-s justify-s flex-row'>
				<span className='fs-4xl opacity-6'>"</span>
				<div className='ml-0-25r'>
					<p className='mb-0-5r'>{q}</p>
					<p className='mb-0 opacity-8 fs-sm'>{a}</p>
				</div>
			</div>
		</div>
	);
};

export default Quote;