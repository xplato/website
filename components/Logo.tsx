import Li from "./Li";

interface Props {
	scope?: string;
}

const Logo = ({ scope }: Props) => (
	<Li href='/' className='logo'>
		<div className="hy-button">
			<span className="text">~ hydra</span>
			{scope && <span className='scope'>{scope}</span>}
		</div>
	</Li>
);

export default Logo;