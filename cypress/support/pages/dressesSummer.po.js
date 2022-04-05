const pictureItem = '#view_full_size'
const viewBigger = 'span[class="span_link no-print"]'
const fullPicture = '.fancybox-skin'
const backToShopping ='.continue > span'
const proceedToCheckout ='.button-medium > span'
const productFirst = "li[class='ajax_block_product col-xs-12 col-sm-6 col-md-4 first-in-line last-line first-item-of-tablet-line first-item-of-mobile-line last-mobile-line']"
const productSecond = 'li[class="ajax_block_product col-xs-12 col-sm-6 col-md-4 last-line last-item-of-tablet-line last-mobile-line"]'
const compareButton = 'button[class="btn btn-default button button-medium bt_compare bt_compare_bottom"]'
const productThird = 'li[class="ajax_block_product col-xs-12 col-sm-6 col-md-4 last-in-line last-line first-item-of-tablet-line last-item-of-mobile-line last-mobile-line"]'
const productFourth = 'li[class="ajax_block_product col-xs-12 col-sm-6 col-md-4 first-in-line last-line first-item-of-tablet-line first-item-of-mobile-line last-mobile-line"]'

class DressesSummer {
    static categoryDresses(){
        cy.xpath("(//*[text()='Summer Dresses'])[2]").click({force: true});
    }
    static categorySummerDresses(){
        cy.get('.product-container').as('itemsSummerDresses');
        cy.get('@itemsSummerDresses').should('have.length', 3);
        cy.url().should('include', 'id_category=11');
    }
    static viewMoreFunc(){
        cy.xpath('(//span[text() = "More"])[1]').click({force: true});
    }
    static prodFunc(){
        cy.get("h1[itemprop='name']").should('have.text', 'Printed Summer Dress');
    }
    static prodPicture(){
        cy.get(pictureItem).should('be.visible');
    }
    static pictureViewBigger(){
        cy.get(viewBigger).should('have.text', 'View larger').click({force: true});
        cy.get(fullPicture).should('be.visible'); 
        cy.get('a[title="Close"]').click();
    }
    static picturesMini(){
        cy.get('#views_block').should('be.visible')
    }
    static productInfoPart(){
        cy.get("div>p>span[id='our_price_display']").should('be.visible');
        cy.get('.icon-plus').click();
        cy.get('#quantity_wanted').should('have.value', '2');
        cy.get('#group_1').select('2').contains('M');
        cy.get('#group_1').select('3').should('have.value', '3');
        cy.get('#color_11').click().should('not.be.disabled');
    }
    static addToCart(){
        cy.get("button[name='Submit']").should('not.be.disabled');
        cy.get('#wishlist_button').should('not.be.disabled').click();
        cy.get('div>p[class="fancybox-error"]').should('contain', 'You must be logged in to manage your wishlist.');
        
    }
    static addToCompare(){
        cy.get(productFirst).find('div>a[class="add_to_compare"]').click({force: true});
        cy.wait(1000);
        cy.get(compareButton).should('contain', "1");
        cy.get(productSecond).find('div>a[class="add_to_compare"]').click({force: true});
        cy.wait(1000);
        cy.get(compareButton).should('contain', '2');
        cy.get(compareButton).click();
    }
    static addToCompareFourItems(){
        cy.get(productFirst).find('div>a[class="add_to_compare"]').click({force: true});
        cy.wait(1000);
        cy.get(compareButton).should('contain', "1");
        cy.get(productSecond).find('div>a[class="add_to_compare"]').click({force: true});
        cy.wait(1000);
        cy.get(compareButton).should('contain', '2');
        cy.get(productThird).find('div>a[class="add_to_compare"]').click({force: true});
        cy.wait(1500);
        cy.get(compareButton).should('contain', '3');
        cy.xpath('(//*[text()="Evening Dresses"]) [2]').click({force: true});
        cy.get(productFourth).find('div>a[class="add_to_compare"]').click({force: true});
    }

    static comparePage(){
        cy.url().should('include', 'products-comparison&compare_product_list');
    }
    static errorCompare(){
        cy.get('.fancybox-error').should('contain', 'You cannot add more than 3 product(s) to the product comparison');
    }



}
export default DressesSummer