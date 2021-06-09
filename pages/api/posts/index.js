import posts from '../../../posts.json';

export default async (req, res) => {
	res.send(posts);
};
