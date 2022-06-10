import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import Row from '../../layout/atoms/Row';
import Keyboard from '../Keyboard';

import { menuItemVariants } from './motion';

import type { BG, Item, Options } from './types';

interface Props {
	index: number;
	item: Item;
	currentItem: number;
	setCurrentItem: Dispatch<SetStateAction<number>>;
	setBg: Dispatch<SetStateAction<any>>;
	setOpen: Dispatch<SetStateAction<boolean>>;
	options: Options;
}

const MenuItem = ({
	index,
	item,
	currentItem,
	setCurrentItem,
	setBg,
	setOpen,
	options,
}: Props) => {
	const { push } = useRouter();

	const ref = useRef<HTMLButtonElement>();

	// Tracks if this item is the "current" one (if the
	// background is behind it)
	const [isCurrent, setIsCurrent] = useState(false);

	useEffect(() => {
		if (index === 0 && currentItem === -1) {
			setCurrentItem(0);

			if (typeof ref.current !== 'undefined') {
				ref.current.focus();
			}
		}
	}, []);

	const onClick = () => {
		if (item.href) {
			push(item.href);
		}

		if (item.perform) {
			item.perform();
		}

		if (typeof options !== 'undefined') {
			if (options.itemClickDoesCloseMenu) {
				setOpen(false);
			}
		}
	};

	const select = () => {
		setIsCurrent(true);

		if (ref.current) {
			const top = ref?.current.offsetTop || 8;

			setBg((bg: BG) => ({
				...bg,
				top,
			}));
		}

		if (item.color) {
			setBg((bg: BG) => ({
				...bg,
				color: item.color,
			}));
		}
	};

	const deselect = () => {
		setIsCurrent(false);

		if (item.color) {
			setBg((bg: BG) => ({
				...bg,
				color: '',
			}));
		}
	};

	const onMouseOver = () => {
		select();
		if (typeof ref.current !== 'undefined') {
			ref.current.focus();
		}
	};

	const onMouseDown = () => {
		setBg((bg: BG) => ({
			...bg,
			scale: 0.97,
		}));
	};

	const onMouseUp = () => {
		setBg((bg: BG) => ({
			...bg,
			scale: 1,
		}));
	};

	return (
		<>
			<motion.button
				// @ts-ignore
				ref={ref}
				custom={index}
				variants={menuItemVariants}
				initial='initial'
				animate='animate'
				onClick={onClick}
				onMouseDown={onMouseDown}
				onMouseUp={onMouseUp}
				onMouseOver={onMouseOver}
				onMouseOut={deselect}
				onFocus={select}
				onBlur={deselect}
				className={classNames(
					'menu-button',
					item.color && 'custom-color',
					isCurrent && 'current'
				)}
				disabled={item.disabled || false}
			>
				<Row>
					{item.icon && <i className='icon sm'>{item.icon}</i>}
					<span>{item.label}</span>
				</Row>

				{item.context && (
					<Row className='ml-0-5r'>
						<p className='mb-0 fs-xs opacity-06 transition'>
							{item.context}
						</p>
					</Row>
				)}
			</motion.button>

			{isCurrent && (
				<Keyboard
					keys={['enter']}
					callback={(key, ev) => {
						ev.preventDefault();
						ev.stopPropagation();
						onClick();
					}}
					handleFocusableElements
				/>
			)}
		</>
	);
};

export default MenuItem;
