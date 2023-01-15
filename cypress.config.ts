import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "urunxf",
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack"
    }
  },

  e2e: {
    baseUrl: "http://localhost:3000",
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
});
