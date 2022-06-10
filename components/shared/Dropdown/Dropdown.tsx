import classNames from 'classnames';
import { useEffect, useState } from 'react';

import Keyboard from '../Keyboard';
import Menu from '../Menu';

import type { Item } from '../Menu/types';

interface Props {
	label: string | React.ReactNode;
	items: Item[];
	mods?: Mods;
}

interface Mods {
	container?: string;
	trigger?: string;
	menu?: string;
}

const Dropdown = ({ label, items, mods }: Props) => {
	const [open, setOpen] = useState(false);

	const close = () => setOpen(false);

	useEffect(() => {
		if (open) {
			document.addEventListener('click', close);
		}

		return () => {
			document.removeEventListener('click', close);
		};
	}, [open]);

	const onClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
		ev.stopPropagation();
		setOpen((o) => !o);
	};

	const hasCustomTrigger = typeof mods?.trigger !== 'undefined';

	return (
		<>
			<div
				className={classNames(
					'dropdown',
					mods?.container,
					hasCustomTrigger && 'custom-trigger'
				)}
			>
				<button
					onClick={onClick}
					className={mods?.trigger || 'trigger'}
				>
					{!hasCustomTrigger && <div className='bg'></div>}
					{typeof label === 'string' ? (
						<span>{label}</span>
					) : label}
				</button>
				<Menu open={open} setOpen={setOpen} items={items} mods={mods?.menu} />
			</div>

			{open && (
				<Keyboard
					keys={['esc']}
					callback={(key, ev) => {
						ev.preventDefault();
						setOpen(false);
					}}
					handleFocusableElements
				/>
			)}
		</>
	);
};

export default Dropdown;
