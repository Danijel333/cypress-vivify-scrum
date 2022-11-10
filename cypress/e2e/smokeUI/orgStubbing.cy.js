///<reference types= "cypress"/>

describe("Stuggung organization", () => {
  beforeEach(() => {
    cy.sessionLogin(Cypress.env("email"), Cypress.env("password"));
  });

  it("ORG-STUB - 1 - Get organizations with request stub", () => {
    cy.intercept(
      {
        method: "GET",
        url: "https://cypress-api.vivifyscrum-stage.com/api/v2/my-organizations",
      },
      { fixture: "responseBack.json" }
    ).as("stubbedRequestBack");
    cy.intercept(
      {
        method: "GET",
        url: "https://cypress-api.vivifyscrum-stage.com/api/v2/organizations-data",
      },
      { fixture: "responseFront.json" }
    ).as("stubbedRequestFont");
    cy.visit("my-organizations");
    cy.wait("@stubbedRequestBack").then((intercept) => {
      console.log(intercept.response.body);
    });
    cy.wait("@stubbedRequestFont").then((intercept) => {
      console.log(intercept.response.body);
    });
  });
});
