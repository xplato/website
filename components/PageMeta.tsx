import Head from 'next/head';

interface Props {
	meta: Meta;
}

interface Meta {
	title: string;
	description: string;
}

const PageMeta = ({ meta }: Props) => (
	<Head>
		<title>~athena - {meta.title}</title>
		<meta name='description' content={meta.description} />
	</Head>
);

export default PageMeta;
