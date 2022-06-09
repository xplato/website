import classNames from 'classnames';
import { motion } from 'framer-motion';

import { variants } from '../../logic/motion';

interface Props {
	src: string;
	alt?: string;
	caption?: string;
	useCaptionAsAlt?: boolean;
	mods?: string;
}

const FeaturedImage = ({ src, alt, caption, useCaptionAsAlt, mods }: Props) => {
	return (
		<motion.div
			variants={variants.fadeInUp}
			initial='initial'
			whileInView='animate'
			exit='exit'
			transition={{
				type: 'spring',
				duration: 1.2,
				// delay: 0.5,
			}}
			className={classNames('featured-image', mods)}
			layout
		>
			<a href={src} className='img-link' target='_blank'>
				<img src={src} alt={useCaptionAsAlt ? caption : alt} />
			</a>

			{caption && (
				<div className='caption-area flex-c text-c mt-1r'>
					<p className='mb-0 fs-sm opacity-07'>{caption}</p>
				</div>
			)}
		</motion.div>
	);
};

export default FeaturedImage;
