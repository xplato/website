import Footer from '../shell/Footer';

interface Props {
	hideFooter: boolean;
	children: React.ReactNode;
}

const Layout = ({ hideFooter, children }: Props) => {
	return (
		<>
			<div className='layout'>{children}</div>
			{!hideFooter && <Footer />}
		</>
	);
};

export default Layout;
