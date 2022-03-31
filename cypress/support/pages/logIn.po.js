

const emailField = 'input[id="email"]'
const passwordField = 'input[id="passwd"]'

class LogIn {
    static signIn() {
        cy.fixture('credentials').then(userCred => {
            cy.get(emailField).type(userCred.email);
            cy.get(passwordField).type(userCred.pass);
        })
    }
    static signInNegative(){
        cy.fixture('credentials').then(userCred => {
            cy.get(emailField).type('fjj5666@gmail.com');
            cy.get(passwordField).type(userCred.pass);
            cy.get('#SubmitLogin').click();
        })
    }
}
export default LogIn