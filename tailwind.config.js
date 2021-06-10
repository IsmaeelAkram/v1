const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {
			fontSize: {
				sm: '15px',
			},
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme('colors.black'),
						h2: {
							color: theme('colors.black'),
						},
						a: {
							color: theme('colors.black'),
						},
					},
				},
				dark: {
					css: {
						color: theme('colors.white'),
						h2: {
							color: theme('colors.white'),
						},
						a: {
							color: theme('colors.white'),
						},
					},
				},
			}),
		},
	},
	variants: {
		typography: ['dark'],
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
};
