import apiValidation from "../../support/helper/apiValidation";
import generator from "../../support/helper/generator";

module.exports = {
  post({
    name = generator.randomString(),
    statusCode = 201,
    testMessage = "",
  }) {
    return cy
      .request({
        failOnStatusCode: false,
        method: "POST",
        url: `${Cypress.env("baseAPI")}organizations`,
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
        body: {
          name: name,
        },
      })
      .then((response) => {
        apiValidation.validation(response, statusCode, testMessage);
        return response.body;
      });
  },
  get({ organizationId = "", statusCode = 200, testMessage = "" }) {
    return cy
      .request({
        failOnStatusCode: false,
        method: "GET",
        url: `${Cypress.env(
          "baseAPI"
        )}organizations/${organizationId}/boards-data`,
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
    name = generator.randomStringFourDigits(),
    organizationId = "",
    statusCode = 200,
    testMessage,
  }) {
    return cy
      .request({
        failOnStatusCode: false,
        method: "PUT",
        url: `${Cypress.env("baseAPI")}organizations/${organizationId}`,
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
        body: {
          name: name,
        },
      })
      .then((response) => {
        apiValidation.validation(response, statusCode, testMessage);
        return response.body;
      });
  },
  delete({
    passwordOrEmail = Cypress.env("password"),
    organizationId = "",
    statusCode = 201,
    testMessage,
  }) {
    return cy
      .request({
        failOnStatusCode: false,
        method: "POST",
        url: `${Cypress.env("baseAPI")}organizations/${organizationId}`,
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
        body: {
          passwordOrEmail: passwordOrEmail,
        },
      })
      .then((response) => {
        apiValidation.validation(response, statusCode, testMessage);
        return response.body;
      });
  },
};
