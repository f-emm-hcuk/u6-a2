export default defineAppConfig({
	ui: {
		colors: {
			primary: "orange",
			neutral: "zinc",
			secondary: "teal",
		},
		button: {
			slots: {
				base: ["cursor-pointer"],
			},
		},
		dropdownMenu: {
			slots: {
				item: ["cursor-pointer"],
			},
		},
		icons: {
			loading: "i-material-symbols-progress-activity",
		},
	},
});
