import Entity from '../Entity';
import FeaturedImage from './FeaturedImage';

interface GalleryImageProps {
	index: number;
	src: string;
	caption: string;
}

const GalleryImage = ({ index, src, caption }: GalleryImageProps) => {
	const variants = {
		initial: { scale: 0.96 },
		animate: (i: number) => ({
			scale: 1,

			transition: {
				type: 'tween',
				duration: 0.4,
				delay: i * 0.3,
			},
		}),
		exit: { scale: 0.96 },
	};

	return (
		<Entity
			custom={index}
			variants={variants}
			transition={{
				type: 'tween',
				duration: 0.4,
			}}
		>
			<FeaturedImage
				src={src}
				mods='sm'
				caption={caption}
				useCaptionAsAlt
			/>
		</Entity>
	);
};

export default GalleryImage;
