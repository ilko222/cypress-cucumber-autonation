

class SortingFilter{
    static sortByPrice(){
        cy.get('#selectProductSort').select('Price: Lowest first').should('have.value', 'price:asc');
        cy.get('#selectProductSort').select('Price: Highest first').should('have.value', 'price:desc');
        cy.get('#selectProductSort').select('Product Name: A to Z').should('have.value', 'name:asc');
        cy.get('#selectProductSort').select('Product Name: Z to A').should('have.value', 'name:desc');
        
    }
}
export default SortingFilter