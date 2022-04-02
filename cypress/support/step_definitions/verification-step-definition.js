import {Then} from 'cypress-cucumber-preprocessor/steps'
import MainPage from '../pages/mainPage.po'
import SearchPage from '../pages/searchPage.po'
import SummerDresses from '../pages/summerDresses.po'
import Tshirts from '../pages/tShirts.po'

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

//summer dresses po

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
    SummerDresses.checkColorSorter();
})
Then('Items with polyester composition are visible', () => {
    SummerDresses.checkCompositionSorterPolyester();;
})
Then('Items with viscose composition are visible', () => {
    SummerDresses.checkCompositionSorterViscose();;
})
Then('Items with casual style are visible', () => {
    SummerDresses.checkStyleSorterCasual();
})
Then('Items with girly style are visible', () => {
    SummerDresses.checkStyleSorterGirly();
})
Then('Items with short dresses property are visible', () => {
    SummerDresses.checkPropertySorterShortDress();
})
Then('Items with in stock availability are visible', () => {
    SummerDresses.checkAvailabilitySorterInStock();
})
Then('I go to our stores page', () => {
    SummerDresses.checkOurStoresPageUrl();
})
Then('I go to specials page', () => {
    SummerDresses.checkSpecialsPage();
})
//end of scenario 2

//scenario 3

Then('I verify Add To Wishlist functionality user logged out', () => {
   SummerDresses.addToWishlistCheck('You must be logged in to manage your wishlist.');
})
Then('I verify Add To Wishlist functionality user logged in', () => {
    SummerDresses.addToWishlistCheck('Added to your wishlist.');
 })
 Then('I check the Wishlist page', () => {
    SummerDresses.wishlistPageCheck();
 })
 Then('I edit the Wishlist', () => {
    SummerDresses.editWishlist();
 })
 Then('I check the Wishlist', () => {
    SummerDresses.wishlistCheck();
 })

//end of scenario 3


//tShirts po

//scenario 1
Then('Check the tshirts banner', () => {
    Tshirts.bannerCheck();
})

Then('Check the tshirts header', () => {
    Tshirts.headerCheck();
})

Then('Check the tshirts navigation bar', () => {
    Tshirts.navBarCheck();
})

Then('Check the tshirts logo', () => {
    Tshirts.logoCheck();
})

Then('Check the tshirts cart', () => {
    Tshirts.cartCheck();
})

Then('Check the tshirts phone call icon', () => {
    Tshirts.phoneCallCheck();
})

Then('Check the tshirts menu', () => {
    Tshirts.checkMenu();
})

Then('Check the tshirts left column', () => {
    Tshirts.checkLeftColumn();
})

Then('Check the tshirts center column', () => {
    Tshirts.checkCenterColumn();
})

Then('Check the tshirts left news letter block', () => {
    Tshirts.checkNewsLetterBlockLeft();
})

Then('Check the tshirts footer', () => {
    Tshirts.checkFooter();
})

Then('Check the tshirts bottom footer', () => {
    Tshirts.checkBottomFooter();
})
//end of scenario 1

//scenario 2
Then('There are no products message on the tshirts page is visible', () => {
    Tshirts.checkPriceSliderMinPrice();
})

Then('Items with specific colour on the tshirts page are visible', () => {
    Tshirts.checkColorSorter();;
})

Then('Items with cotton composition are visible', () => {
    Tshirts.checkCompositionSorterCotton();;
})