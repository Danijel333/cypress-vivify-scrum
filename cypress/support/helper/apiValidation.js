import color from "../../support/helper/consoleColor";

module.exports = {
  validation(response = "", statusCode = "", testMessage = "") {
    typeof response.status != "undefined" && response.status === statusCode
      ? color.log(`${testMessage}`, "success")
      : color.log(`${testMessage} ${JSON.stringify(response)}`, "error");
    expect(response.status).to.eql(statusCode);
  },
};
