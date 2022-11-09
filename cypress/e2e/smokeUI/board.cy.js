import generator from "../../support/helper/generator";
import board from "../../modules/pom/board";

describe("UI - board CRUD", () => {
  let boardId;
  beforeEach(() => {
    cy.sessionLogin(Cypress.env("email"), Cypress.env("password"));
    cy.visit("");
  });

  it("BRD-UI-CRUD - 1 - Create board", () => {
    board.createScrumBoard(generator.randomStringFourDigits());
  });
});
