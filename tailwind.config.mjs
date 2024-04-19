/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			merienda: ['Merienda Variable', ...defaultTheme.fontFamily.sans],
			roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
		}
	},
	plugins: [],
}
