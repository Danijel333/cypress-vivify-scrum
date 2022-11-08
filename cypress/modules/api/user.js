import apiValidation from "../../support/helper/apiValidation";

module.exports = {
  login({
    email = Cypress.env("email"),
    password = Cypress.env("password"),
    statusCode = 200,
    testMessage = "",
  }) {
    return cy
      .request({
        failOnStatusCode: false,
        method: "POST",
        url: `${Cypress.env("baseAPI")}login`,
        body: {
          email: email,
          password: password,
        },
      })
      .then((response) => {
        window.localStorage.setItem("token", response.body.token);
        apiValidation.validation(response, statusCode, testMessage);
        return response.body;
      });
  },
};
