import Writing from '../../components/writing/Writing';
import PageMeta from '../../components/PageMeta';
import Layout from '../../components/layout/Layout';

const meta = {
	title: '',
	description: '',
}

const A = () => (
	<Writing>
		<PageMeta meta={meta} />
		
		<p className='mt-1-5r'>20 March, 2022</p>
		<h1></h1>
		
	</Writing>
);

A.layout = Layout;

export default A;
