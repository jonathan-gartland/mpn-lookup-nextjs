/// <reference types="cypress" />

describe("QT test stub", () => {
  describe("Validate UI components", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
      cy.get("button[id='quantitray']").click();
    });

    it("should display the title", () => {
      cy.contains("QuantiTray® MPN");
    });

    it("should display text: Positive Wells", () => {
      cy.get('[data-test-id="pos-well-title"]').should("be.visible");
    });

    it("should display zero in the input field", () => {
      cy.get('input[type="numeric"]').should("have.value", 0);
    });
  });

  describe("Functional Validation", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
      cy.get("button[id='quantitray']").click();
    });

    it("should display the title", () => {
      cy.contains("QuantiTray® MPN");
    });

    it("should display text: Positive Wells", () => {
      cy.get('[data-test-id="pos-well-title"]').should("be.visible");
    });

    it("should display zero in the input field", () => {
      cy.get('input[type="numeric"]').should("have.value", 0);
    });
  });
});
