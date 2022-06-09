import GalleryImage from '../../components/shared/GalleryImage';

import { getEdgePath } from '../../logic/utils';

const OSTeaserGallery = () => {
	return (
		<>
			<section className='section gallery'>
				<div className='x-container flex-c'>
					<div className='grid grid-2 tp-grid-1'>
						<div className='grid-block'>
							<GalleryImage
								index={0}
								src={getEdgePath('crystal/part-1/desktop-widgets-closed-light.jpg')}
								caption='Desktop with primitive widgets (Light)'
							/>
						</div>
						<div className='grid-block'>
							<GalleryImage
								index={1}
								src={getEdgePath('crystal/part-1/desktop-widgets-closed-dark.jpg')}
								caption='Desktop with primitive widgets (Dark)'
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default OSTeaserGallery;
