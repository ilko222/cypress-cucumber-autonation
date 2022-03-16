const banner = ".rte";
const sorterDropDown = '.selector';
const product = '.replace-2x';
const wishList = '#wishlist_button';
const errorBox = '.fancybox-outer';
const header = '.cat-name';
const navBar = '.breadcrumb';

class SummerDresses {
    static bannerCheck () {
        cy.get(banner).should('contain', 'Short dress, long dress, silk dress, printed dress, you will find the perfect dress for summer.')
    };

    static headerCheck () {
        cy.get(header).should('contain', 'Summer Dresses');
    };

    static sortingCheck () {
        cy.get(sorterDropDown). click();
        cy.get('.selectProductSort').select('In stock');

        cy.get('.available-now').each(($el, index, $list) => {
            cy.log('index ' + index + ' : ' + $el.text())
            cy.get($el).should('contain', 'In stock')
          })
    }

    static addToWishlistLoggedOutCheck () {
        cy.get(product).eq(0).click({force: true});
        cy.get(wishList).click({force:true});
        cy.get(errorBox).should('contain', 'You must be logged in to manage your wishlist.');   
    }

    static navBarCheck () {
        cy.log(navBar);
        cy.get(navBar).should('contain', 'Summer Dresses');
    }
}

export default SummerDresses