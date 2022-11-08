///<reference types= "cypress"/>

import user from "../../../modules/api/user";
import organization from "../../../modules/api/organization";

describe("API organization smoke test", () => {
  let organizationId = "";
  beforeEach("User log in", () => {
    user.login({});
  });

  it("ORG_CRUD - 1 - Create organization", () => {
    organization
      .post({ testMessage: Cypress.currentTest.title })
      .then((organization) => {
        organizationId = organization.id;
      });
  });

  it("ORG_CRUD - 2 - Get organization info", () => {
    organization.get({
      organizationId,
      testMessage: Cypress.currentTest.title,
    });
  });

  it("ORG_CRUD - 3 - Update organization name", () => {
    organization.put({
      organizationId,
      testMessage: Cypress.currentTest.title,
    });
  });

  it("ORG_CRUD - 4 - Delete organization", () => {
    organization.delete({
      organizationId,
      testMessage: Cypress.currentTest.title,
    });
  });
});
