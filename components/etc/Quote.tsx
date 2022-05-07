import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';
import { useState } from 'react';

import { quotes } from "../../data/quotes";

const Quote = () => {
	const [quote, setQuote] = useState(
		// Math.floor(Math.random() * quotes.length)
		0
	);

	const increment = () => {
		const isLastItem = quote === Object.keys(quotes).length - 1;
		setQuote(isLastItem ? 0 : quote + 1);
	}

	const decrement = () => {
		const lastItemIndex = Object.keys(quotes).length - 1;
		setQuote(quote === 0 ? lastItemIndex : quote - 1);
	}

	return (
		<div>
			<div className='flex align-s justify-s flex-row'>
				<span className='fs-4xl opacity-6'>"</span>
				<div className='ml-0-25r'>
					<p className='mb-0-5r'>{quotes[quote].q}</p>
					<p className='mb-0 opacity-8 fs-sm'>{quotes[quote].a}</p>
					<div className='quote-buttons mt-1r'>
						<button
							title='Previous quote'
							onClick={decrement}
						>
							<span className="sr-only">Previous quote</span>
							<i className='j-icon sm'>
								<ArrowLeftIcon />
							</i>
						</button>
						<div className='gap'></div>
						<button
							title='Next quote'
							onClick={increment}
						>
							<span className="sr-only">Next quote</span>
							<i className='j-icon sm'>
								<ArrowRightIcon />
							</i>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Quote;