const { Given, Then, When } = require("cypress-cucumber-preprocessor/steps");

Given("I navigate to Google", () => {
  cy.visit("www.google.com");
  cy.acceptPrivacyPolicyGoogle();
});

When("I search for {string}", (searchTerm: string) => {
  cy.search(searchTerm);
});

Then("I expect to see results for {string}", (searchWord: string) => {
  cy.url().should("contain", `/search?q=${searchWord.toLowerCase()}`);
  cy.contains("h3", searchWord).should("exist");
});
