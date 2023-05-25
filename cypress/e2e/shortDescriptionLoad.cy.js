import SubcategoryPetPage from "../page-objects/subcategoryPets.page";

describe("Pet short description", () => {
  const subcategoryPage = new SubcategoryPetPage();

  beforeEach(() => {
    cy.visit(''); 
    cy.contains("Enter the Store").click();
  });

  it('should be able to load short description of chosen pet', () => {
    cy.fixture('pet.json').then((petData) => {
      cy.get('input[name="keyword"]').type('Iguana');
      cy.contains('Search').click();
      cy.contains(petData.description).click();
  
      subcategoryPage.getItemRows().then((itemRows) => {
        itemRows.each((index, itemRow) => {
          subcategoryPage.getItemDetails(cy.wrap(itemRow)).then((itemDetails) => {
            expect(itemDetails.itemId).to.equal(petData.itemId);
            expect(itemDetails.productId).to.equal(petData.productId);
            expect(itemDetails.listPrice).to.equal(petData.price.toFixed(2));
          });
        });
      });
    });
  });
});
