import Head from 'next/head';
import genTitle from '../utils/genTitle';
import PageContainer from '../components/PageContainer';
import Link from 'next/link';
import Image from 'next/image';
import posts from '../posts.json';

export default function Writing({ posts }) {
	return (
		<>
			<Head>
				<title>{genTitle('Writing')}</title>
			</Head>
			<PageContainer title="Writing">
				<div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 sm:grid-rows-4 gap-3">
					{posts.map((post) => {
						return (
							<Link href={`/posts/${post.slug}`}>
								<div className="transition bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700 hover:bg-gray-200 cursor-pointer p-5 rounded-lg">
									{post.feature_image ? (
										<Image
											src={post.feature_image}
											className="rounded-lg"
											objectFit="cover"
											height={150}
											width={400}
										/>
									) : (
										<></>
									)}

									<h3 className="text-2xl font-semibold mb-2 mt-3">{post.title}</h3>
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

export async function getStaticProps(context) {
	return {
		props: {
			posts,
		},
	};
}
