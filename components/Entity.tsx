// Entity is short for AnimatedEntity
import { motion } from "framer-motion";

interface Variant {
	[key: string]: any;
}

interface Props {
	id?: string;
	custom?: string | number;
	variants: Variant;
	transition?: any;
	noVis?: boolean;
	children?: React.ReactNode;
	[key: string]: any;
}

const Entity = ({ id, custom, variants, transition, noVis, children, ...props }: Props) => {
	return (
		<motion.div
			custom={custom}
			key={id || (custom || undefined)}
			variants={variants}
			initial='initial'
			whileInView={noVis ? undefined : 'animate'}
			animate={noVis ? 'animate' : undefined}
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

export default Entity;