
const firstItem = 'li[class="ajax_block_product col-xs-12 col-sm-6 col-md-4 first-in-line last-line first-item-of-tablet-line first-item-of-mobile-line last-mobile-line"]'
const secondItem = 'li[class="ajax_block_product col-xs-12 col-sm-6 col-md-4 last-line last-item-of-tablet-line last-mobile-line"]'
class BottomMenu{
    static specialsItems(){
        cy.get('li>a[title="Specials"]').click();
        cy.get('.product-container').as('itemsReducedPrice');
        cy.get('@itemsReducedPrice').should('have.length', 2);
    }
    static specialItemsDisc(){
        cy.get(firstItem).find('.price-percent-reduction').should('contain', '-20%');
        cy.get(secondItem).find('.price-percent-reduction').should('contain', '-5%');
    }
    static newProd(){
        cy.get('a[title="New products"]').click();
        cy.url().should('include', 'new-products');
    }
    static alertNewPro(){
        cy.get('p[class="alert alert-warning"]').should('contain', 'No new products.');
    }
    static bestSellers(){
        cy.get('a[title="Best sellers"]').click();
        cy.get('.product-container').should('have.length', '7');

    }

}
export default BottomMenu