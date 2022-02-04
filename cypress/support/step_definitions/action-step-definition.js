import {And, Given, Then, When} from 'cypress-cucumber-preprocessor/steps'
import MainPage from '../pages/mainPage.po'
import SearchPage from '../pages/searchPage.po'

Given('I navigate to te Main Page', () => {
    cy.visit('/');
})

When('I click on Top Menu item with text {string}', (menuItemText) => {
    MainPage.selectTopMenuItemWithText(menuItemText);
})

When('I input {string} into the Top Search field and click Search button', (text) => {
    MainPage.typeInTopSearchInputField(text);
    MainPage.clickOnTopSearchButton();
})
