/// <reference types="cypress" />

describe("MPN Lookup NextJS App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the title", () => {
    cy.contains("MPN Lookup");
  });

  // it('should display the search box', () => {
  //     cy.get('input[type="text"]')
  // })
  //
  // it('should display the search button', () => {
  //     cy.get('button[type="submit"]
});
