///<reference types= "cypress"/>

import user from "../../../modules/api/user";
import organization from "../../../modules/api/organization";
import board from "../../../modules/api/board";
import task from "../../../modules/api/task";

describe("API task smoke test", () => {
  let boardId;
  before("User login, create organization and board", () => {
    user.login({}).then(() => {
      organization.create({}).then((organization) => {
        board.create({ organizationId: organization.body.id }).then((board) => {
          boardId = board.body.id;
        });
      });
    });
  });

  it("CRTSK - 1 - Crate task with valid data", () => {
    task.create({
      boardId: boardId,
      testMessage: Cypress.currentTest.title,
    });
  });
});
