import { useCallback } from 'react';
import classNames from 'classnames';
import moment from 'moment';

import Keyboard from '../Keyboard';

import { icons } from '../../data/icons';

interface ResultProps {
	id?: string;
	isSelected: boolean;
	index: number;
	title: string;
	description: string;
	href: string;
	repository?: string;
	type: string;
	navigate(v: any): void;
	date?: string;
}

const iconMap = {
	Page: icons.document,
	Project: icons.grid,
	Help: icons.questionMark,
	Pin: icons.location,
	Writing: icons.pencil,
	Tool: icons.nut,
};

const DefaultIcon = ({ type }: any) => (
	<div className='result-icon h-2r w-2r radius-8 dark-ui-3 flex-c'>
		{/* @ts-ignore */}
		<i className='j-icon text-dynamic-05'>{iconMap[type]}</i>
	</div>
);

const ContentCaption = ({ icon, children }: any) => (
	<div className='flex align-c justify-c flex-row pr-1-5r'>
		<p className='result-type'>
			{children}
		</p>
		{icon && icon}
	</div>
);

const Content = ({ type, title, date }: any) => (
	<div
		className={classNames(
			'content-wrapper w-100p py-0-75r flex-sb',
			type.toLowerCase()
		)}
	>
		<div className='w-100p flex align-c justify-s flex-row'>
			<div className='mr-0-75r'>
				<DefaultIcon type={type} />
			</div>
			<div className='flex align-s justify-c flex-column w-100p'>
				<p className='name fw-500 mb-0'>{title}</p>
				<p className='result-type'>{type}</p>
			</div>
		</div>

		{type === 'Pin' && (
			<ContentCaption>{moment(date, 'YYYY-MM-DD hh:mm').fromNow()}</ContentCaption>
		)}
	</div>
);

const Result = ({
	id,
	isSelected,
	navigate,
	href,
	title,
	type,
	date,
	...props
}: ResultProps) => {
	const onClick = () => {
		if (type === 'Project') {
			navigate(`/code?h=${id}#${id}`);
		} else {
			navigate(href);
		}
	};

	return (
		<>
			<button
				className={classNames('result', isSelected && 'selected')}
				onClick={onClick}
				tabIndex={0}
			>
				<Content type={type} title={title} date={date} {...props} />
			</button>

			<Keyboard
				keys={['enter']}
				callback={useCallback(() => {
					if (isSelected) {
						onClick();
					}
				}, [isSelected])}
				handleFocusableElements
			/>
		</>
	);
};

export default Result;
