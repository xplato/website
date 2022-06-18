import PageMeta from '../../components/PageMeta';
import View from '../../components/shared/Expose';
import Expose from '../../components/shared/Expose';

import Hero from '../../sections/avalon/architecture/Hero';
import Article from '../../sections/avalon/architecture/Article';
import References from '../../sections/avalon/architecture/References';

const Detail = () => {
	return (
		<>
			<PageMeta
				meta={{
					title: 'Avalon in detail',
					description: 'Experimenting in futuristic UI/UX',
				}}
			/>

			<Expose>
				<Hero />
				<Article />
				<References />
			</Expose>
		</>
	);
};

Detail.layout = View;

export default Detail;
