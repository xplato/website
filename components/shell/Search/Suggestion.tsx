import { useRouter } from 'next/router';
import classNames from 'classnames';

import Keyboard from '../../Keyboard';

interface Props {
	index: number;
	result: any;
	selected: number;
	setShowSearch(v: boolean): void;
	setSelected(v: number): void;
}

const getHighlightURL = (baseSlug: string, v: string) => `/${baseSlug}?h=${v}#${v}`;

const Suggestion = ({
	index,
	result,
	selected,
	setShowSearch,
	setSelected,
}: Props) => {
	const { push } = useRouter();

	const getResultURL = (result: any) => {
		if (result.slug) {
			return getHighlightURL('articles', result.slug);
		}

		if (result.type === 'Project') {
			return getHighlightURL('code', result.id);
		}

		if (result.type === 'Pin') {
			return getHighlightURL('pins', result.date);
		}

		if (result.type === 'HelpPage') {
			return getHighlightURL('help', result.id);
		}

		return result.href || '/';
	};

	const onResultClick = (result: any) => {
		push(getResultURL(result));
		setShowSearch(false);
	};

	const onFocus = () => {
		setSelected(index);
	};

	return (
		<>
			<button
				onClick={() => onResultClick(result)}
				onFocus={onFocus}
				className={classNames(
					'nav-suggestion',
					selected === index && 'selected',
					result.caption && 'is-default-suggestion'
				)}
			>
				<p>{result.title}</p>
				<p className='type'>
					{result.caption ? result.caption : result.type}
				</p>
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
