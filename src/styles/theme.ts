import { Theme } from "@theme-ui/css";
export default {
	colors: {
		text: "black",
		background: "white",
		mainHeroBg1Stop: "#ffffff",
		mainHeroBg2Stop: "#bdbdbd",
		primary: "#196be6",
		secondary: "#33b0cc",
		muted: "#f3eeed",
		highlight: "#efeffe",
		gray: "#6c6c6c",
		accent: "#8bc34a",
		themeTransitionTime: '150ms',
		modes: {
			dark: {
				text: "white",
				background: "black",
				mainHeroBg1Stop: "#0a0027",
				mainHeroBg2Stop: "#2B2B2B",
			},
			light: {
				text: "black",
				background: "white",
				mainHeroBg1Stop: "#ffffff",
				mainHeroBg2Stop: "#bdbdbd",
				primary: "#196be6",
				secondary: "#33b0cc",
				muted: "#f3eeed",
				highlight: "#efeffe",
				gray: "#6c6c6c",
				accent: "#8bc34a"
			}
		}
	},
	fonts: {
		body: 'Inter, sans-serif',
		title: 'Inter, sans-serif'
	},
	fontSizes: [
		12, 14, 16, 20, 24, 32, 48, 64
	],
	fontWeights: {
		body: 400,
		heading: 900,
		title: 900,
		bold: 700,
	},
	styles: {
		root: {
			fontFamily: 'body',
			fontWeight: 'body',
			fontSize: '1rem'
		}
	}
} as Theme;