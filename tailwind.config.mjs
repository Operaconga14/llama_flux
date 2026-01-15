/** @type {import('tailwindcss').Config} */
export default {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				llamaflux: {
					navy: "#0B1220",
					navySoft: "#101A2E",
					navyCard: "#141F36",

					teal: "#2EE6C8",
					tealHover: "#3BE0C3",
					tealMuted: "#1FAE9A",
				},

				text: {
					primary: "#FFFFFF",
					secondary: "#B8C1CC",
					muted: "#8A94A6",
				},

				border: {
					subtle: "#1E2A44",
					strong: "#26345A",
				},
			},

			backgroundImage: {
				"llamaflux-gradient": "linear-gradient(135deg, #0B1220 0%, #101A2E 60%, #2EE6C8 120%)",
			},

			boxShadow: {
				card: "0 8px 24px rgba(0,0,0,0.35)",
				glow: "0 0 20px rgba(46,230,200,0.35)",
			},
		},
	},
	plugins: [],
};
