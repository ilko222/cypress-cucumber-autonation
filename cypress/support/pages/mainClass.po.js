let users;
const logo = '.logo';
const cart = '.shopping_cart';
const menu = '.sf-menu > li';
const newsLetterBlockLeft = '#newsletter_block_left';
const footer = '#footer  > .row';

class MainClass {
    static getId() {
        
    };
    static getUser() {
        users = require("C:/Users/anyavorskyi/Desktop/cypress-cucumber-autonation/users.json");
        return users[0];
    };
    static logIn() {
        cy.get('.login').click({ force: true });
        cy.get('#email').type(MainClass.getUser().email);
        cy.get('#passwd').type(MainClass.getUser().password);
        cy.get('.icon-lock').click(); 
    };
    static logoCheck() {
        cy.get(logo).should('be.visible');
        cy.get(logo).should('have.css', 'width', '350px').and('have.css', 'height', '99px');
    };
    static cartCheck() {
        cy.get(cart).should('be.visible');
        cy.get(cart).should('contain', 'Cart');
        cy.get(cart).children().should('have.attr', 'href', 'http://automationpractice.com/index.php?controller=order');
        cy.get('.shopping_cart > a > span').should('have.attr', 'class');
    };
    static phoneCallCheck() {
        cy.get('.shop-phone').should('be.visible');
        cy.get('.shop-phone strong').should('contain', '0123-456-789');
    };
    static checkMenu() {
        cy.get(menu).should('be.visible').and('have.length', 3);
        cy.get(menu).children().eq(0).should('contain', 'Women').and('have.attr', 'href', 'http://automationpractice.com/index.php?id_category=3&controller=category');
        cy.get(menu).eq(1).should('contain', 'Dresses');
        cy.get(menu).eq(2).should('contain', 'T-shirts');
    };
    static checkLeftColumn() {
        cy.get('#left_column').should('have.class', 'column');
        cy.get('#left_column').children().should('have.length', 4).and('have.class', 'block').and('have.attr', 'id');
    };
    static checkNewsLetterBlockLeft() {
        cy.get(newsLetterBlockLeft).should('have.class', 'block').and('be.visible').and('contain', 'Newsletter');
    };
    static checkFooter() {
        cy.get(footer).children().should('have.length', 8);
        cy.get(footer).children().eq(0).should('have.class', 'block').and('contain', 'Newsletter');
        cy.get(footer).children().eq(1).should('have.attr', 'id', 'social_block').and('contain', 'Follow us');
        cy.get(footer).children().eq(2).should('have.class', 'clearfix');
        cy.get(footer).children().eq(3).should('have.class', 'blockcategories_footer').and('contain', 'Categories');
        cy.get(footer).children().eq(4).should('have.attr', 'id', 'block_various_links_footer').and('contain', 'Information');
        cy.get(footer).children().eq(5).should('have.class', 'bottom-footer').and('contain', '© 2014').and('have.length', 1);
        cy.get('.toggle-footer').should('have.length', 4); 
    };
    static checkBottomFooter() {
        cy.get('.bottom-footer').should('contain', 'Ecommerce software by PrestaShop™').and('contain', '© 2014');
        cy.get('.bottom-footer>div').children().should('have.class', '_blank').and('have.attr', 'target', '_blank');
    };
}

export default MainClass;