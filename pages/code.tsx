import Layout from '../components/layout/Layout';
import ELi from '../components/ELi';

import { Project, projects } from '../data/projects';

const Project = ({
	title,
	description,
	repository,
	liveURL,
	isNew,
}: Project) => {
	return (
		<div className='project-card'>
			<div className='flex'>
				<div className="w-100p flex align-c justify-s flex-row">
					<h2 className='m-0'>
						<ELi href={repository}>{title}</ELi>
					</h2>
					{isNew && (
						<div className="new">
							<span>New!</span>
						</div>
					)}
				</div>
				<p className='mt-0-5r'>{description}</p>
			</div>

			<div className="w-100p flex flex-row align-e">
				<span>
					<ELi href={repository}>View repository</ELi>
					{liveURL && (
						<>
							{' :: '}
							<ELi href={liveURL}>See it live!</ELi>
						</>
					)}
				</span>
			</div>
		</div>
	);
}

const Projects = () => {
	return (
		<>
			<h1 id='fancyboi' className='title'>Code</h1>
			<p>I work on a variety of things.</p>

			<div className='w-100p grid s-grid-2 gap-2r portrait-grid-1 mt-2r'>
				{projects.map(project => (
					<Project key={project.title} {...project} />
				))}
			</div>
		</>
	);
};

Projects.layout = Layout;

export default Projects;
