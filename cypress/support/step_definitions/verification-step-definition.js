import {Then, And} from 'cypress-cucumber-preprocessor/steps'
import MainPage from '../pages/mainPage.po'
import SearchPage from '../pages/searchPage.po'

Then('I check the Main Page', () => {
    cy.url()
    .should('eq', `${Cypress.config().baseUrl}/index.php`)
    MainPage.sliderCheck();
    MainPage.searchInputCheck();
})

Then(/I check the Top Menu item with text "(.*)" is( not)? highlighted$/, (menuItemText, notStatment) => {
    MainPage.topMenuItemCheck(menuItemText, notStatment);
})

Then('Amout of found results is equal to {int}', (amount) => {
    SearchPage.countProductsOnThePage(amount);
    SearchPage.searchResultTextEqual(amount);
})
Then('I see Shopping-Cart summary with the following message "Your shopping cart is empty."',() =>{
    MainPage.clickOnShoppingCartButton();
} )
And('I should be presented with navigation bar', () =>{
    MainPage.ShoppingNavigationBar();
})
Then('I should be redirected to Contact Us form', function () {
        MainPage.contactUsFields();
    })
Then('I should be redirected to Sign in form', () =>{
    MainPage.signInFunc();
})
And('I can see two forms: for Creating a new account and for existing account', () =>{
    MainPage.signInFunc();
})
Then('I should be shown 14 available items in both of these categories',() =>{
    MainPage.itemsOnMainPage();
})