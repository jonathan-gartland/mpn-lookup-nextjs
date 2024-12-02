/// <reference types="cypress" />

// tag: regression
// tag: smoke
describe("QT test stub", () => {
  describe("Validate UI components", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
      cy.get("button[id='quantitray']").click();
    });

    it("should display the title", () => {
      // tag: regression
      // tag: smoke
      cy.contains("QuantiTray® MPN");
    });

    it("should display text: Positive Wells", () => {
      // tag: regression
      // tag: smoke
      cy.get('[data-test-id="pos-well-title"]').should("be.visible");
    });

    it("should display zero in the input field", () => {
      // tag: regression
      // tag: smoke
      cy.get('input[type="numeric"]').should("have.value", 0);
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

    it("should do something", () => {
      expect(1).to.equal(1);
    });

    it("should do something 1", () => {
      expect(1).to.equal(1);
    });

    it("should do something 2", () => {
      expect(1).to.equal(1);
    });
  });
});
