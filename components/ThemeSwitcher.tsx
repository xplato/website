import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useSettings } from "../providers/SettingsProvider";

import { colors, niceThemes } from "../data/colors";

const ThemeSwitcher = () => {
	const [active, setActive] = useState(false);

	const settings = useSettings();

	const onClick = (color: string) => {
		settings.set('theme', color);
		setActive(false);
	}

	const variants = {
		text: {
			initial: { opacity: 0, scale: 0.95 },
			animate: { opacity: 1, scale: 1 },
			exit: { opacity: 0, scale: 0.95 },
		},
		color: {
			initial: { opacity: 0, scale: 0 },
			animate: (i: number) => ({
				opacity: 1,
				scale: 1,
				transition: {
					delay: i * 0.08,
					type: 'spring',
					duration: 0.5,
				}
			}),
			exit: (i: number) => ({
				opacity: 0,
				scale: 0,
				transition: {
					delay: i * 0.08,
					type: 'spring',
					duration: 0.5,
				}
			}),
			hover: { rotate: 45 },
		}
	}

	return (
		<>
			<AnimatePresence exitBeforeEnter>
				{active ? (
					<div className="grid grid-5 gap-0">
						{colors.map((color, i) => (
							<motion.button
								custom={i}
								key={color}
								variants={variants.color}
								initial='initial'
								animate='animate'
								exit='exit'
								whileHover='hover'
								className={`color ${color}`}
								onClick={() => onClick(color)}
							></motion.button>
						))}
					</div>
				) : (
					<motion.div
						variants={variants.text}
						initial='initial'
						animate='animate'
						key='text'
						transition={{
							type: 'tween',
							duration: 0.4,
							delay: 0,
						}}
					>
						<p className='mb-0 lh-1 fs-sm mt-0 mr-0-25r'>
							<button onClick={() => setActive(!active)}>Theme color: {niceThemes[settings.theme]}</button>
						</p>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default ThemeSwitcher;
