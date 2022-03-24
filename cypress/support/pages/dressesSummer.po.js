const pictureItem = '#view_full_size'
const viewBigger = 'span[class="span_link no-print"]'
const fullPicture = '.fancybox-skin'

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

}
export default DressesSummer