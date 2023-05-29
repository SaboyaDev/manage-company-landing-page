/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		// screens: {
		// 	xsm: '375px',
		// 	sm: '640px',
		// 	md: '768px',
		// 	ls: '1024px',
		// 	xl: '1280px',
		// 	'2xl': '1440px',
		// },
		screens: {
			sm: '640px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			colors: {
				brightRed: 'hsl(12, 88%, 59%)',
				brightRedLight: 'hsl(12, 88%, 69%)',
				brightRedSupLight: 'hsl(12, 88%, 95%)',
				darkBlue: 'hsl(228, 39%, 23%)',
				darkGrayishBlue: 'hsl(227, 12%, 61%)',
				veryDarkBlue: 'hsl(233, 12%, 13%)',
				veryPaleRed: 'hsl(13, 100%, 96%)',
				veryLightGray: 'hsl(0, 0%, 98%)',
				light: 'hsl(9, 54%, 97%)',
			},
			fontFamily: {
				vietmanPro: "'Be Vietnam Pro', sans-serif",
			},
			fontSize: {
				'6xl': '54px',
			},
			boxShadow: {
				md: '0px 15px 15px -10px',
			},
		},
	},
	plugins: [],
}
