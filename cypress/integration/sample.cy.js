// cypress/integration/sample.spec.js

describe('Sample Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('Welcome to Your App');
  });
});

