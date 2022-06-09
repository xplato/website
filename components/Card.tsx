import classNames from 'classnames';
import ELi from './ELi';
import Li from './Li';

interface Props {
	href: string;
	title: string;
	content?: string;
	image?: string;
	alt?: string;
	mods?: string;
}

const Card = ({ href, title, image, alt, mods }: Props) => {
	const imageLinkProps = {
		href,
		className: 'image relative'
	}

	let ImageLink = ELi;

	if (href.startsWith('/')) {
		ImageLink = Li;
	}

	return (
		<div className={classNames('card', mods)}>
			{image && (
				<ImageLink {...imageLinkProps}>
					<img
						src={image}
						alt={alt}
						width='100%'
						height='auto'
						className='radius-0-5r'
					/>
				</ImageLink>
			)}
			<div className='content'>
				<h4 className='title mb-0'>{title}</h4>
				{/* {content && <p className='mb-0 opacity-7'>{content}</p>} */}
			</div>
		</div>
	);
};

export default Card;
