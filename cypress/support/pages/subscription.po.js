var randomEmail = require('random-email');

class NewsLetters{
    static newEmail(){
        return randomEmail({ domain: 'example1.com' });
    }
    static subscription(){
        cy.get('#newsletter-input').type(randomEmail());
        cy.get('button[class="btn btn-default button button-small"]').click();
    }
    static successfullMessage(){
        cy.get('div>p[class="alert alert-success"]').should('contain', ' Newsletter : You have successfully subscribed to this newsletter.');
    }
    static errorSubmition(){
        cy.get('#newsletter-input').type('karen89@gmail.com');
        cy.get('button[class="btn btn-default button button-small"]').click();
    }
    static emptySubmittion(){
        cy.get('button[class="btn btn-default button button-small"]').click();    
        
    }

}
export default NewsLetters