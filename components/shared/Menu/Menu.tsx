import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import classNames from 'classnames';

import MenuItem from './MenuItem';

import { menuItemVariants } from './motion';
import type { BG, Item, Options } from './types';

const initialBg = {
	top: 8,
	color: '',
	scale: 1,
};

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	items: Item[];
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	options?: Options;
	mods?: string;
}

const Menu = ({ items, open, setOpen, options, mods, ...props }: Props) => {
	const [currentItem, setCurrentItem] = useState(-1);

	const [bg, setBg] = useState<BG>(initialBg);

	useEffect(() => {
		if (!open) {
			setBg(initialBg);
			setCurrentItem(-1);
		}
	}, [open]);

	const variants = {
		initial: { opacity: 0, scale: 0.97, height: '50%' },
		animate: { opacity: 1, scale: 1, height: 'auto' },
		exit: { opacity: 0, scale: 0.9785, height: '50%' },
	};

	return (
		<>
			<AnimatePresence exitBeforeEnter>
				{open && (
					// @ts-ignore
					<motion.div
						variants={variants}
						initial='initial'
						animate='animate'
						exit='exit'
						transition={{
							type: 'tween',
							duration: 0.2,
							ease: 'easeInOut',
						}}
						className={classNames(
							'menu',
							bg.color || 'no-color',
							mods && mods.length > 0 ? mods : 'overflow-items'
						)}
						onClick={(ev) => ev.stopPropagation()}
						{...props}
					>
						<div className='inner'>
							<div
								className='bg'
								style={{
									top: bg.top,
									transform: `scale(${bg.scale})`,
								}}
							></div>

							{items.map((item, i) =>
								item.label.includes('[separator]') ? (
									<motion.div
										key={item.label}
										custom={i}
										variants={menuItemVariants}
										initial='initial'
										animate='animate'
										className='separator'
									>
										<div></div>
									</motion.div>
								) : (
									<MenuItem
										key={item.label}
										index={i}
										item={item}
										currentItem={currentItem}
										setCurrentItem={setCurrentItem}
										setBg={setBg}
										setOpen={setOpen}
										options={options || {}}
									/>
								)
							)}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

Menu.defaultProps = {
	options: {
		itemClickDoesCloseMenu: false,
	},
};

export default Menu;
