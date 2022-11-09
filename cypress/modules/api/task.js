import generator from "../../support/helper/generator";
import apiValidation from "../../support/helper/apiValidation";

module.exports = {
  post({
    name = generator.randomStringFourDigits(),
    sprint_id = null,
    boardId,
    statusCode = 201,
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
        apiValidation.validation(response, statusCode, testMessage);
        return response.body;
      });
  },
  get({ taskId, statusCode = 200, testMessage }) {
    return cy
      .request({
        method: "GET",
        url: `${Cypress.env("baseAPI")}tasks/${taskId}`,
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      })
      .then((response) => {
        apiValidation(response, statusCode, testMessage);
        return response.body;
      });
  },
};
