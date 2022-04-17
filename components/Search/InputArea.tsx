import classNames from 'classnames';
import { isBrowser, isMobile } from 'react-device-detect';
import { Icon } from '@infinium/hydro';
import { XIcon } from '@heroicons/react/solid';

import { useSearchPanel } from '../../providers/SearchPanelProvider';

import Button from '../Button';

import { icons } from '../../data/icons';


const Types = [
	'All',
	'Page',
	'Pin',
	'Project',
	'Writing',
	'Help',
];

interface Props {
	value: string;
	setValue(v: string): void;
	scope: string;
	setScope(v: string): void;
}

const Tab = ({ type, scope, setScope }: any) => {
	return (
		<button
			className={classNames(
				'tab flex align-c justify-c flex-row text-c',
				type.toLowerCase(),
				type === scope && 'active',
			)}
			onClick={() => setScope(type)}
			tabIndex={0}
		>
			<span>{type === 'All' ? 'All' : type === 'Help' ? 'Help' : `${type}s`}</span>
		</button>
	);
};

const InputArea = ({ value, setValue, scope, setScope }: Props) => {
	const { setShowSearch } = useSearchPanel();

	const shouldDisplayClear = () => {
		return value.trim() !== '' || scope !== 'All';
	};

	const close = () => {
		setShowSearch(false);
	}

	return (
		<div className='header w-100p'>
			<div className='w-100p flex align-c justify-s flex-row pl-1-5r'>
				<div className='input-container flex align-c justify-s flex-row'>
					<Icon>{icons.search}</Icon>
					<input
						className='i-input w-100p flex-1'
						type='text'
						placeholder='Start typing...'
						value={value}
						onChange={ev => setValue(ev.target.value)}
						autoFocus={isBrowser}
					/>
					<div className='pr-1-5r flex align-c justify-s flex-row'>
						{shouldDisplayClear() && (
							<a
								className='caption-link'
								onClick={() => {
									setValue('');
									setScope('All');
								}}
							>
								clear
							</a>
						)}

						{isMobile && (
							<Button.Action onClick={close} className='hy-button icon-only ml-0-25r'>
								<i className="j-icon sm">
									<XIcon />
								</i>
							</Button.Action>
						)}
					</div>
				</div>
			</div>
			<div className='search-tabs flex align-c justify-s flex-row pl-1-5r'>
				{Types.map(e => (
					<Tab
						key={e}
						type={e}
						// @ts-ignore
						scope={scope}
						setScope={setScope}
					/>
				))}
			</div>
		</div>
	);
};

export default InputArea;

export {
	Types,
}