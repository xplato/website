import Li from "../components/Li";
import PageTitle from "../components/PageTitle";

const FourOhFour = () => {
	return (
		<>
			<PageTitle>404!</PageTitle>
			<h1 className="utility-header mb-0">404</h1>
			<p>This is some spooky shit, man.</p>
			<Li href='/'>"I gotta get outta here!"</Li>
		</>
	);
};

export default FourOhFour;
