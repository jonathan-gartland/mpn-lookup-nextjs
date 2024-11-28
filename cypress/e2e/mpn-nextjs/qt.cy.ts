/// <reference types="cypress" />

describe("QT test stub", () => {
  before(() => {
    cy.visit("http://localhost:3000");
    cy.get("button[id='quantitray']").click();
  });

  it("should display the title", () => {
    cy.contains("QuantiTray® MPN");
  });

  //
  // it('should display the search button', () => {
  //     cy.get('button[type="submit"]
});