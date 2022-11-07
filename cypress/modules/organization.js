import testData from "../fixtures/testData.json";

module.exports = {
  create({
    name = testData.general.name,
    statusCode = 201,
    statusText = "Created",
  }) {
    return cy
      .request({
        failOnStatusCode: false,
        method: "POST",
        url: `${Cypress.env("baseAPI")}organizations`,
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
          Accept: "application/json",
        },
        body: {
          name: name,
        },
      })
      .then((response) => {
        expect(response.status).eql(statusCode);
        expect(response.statusText).eql(statusText);
      });
  },
};
