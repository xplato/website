const variants = {
	fadeInUp: {
		initial: { y: 32, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	},
	fadeInDown: {
		initial: { y: -32, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	},
	fadeIn: {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
	}
};

const transition = {
	default: {
		type: 'tween',
		duration: 0.5,
	},
}

export {
	variants,
	transition,
}