describe("Search products", () => {

  beforeEach(() => {
    cy.visit(''); 
    cy.contains("Enter the Store").click();
  });

  it('should be able to search for a pet', () => {
    cy.get('input[name="keyword"]').type('dog');
    cy.contains('Search').click();

    cy.get('tr').should('have.length', 3)
    cy.get('td').contains('dog').should('have.length', 1);
  });

  xit('should be able to search for multiple pets', () => {
    const searchInputs = ['dog', 'Parrot', 'bird'];
    const expectedresultLengths=[1,1,0];

    searchInputs.forEach((input, i) => {
      cy.get('input[name="keyword"]').clear().type(input);
      cy.contains('Search').click();
  
      cy.get('td').contains(input).should('have.length', expectedresultLengths[i]);
    });
  });
});
