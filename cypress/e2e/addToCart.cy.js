import ShoppingCartPage from "../page-objects/shoppingCart.page";

describe("Add pet to cart", () => {
  const shoppingCartPage = new ShoppingCartPage();

  beforeEach(() => {
    cy.visit(''); 
    cy.contains("Enter the Store").click();
  });
  
  it('should be able to add a pet to the cart', () => {
    cy.get('input[name="keyword"]').type('Iguana');
    cy.contains('Search').click();
    cy.contains('Friendly green friend').click();
    cy.contains('Add to Cart').first().click();

    cy.fixture('cart.json').then((cartData) => {
      shoppingCartPage.getItemRows().then((itemRows) => {
        itemRows.each((index, itemRow) => {
          shoppingCartPage.getItemDetails(cy.wrap(itemRow)).then((itemDetails) => {
            expect(itemDetails.itemId).to.equal(cartData.items[0].itemId);
            expect(itemDetails.productId).to.equal(cartData.items[0].productId);
            expect(itemDetails.inStock).to.be.true;
            expect(itemDetails.quantity).to.equal(cartData.items[0].quantity);
            expect(itemDetails.listPrice).to.equal('$' + cartData.items[0].listPrice.toFixed(2));
            expect(itemDetails.totalCost).to.equal('$' + cartData.items[0].totalCost.toFixed(2));
          });
        });
      });
  
      shoppingCartPage.getSubTotal().then((subTotal) => {
        expect(subTotal.text().trim()).to.equal('Sub Total: $' + cartData.subTotal.toFixed(2));
      });
    });

  });
});
