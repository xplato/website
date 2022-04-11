const gVariants = {
	scaleIn: {
		initial: { opacity: 0, scale: 0.95 },
		animate: { opacity: 1, scale: 1 },
		exit: { opacity: 0, scale: 0.95 },
	},
	scaleOut: {
		initial: { opacity: 1, scale: 1 },
		animate: { opacity: 0, scale: 0.95 },
		exit: { opacity: 1, scale: 1 },
	},
	fadeIn: {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
	},
}

const gTransition = {
	duration: 0.5,
	type: 'tween'
}

export {
	gVariants,
	gTransition,
}