import Wrapper from '../Wrapper';

interface Props {
	children: React.ReactNode;
}

const Writing = ({ children }: Props) => {
	return (
		<Wrapper s='ui-1 dark-ui mod-padding' c='flex-c'>
			<article className='mw-50r'>
				{children}

				<div className="h-3r"></div>
			</article>
		</Wrapper>
	);
};

export default Writing;
