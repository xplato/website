import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useSettings } from "../providers/SettingsProvider";

import { colors, niceThemes } from "../data/colors";


// There is probably a better way to do
// this, but idgaf. I'm tired of web shit.
const diceMap = [
	['', '', '', '', 1, '', '', '', ''],
	[1, '', '', '', '', '', '', '', 2],
	[1, '', '', '', 2, '', '', '', 3],
	[1, '', 2, '', '', '', 3, '', 4],
	[1, '', 2, '', 3, '', 4, '', 5],
	[1, '', 2, 3, '', 4, 5, '', 6],
]

const Dice = () => {
	const rollDice = () => {
		return diceMap[Math.floor(Math.random() * 6)];
	}

	return (
		<div className="dice-grid">
			{rollDice().map(e => (
				<div className="grid-block flex-c">
					<div key={e} className={typeof e === 'string' ? '' : 'dot'}></div>
				</div>
			))}
		</div>
	);
}

const ThemeSwitcher = () => {
	const [active, setActive] = useState(false);

	const settings = useSettings();

	const onClick = (color: string) => {
		settings.set('theme', color);
	}

	const variants = {
		text: {
			initial: { opacity: 0, scale: 0.95 },
			animate: { opacity: 1, scale: 1 },
			exit: { opacity: 0, scale: 0.95 },
		},
		buttons: {
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
			hover: { rotate: 90 },
		}
	}

	return (
		<div className="theme-switcher-wrapper">
			<AnimatePresence exitBeforeEnter>
				{active ? (
					<div className="flex align-c justify-c flex-row">
						
						<motion.div
							key='buttons'
							variants={variants.buttons}
							initial='initial'
							animate='animate'
							exit='exit'
							transition={{
								delay: 1.8
							}}
							className="flex align-c justify-c flex-row mr-1r"
						>
							<button onClick={() => setActive(false)}>
								I've rolled
							</button>
						</motion.div>

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
								>
									{settings.theme === color && (
										<Dice />
									)}
								</motion.button>
							))}
						</div>
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
		</div>
	);
};

export default ThemeSwitcher;
