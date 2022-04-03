import Head from "next/head";

interface Props {
	children?: React.ReactNode;
}

const PageTitle = ({ children }: Props) => (
	<Head>
		{children ? (
			<title>~athena - {children}</title>
		) : (
			<title>~athena</title>
		)}
	</Head>
);

export default PageTitle;