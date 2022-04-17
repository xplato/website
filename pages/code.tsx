import Layout from '../components/layout/Layout';
import PageMeta from '../components/PageMeta';
import HObject from '../components/HObject';

import { projects } from '../data/projects';


const Projects = () => {
	const url = new URLSearchParams(window.location.search);

	return (
		<>
			<PageMeta
				meta={{
					title: 'code',
					description: 'My projects',
				}}
			/>

			<section className='section ui-1 dark-ui top'>
				<div className='container'>
					<div className='mb-1-5r'>
						<h1 className='mb-0 fw-600'>Projects 🎯</h1>
					</div>

					<div className="w-100p grid grid-3 tablet-grid-2 landscape-grid-1">
						{projects.map(e => (
							<HObject
								key={e.id}
								id={e.id}
								doesLink
								highlight={url.has('h') && url.get('h') === e.id}
								obj={{
									...e,
									href: e.repository,
									content: e.description,
								}}
								externalLink
							/>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

Projects.layout = Layout;

export default Projects;
