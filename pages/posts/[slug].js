import Head from 'next/head';
import genTitle from '../../utils/genTitle';
import PageContainer from '../../components/PageContainer';
import posts from '../../posts.json';

export default function Posts(props) {
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
	let props = posts.find((post) => post.slug == context.params.slug);
	return { props: props };
}

export async function getStaticPaths(context) {
	let slugPaths = [];
	await posts.forEach((post) => {
		slugPaths.push({ params: { slug: post.slug } });
	});
	return {
		paths: slugPaths,
		fallback: true,
	};
}
