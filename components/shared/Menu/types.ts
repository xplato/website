import React from 'react';

interface Item {
	label: string;
	href?: string;
	perform?(): void;
	color?: string;
	icon?: React.ReactNode;
	context?: string | React.ReactNode;
	disabled?: boolean;
}

interface BG {
	top: number;
	color: string;
	scale: number;
}

interface Options {
	itemClickDoesCloseMenu?: boolean;
}

export type { Item, BG, Options };
