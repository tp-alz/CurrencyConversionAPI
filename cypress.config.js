const { defineConfig } = require("cypress");

module.exports = defineConfig({
  rojectId: "ta01",
  env: {
    petStoreApiUrl: 'https://currency-converter241.p.rapidapi.com/conversion_rate',
    apiKey:'209582b655mshd0792d0f49ed1b0p19c14djsnba37defbe7de',
    apiHost: 'currency-converter241.p.rapidapi.com'
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log (message) {
          console.log(message)
          return null
        }
      })
    },
  },
});
