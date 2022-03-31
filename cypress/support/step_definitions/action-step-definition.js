import {And, Given, Then, When} from 'cypress-cucumber-preprocessor/steps'
import MainPage from '../pages/mainPage.po'
import SearchPage from '../pages/searchPage.po'
import DressesSummer from '../pages/dressesSummer.po'
import LogIn from '../pages/logIn.po'

Given('I navigate to the Main Page', () => {
    cy.visit('/');
})

When('I click on Top Menu item with text {string}', (menuItemText) => {
    MainPage.selectTopMenuItemWithText(menuItemText);
})

When('I input {string} into the Top Search field and click Search button', (text) => {
    MainPage.typeInTopSearchInputField(text);
    MainPage.clickOnTopSearchButton();
})
When('I click on Shopping Cart',() =>{
    MainPage.clickOnShoppingCartButton();
})
When('I click on Contact us form button', () =>{
    MainPage.contactUsFunc();
})
When('I click on Sign in button',() =>{
    MainPage.signInFunc();
})
When('I click on "Popular" section and "Best Sellers"',()=>{
    MainPage.itemsOnMainPage();
})

Given('I access the main page', () => {
    cy.visit('/');

})
When('I redirect to Dresses category, subcategory Summer Dresses', ()=>{
  DressesSummer.categoryDresses();
})

Given('I navigate to the category Dresses, subcategory Summer Dresses', () =>{
    cy.visit('/');
    DressesSummer.categoryDresses();
})
When('I navigate to the first item and click "More"',()=>{
    DressesSummer.viewMoreFunc();
})
When('I click on More button', () =>{
    DressesSummer.viewMoreFunc();
})
When('I click View larger', ()=>{
    DressesSummer.pictureViewBigger();
})
When('I click on mini images', ()=>{
    DressesSummer.picturesMini();
})
When('I on category page and click on the item', () =>{
    DressesSummer.viewMoreFunc();
})
Given('I go to the category page Summer Dresses',()=>{
    cy.visit('/');
    DressesSummer.categoryDresses();
})
When("I click on the button Add to compare on the item's boxes and click on button Compare", ()=>{
    DressesSummer.addToCompare();
})
Given('User goes to the main page and goes to the Sign in page', ()=>{
    cy.visit('/');
    cy.get('div>a[class="login"]').click();
})
When('I fill in email address and password', () =>{
    LogIn.signIn();
})
And('I click on Sign in button', ()=>{
    cy.get('#SubmitLogin').click();
})
When('I fill in invalid email address and valid password', ()=>{
    LogIn.signInNegative();
})