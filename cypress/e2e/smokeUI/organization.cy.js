import generator from "../../support/helper/generator";
import organization from "../../modules/pom/organization";

describe("UI - Organization CRUD", () => {
  let organizationId;
  beforeEach(() => {
    cy.sessionLogin(Cypress.env("email"), Cypress.env("password"));
  });

  it("ORG-UI-CRUD - 1 - Create organization", () => {
    cy.visit("");
    organization
      .crateOrganization(generator.randomStringFourDigits())
      .then((organization) => {
        organizationId = organization.body.id;
      });
  });

  it("ORG-UI-CRUD - 2 - Get organization", () => {
    cy.intercept({
      method: "GET",
      url: "**/boards-data",
    }).as("getOrganizationData");
    cy.visit(`organizations/${organizationId}/boards-data`);
    cy.wait("@getOrganizationData").then((intercept) => {
      expect(intercept.response.statusCode).eql(200);
    });
  });

  it("ORG-UI-CRUD - 3 - Update organization", () => {
    cy.visit(`organizations/${organizationId}/boards`);
    cy.validatePageUrl("boards");
    organization.updateOrganization(generator.randomStringFourDigits());
  });

  it("ORG-UI-CRUD - 4 - Delete organization", () => {
    cy.visit(`organizations/${organizationId}/boards`);
    cy.validatePageUrl(organizationId);
    organization.deleteOrganization();
  });
});
