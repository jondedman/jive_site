/** @type {import('tailwindcss').Config} */

export default {
	mode: "jit", // Enable JIT mode
	purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Adjust purge paths as needed
	theme: {
		extend: {
			height: {
				"60vh": "60vh",
			},
		},
	},
	plugins: [],
};
