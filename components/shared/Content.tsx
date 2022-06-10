import AnimatedView from '../AnimatedView';

import { textAreaEntityProps } from '../../logic/motion';

interface Props {
	mods?: string;
	children: React.ReactNode;
}

const Content = ({ mods, children }: Props) => {
	return (
		<AnimatedView {...textAreaEntityProps} className={mods || ''}>
			<div className='text-container'>{children}</div>
		</AnimatedView>
	);
};

export default Content;
