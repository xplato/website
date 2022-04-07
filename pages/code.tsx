import Layout from '../components/layout/Layout';
import ELi from '../components/ELi';
import PageMeta from '../components/PageMeta';
import Badge from '../components/etc/Badge';

import { Project, projects } from '../data/projects';

import { getRandomString } from '../logic/rand';


const titles = [
	'code',
	'projects',
	'work',
	'dev',
	'top secret',
	'fork me!',
	`';--`
];

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
					<h2 className='m-0'>{title}</h2>
					{isNew && (
						<Badge>New!</Badge>
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
			<PageMeta meta={{
				title: 'code',
				description: 'My projects',
			}} />
			<h1 id='fancyboi' className='title'>{getRandomString(titles)}</h1>
		
			<div className="mw-30r">
				<p>I work on a variety of things.</p>
				<p>
					I use <ELi href='https://codeberg.org/athena'>Codeberg</ELi> for
					personal projects, and <ELi href='https://github.com/xplato'>GitHub</ELi> for
					more "professional" projects—most often, code for my business, Infinium.
				</p>
			</div>

			<div className='w-100p grid s-grid-2 gap-2r portrait-grid-1 my-2r'>
				{projects.map(project => (
					<Project key={project.title} {...project} />
				))}
			</div>

			<ELi href='https://bingo-ten-omega.vercel.app'>Bingo!</ELi>
		</>
	);
};

Projects.layout = Layout;

export default Projects;
