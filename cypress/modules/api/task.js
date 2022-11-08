import testData from "../../fixtures/testData.json";
import color from "../../support/helper/consoleColor";

module.exports = {
  create({
    name = testData.general.name,
    sprint_id = null,
    boardId,
    statusCode = 201,
    statusText = "Created",
    isOnSprint = true,
    testMessage = "",
  }) {
    return cy
      .request({
        failOnStatusCode: false,
        method: "POST",
        url: `${Cypress.env("baseAPI")}tasks`,
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: {
          board_id: boardId,
          isOnSprint: isOnSprint,
          item: {
            name: name,
            board_id: boardId,
            sprint_id: sprint_id,
          },
        },
      })
      .then((response) => {
        typeof response.status != "undefined" && response.status === statusCode
          ? color.log(`${testMessage}`, "success")
          : color.log(`${testMessage} ${JSON.stringify(response)}`, "error");
        expect(response.status).to.eql(statusCode);
        return response.body;
      });
  },
};
