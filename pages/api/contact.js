import Pageclip from 'pageclip';

const pageclip = new Pageclip(process.env.PAGECLIP_API_KEY);

export default async (req, res) => {
	if (req.method == 'POST') {
		const email = req.body.email;
		const message = req.body.message;

		if (!email || !message) {
			await res.status(400).json({ message: 'No email or message entered!' });
			return;
		}
		await pageclip.send('Contact', {
			email,
			message,
			origin: 'v1 Website contact form',
		});
		await res.send({ message: 'Successfully sent message.', submitted: { email, message } });
		return;
	} else {
		await res.status(400).json({ message: 'Only GET request allowed.' });
		return;
	}
};

export const config = {
	api: {
		bodyParser: {
			sizeLimit: '1mb',
		},
	},
};
