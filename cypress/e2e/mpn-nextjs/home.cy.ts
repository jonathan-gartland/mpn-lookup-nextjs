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

  it("should navigate to QuantiTray page", () => {
    cy.get("button[id='quantitray']").click();
    cy.url().should("include", "/quantitray");
  });

  it("should navigate to QuantiTray2000 page", () => {
    cy.get("button[id='quantitray2000']").click();
    cy.url().should("include", "/quantitray2k");
  });

  it("should navigate to Legiolert page", () => {
    cy.get("button[id='legiolert']").click();
    cy.url().should("include", "/legiolert");
  });

  it("should navigate to About page", () => {
    cy.get("button[id='about']").click();
    cy.url().should("include", "/about");
  });
});
