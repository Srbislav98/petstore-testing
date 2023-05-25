class LoginPage {
    getUsernameInput() {
      return cy.get('input[name="username"]');
    }
  
    getPasswordInput() {
      return cy.get('input[name="password"]');
    }
  
    getLoginButton() {
      return cy.contains('Login');
    }
  
    fillLoginForm(username, password) {
      this.getUsernameInput().type(username);
      this.getPasswordInput().clear().type(password);
      //this.getPasswordInput().type(password);
    }
  
    submitLoginForm() {
      this.getLoginButton().click();
    }
  
    getLoginFailureMessage() {
      return cy.contains('Invalid username or password. Signon failed.');
    }
  }
  
  export default LoginPage;