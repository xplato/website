import PageMeta from '../components/PageMeta';

import Hero from '../sections/crystal/Hero';
import Introduction from '../sections/crystal/Introduction';
import OSTeaserGallery from '../sections/crystal/OSTeaserGallery';
import Project from '../sections/crystal/Project';
import References from '../sections/crystal/References';

const Home = () => {
	return (
		<>
			<PageMeta
				meta={{
					title: 'Crystal',
					description: 'Experimenting in futuristic UI/UX',
				}}
			/>

			<div className='expose'>
				<Hero />
				<Introduction />
				<OSTeaserGallery />
				<Project />
				<References />
			</div>
		</>
	);
};

export default Home;
