import Button from '../components/Button';
import Layout from '../components/layout/Layout';
import PageMeta from '../components/PageMeta';
import Wrapper from '../components/Wrapper';

const FourOhFour = () => {
	return (
		<>
			<PageMeta
				meta={{
					title: '404!',
					description: 'Page not found.',
				}}
			/>
			<Wrapper c='flex-c large-text'>
				<h1 className='utility-header fs-10xl fw-700'>404</h1>
				<p>This is some spooky shit, man.</p>
				<p>You can head back home, or try a search (press "/" to search).</p>
				<Button.Internal href='/'>I gotta get outta here!</Button.Internal>
			</Wrapper>
		</>
	);
};

FourOhFour.layout = Layout;

export default FourOhFour;
