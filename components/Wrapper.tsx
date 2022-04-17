import classNames from 'classnames';

interface Props {
	s?: string;
	c?: string;
	children: React.ReactNode;
}


const Wrapper = ({ s, c, children }: Props) => {
	return (
		<section className={classNames('section', s)}>
			<div className={classNames('container', c)}>
				{children}
			</div>
		</section>
	);
};

Wrapper.defaultProps = {
	s: '',
	c: '',
}

export default Wrapper;
