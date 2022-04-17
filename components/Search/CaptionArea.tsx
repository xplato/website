import { emptyStatements } from "../../data/search/empty";

interface Props {
	numResults: number;
}

const CaptionArea = ({ numResults }: Props) => {
	const getRandomEmptyMessage = (): string => {
		return emptyStatements[Math.floor(Math.random() * emptyStatements.length)];
	}
	
	if (numResults > 0) {
		return <></>;
	}

	return (
		<div className="w-100p px-1-5r pt-1-5r mb-1r">
			<span className='text-dynamic-06 fs-xs fw-500 lh-1'>{getRandomEmptyMessage()}</span>
		</div>
	);
};

export default CaptionArea;