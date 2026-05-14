import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: [
		"@nuxt/ui",
		"@nuxt/icon",
		"@nuxt/eslint",
		"@nuxtjs/google-fonts",
		"@nuxt/image",
	],
	css: ["~/assets/css/main.css"],
	vite: {
		plugins: [tailwindcss()],
		optimizeDeps: {
			include: [
				"@vue/devtools-core",
				"@vue/devtools-kit",
				"zod",
				"maska/vue",
			],
		},
	},
	googleFonts: {
		families: {
			Inter: "200..700",
		},
	},
	app: {
		pageTransition: { name: "fade", mode: "out-in" },
	},
});
