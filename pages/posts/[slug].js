import Head from 'next/head';
import genTitle from '../../utils/genTitle';
import PageContainer from '../../components/PageContainer';

export default function Writing(props) {
	return (
		<>
			<Head>
				<title>{genTitle(props.title)}</title>
			</Head>
			<PageContainer title={props.title}>
				<div
					class="prose dark:prose-dark max-w-full w-4/6"
					dangerouslySetInnerHTML={{ __html: props.html }}
				></div>
			</PageContainer>
		</>
	);
}

export async function getStaticProps(context) {
	const res = await fetch(`http://${process.env.VERCEL_URL}/api/posts/${context.params.slug}`);
	let props = await res.json();
	return { props: props };
}

export async function getStaticPaths(context) {
	const res = await fetch(`http://${process.env.VERCEL_URL}/api/posts`);
	let paths = await res.json();
	let slugPaths = [];
	paths.forEach((path) => {
		slugPaths.push({ params: { slug: path.slug } });
	});
	return {
		paths: slugPaths,
		fallback: false,
	};
}