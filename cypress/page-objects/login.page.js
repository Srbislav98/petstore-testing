class LoginPage {
    getUsernameInput() {
      return cy.get('input[name="username"]');
    }
  
    getPasswordInput() {
      return cy.get('input[name="password"]');
    }
  
    getSignInButton() {
      return cy.contains('Sign In');
    }
  
    fillLoginForm(username, password) {
      this.getUsernameInput().type(username);
      this.getPasswordInput().type(password);
    }
  
    submitLoginForm() {
      this.getSignInButton().click();
    }
  
    getLoginFailureMessage() {
      return cy.contains('Invalid username or password. Signon failed.');
    }
  }
  
  export default LoginPage;