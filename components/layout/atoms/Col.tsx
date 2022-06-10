import type { Atom } from '../../../types';

const Col = ({ children, ...props }: Atom) => (
	<div className='flex justify-c align-c flex-column' {...props}>
		{children}
	</div>
);

export default Col;
