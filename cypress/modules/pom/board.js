module.exports = {
  get addNewButton() {
    return cy.contains("Add New");
  },

  get addNewBoardButton() {
    return cy.contains("Add Board");
  },

  get openDropDownMenu() {
    return cy.get('i[class="el-input__icon el-icon-caret-top"]');
  },

  get selectItemFromDropDown() {
    return cy
      .get('ul[class="el-scrollbar__view el-select-dropdown__list"]')
      .children()
      .first();
  },

  get boardNameInput() {
    return cy.get('input[name="name"]');
  },

  get nextButton() {
    return cy.get('button[name="next_btn"]');
  },

  get radioTypeScrum() {
    return cy.get('span[name="type_scrum"]');
  },

  get radioTypeKanban() {
    return cy.get('span[name="type_kanban"]');
  },

  createScrumBoard(boardName) {
    this.addNewButton.click();
    this.addNewBoardButton.click();
    this.openDropDownMenu.click();
    this.selectItemFromDropDown.click();
    this.boardNameInput.type(boardName);
    this.nextButton.click();
    this.radioTypeScrum.click();
    this.nextButton.click();
    this.openDropDownMenu.click();
    this.selectItemFromDropDown.click();
    this.openDropDownMenu.click();
    this.selectItemFromDropDown.click();
  },
};
