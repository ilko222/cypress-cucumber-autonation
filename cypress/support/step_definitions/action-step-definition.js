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

//scenario 2
When('I select in stock option in the sorter dropdown', () => {
    SummerDresses.setInStockSortingDropdownOption();
})

When('I set price slider in minimal price', () => {
    SummerDresses.setPriceSliderMinPrice();
})

When('I set specific color in the filter section', () => {
    SummerDresses.setColorSorter();
})
When('I set polyester compositions in the filter section', () => {
    SummerDresses.setCompositionSorterPolyester();
})
When('I set viscose compositions in the filter section', () => {
    SummerDresses.setCompositionSorterViscose();
})
When('I set casual style in the filter section', () => {
    SummerDresses.setStyleSorterCasual();
})
When('I set girly style in the filter section', () => {
    SummerDresses.setStyleSorterGirly();
})
When('I set short dress in properties in the filter section', () => {
    SummerDresses.setPropertySorterShortDress();
})
When('I set in stock in availability in the filter section', () => {
    SummerDresses.setAvailabilitySorterInStock();
})
When('I click on our stores in the information section', () => {
    SummerDresses.goToOurStoresPage();
})
When('I click on all specials in the specials section', () => {
    SummerDresses.goToSpecialsPage();
})
//end of scenario 2

//scenario 3

When('The user is logged in', () => {
    SummerDresses.logIn();
})

//end of scenario 3

