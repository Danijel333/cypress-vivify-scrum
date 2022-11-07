const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://cypress.vivifyscrum-stage.com/",
    env: {
      baseAPI: "https://cypress-api.vivifyscrum-stage.com/api/v2/",
      email: "pera@peric.com",
      password: "ovojesifra123",
    },
    experimentalSessionAndOrigin: true,
  },
});
