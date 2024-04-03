import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: '/',
    specPattern: 'cypress/**/*.cy.{js,jsx,ts,tsx}',
  },
})
