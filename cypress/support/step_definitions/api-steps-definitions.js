import {And, Given, Then, When} from 'cypress-cucumber-preprocessor/steps'
import CheckApiNewsLetters from '../pages/api.po'

Given('I navigate to the Main Page', () => {
    cy.visit('/');
})
When('I put correct email in the field', ()=>{
    CheckApiNewsLetters.apiNewsLetter();
})
Then('status should be 200', ()=>{
    CheckApiNewsLetters.apiNewsLetter();
})