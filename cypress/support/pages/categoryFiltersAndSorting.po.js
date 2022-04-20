

class SortingFilter{
    static sortByPrice(){
        cy.get('#selectProductSort').select('Price: Lowest first').should('have.value', 'price:asc');
        cy.get('#selectProductSort').select('Price: Highest first').should('have.value', 'price:desc');
        cy.get('#selectProductSort').select('Product Name: A to Z').should('have.value', 'name:asc');
        cy.get('#selectProductSort').select('Product Name: Z to A').should('have.value', 'name:desc');
        
    }
    static sizeFilter(){
        cy.get('#layered_id_attribute_group_1').click();
        cy.get('#uniform-layered_id_attribute_group_2').click();
        cy.get('#uniform-layered_id_attribute_group_3').click();
    }
    static colorFilters(){
        cy.get('#layered_id_attribute_group_8').click();
        cy.get('#layered_id_attribute_group_15').click();
    }
    static colorCheckingProd(){
        cy.get('li>a[id="color_40"]').should('be.visible');
        cy.get('li>a[id="color_37"]').should('be.visible');
    }

}
export default SortingFilter