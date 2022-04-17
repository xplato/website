// A polymorphic (depending on how you
// import it), generic button component

import { useRouter } from "next/router";

import ELi from "./ELi";


// Consistent across all instances
interface BaseButton {
	id?: string;
	className?: string;
	name?: string;
	title?: string;
	children: React.ReactNode;
}

interface ActionButton extends BaseButton {
	onClick(ev: any): void;
}


// Consistent across all links
interface BaseLink extends BaseButton {
	href: string;
}

interface InternalButton extends BaseLink {
	// Nothing yet...
}

interface ExternalButton extends BaseLink {
	// Nothing yet...
}

// These classes are used if no className is specified
const classes = {
	Action: 'base-button',
	Internal: 'base-button',
	External: 'base-button'
}

const Action = ({
	id,
	name,
	title,
	className,
	children,
	onClick,
}: ActionButton) => {
	return (
		<button
			id={id}
			name={name}
			title={title}
			className={className || classes.Action}
			onClick={onClick}
		>{children}</button>
	);
};

const Internal = ({
	id,
	name,
	title,
	href,
	className,
	children,
}: InternalButton) => {
	const { push } = useRouter();

	const onClick = () => {
		push(href);
	}

	return (
		<button
			id={id}
			name={name}
			title={title}
			className={className || classes.Internal}
			onClick={onClick}
		>{children}</button>
	);
};

const External = ({
	id,
	href,
	className,
	children,
}: ExternalButton) => {
	return (
		<ELi
			id={id}
			href={href}
			className={className || classes.External}
		>{children}</ELi>
	);
};

export default {
	Action,
	Internal,
	External,
};