import {Then} from 'cypress-cucumber-preprocessor/steps'
import MainPage from '../pages/mainPage.po'
import SearchPage from '../pages/searchPage.po'
import SummerDresses from '../pages/summerDresses.po'

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

Then('Check the banner', () => {
    SummerDresses.bannerCheck();
})