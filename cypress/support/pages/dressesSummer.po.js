

class DressesSummer {
    static categoryDresses(){
        cy.xpath("(//*[text()='Summer Dresses'])[2]").click({force: true});
    }
    static categorySummerDresses(){
        cy.get('.product-container').as('itemsSummerDresses');
        cy.get('@itemsSummerDresses').should('have.length', 3);
        cy.url().should('include', 'id_category=11');
    }
}
export default DressesSummer