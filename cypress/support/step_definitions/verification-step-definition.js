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

//Scenario 1
Then('Check the banner', () => {
    SummerDresses.bannerCheck();
})

Then('Check the header', () => {
    SummerDresses.headerCheck();
})

Then('Check the navigation bar', () => {
    SummerDresses.navBarCheck();
})

Then('Check the logo', () => {
    SummerDresses.logoCheck();
})

Then('Check the cart', () => {
    SummerDresses.cartCheck();
})

Then('Check the phone call icon', () => {
    SummerDresses.phoneCallCheck();
})

Then('Check the menu', () => {
    SummerDresses.checkMenu();
})

Then('Check the left column', () => {
    SummerDresses.checkLeftColumn();
})

Then('Check the center column', () => {
    SummerDresses.checkCenterColumn();
})

Then('Check the left news letter block', () => {
    SummerDresses.checkNewsLetterBlockLeft();
})

Then('Check the footer', () => {
    SummerDresses.checkFooter();
})

Then('Check the bottom footer', () => {
    SummerDresses.checkBottomFooter();
})

//end of scenario 1

//scenario 2

Then('In stock items are visible', () => {
    SummerDresses.checkInStockSortingDropdownOption();
})

Then('There are no products message is visible', () => {
    SummerDresses.checkPriceSliderMinPrice();
})

Then('Items with specific colour are visible', () => {
    SummerDresses.checkColorSorter();;
})

//end of scenario 2

//scenario 3

Then('I verify Add To Wishlist functionality user logged out', () => {
   SummerDresses.addToWishlistCheck('You must be logged in to manage your wishlist.');
})
Then('I verify Add To Wishlist functionality user logged in', () => {
    SummerDresses.addToWishlistCheck('Added to your wishlist.');
 })
 Then('I check the Wishlist', () => {
    SummerDresses.wishlistCheck();
 })

//end of scenario 3





