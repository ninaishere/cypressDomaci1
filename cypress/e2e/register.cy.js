/// <reference types="Cypress" />

describe("Register test", () => {
  it("Visit gallery app", () => {
    cy.visit("/");
  });

  it("Click Register button", () => {
    cy.get('a[href="/register"]').click();
  });

  it("Register with valid info", () => {
    cy.get("#first-name").type("Nina");
    cy.get("#last-name").type("R");
    cy.get("#email").type("nina@gmail.com"); // staviti drugi mail da bi radilo
    cy.get("#password").type("test123456");
    cy.get("#password-confirmation").type("test123456");
    cy.get(".form-check-input").click();
    cy.get('button[type="submit"]').click();
  });
});
