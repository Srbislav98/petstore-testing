describe('Petstore Tests', () => {
  beforeEach(() => {
    cy.visit('https://petstore.octoperf.com/');
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

  xit('should be able to register a new user', () => {
    cy.contains('Enter the Store').click();
    cy.contains('Sign In').click();
    cy.contains('Register Now!').click();

    cy.get('input[name="username"]').type('newuserJohn');
    cy.get('input[name="password"]').type('password');
    cy.get('input[name="repeatedPassword"]').type('password');
    cy.get('input[name="account.firstName"]').type('John');
    cy.get('input[name="account.lastName"]').type('Doe');
    cy.get('input[name="account.email"]').type('john.doe@example.com');
    cy.get('input[name="account.phone"]').type('1234567890');
    cy.get('input[name="account.address1"]').type('123 Main St');
    cy.get('input[name="account.city"]').type('New York');
    cy.get('input[name="account.state"]').type('NY');
    cy.get('input[name="account.zip"]').type('12345');
    cy.get('input[name="account.country"]').type('United States');
    //cy.get('select[name="account.country"]').select('United States');

    cy.get('input[name="newAccount"]').click();
    cy.url().should('include', '/actions/Account.action?editAccountForm=');
  });

  xit('should be able to search for a pet', () => {
    cy.get('input[name="keyword"]').type('dog');
    cy.contains('Search').click();

    cy.get('.ItemList .Product')
      .should('have.length', 5)
      .each(($petItem) => {
        cy.wrap($petItem).contains('dog', { ignoreCase: true });
      });
  });

  xit('should be able to add a pet to the cart', () => {
    cy.get('input[name="keyword"]').type('cat');
    cy.contains('Search').click();

    cy.get('.ItemList .Product').first().contains('Add to Cart').click();
    cy.contains('Shopping Cart').click();

    cy.url().should('include', '/actions/Cart.action?viewCart=');
    cy.contains('Shopping Cart').should('be.visible');
    cy.contains('Your cart contains 1 item(s)');
    cy.contains('cat');
  });
});