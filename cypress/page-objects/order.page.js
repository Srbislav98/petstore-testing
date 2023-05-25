class OrderPage {
  
    getTable() {
      return cy.get('table');
    }
  
    getPaymentDetails() {
      return this.getTable().find('th').contains('Payment Details').parent();
    }
  
    getBillingAddress() {
      return this.getTable().find('th').contains('Billing Address').parent();
    }
  
    getShippingAddress() {
      return this.getTable().find('th').contains('Shipping Address').parent();
    }

    getBillingAddressInfo() {  
      const billingAddressInfo = {};
      cy.contains('Billing Address').parent('tr').nextUntil('tr:contains("Shipping Address")').each((row) => {
        const key = Cypress.$(row).find('td:nth-child(1)').text().trim();
        const value = Cypress.$(row).find('td:nth-child(2)').text().trim();
        billingAddressInfo[key] = value;
      });
      return billingAddressInfo;
    }
  
    getShippingAddressInfo() {  
      const shippingAddressInfo = {};
      cy.contains('Shipping Address').parent('tr').nextUntil('tr:contains("Status")').each((row) => {
        const key = Cypress.$(row).find('td:nth-child(1)').text().trim();
        const value = Cypress.$(row).find('td:nth-child(2)').text().trim();
        shippingAddressInfo[key] = value;
      });
      return shippingAddressInfo;
    }
  
    getStatus() {
      return this.getTable().find('td[colspan="2"]').invoke('text').then((text) => text.trim());
    }
  
    getItemRows() {
      return this.getTable().find('td a[href^="/actions/Catalog.action?viewItem="]').parent().parent();
    }
  
    getItemId(row) {
      return cy.wrap(row).find('td:nth-child(1) a').invoke('text').then((text) => text.trim());
    }
    
    getItemDescription(row) {
      return cy.wrap(row).find('td:nth-child(2)').invoke('text').then((text) => text.trim());
    }
  
    getItemQuantity(row) {
      return cy.wrap(row).find('td:nth-child(3)').invoke('text').then((text) => text.trim());
    }
  
    getItemPrice(row) {
      return cy.wrap(row).find('td:nth-child(4)').invoke('text').then((text) => text.trim());
    }
  
    getItemTotalCost(row) {
      return cy.wrap(row).find('td:nth-child(5)').invoke('text').then((text) => text.trim());
    }
  
    getTotalCost() {
      return this.getTable().find('th[colspan="5"]').invoke('text').then((text) => text.trim().replace('Total: $', ''));
    }

  }

export default OrderPage;
  