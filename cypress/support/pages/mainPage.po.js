

const sliderRow = "#slider_row"
const searchInput = "#search_query_top"
const topLiniarMenuItems = "#block_top_menu > ul > li"
const searchButton = "[name='submit_search']"
const shoppingCart = 'a[title="View my shopping cart"]'
const shoppingCartNavigationBar = "#order_step"

class MainPage {
    static sliderCheck() {
        cy.get(sliderRow)
            .should('be.visible')
    }
    static searchInputCheck() {
        cy.get(searchInput)
            .should('be.visible')
    }
    static topMenuItemCheck(menuItemText, notStatment){
        cy.get(topLiniarMenuItems)
            .contains(menuItemText)
            .not('.submenu-container')
            .parent().then((el) => {
                if (notStatment == ' not') {
                    cy.wrap(el)
                    .should('not.have.attr', 'class')
                } else {
                    cy.wrap(el)
                    .invoke('attr', 'class')
                    .should('contain', 'sfHoverForce')
                }
            })
    }
    static selectTopMenuItemWithText(menuItemText){
        cy.get(topLiniarMenuItems)
            .contains(menuItemText)
            .not('.submenu-container')
            .click({force: true})
    }
    static typeInTopSearchInputField(text){
        this.searchInputCheck()
        cy.get(searchInput)
            .type(text)
    }
    static clickOnTopSearchButton(){
        cy.get(searchButton)
        .should('be.not.disabled')
        .click();
    }

    static elementWithTextIsDisplayed(text, timeout = 25000) {
        cy.contains(text, {timeout})
            .should('be.visible')
    }
    static clickOnShoppingCartButton(){
        cy.get(shoppingCart)
        .click({force: true});
        cy.get('[class="alert alert-warning"]')
        .should('be.visible')
    }
    static ShoppingNavigationBar(){
        cy.get(shoppingCart)
        .click({force: true});
        cy.get(shoppingCartNavigationBar).should('be.visible');
    }


}
export default MainPage