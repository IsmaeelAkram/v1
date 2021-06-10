const withMDX = require('@next/mdx')({
	extension: /\.mdx$/,
});
module.exports = withMDX({
	images: {
		domains: ['unsplash.com', 'images.unsplash.com', 'content.fortune.com'],
	},
	pageExtensions: ['js', 'jsx', 'mdx'],
});
