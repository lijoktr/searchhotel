const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 5000,
  retries:0,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    //specPattern: "cypress/integration/examples/*.js"
    specPattern: "cypress/integration/examples/Searchhotel_framework.js"
  },
});
