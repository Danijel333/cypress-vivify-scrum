import generator from "../../support/helper/generator";
import organization from "../../modules/pom/organization";

describe("UI - Organization CRUD", () => {
  let organizationId;
  beforeEach(() => {
    cy.sessionLogin(Cypress.env("email"), Cypress.env("password"));
  });

  it("ORG-UI-CRUD - 1 - Create organization", () => {
    cy.visit("my-organizations");
    organization.crateOrganization(generator.randomStringFourDigits());
  });
});
