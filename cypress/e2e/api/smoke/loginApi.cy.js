///<reference types= "cypress"/>

import user from "../../../modules/user";

describe("API login smoke test", () => {
  it("Login using valid data", () => {
    user.login({});
  });
});
