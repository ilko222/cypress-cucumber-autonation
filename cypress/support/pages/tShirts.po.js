const banner = '.content_scene_cat_bg';
const header = '.cat-name';
const navBar = '.breadcrumb';
const logo = '.logo';
const cart = '.shopping_cart';

class Tshirts {
    static bannerCheck() {
        cy.get(banner).should('contain', 'The must have of your wardrobe, take a look at our different colors,')
        cy.get(".category-name").should('be.visible').and('contain', 'T-shirts')
    };
    static headerCheck() {
        cy.get(header).should('contain', 'T-shirts').and('be.visible');
    };
    static navBarCheck() {
        cy.get(navBar).should('contain', 'T-shirts');
        cy.get('.breadcrumb > a').each(($el, index, $list) => {
            cy.get($el).should('have.attr', 'href')
        });
        cy.get('.breadcrumb > a').eq(0).should('have.class', 'home').and('have.attr', 'href', 'http://automationpractice.com/');
        cy.get('.breadcrumb > a').eq(1).should('contain', 'Women').and('have.attr', 'href', 'http://automationpractice.com/index.php?id_category=3&controller=category');
        cy.get('.breadcrumb > a').eq(2).should('contain', 'Tops').and('have.attr', 'href', 'http://automationpractice.com/index.php?id_category=4&controller=category');
    }
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
}


export default Tshirts