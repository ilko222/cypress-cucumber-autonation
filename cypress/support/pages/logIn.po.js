/// <reference types = 'Cypress' />

const emailField = 'input[id="email"]'
const passwordField = 'input[id="passwd"]'
class LogIn{
    static signIn(){
        cy.fixture('credentials').then(userCred => {
        cy.get(emailField).type(userCred.email);
        cy.get(passwordField).type(userCred.pass);
    })

        

    }
}
export default LogIn