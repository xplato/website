import classNames from 'classnames';
import { motion } from 'framer-motion';

import { variants } from '../../logic/motion';

interface Props {
	src: string;
	alt?: string;
	caption?: string;
	useCaptionAsAlt?: boolean;
	mods?: string;
	delay?: number;
}

const FeaturedImage = ({
	src,
	alt,
	caption,
	useCaptionAsAlt,
	mods,
	delay,
}: Props) => {
	return (
		<motion.div
			variants={variants.fadeIn}
			initial='initial'
			whileInView='animate'
			exit='exit'
			viewport={{ once: true }}
			transition={{
				type: 'spring',
				duration: 1.2,
				delay,
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

FeaturedImage.defaultProps = {
	delay: 0,
};

export default FeaturedImage;
