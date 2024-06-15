import { defineConfig } from "cypress";
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = defineConfig({
	e2e: {
		excludeSpecPattern: [
			"**/1-getting-started/*.js",
			"**/2-advanced-examples/*.js",
		],
		setupNodeEvents(on, config) {},
	},
});
