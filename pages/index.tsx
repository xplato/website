import PageMeta from '../components/PageMeta';

import Hero from '../sections/Hero';
import Portfolio from '../sections/Portfolio';
import About from '../sections/About';
import Writings from '../sections/Writings';
import Contact from '../sections/Contact';

const Home = () => {
	return (
		<>
			<PageMeta
				meta={{
					title: 'Home',
					description: 'I write sometimes.',
				}}
			/>

			<Hero />
			<Portfolio />
			<About />
			<Writings />
			<Contact />
		</>
	);
};

export default Home;
