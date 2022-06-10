import React, { ReactElement } from 'react';
import type { NextPage } from 'next';

interface ChildrenOnly {
	children: React.ReactNode;
}

type CustomPage = NextPage & {
	layout?(): ReactElement;
};

// Used for atomic layouts
interface Atom extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
}

export type { ChildrenOnly, CustomPage, Atom };
