import Layout from '../components/layout/Layout';
import PageMeta from '../components/PageMeta';
import Spacer from '../components/Spacer';

const Psych = () => {
	return (
		<>
			<PageMeta meta={{
				title: 'psych',
				description: 'You tell me.',
			}} />

			<Spacer />

			<video
				autoPlay
				controls
				preload='auto'
				src='/videos/psych.mp4'
				className='w-100p'
			/>
		</>
	);
};

Psych.layout = Layout;

export default Psych;
