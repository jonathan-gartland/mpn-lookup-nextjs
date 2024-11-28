/// <reference types="cypress" />

describe("MPN Lookup NextJS App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the title", () => {
    cy.contains("MPN Lookup");
  });

  ["QuantiTray", "QuantiTray2000", "Legiolert", "About"].forEach(
    (buttonName) => {
      it(`should display the ${buttonName} button`, () => {
        cy.get(`button[id="${buttonName.toLowerCase()}"]`).contains(buttonName);
      });
    }
  );
});
