import { motion } from "framer-motion";

interface Variant {
	[key: string]: any;
}

interface Props {
	variants: Variant;
	children?: React.ReactNode;
	[key: string]: any;
}

const AnimatedView = ({ variants, transition, children, ...props }: Props) => {
	return (
		<motion.div
			variants={variants}
			initial='initial'
			whileInView='animate'
			exit='exit'
			viewport={{ once: true }}
			transition={transition || {
				type: 'tween',
				duration: 0.5
			}}
			{...props}
		>
			{children}
		</motion.div>
	);
};

export default AnimatedView;