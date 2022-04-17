import Footer from '../shell/Footer';
import Navigation from '../shell/Navigation';

interface Props {
	hideFooter?: boolean;
	affixNav?: boolean;
	children: React.ReactNode;
}

const Layout = ({ hideFooter, affixNav, children }: Props) => {
	return (
		<>
			<Navigation affix={affixNav} />
			<div className='layout'>{children}</div>
			{!hideFooter && <Footer />}
		</>
	);
};

export default Layout;
