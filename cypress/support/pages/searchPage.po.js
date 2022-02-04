const productsOnThePage = ".product-container"

class SearchPage {
    static countProductsOnThePage(amount) {
        cy.get(productsOnThePage)
            .should('have.length', amount)
    }

    static searchResultTextEqual(amount) {
        cy.contains(`${amount} results have been found.`)
    }
}

export default SearchPage