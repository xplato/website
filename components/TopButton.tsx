import { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/solid';
import classNames from 'classnames';

const LIMIT = 1000;

const TopButton = () => {
	const [hasScrolled, setHasScrolled] = useState(false);

	const scroll = (ev: any) => {
		setHasScrolled(
			document.body.scrollTop > LIMIT ||
				document.documentElement.scrollTop > LIMIT
		);
	};

	useEffect(() => {
		window.onscroll = (ev: any) => scroll(ev);
	}, []);

	return (
		<a href='#' className={classNames('top-button', hasScrolled && 'show')}>
			<div className='bg'></div>
			<div className='icon-container'>
				<i className='icon sm'>
					<ArrowUpIcon />
				</i>
			</div>
		</a>
	);
};

export default TopButton;
