export default (req, res) => {
	res.send({ region: process.env.VERCEL_REGION || 'local' });
};
