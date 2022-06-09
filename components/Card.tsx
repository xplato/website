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
	let Wrapper = ELi;

	if (href.startsWith('/')) {
		Wrapper = Li;
	}

	return (
		<Wrapper href={href} className={classNames('card', mods)}>
			{image && (
				<div className='image relative'>
					<img
						src={image}
						alt={alt}
						width='100%'
						height='auto'
						className='radius-0-5r'
					/>
				</div>
			)}
			<div className='content'>
				<h4 className='title mb-0'>{title}</h4>
				{/* {content && <p className='mb-0 opacity-7'>{content}</p>} */}
			</div>
		</Wrapper>
	);
};

export default Card;
