describe("empty spec", () => {
  beforeEach(() => {
    cy.viewport("iphone-x");
    cy.visit("http://localhost:3000");
  });

  it("Tests tests", () => {
    cy.log("Hello");
  });
});

export {};
