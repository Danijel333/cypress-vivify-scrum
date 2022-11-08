///<reference types= "cypress"/>

import user from "../../../modules/api/user";
import organization from "../../../modules/api/organization";
import board from "../../../modules/api/board";
import task from "../../../modules/api/task";
import checklist from "../../../modules/api/checklist";

describe("API checklist smoke test", () => {
  let taskId;
  before("User login, create organization, board and task", () => {
    user.login({}).then(() => {
      organization.create({}).then((organization) => {
        board.create({ organizationId: organization.body.id }).then((board) => {
          task.create({ boardId: board.body.id }).then((task) => {
            taskId = task.body.id;
          });
        });
      });
    });
  });

  it("CLCRUD - 1 - Crete checklist with valid data", () => {
    checklist.post({ taskId: taskId });
  });

  it("CLCRUD - 2 - Update checklist ", () => {
    checklist.put({ taskId: taskId, checklistId });
  });
});
