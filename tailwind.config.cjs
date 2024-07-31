/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: "tw-",
	content: ["./**/*.liquid", "./frontend/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				tbgOrange: "#af431f",
				tbgYellow: "#f2b65b",
			},
		},
	},
	plugins: [],
};
