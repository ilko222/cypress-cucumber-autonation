const banner = '.content_scene_cat_bg';
const header = '.cat-name';
const navBar = '.breadcrumb';
const logo = '.logo';
const cart = '.shopping_cart';
const menu = '.sf-menu > li';
const newsLetterBlockLeft = '#newsletter_block_left';
const footer = '#footer  > .row'

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
    static phoneCallCheck() {
        cy.get('.icon-phone').should('be.visible');
        cy.get('.shop-phone strong').should('contain', '0123-456-789');
    };
    static checkMenu() {
        cy.get(menu).should('be.visible').and('have.length', 3);
        cy.get(menu).children().eq(0).should('contain', 'Women').and('have.attr', 'href', 'http://automationpractice.com/index.php?id_category=3&controller=category');
        cy.get(menu).eq(1).should('contain', 'Dresses');
        cy.get(menu).eq(2).should('contain', 'T-shirts');
        //cy.get(menu).children().eq(1).should('have.attr', 'href', 'http://automationpractice.com/index.php?id_category=8&controller=category');      //should work but it doesn't                                      
    };
    static checkLeftColumn() {
        cy.get('#left_column').should('have.class', 'column');
        cy.get('#left_column').children().should('have.length', 4).and('have.class', 'block').and('have.attr', 'id');
    };
    static checkCenterColumn() {
        cy.get('#center_column').should('have.class', 'center_column').and('be.visible');
        cy.get('#center_column').children().should('have.length', 5).and('have.attr', 'class');
        cy.get('#center_column .ajax_block_product').should('have.length', 1);                                 
    };
    static checkFooter() {
        cy.get(footer).children().should('have.length', 8);
        cy.get(footer).children().eq(0).should('have.class', 'block').and('contain', 'Newsletter');
        cy.get(footer).children().eq(1).should('have.attr', 'id', 'social_block').and('contain', 'Follow us');
        cy.get(footer).children().eq(2).should('have.class', 'clearfix');
        cy.get(footer).children().eq(3).should('have.class', 'blockcategories_footer').and('contain', 'Categories');
        cy.get(footer).children().eq(4).should('have.attr', 'id', 'block_various_links_footer').and('contain', 'Information');
        cy.get(footer).children().eq(5).should('have.class', 'bottom-footer').and('contain', '© 2014');
        cy.get(footer).children().eq(5).should('have.length', 1);

    };
    static checkNewsLetterBlockLeft() {
        cy.get(newsLetterBlockLeft).should('have.class', 'block').and('be.visible').and('contain', 'Newsletter');
    };
}


export default Tshirts