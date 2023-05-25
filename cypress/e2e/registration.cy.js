import RegistrationPage from "../page-objects/registration.page";

describe("Registration", () => {
  const registrationPage = new RegistrationPage();
  
  beforeEach(() => {
    cy.visit(''); 
    cy.contains("Enter the Store").click();
    cy.contains('Sign In').click();
    cy.contains('Register Now!').click();
  });

  it('should be able to register a new user', () => {
    cy.fixture('user').then((userData) => {
      registrationPage.registerNewUser(
        userData.username,
        userData.password,
        userData.confirmPassword,
        userData.firstName,
        userData.lastName,
        userData.email,
        userData.phone,
        userData.address1,
        userData.city,
        userData.state,
        userData.zipCode,
        userData.country
      );
      cy.url().should('include', '/actions/Catalog.action');
    });
  });
});
