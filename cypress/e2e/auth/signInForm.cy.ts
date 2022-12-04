describe("Sign in form", () => {
  beforeEach(() => {
    cy.viewport("iphone-x");
    cy.visit("http://localhost:3000");
  });

  it("Can submit a valid form", () => {
    cy.log("Filling out email");
    cy.get("[data-cy=\"email\"]").type(Cypress.env("test_user_1_email"));
    cy.log("Filling out password");
    cy.get("[data-cy=\"password\"]").type(Cypress.env("test_user_1_password"));
    cy.get("[data-cy=\"submit\"]").click();
    cy.contains(`Hi ${Cypress.env("test_user_1_firstname")}`);
  });
});

export {};
