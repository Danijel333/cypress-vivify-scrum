module.exports = {
  get addNewButton() {
    return cy.contains("Add New");
  },

  get addNewOrganization() {
    return cy.contains("Add Organization");
  },

  get organizationNameInput() {
    return cy.get('input[name="name"]');
  },

  get nextButton() {
    return cy.get('button[name="next_btn"]');
  },

  get createButton() {
    return cy.get("");
  },

  crateOrganization(organizationName) {
    this.addNewButton.click();
    this.addNewOrganization.click();
    this.organizationNameInput.type(organizationName);
    this.nextButton.click();
    this.nextButton.click();
  },
};
