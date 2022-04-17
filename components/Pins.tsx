import type { ChildrenOnly } from '../types';

const Pins = ({ children }: ChildrenOnly) => (
	<div className="w-100p">
		<h1>Pins 📌</h1>
		<div className='w-100p grid grid-1'>{children}</div>
	</div>
);

export default Pins;
