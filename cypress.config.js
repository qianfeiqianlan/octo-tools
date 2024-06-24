const { defineConfig } = require("cypress");
const fs = require('fs')
fs.cpSync('config/account.js', 'cypress/fixtures/account.js')
fs.cpSync('config/post.json', 'cypress/fixtures/post.json')
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true
    }
  },
});
