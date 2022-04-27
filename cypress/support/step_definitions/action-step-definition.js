import {And, Given, Then, When} from 'cypress-cucumber-preprocessor/steps'
import MainPage from '../pages/mainPage.po'
import SearchPage from '../pages/searchPage.po'
import DressesSummer from '../pages/dressesSummer.po'
import LogIn from '../pages/logIn.po'
import NewsLetters from '../pages/subscription.po'
import SortingFilter from '../pages/categoryFiltersAndSorting.po'

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
When('I add four items to compare and click on the button Compare', () =>{
    DressesSummer.addToCompareFourItems();
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
When("I don't fill in email and password and click on Sign in button", ()=>{
    LogIn.logInEmpty();
})
Given('I navigate to the Main Page', ()=>{
    cy.visit('/');
})
When('I enter email and click on submit button', ()=>{
    NewsLetters.subscription();
})
When('I enter email that was already registered and click on submit button', ()=>{
    NewsLetters.errorSubmition();
})
When('I leave the field Newsletter empty', ()=>{
    NewsLetters.emptySubmittion();
})
Given('I navigate to the Summer Dresses category', ()=>{
    cy.visit('http://automationpractice.com/index.php?id_category=11&controller=category');
})
When('I choose Sort by', ()=>{
 SortingFilter.sortByPrice();
})
When('I click on checkboxes Size', ()=>{
    SortingFilter.sizeFilter();
})
When('I click on checkboxes Color', ()=>{
    SortingFilter.colorFilters();
})
When('I click on available option on Compositions Filter - Polyster', ()=>{
    SortingFilter.compositionFilter();

})
When('I click on Viscose', ()=>{
    cy.get('#layered_id_feature_3').click();
})
When('I click on In Stock filter', () =>{
    cy.get('#layered_quantity_1').click();
})
When('I click on View, option Grid', ()=>{
    cy.get('#grid').click();
})
When('I click on List View', ()=>{
    cy.get('#list').click();
})