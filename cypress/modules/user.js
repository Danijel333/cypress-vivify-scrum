module.exports = {
  login({
    email = Cypress.env("email"),
    password = Cypress.env("password"),
    statusCode = 200,
    statusMessage = "OK",
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
        expect(response.status).eql(statusCode);
        expect(response.statusText).eql(statusMessage);
      });
  },
};
