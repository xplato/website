import Wrapper from '../Wrapper';

interface Props {
	children: React.ReactNode;
}

const Writing = ({ children }: Props) => {
	return (
		<Wrapper s='ui-1 dark-ui mod-padding' c='flex-c'>
			<div className='mw-50r'>
				{children}

				<div className="h-3r"></div>
			</div>
		</Wrapper>
	);
};

export default Writing;
