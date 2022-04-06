import {Then, And} from 'cypress-cucumber-preprocessor/steps'
import MainPage from '../pages/mainPage.po'
import SearchPage from '../pages/searchPage.po'
import DressesSummer from '../pages/dressesSummer.po'
import LogIn from '../pages/logIn.po'

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
Then('I should be shown subcategory Summer Dresses with 3 available items and correct url', () =>{
    DressesSummer.categorySummerDresses();
})
Then('I should be redirected to the product page', ()=>{
    DressesSummer.prodFunc();
})
Then('I should see the the picture of the item',()=>{
    DressesSummer.prodPicture();
})
Then('I can see the picture of the product',()=>{
    DressesSummer.pictureViewBigger();
})
Then('They are clickable', ()=>{
    DressesSummer.picturesMini();
})
Then('I should be able to see the price of the product, change quantity, choose color and change size', ()=>{
    DressesSummer.productInfoPart();
})
Then("I should be able to see the the buttons Add to Cart and Add To Wishlist, shouldn't be disabled",()=>{
    DressesSummer.addToCart();
})

Then('I should be redirected to the Page Comparising', ()=>{
    DressesSummer.comparePage();
})
Then('I should be able to see an error message', ()=>{
  DressesSummer.errorCompare();
})

Then('I should be redirected to My Account page', () =>{
    cy.url().should('contain', 'my-account');
})
Then('I should see an error message', ()=>{
    cy.get("div[class='alert alert-danger']").should('contain', 'There is 1 error');
})
Then('I should see an error message about required fields', ()=>{
    cy.get("div[class='alert alert-danger']").should('contain', 'There is 1 error');
})