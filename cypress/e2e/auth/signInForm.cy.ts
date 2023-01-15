describe("Sign in form", () => {
  beforeEach(() => {
    cy.viewport("iphone-x");
    cy.visit("/");
  });

  it("Signs in", () => {
    cy.signIn(1);
  });
});

export {};
