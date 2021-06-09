import posts from '../../../posts.json';

export default async (req, res) => {
	res.send(posts.find((post) => post.slug == req.query.slug));
};
