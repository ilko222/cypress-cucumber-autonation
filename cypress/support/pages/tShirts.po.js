const banner = '.content_scene_cat_bg';
const header = '.cat-name';


class Tshirts {
    static bannerCheck() {
        cy.get(banner).should('contain', 'The must have of your wardrobe, take a look at our different colors,')
        cy.get(".category-name").should('be.visible').and('contain', 'T-shirts')
    };

    static headerCheck() {
        cy.get(header).should('contain', 'T-shirts').and('be.visible');
    };
}


export default Tshirts