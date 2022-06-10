import PageMeta from '../../components/PageMeta';
import Expose from '../../components/shared/Expose';

import Hero from '../../sections/crystal/introduction/Hero';
import Introduction from '../../sections/crystal/introduction/Introduction';
import OSTeaserGallery from '../../sections/crystal/introduction/OSTeaserGallery';
import Project from '../../sections/crystal/introduction/Project';
import References from '../../sections/crystal/introduction/References';

const Crystal = () => {
	return (
		<>
			<PageMeta
				meta={{
					title: 'Crystal',
					description: 'Experimenting in futuristic UI/UX',
				}}
			/>

			<Expose>
				<Hero />
				<Introduction />
				<OSTeaserGallery />
				<Project />
				<References />
			</Expose>
		</>
	);
};

export default Crystal;
