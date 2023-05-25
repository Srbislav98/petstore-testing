import LoginPage from "../page-objects/login.page";

describe("Login", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.visit(''); 
    cy.contains("Enter the Store").click();
    cy.contains("Sign In").click();
  });

  it("should be able to sign in", () => {
    loginPage.fillLoginForm("newuser", "password");
    loginPage.submitLoginForm();
    cy.url().should("include", "https://petstore.octoperf.com/actions/Catalog.action");
    cy.contains("Sign Out");
  });

  xit("should not be able to sign in", () => {
    loginPage.fillLoginForm("newuser", "password");
    loginPage.submitLoginForm();
    loginPage.getLoginFailureMessage().should("be.visible");
  });
});
