import { useCallback, useEffect, useState } from 'react';
import { Select } from '@infinium/hydro';
import { RefreshIcon } from '@heroicons/react/outline';

import { usePrevious } from '../../hooks/usePrevious';

import Layout from '../../components/layout/Layout';
import PageMeta from '../../components/PageMeta';
import Button from '../../components/Button';

import { hexToRGB, RGBToHex } from '../../logic/tools/color_converter';
import { copyToClipboard } from '../../logic/utils';


const ColorConverter = () => {
	const [result, setResult] = useState('');
	const [value, setValue] = useState('');
	const [mode, setMode] = useState<'hexToRGB' | 'RGBToHex'>('hexToRGB');
	const previousMode = usePrevious(mode);

	const onSelectChange = (v: any) => {
		setMode(v.id);
	};

	const onInputChange = (ev: any) => {
		setValue(ev.target.value);
	};

	const onResultClick = () => {
		copyToClipboard(result);
	}

	const getRandomHex = () => {
		return `#${Math.floor(Math.random()*16777215).toString(16)}`;
	}

	const [randomColor, setRandomColor] = useState(getRandomHex());

	const getColor = useCallback(() => {
		return result ? result : randomColor;
	}, [result, randomColor]);

	const refreshRandomColor = () => {
		setValue('');
		setResult('');
		setRandomColor(getRandomHex());
	}

	useEffect(() => {
		if (mode === 'hexToRGB') {
			if (value.includes('#')) {
				setValue((v) => String(v).replace('#', ''));
			}
	
			if (value.length > 6) {
				setValue((v) => String(v).slice(0, 6));
			}
		}

		if (mode === 'hexToRGB' && value) {
			const v = hexToRGB(value);
			if (!v) return;
			setResult(`rgb(${v.join(', ')})`);
		}

		if (mode === 'RGBToHex' && value) {
			let v: RegExpMatchArray | null | number[] = value.match(/\d+/g);
			if (!v || v.length < 3) return;
			v = v.map(e => Number(e));

			setResult(RGBToHex(
				v[0],
				v[1],
				v[2]
			));
		}
	}, [value, mode]);

	useEffect(() => {
		if (mode !== previousMode) {
			setValue('');
		}
	}, [mode, previousMode]);

	return (
		<>
			<PageMeta
				meta={{
					title: 'Color Converter',
					description: 'Convert Hex to RGB and vice/versa.',
				}}
			/>

			<section
				className='section flex-c smart-view relative'
				style={{ backgroundColor: getColor() }}
			>
				<div className='container flex-c'>
					<div className='ui radius-8 border-ui-2 shadow-xs w-100p mw-35r'>
						<div className='w-100p flex-sb px-1-5r py-1r border-bottom-ui-2'>
							<h5 className='mb-0 mt-0'>Convert Colors</h5>
							<Button.Action className='hy-button icon-only' onClick={refreshRandomColor} title='Randomize color'>
								<i className="j-icon"><RefreshIcon /></i>
							</Button.Action>
						</div>
						<div className='p-1-5r border-bottom-ui-2 flex align-c justify-c flex-row portrait-flex-c'>
							<input
								className='tool-input accent mr-1r portrait-mb-1r portrait-mr-0'
								onChange={onInputChange}
								value={value}
								placeholder={`Type a${
									mode === 'hexToRGB' ? ' hex' : 'n RGB'
								} color`}
							/>
							<Select
								options={[
									{ id: 'hexToRGB', label: 'Hex to RGB' },
									{ id: 'RGBToHex', label: 'RGB to Hex' },
								]}
								onChange={onSelectChange}
							/>
						</div>
						<div className="p-1-5r flex-c text-c">
							{result ? (
								<Button.Action onClick={onResultClick}>{result}</Button.Action>
							) : (
								<span className='caption-text sm-ls'>Random: {getColor()}</span>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

ColorConverter.layout = Layout;

export default ColorConverter;
