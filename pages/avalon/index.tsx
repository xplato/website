import PageMeta from '../../components/PageMeta';
import Expose from '../../components/shared/Expose';

import Hero from '../../sections/avalon/introduction/Hero';
import Introduction from '../../sections/avalon/introduction/Introduction';
import OSTeaserGallery from '../../sections/avalon/introduction/OSTeaserGallery';
import Project from '../../sections/avalon/introduction/Project';
import References from '../../sections/avalon/introduction/References';

const Avalon = () => {
	return (
		<>
			<PageMeta
				meta={{
					title: 'Avalon',
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

export default Avalon;
