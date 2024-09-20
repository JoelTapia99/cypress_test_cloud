describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io/");
    cy.contains("get").click();
    cy.url().should("contains", "https://example.cypress.io/commands/querying");
    cy.get("#inputName").click();
    cy.get("#inputName").type("Hola !");
    // cy.visit("https://example.cypress.io/commands/querying");
  });
});
