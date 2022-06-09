import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import ELi from '../components/ELi';
import Li from '../components/Li';
import Title from '../components/Title';

interface BlockProps {
	index: number;
	letter: string;
	bg: BG;
	setBg: Dispatch<SetStateAction<BG>>;
}

interface BG {
	left: number;
	width: number;
}

const Block = ({ index, letter, bg, setBg }: BlockProps) => {
	const ref = useRef<HTMLDivElement>();

	useEffect(() => {
		if (index === 0 && bg.width === 0) {
			makeCurrent();
		}
	}, [index, bg]);

	const makeCurrent = () => {
		if (typeof ref.current !== 'undefined') {
			const el = ref.current;

			setBg((bg) => ({
				...bg,
				left: el.offsetLeft,
				width: el.offsetWidth,
			}));
		}
	};

	return (
		<div
			// @ts-ignore
			ref={ref}
			className='block'
			onMouseOver={makeCurrent}
		>
			<span>{letter}</span>
		</div>
	);
};

const FourOhFour = () => {
	const [bg, setBg] = useState<BG>({
		left: 0,
		width: 179,
	});

	return (
		<>
			<section className='four-oh-four'>
				<div className='wrapper'>
					<div
						className='bg'
						style={{
							left: `${bg.left}px`,
							width: `${bg.width}px`,
						}}
					></div>
					<Block index={0} letter='4' bg={bg} setBg={setBg} />
					<Block index={0} letter='0' bg={bg} setBg={setBg} />
					<Block index={0} letter='4' bg={bg} setBg={setBg} />
				</div>

				<div className='mw-35r flex-c text-c mt-3r ml-mt-1-5r'>
					{/* <Title>Page not found</Title> */}
					<p className='fs-lg mb-2r'>
						The page you requested was not found on this server. If
						you think this is a mistake, please{' '}
						<ELi href='https://github.com/xplato/website/issues'>
							open an issue.
						</ELi>{' '}
						Otherwise, go ahead and head back to the homepage.
					</p>

					<Li href='/' className='fluid-button'>Go back home</Li>
				</div>
			</section>
		</>
	);
};

export default FourOhFour;
