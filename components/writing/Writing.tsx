import type { ChildrenOnly } from '../../types';
import Wrapper from '../Wrapper';

const Writing = ({ children }: ChildrenOnly) => {
	return (
		<Wrapper s='ui-1 dark-ui' c='flex-c'>
			<article className='mw-50r'>{children}</article>
		</Wrapper>
	);
};

export default Writing;
