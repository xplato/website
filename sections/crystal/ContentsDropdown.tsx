import Dropdown from '../../components/shared/Dropdown';

const ContentsDropdown = () => {
	return (
		<Dropdown
			label='Series Contents'
			items={[
				{ label: '1. Introduction', href: '/crystal' },
				{ label: '2. Philosophy', href: '/crystal/philosophy' },
			]}
		/>
	);
};


export default ContentsDropdown;