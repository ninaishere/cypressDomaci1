/// <reference types="Cypress" />

describe("Register test", () => {
  it("Visit gallery app", () => {
    cy.visit("/");
  });

  it("Click Register button", () => {
    cy.get('a[href="/register"]').click();
  });

  it.only("Register with valid info", () => {
    cy.visit("/");
    cy.get('a[href="/register"]').click();
    cy.get("#first-name").type("Nina");
    cy.get("#last-name").type("R");
    cy.get("#email").type("nina@gmail.com"); // staviti drugi mail da bi radilo
    cy.get("#password").type("test123456");
    cy.get("#password-confirmation").type("test123456");
    cy.get(".form-check-input").click();
    cy.get('button[type="submit"]').click();
  });

  it("Register without first name", () => {
    cy.visit("/");
    cy.get('a[href="/register"]').click();
    cy.get("#first-name").type("");
    cy.get("#last-name").type("R");
    cy.get("#email").type("nina@gmail.com");
    cy.get("#password").type("test123456");
    cy.get("#password-confirmation").type("test123456");
    cy.get(".form-check-input").click();
    cy.get('button[type="submit"]').click();
  });

  it("Register without last name", () => {
    cy.visit("/");
    cy.get('a[href="/register"]').click();
    cy.get("#first-name").type("Nina");
    cy.get("#last-name").type("");
    cy.get("#email").type("nina@gmail.com");
    cy.get("#password").type("test123456");
    cy.get("#password-confirmation").type("test123456");
    cy.get(".form-check-input").click();
    cy.get('button[type="submit"]').click();
  });

  it("Register with wrong email", () => {
    cy.visit("/");
    cy.get('a[href="/register"]').click();
    cy.get("#first-name").type("Nina");
    cy.get("#last-name").type("R");
    cy.get("#email").type("asdf");
    cy.get("#password").type("test123456");
    cy.get("#password-confirmation").type("test123456");
    cy.get(".form-check-input").click();
    cy.get('button[type="submit"]').click();
  });

  it("Register with invalid password", () => {
    cy.visit("/");
    cy.get('a[href="/register"]').click();
    cy.get("#first-name").type("Nina");
    cy.get("#last-name").type("R");
    cy.get("#email").type("test1@gmail.com");
    cy.get("#password").type("test");
    cy.get("#password-confirmation").type("test");
    cy.get(".form-check-input").click();
    cy.get('button[type="submit"]').click();
  });

  it("Register witout accepting terms and conditions", () => {
    cy.visit("/");
    cy.get('a[href="/register"]').click();
    cy.get("#first-name").type("Nina");
    cy.get("#last-name").type("R");
    cy.get("#email").type("test1@gmail.com");
    cy.get("#password").type("test123123");
    cy.get("#password-confirmation").type("test123123");
    cy.get('button[type="submit"]').click();
  });
});
