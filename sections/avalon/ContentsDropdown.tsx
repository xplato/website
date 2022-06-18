import Dropdown from '../../components/shared/Dropdown';

const ContentsDropdown = () => {
	return (
		<Dropdown
			label='Series Contents'
			items={[
				{ label: '1. Introduction', href: '/avalon' },
				{ label: '2. Philosophy', href: '/avalon/philosophy' },
				{ label: '3. Architecture', href: '/avalon/architecture' },
			]}
		/>
	);
};


export default ContentsDropdown;