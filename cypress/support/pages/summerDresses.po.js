import { should } from "chai";

const banner = ".rte";
const sorterDropDown = '.selector';
const product = '.replace-2x';
const wishList = '#wishlist_button';
const errorBox = '.fancybox-outer';
const header = '.cat-name';
const navBar = '.breadcrumb';
const priceSlider = '.ui-slider-handle';
const colorOptions = '.color-option';
const accountButton = '.account';

class SummerDresses {
    static bannerCheck() {
        cy.get(banner).should('contain', 'Short dress, long dress, silk dress, printed dress, you will find the perfect dress for summer.')
    };
    static headerCheck() {
        cy.get(header).should('contain', 'Summer Dresses');
    };

    static setInStockSortingDropdownOption() {
        cy.get(sorterDropDown).click();
        cy.get('.selectProductSort').select('In stock');
    }
    static checkInStockSortingDropdownOption() {
        cy.get('.available-now').each(($el, index, $list) => {
            cy.log('index ' + index + ' : ' + $el.text())
            cy.get($el).should('contain', 'In stock')
        });
        cy.visit('/');
        cy.xpath('.//*[@title="Summer Dresses"]').eq(0).click({ force: true })
    }

    static addToWishlistCheck(string) {
        cy.get(product).eq(0).click({ force: true });
        cy.get(wishList).click({ force: true });
        cy.get(errorBox).should('contain', string);
    }
    static logIn() {
        // cy.fixture('example.json').then(function(data){
        //     globalThis.data = data
        // });
        cy.get('.login').click({ force: true });
        cy.get('#email').type('asd1234@mail.com');
        cy.get('#passwd').type('Password1234');
        cy.get('.icon-lock').click();
    }
    static wishlistCheck() {
        cy.get(accountButton).click({ force: true });
        cy.get('.icon-heart').click({ force: true });
        cy.get('.table-bordered').should('be.visible');
    }

    static navBarCheck() {
        cy.get(navBar).should('contain', 'Summer Dresses');
    }

    static setPriceSliderMinPrice() {
        cy.get(priceSlider).eq(1).trigger('mousedown', { which: 1 })
        cy.get(priceSlider).eq(0).trigger('mousemove').trigger('mouseup', { force: true });
        //how to create positive case to compare the slider price & the product price?
    }
    static checkPriceSliderMinPrice() {
        cy.get('.product_list').should('contain', 'There are no products.')
        cy.visit('/');
        cy.xpath('.//*[@title="Summer Dresses"]').eq(0).click({ force: true })
        //how to create positive case to compare the slider price & the product price?
    }

    static setColorSorter() {
        cy.get('#layered_id_attribute_group_11').click();
        //how to iterate through the elements to find specific attribute value?        
    }
    static checkColorSorter() {
        cy.get('#color_22').should('have.attr', 'style', 'background:#434A54;'); 
        cy.visit('/');
        cy.xpath('.//*[@title="Summer Dresses"]').eq(0).click({ force: true }) 
        //how to iterate through the elements to find specific attribute value?         
    }

}

export default SummerDresses