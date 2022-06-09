const variants = {
	fadeInUp: {
		initial: { y: 32, opacity: 0 },
		animate: { y: 0, opacity: 1 },
		exit: { y: 32, opacity: 0 },
	},
	fadeInDown: {
		initial: { y: -32, opacity: 0 },
		animate: { y: 0, opacity: 1 },
		exit: { y: -32, opacity: 0 },
	},
	fadeIn: {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
	},
	fadeInRightSubtle: {
		initial: { opacity: 0, x: -8 },
		animate: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: -8 },
	},
	fadeInLeftSubtle: {
		initial: { opacity: 0, x: 8 },
		animate: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: 8 },
	},
	scaleInSubtle: {
		initial: { opacity: 0, scale: 0.98 },
		animate: { opacity: 1, scale: 1 },
		exit: { opacity: 0, scale: 0.98 },
	},
	scaleIn: {
		initial: { opacity: 0, scale: 0.96 },
		animate: { opacity: 1, scale: 1 },
		exit: { opacity: 0, scale: 0.96 },
	},
};

const transition = {
	default: {
		type: 'tween',
		duration: 0.5,
	},
}

const textAreaEntityProps = {
	variants: variants.fadeInUp,
	transition: {
		...transition.default,
		delay: 0.2,
	},
}

const withDuration = (duration: number) => {
	return {
		...transition.default,
		duration,
	}
}

export {
	variants,
	transition,
	textAreaEntityProps,
	withDuration,
}