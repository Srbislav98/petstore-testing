describe("Filter pets", () => {

    beforeEach(() => {
        cy.visit(''); 
        cy.contains("Enter the Store").click();
      });
    
      it('should be able to filter pets by clicking on image', () => {
        cy.get('area[alt*="Birds"]').eq(0).click({force:true});
    
        cy.get('tr').should('have.length', 3);
        cy.get('h2').contains('Birds');
      });
    
      it('should be able to filter pets by clicking sidebar menu', () => {
        cy.get('#SidebarContent a[href*="FISH"]').click();
    
        cy.get('tr').should('have.length', 5);
        cy.get('h2').contains('Fish');
      });

      it('should be able to filter pets by clicking navigation menu', () => {
        cy.get('#QuickLinks a[href*="DOGS"]').click();
    
        cy.get('tr').should('have.length', 7);
        cy.get('h2').contains('Dogs');
      });
});
