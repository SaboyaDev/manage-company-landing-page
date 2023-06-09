/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
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
				sm: ['16px', '30px'],
				'3xl': ['30px', '45px'],
				'4xl': ['40px', '50px'],
				'6xl': ['56px', '64px'],
			},
			boxShadow: {
				md: '0px 15px 15px -10px',
			},
		},
	},
	plugins: [],
}

// brightRed: 'hsl(12, 88%, 59%)' HEX: #f25f3a,
// brightRedLight: 'hsl(12, 88%, 69%)' HEX: #f6866a,
