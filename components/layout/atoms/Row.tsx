import type { Atom } from '../../../types';

const Row = ({ children, ...props }: Atom) => (
	<div className='flex justify-c align-c flex-row' {...props}>
		{children}
	</div>
);

export default Row;
