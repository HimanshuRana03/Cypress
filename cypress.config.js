const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl:'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    //ye base url login ke liye hai jo ki command.js mai dala hai
    setupNodeEvents(on, config) {
      // implement node event listeners here
       require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env:{
    url:'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
  }
});
