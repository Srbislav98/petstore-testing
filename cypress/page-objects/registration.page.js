class RegistrationPage {
  getUsernameInput() {
    return cy.get('input[name="username"]');
  }

  getPasswordInput() {
    return cy.get('input[name="password"]');
  }

  getRepeatedPasswordInput() {
    return cy.get('input[name="repeatedPassword"]');
  }

  getFirstNameInput() {
    return cy.get('input[name="account.firstName"]');
  }

  getLastNameInput() {
    return cy.get('input[name="account.lastName"]');
  }

  getEmailInput() {
    return cy.get('input[name="account.email"]');
  }

  getPhoneInput() {
    return cy.get('input[name="account.phone"]');
  }

  getAddressInput() {
    return cy.get('input[name="account.address1"]');
  }

  getCityInput() {
    return cy.get('input[name="account.city"]');
  }

  getStateInput() {
    return cy.get('input[name="account.state"]');
  }

  getZipInput() {
    return cy.get('input[name="account.zip"]');
  }

  getCountryInput() {
    return cy.get('input[name="account.country"]');
  }

  getSubmitButton() {
    return cy.get('input[name="newAccount"]');
  }

  registerNewUser(
    username,
    password,
    repeatedPassword,
    firstName,
    lastName,
    email,
    phone,
    address,
    city,
    state,
    zip,
    country
  ) {
    this.getUsernameInput().type(username);
    this.getPasswordInput().type(password);
    this.getRepeatedPasswordInput().type(repeatedPassword);
    this.getFirstNameInput().type(firstName);
    this.getLastNameInput().type(lastName);
    this.getEmailInput().type(email);
    this.getPhoneInput().type(phone);
    this.getAddressInput().type(address);
    this.getCityInput().type(city);
    this.getStateInput().type(state);
    this.getZipInput().type(zip);
    this.getCountryInput().type(country);
    
    this.getSubmitButton().click();
  }
};
export default RegistrationPage;