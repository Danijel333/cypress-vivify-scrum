///<reference types= "cypress"/>

import user from "../../../modules/api/user";

describe("API login smoke test", () => {
  it("LOGN - 1 - Login using valid data", () => {
    user.login({ testMessage: Cypress.currentTest.title });
  });
});
