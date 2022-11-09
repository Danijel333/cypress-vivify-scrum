///<reference types= "cypress"/>

import user from "../../../modules/api/user";
import organization from "../../../modules/api/organization";
import board from "../../../modules/api/board";
import task from "../../../modules/api/task";

describe("API task smoke test", () => {
  let boardId;
  let taskId;
  beforeEach("User log in", () => {
    cy.sessionLogin(Cypress.env("email"), Cypress.env("password"));
  });

  it("0 - create test data", () => {
    organization.post({}).then((organization) => {
      board.post({ organizationId: organization.id }).then((board) => {
        boardId = board.id;
      });
    });
  });

  it("TSK_CRUD - 1 - Crate task with valid data", () => {
    task.post({
      boardId: boardId,
      testMessage: Cypress.currentTest.title,
    });
  });
});
