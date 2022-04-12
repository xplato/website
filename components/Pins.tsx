import type { ChildrenOnly } from '../types';

const Pins = ({ children }: ChildrenOnly) => (
	<div className='flex'>{children}</div>
);

export default Pins;
