const menuItemVariants = {
	initial: {
		opacity: 0,
	},
	animate: (i: number) => ({
		opacity: 1,

		transition: {
			type: 'tween',
			duration: 0.2,
			delay: i * 0.05,
		},
	}),
	exit: { opacity: 0 },
};

export {
	menuItemVariants,
}