

class NewsLetters{
    static subscription(){
        cy.get('#newsletter-input').type('karen89@gmail.com');
        cy.get('button[class="btn btn-default button button-small"]').click();
    }
    static successfullMessage(){
        cy.get('div>p[class="alert alert-success"]').should('contain', ' Newsletter : You have successfully subscribed to this newsletter.');
    }

}
export default NewsLetters