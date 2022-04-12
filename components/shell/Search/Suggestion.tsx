import { useRouter } from 'next/router';
import classNames from 'classnames';

import Keyboard from '../../Keyboard';
import { toast } from '@infinium/hydro';


interface Props {
	index: number;
	result: any;
	selected: number;
	setShowSearch(v: boolean): void;
	setSelected(v: number): void;
}

const Suggestion = ({ index, result, selected, setShowSearch, setSelected }: Props) => {
	const { push } = useRouter();

	const getResultURL = (result: any) => {
		if (result.slug) {
			return `/articles/${result.slug}`;
		}

		if (result.type === 'Project') {
			return `/code?h=${result.id}#${result.id}`;
		}

		if (result.type === 'Pin') {
			return `/pins?h=${result.date}#${result.date}`;
		}

		return result.href || '/';
	};

	const onResultClick = (result: any) => {
		push(getResultURL(result));
		setShowSearch(false);
	};

	const onFocus = () => {
		setSelected(index);
	}

	return (
		<>
			<button
				onClick={() => onResultClick(result)}
				onFocus={onFocus}
				className={classNames(
					'nav-suggestion',
					selected === index && 'selected'
				)}
			>
				<p>{result.title}</p>
				<p className='type'>{result.type}</p>
			</button>

			<Keyboard
				keys={['enter']}
				callback={() => {
					if (selected === index) {
						onResultClick(result);
					}
				}}
				handleFocusableElements
			/>
		</>
	);
};

export default Suggestion;
