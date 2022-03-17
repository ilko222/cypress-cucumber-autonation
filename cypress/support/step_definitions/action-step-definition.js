import {And, Given, Then, When} from 'cypress-cucumber-preprocessor/steps'
import MainPage from '../pages/mainPage.po'
import SearchPage from '../pages/searchPage.po'
import SummerDresses from '../pages/summerDresses.po';

Given('I navigate to the Main Page', () => {
    cy.visit('/');
})

Given('I navigate to the Woman Summer Dresses page', () => {
    cy.visit('/');
    cy.xpath('.//*[@title="Summer Dresses"]').eq(0).click({force:true})
})

When('I click on Top Menu item with text {string}', (menuItemText) => {
    MainPage.selectTopMenuItemWithText(menuItemText);
})

When('I input {string} into the Top Search field and click Search button', (text) => {
    MainPage.typeInTopSearchInputField(text);
    MainPage.clickOnTopSearchButton();
})

When('I select in stock option in the sorter dropdown', () => {
    SummerDresses.setInStockSortingDropdownOption();
})

When('I set price slider in minimal price', () => {
    SummerDresses.setPriceSliderMinPrice();
})

When('I set specific color in the filter section', () => {
    SummerDresses.setColorSorter();
})
