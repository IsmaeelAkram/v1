import Head from 'next/head';
import genTitle from '../utils/genTitle';
import PageContainer from '../components/PageContainer';
import Link from 'next/link';

export default function Writing({ posts }) {
	return (
		<>
			<Head>
				<title>{genTitle('Writing')}</title>
			</Head>
			<PageContainer>
				<div className="grid grid-flow-row md:grid-cols-3 grid-rows-3 gap-3">
					{posts.map((post) => {
						return (
							<Link href={`/post/${post.slug}`}>
								<div className="transition bg-gray-100 dark:bg-gray-900 hover:dark:bg-gray-700 hover:bg-gray-100 cursor-pointer p-5 rounded-lg">
									<img src={post.feature_image} className="rounded-lg mb-5 object-cover h-40" />
									<h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
									<p>{post.excerpt}</p>
								</div>
							</Link>
						);
					})}
				</div>
			</PageContainer>
		</>
	);
}

export async function getServerSideProps(context) {
	const res = await fetch(`http://${process.env.VERCEL_URL}/api/posts`);
	return {
		props: {
			posts: await res.json(),
		},
	};
}
