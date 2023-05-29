/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["var(--font-montserrat)"],
			},
			colors: {
				gray: {
					100: "#F7F8FA",
					200: "#CFD7DC",
				},
				green: {
					100: "#E8FBF6",
					200: "#BBF1E3",
					300: "#1DD1A1",
				},
				accent: "#ffdb86",
			},
		},
	},
	plugins: [],
};
