import {And, Given, Then, When} from 'cypress-cucumber-preprocessor/steps'
import MainPage from '../pages/mainPage.po'
import SearchPage from '../pages/searchPage.po'

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