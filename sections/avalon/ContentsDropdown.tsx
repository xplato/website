import Dropdown from '../../components/shared/Dropdown';

const ContentsDropdown = () => {
	return (
		<Dropdown
			label='Series Contents'
			items={[
				{ label: '1. Introduction', href: '/avalon' },
				{ label: '2. Philosophy', href: '/avalon/philosophy' },
			]}
		/>
	);
};


export default ContentsDropdown;