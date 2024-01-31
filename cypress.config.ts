import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "urunxf",
  defaultCommandTimeout: 10000,
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack"
    }
  },

  e2e: {
    baseUrl: "http://localhost:3000",
    experimentalSessionAndOrigin: true
  }
});
