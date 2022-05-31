import classNames from 'classnames';
import ELi from './ELi';

interface Props {
	href: string;
	title: string;
	content?: string;
	image?: string;
	mods?: string;
}

const Card = ({ href, title, content, image, mods }: Props) => {
	return (
		<div className={classNames('card', mods)}>
			{image && (
				<ELi href={href} className='image relative'>
					<img
						src={image}
						width='100%'
						height='auto'
						className='radius-0-5r'
					/>
				</ELi>
			)}
			<div className='content'>
				<h4 className='title mb-0'>{title}</h4>
				{/* {content && <p className='mb-0 opacity-7'>{content}</p>} */}
			</div>
		</div>
	);
};

export default Card;
