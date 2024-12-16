const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/myReport", // where to save in directory
    overwrite: false,
    html: true,
    json: false,
    timestamp: "mmddyyyy_HHMMss", // Missing comma added
  }, // Closing brace added here for reporterOptions

  video: false, // Correct key capitalization and value assignment
  videosFolder: "MY_VIDEO", // Fix spelling and ensure proper capitalization
  trashAssetsBeforeRuns: true, // Use lowercase for boolean values
  videoCompression: 0, // Proper syntax for key-value pair

  e2e: {
    specPattern: "cypress/e2e/**/*.feature", //limited files
    //specPattern:"**/*.{feature,cy.js}",
    setupNodeEvents(on, config) {
      const cucumber = require("cypress-cucumber-preprocessor").default;
      on("file:preprocessor", cucumber());
    },
  },
})  