const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    baseUrl: "https://subscribe.stctv.com/sa-en",
    pageLoadTimeout: 8000,
  },
});


