import generator from "../../support/helper/generator";
import apiValidation from "../../support/helper/apiValidation";
import testData from "../../fixtures/testData.json";

module.exports = {
  post({
    name = generator.randomString(),
    type = testData.constants.scrumBoard,
    organizationId,
    statusCode = 201,
    testMessage = "",
  }) {
    return cy
      .request({
        failOnStatusCode: false,
        method: "POST",
        url: `${Cypress.env("baseAPI")}boards`,
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
        body: {
          name: name,
          type: type,
          organization_id: organizationId,
        },
      })
      .then((response) => {
        apiValidation.validation(response, statusCode, testMessage);
        return response.body;
      });
  },
  get({ boardId, statusCode = 200, testMessage = "" }) {
    return cy
      .request({
        failOnStatusCode: false,
        method: "GET",
        url: `${Cypress.env("baseAPI")}boards/${boardId}`,
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      })
      .then((response) => {
        apiValidation.validation(response, statusCode, testMessage);
        return response.body;
      });
  },
  put({
    boardId,
    name = generator.randomStringFourDigits(),
    description = generator.randomString(),
    code = generator.randomStringFourDigits(),
    statusCode = 200,
    testMessage,
  }) {
    cy.request({
      failOnStatusCode: false,
      method: "PUT",
      url: `${Cypress.env("baseAPI")}boards/${boardId}`,
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
      body: {
        name: name,
        description: description,
        code: code,
      },
    }).then((response) => {
      apiValidation.validation(response, statusCode, testMessage);
      return response.body;
    });
  },
  delete({ boardId, statusCode = 200, testMessage }) {
    return cy
      .request({
        failOnStatusCode: false,
        method: "DELETE",
        url: `${Cypress.env("baseAPI")}boards/${boardId}`,
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      })
      .then((response) => {
        apiValidation.validation(response, statusCode, testMessage);
        return response.body;
      });
  },
};
