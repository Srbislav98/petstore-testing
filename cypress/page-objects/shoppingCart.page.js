class ShoppingCartPage {
    constructor() {
      this.itemRows = 'tbody tr:not(:first-child):not(:last-child)'; 
      this.subTotal = 'tbody tr:last-child';
      this.updateCartQuantitiesButton = 'input[name="updateCartQuantities"]'; 
    }
  
    getItemRows() {
      return cy.get(this.itemRows);
    }
  
    getItemDetails(itemRow) {
      return itemRow.find('td').then((tds) => {
        const itemDetails = {
          itemId: Cypress.$(tds[0]).text().trim(),
          productId: Cypress.$(tds[1]).text().trim(),
          description: Cypress.$(tds[2]).text().trim(),
          inStock: Cypress.$(tds[3]).text().trim() === 'true',
          quantity: parseInt(Cypress.$(tds[4]).find('input').val()),
          listPrice: Cypress.$(tds[5]).text().trim(),
          totalCost: Cypress.$(tds[6]).text().trim(),
        };
        return itemDetails;
      });
    }
  
    getSubTotal() {
      return cy.get(this.subTotal);
    }
  
    getUpdateCartQuantitiesButton() {
      return cy.get(this.updateCartQuantitiesButton);
    }
  
    removeItemFromCart(itemRow) {
      return itemRow.find('a.Button').click();
    }
  
    updateCartQuantities() {
      return this.getUpdateCartQuantitiesButton().click();
    }  
};

export default ShoppingCartPage;