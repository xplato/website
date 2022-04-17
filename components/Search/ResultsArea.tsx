import { useRouter } from 'next/router';

import Result from './Result';


const ResultsArea = ({ results, selected, setSearch }: any) => {
	const { push } = useRouter();

	const navigate = (href: string) => {
		if (href) {
			push(href);
		}
		setSearch(false);
	};

	return (
		<div className='w-100p flex align-c justify-s flex-column results-container py-0-5r'>
			{results.map((e: any, i: number) => (
				<Result
					key={e.title}
					index={i}
					navigate={navigate}
					isSelected={selected === i}
					{...e}
				/>
			))}
		</div>
	);
};

export default ResultsArea;
