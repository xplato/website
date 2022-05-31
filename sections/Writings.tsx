import { useState } from 'react';

import Entity from '../components/Entity';
import Title from '../components/Title';
import WritingItem from '../components/writing/WritingItem';

import { writings } from '../data/writings';
import { transition, variants } from '../logic/motion';

const MAX_SLICE = 4;

const Writings = () => {
	const [sliceAmt, setSliceAmt] = useState(MAX_SLICE);
	const doesOverflow = sliceAmt === MAX_SLICE && writings.length > MAX_SLICE;

	return (
		<>
			<section className='section pb-0' id='writings'>
				<div className='x-container flex-c'>
					<div className='text-container'>
						<Entity
							variants={variants.fadeInUp}
							transition={{
								...transition.default,
								delay: 0.2,
							}}
						>
							<div>
								<Title>Writings</Title>
								<p className='fs-lg'>
									I write. Most of the time in code, some of
									the time in English.
								</p>
							</div>
							<div className='w-100p flex-c relative'>
								{writings.slice(0, sliceAmt).map((writing, i) => (
									<WritingItem key={writing.title} {...writing} />
								))}

								{doesOverflow && (
									<div className="spec-overlay"></div>
								)}
							</div>

							{doesOverflow && (
								<button className="xbutton blue mt-1r" onClick={() => setSliceAmt(1000)}>
									<span>Reveal all</span>
								</button>
							)}
						</Entity>
					</div>
				</div>
			</section>
		</>
	);
};

export default Writings;
