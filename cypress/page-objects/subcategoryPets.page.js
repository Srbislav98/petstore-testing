class SubcategoryPetsPage {
    constructor() {
      this.itemRows = 'tbody tr:not(:first-child):not(:last-child)';
      this.addToCartButton = 'a.Button';
    }
  
    getItemRows() {
      return cy.get(this.itemRows);
    }
  
    getItemDetails(itemRow) {
        console.log(itemRow,"s");
      return itemRow.find('td').then((tds) => {
        const itemDetails = {
          itemId: Cypress.$(tds[0]).find('a').text().trim(),
          productId: Cypress.$(tds[1]).text().trim(),
          description: Cypress.$(tds[2]).text().trim(),
          listPrice: Cypress.$(tds[3]).text().trim(),
        };
        return itemDetails;
      });
    }
  
    getAddToCartButton(itemRow) {
      return itemRow.find(this.addToCartButton);
    }
  }
export default SubcategoryPetsPage;