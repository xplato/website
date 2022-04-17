// This is a basic card that can represent
// multiple types of data.
// I.e.: projects, writings, etc.

import classNames from 'classnames';

import Li from '../Li';
import ELi from '../ELi';

import { getPrettyDate } from '../../logic/date';

interface Props {
	// Used for referencing the object via
	// URL params
	id: string;

	// The current "instance" or data object.
	// I.e. any searchable resource
	obj: any;

	// General Modifiers
	doesLink?: boolean;
	highlight?: boolean;
	externalLink?: boolean;
}

const HObject = ({
	id,
	obj,
	doesLink,
	highlight,
	externalLink,
}: Props) => {
	let Wrapper = ({ children, ...props }: any) => (
		<div {...props}>{children}</div>
	);

	if (doesLink && obj.href) {
		if (!externalLink) {
			Wrapper = ({ children, ...props }: any) => (
				<Li href={obj.href || '/'} {...props}>
					{children}
				</Li>
			);
		} else {
			Wrapper = ({ children, ...props }: any) => (
				<ELi href={obj.href || '/'} {...props}>
					{children}
				</ELi>
			);
		}
	}

	return (
		<Wrapper
			className={classNames(
				'h-object',
				highlight && 'highlight',
				doesLink && 'does-link'
			)}
			id={id}
		>
			<div className='mb-1-5r' id={id}>
				{obj.title && <h4 className='lh-1-3'>{obj.title}</h4>}
				{obj.content && <div className='lh-1-7 text-dynamic-08'>{obj.content}</div>}
			</div>

			{obj.date && (
				<div className='w-100p flex align-c justify-s flex-row'>
					<span className='fs-sm'>
						{getPrettyDate(obj.time ? `${obj.date} ${obj.time}` : obj.date)}
					</span>
				</div>
			)}
		</Wrapper>
	);
};

HObject.defaultProps = {
	doesLink: false,
	highlight: false,
	externalLink: false,
};

export default HObject;
