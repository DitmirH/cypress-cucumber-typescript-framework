export {};
declare global {
  namespace Cypress {
    interface Chainable {
      acceptPrivacyPolicyGoogle(): Chainable<any>;
      search(term: string): Chainable<any>;
    }
  }
}

Cypress.Commands.add("acceptPrivacyPolicyGoogle", () => {
  cy.get("#L2AGLb").should("be.visible").click();
});

Cypress.Commands.add("search", (term) => {
  cy.get("input[name=q]")
    .clear()
    .type(term + "{enter}");
});
