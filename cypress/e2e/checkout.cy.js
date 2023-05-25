import LoginPage from "../page-objects/login.page";
import OrderPage from "../page-objects/order.page";

describe("Checkout Proccess", () => {
  const loginPage = new LoginPage();
  const orderPage = new OrderPage();

  beforeEach(() => {
    cy.visit("");
    cy.contains("Enter the Store").click();
    cy.contains("Sign In").click();
    loginPage.fillLoginForm("newuser", "password");
    loginPage.submitLoginForm();
  });

  it("should be able to buy pet and retrieve order details", () => {
    cy.get('input[name="keyword"]').type("Iguana");
    cy.contains("Search").click();
    cy.contains("Friendly green friend").click();
    cy.contains("Add to Cart").first().click();
    cy.contains("Proceed to Checkout").click();
    cy.contains("Continue").click();
    cy.contains("Confirm").click();

    cy.contains("Thank you, your order has been submitted.");
    
    orderPage.getPaymentDetails().should('exist');
    orderPage.getBillingAddress().should('exist');
    orderPage.getShippingAddress().should('exist');
  
    cy.fixture('address').then((addressData) => {
      cy.wrap(orderPage.getBillingAddressInfo()).then((billingAddressInfo) => {
        expect(billingAddressInfo['First name:']).to.equal(addressData.billingAddress.firstName);
        expect(billingAddressInfo['Last name:']).to.equal(addressData.billingAddress.lastName);
        expect(billingAddressInfo['Address 1:']).to.equal(addressData.billingAddress.address1);
        expect(billingAddressInfo['Address 2:']).to.equal(addressData.billingAddress.address2);
        expect(billingAddressInfo['City:']).to.equal(addressData.billingAddress.city);
        expect(billingAddressInfo['State:']).to.equal(addressData.billingAddress.state);
        expect(billingAddressInfo['Zip:']).to.equal(addressData.billingAddress.zipCode);
        expect(billingAddressInfo['Country:']).to.equal(addressData.billingAddress.country);
      });
  
      cy.wrap(orderPage.getShippingAddressInfo()).then((shippingAddressInfo) => {
        expect(shippingAddressInfo['First name:']).to.equal(addressData.shippingAddress.firstName);
        expect(shippingAddressInfo['Last name:']).to.equal(addressData.shippingAddress.lastName);
        expect(shippingAddressInfo['Address 1:']).to.equal(addressData.shippingAddress.address1);
        expect(shippingAddressInfo['Address 2:']).to.equal(addressData.shippingAddress.address2);
        expect(shippingAddressInfo['City:']).to.equal(addressData.shippingAddress.city);
        expect(shippingAddressInfo['State:']).to.equal(addressData.shippingAddress.state);
        expect(shippingAddressInfo['Zip:']).to.equal(addressData.shippingAddress.zipCode);
        expect(shippingAddressInfo['Country:']).to.equal(addressData.shippingAddress.country);
        expect(shippingAddressInfo['Courier:']).to.equal(addressData.shippingAddress.courier);
      });
    });
  
    cy.fixture('cart.json').then((cartData) => {
      orderPage.getItemRows().then((rows) => {
        expect(rows).to.have.length(1);
  
        const firstRow = rows.eq(0);
        orderPage.getItemId(firstRow).should('eq', cartData.items[0].itemId);
        orderPage.getItemQuantity(firstRow).should('eq', String(cartData.items[0].quantity));
        orderPage.getItemPrice(firstRow).should('eq', '$' + cartData.items[0].listPrice.toFixed(2));
        orderPage.getItemTotalCost(firstRow).should('eq', '$' + cartData.items[0].totalCost.toFixed(2));
      });
  
      orderPage.getTotalCost().should('eq', cartData.subTotal.toFixed(2));
    });

  });
});
