describe("Homepage load", () => {

  beforeEach(() => {
    cy.visit('');
  });
  
  it('should display the welcome page', () => {
    cy.contains('Welcome to JPetStore 6');
    cy.contains('Enter the Store');
    cy.contains('Copyright www.mybatis.org');
  });

  it('should open and display the home/store page', () => {
    cy.contains('Enter the Store').click();

    cy.contains('Sign In');
    cy.contains('Search');
  });
});
