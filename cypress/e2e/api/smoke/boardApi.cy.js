///<reference types= "cypress"/>

import user from "../../../modules/api/user";
import organization from "../../../modules/api/organization";
import board from "../../../modules/api/board";

describe("API board smoke test", () => {
  let organizationId = "";
  let boardId = "";
  beforeEach("User log in", () => {
    cy.sessionLogin(Cypress.env("email"), Cypress.env("password"));
  });
  before("User log in and organization creation", () => {
    user.login({}).then(() => {
      organization.post({}).then((organization) => {
        organizationId = organization.id;
      });
    });
  });
  after("Delete organiztion", () => {
    organization.delete({ organizationId });
  });

  it("BD_CRUD - 1 - Create board", () => {
    board
      .post({
        organizationId: organizationId,
        testMessage: Cypress.currentTest.title,
      })
      .then((board) => {
        boardId = board.id;
      });
  });

  it("BD_CRUD - 2 - Get board data", () => {
    board.get({ boardId: boardId, testMessage: Cypress.currentTest.title });
  });

  it("BD_CRUD - 3 - Update board data", () => {
    board.put({ boardId: boardId, testMessage: Cypress.currentTest.title });
  });

  it("BD_CRUD - 4 - Delete board", () => {
    board.delete({ boardId: boardId, testMessage: Cypress.currentTest.title });
  });
});
