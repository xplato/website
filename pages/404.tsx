import Li from '../components/Li';
import PageMeta from '../components/PageMeta';

const FourOhFour = () => {
	return (
		<>
			<PageMeta
				meta={{
					title: '404!',
					description: 'Page not found.',
				}}
			/>
			<h1 className='utility-header mb-0'>404</h1>
			<p>This is some spooky shit, man.</p>
			<Li href='/'>"I gotta get outta here!"</Li>
		</>
	);
};

export default FourOhFour;
