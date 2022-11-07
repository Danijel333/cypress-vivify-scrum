///<reference types= "cypress"/>

import user from "../../../modules/user";
import organization from "../../../modules/organization";

describe("API create organization smoke test", () => {
  beforeEach("User log in", () => {
    user.login({});
  });

  it("Create organization with valid data", () => {
    organization.create({}).then((response) => {
      cy.writeFile("cypress/fixtures/objectData.json", {
        organizationId: response.body.id,
      });
    });
  });
});
