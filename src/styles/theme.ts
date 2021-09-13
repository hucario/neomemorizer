import { Theme } from "@theme-ui/css";
export default {
	colors: {
		text: "black",
		background: "white",
		mainHeroBg1Stop: "#ffffff",
		mainHeroBg2Stop: "#bdbdbd",
		containerBg1: "rgb(234 234 234)",
		containerBg2: "rgb(208 208 208)",
		inputBg1: "rgb(29 28 27)",
		inputBg2: "rgb(43 42 41)",
		inpTextCol: "white",
		stageProgressBg: "#ff008d",
		wordProgressBg: "#00a1ff",
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
				mainHeroBg2Stop: "#3a0248",
				containerBg1: "rgb(29 28 27)",
				containerBg2: "rgb(43 42 41)",
				inputBg1: "rgb(234 234 234)",
				inputBg2: "rgb(208 208 208)",
				inpTextCol: "black",
				stageProgressBg: "#ff008d",
				wordProgressBg: "#00a1ff",
			},
			light: {
				text: "black",
				background: "white",
				mainHeroBg1Stop: "#ffffff",
				mainHeroBg2Stop: "#bdbdbd",
				containerBg1: "rgb(234 234 234)",
				containerBg2: "rgb(208 208 208)",
				inputBg1: "rgb(29 28 27)",
				inputBg2: "rgb(43 42 41)",
				inpTextCol: "white",
				stageProgressBg: "#ff008d",
				wordProgressBg: "#00a1ff",
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
		title: 'Inter, sans-serif',
		container: 'monospace',
		input: 'monospace'
	},
	fontSizes: [
		12, 14, 16, 20, 24, 32, 48, 64
	],
	fontWeights: {
		body: 400,
		heading: 900,
		container: 400,
		input: 700,
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