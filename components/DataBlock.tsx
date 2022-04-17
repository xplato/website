import { useState } from 'react';
import classNames from 'classnames';

import HObject from './HObject';

interface Props {
	type: 'project' | 'writing' | 'pin';
	data: any[];
	block?: any;
	isTop?: boolean;
	showMore?: boolean;
	setMode?(v: string): void;
}

const DataBlock = ({ type, data, block, isTop, showMore, setMode }: Props) => {
	const [slice, _] = useState(showMore ? 10 : 2);

	// If the data starts getting too large,
	// I'll add support for "pagination" by
	// incrementing the slice value. Right now,
	// there's so little data that it doesn't
	// really matter much.

	return (
		<div
			className={classNames(
				'p-4r landscape-p-2r w-100p',
				!isTop && 'pt-0'
			)}
		>
			<div className='w-100p flex-sb mb-1-5r'>
				<div className='flex-cr'>
					<h3 className='mb-0'>{block.title}</h3>
					{showMore && data.length && <p className='fs-sm mb-0 ml-0-75r'>({data.length})</p>}
				</div>
				<a
					href='#t'
					className='j-link underline flex align-c justify-c flex-row'
					onClick={() => {
						if (setMode) {
							setMode(showMore ? 'mix' : type);
						}
					}}
				>
					{showMore ? 'Go back' : 'Show all'}
				</a>
			</div>

			<div
				className={classNames(
					'w-100p grid gap-1r',
					type === 'project' ? 'grid-2 portrait-grid-1' : 'grid-1'
				)}
			>
				{data.slice(0, slice).map((e) => {
					let id = e.id;
					let content = e.content;
					let doesLink = e.slug !== undefined;
					let href = '';

					// If not a Pin, try description
					if (!e.content) {
						content = e.description;
					}

					// If neither, try excerpt
					if (!e.content && !e.description) {
						content = e.excerpt;
					}

					// If Project, link and adjust URL
					if (e.repository) {
						doesLink = true;
						href = `/code?h=${e.id}#${e.id}`;
					}

					// If Article, link and adjust URL
					if (e.slug) {
						doesLink = true;
						href = `/writings/${e.slug}`;
					}

					// If no ID, use date of resource
					if (!id) {
						id = e.date;
					}

					return (
						<HObject
							key={e.title}
							id={id}
							highlight={false}
							doesLink={doesLink}
							obj={{
								...e,
								href,
								content,
							}}
							externalLink={false}
						/>
					);
				})}
			</div>

			{showMore && (
				<div className='flex mt-2r'>
					<a
						className='j-link underline flex align-c justify-c flex-row'
						onClick={() => {
							if (setMode) {
								setMode('mix');
							}
						}}
					>
						Go back
					</a>
				</div>
			)}
		</div>
	);
};

export default DataBlock;
