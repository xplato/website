import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import DataBlock from './DataBlock';

import { pins } from '../data/pins';
import { writings } from '../data/writings';
import { projects } from '../data/projects';

type Mode = 'mix' | 'project' | 'pin' | 'writing';

const Wrapper = ({ t, children }: any) => {
	const variants = {
		initial: (x: number) => ({ opacity: 0, x }),
		animate: { opacity: 1, x: 0 },
		exit: (x: number) => ({ opacity: 0, x }),
	};

	return (
		<motion.div
			key={t}
			custom={t === 'mix' ? -32 : 32}
			variants={variants}
			initial='initial'
			animate='animate'
			exit='exit'
			transition={{
				type: 'tween',
				duration: 0.5,
			}}
		>
			{children}
		</motion.div>
	);
};

const Mix = ({ setMode }: any) => (
	<Wrapper key='mix-s' t='mix'>
		<DataBlock
			data={pins}
			type='pin'
			block={{
				title: 'Latest pins 📌',
			}}
			isTop
			setMode={setMode}
		/>

		<DataBlock
			data={writings}
			type='writing'
			block={{
				title: 'Recent writings 📜',
			}}
			setMode={setMode}
		/>

		<DataBlock
			data={projects}
			type='project'
			block={{
				title: 'New projects 🎯',
			}}
			setMode={setMode}
		/>
	</Wrapper>
);

const Projects = ({ setMode }: any) => (
	<Wrapper key='project-w' t='project'>
		<DataBlock
			data={projects}
			type='project'
			block={{
				title: 'Projects 🎯',
			}}
			showMore
			isTop
			setMode={setMode}
		/>
	</Wrapper>
);

const Writings = ({ setMode }: any) => (
	<Wrapper key='writing-w' t='writing'>
		<DataBlock
			data={writings}
			type='writing'
			block={{
				title: 'Writings 📜',
			}}
			showMore
			isTop
			setMode={setMode}
		/>
	</Wrapper>
);

const Pins = ({ setMode }: any) => (
	<Wrapper key='pin-w' t='pin'>
		<DataBlock
			data={pins}
			type='pin'
			block={{
				title: 'Pins 📌',
			}}
			showMore
			isTop
			setMode={setMode}
		/>
	</Wrapper>
);

const HomePanel = () => {
	const [mode, setMode] = useState<Mode>('mix');

	const modeMap = {
		mix: <Mix key='m-mix' setMode={setMode} />,
		project: <Projects key='m-projects' setMode={setMode} />,
		writing: <Writings key='m-writings' setMode={setMode} />,
		pin: <Pins key='m-pins' setMode={setMode} />,
	};

	return (
		<>
			<AnimatePresence exitBeforeEnter>
				{/* @ts-ignore */}
				{modeMap[mode]}
			</AnimatePresence>

			<div className='w-100p px-4r py-2r landscape-px-2r border-top-ui-2 ui flex-sb'>
				<p className='mb-0 text-dynamic-07 fs-sm'>Copyright &copy; 2022 - All rights reserved.</p>
				<a href='/privacy' className='j-link underline'>
					Privacy
				</a>
			</div>
		</>
	);
};

export default HomePanel;

export {
	Projects,
	Writings,
	Pins,
}