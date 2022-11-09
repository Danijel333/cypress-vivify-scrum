import testData from "../../fixtures/testData.json";
import color from "../../support/helper/consoleColor";

module.exports = {
  post({
    title = testData.general.name,
    taskId,
    statusCode = 201,
    testMessage,
  }) {
    return cy
      .request({
        failOnStatusCode: false,
        method: "POST",
        url: `${Cypress.env("baseAPI")}tasks/${taskId}/checklists`,
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
          Accept: "application/json",
        },
        body: {
          title: title,
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

  put({
    title = "Checklist 55",
    taskId = "",
    checklistId = "",
    statusCode = 200,
    statusText = "OK",
    testMessage,
  }) {
    return cy
      .request({
        failOnStatusCode: false,
        method: "PUT",
        url: `${Cypress.env(
          "baseAPI"
        )}tasks/${taskId}/checklists/${checklistId}`,
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
          Accept: "application/json",
        },
        body: {
          title: title,
          id: checklistId,
          task_id: taskId,
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
