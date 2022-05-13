const emailField = 'input[id="email"]'
const passwordField = 'input[id="passwd"]'

class Checkout{
    static checkoutNotLoggedIn(){
        cy.xpath('(//*[text()="Add to cart"])[2]').click({force: true});
        cy.get('div>a[class="btn btn-default button button-medium"]').click();
    }
    static checkOutLoggedIn(){
        cy.xpath('(//*[text()="Add to cart"])[2]').click({force: true});
        cy.get('div>a[class="btn btn-default button button-medium"]').click({force: true});
        cy.get('p>a[class="button btn btn-default standard-checkout button-medium"]').click({force: true});

    }
    static logIn(){
        cy.fixture('credentials').then(userCred => {
            cy.get(emailField).type(userCred.email);
            cy.get(passwordField).type(userCred.pass);
            cy.wait(1500);
            cy.get('button[id="SubmitLogin"]').click();

        })
    }
    static checkAdress(){
        cy.get('#address_delivery').should('have.class', 'address item box');
        cy.get('#address_invoice').should('contain', 'kate pesch');
        cy.get('button[name="processAddress"]').click();   
    }
    static proceedToCheckOut(){
        cy.get('input[id="cgv"]').check();
        cy.wait(1500);
        cy.get('button[name="processCarrier"]').click();
    }
}
export default Checkout