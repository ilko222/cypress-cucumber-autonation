/// <reference types="cypress" />
var randomEmail = require('random-email');

class CheckApiNewsLetters{
    static newEmail(){
        return randomEmail({ domain: 'example1.com' });
    }

    static apiNewsLetter(){
    cy.request({
        method: "POST",
        url: "http://automationpractice.com/index.php",
        body: {
            email: randomEmail()
        }
      }).then(response => {
          expect(response.status).to.eql(200)
      });
    
    }
}
export default CheckApiNewsLetters


