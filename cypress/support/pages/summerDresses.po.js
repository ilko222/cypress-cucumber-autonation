import MainClass from "./mainClass.po";
const banner = ".rte";
const sorterDropDown = '.selector';
const product = '.replace-2x';
const wishList = '#wishlist_button';
const errorBox = '.fancybox-outer';
const header = '.cat-name';
const navBar = '.breadcrumb';
const priceSlider = '.ui-slider-handle';
const accountButton = '.account';


class SummerDresses {
    static goToSummerDressesPage() {
        cy.visit('/');
        cy.xpath('.//*[@title="Summer Dresses"]').eq(0).click({ force: true });
    };

    //scenario 1
    static bannerCheck() {
        cy.get(banner).should('contain', 'Short dress, long dress, silk dress, printed dress, you will find the perfect dress for summer.')
        cy.get("[width='1170']").eq(0).should('be.visible')
    };
    static headerCheck() {
        cy.get(header).should('contain', 'Summer Dresses');
    };
    static navBarCheck() {
        cy.get(navBar).should('contain', 'Summer Dresses');
    }
    static checkCenterColumn() {
        cy.get('#center_column').should('have.class', 'center_column');
        cy.get('#center_column').should('be.visible');
        cy.get('#center_column .ajax_block_product').should('have.length', 3);                                 
    }
    //end of scenario 1

    //scenario 2
    static setInStockSortingDropdownOption() {
        cy.get(sorterDropDown).click();
        cy.get('.selectProductSort').select('In stock');
    }
    static checkInStockSortingDropdownOption() {
        cy.get('.available-now').each(($el, index, $list) => {
            cy.log('index ' + index + ' : ' + $el.text())
            cy.get($el).should('contain', 'In stock')
        });
    }
    static setPriceSliderMinPrice() {
        cy.get(priceSlider).eq(1).trigger('mousedown', { which: 1 })
        cy.get(priceSlider).eq(0).trigger('mousemove').trigger('mouseup', { force: true });
        //how to create positive case to compare the slider price & the product price?
    }
    static checkPriceSliderMinPrice() {
        cy.get('.product_list').should('contain', 'There are no products.')
        SummerDresses.goToSummerDressesPage();
        //how to create positive case to compare the slider price & the product price?
    }
    static setColorSorter() {
        cy.get('#ul_layered_id_attribute_group_3 li').contains('Black').click();        
    }
    static checkColorSorter() {
        cy.get(".color_to_pick_list").as('color').should('have.length', 3);    
    }
    static setCompositionSorterPolyester() {
        cy.get('#layered_id_feature_1').click();       
    }
    static checkCompositionSorterPolyester() {
        cy.get('.product_img_link').should('have.length', 2); 
    }
    static setCompositionSorterViscose() {
        cy.get('#layered_id_feature_3').click();       
    }
    static checkCompositionSorterViscose() {
        cy.get('.product_img_link').should('have.length', 1);         
    }
    static setStyleSorterCasual() {
        cy.get('#layered_id_feature_11').click();       
    }
    static checkStyleSorterCasual() {
        cy.get('.product_img_link').should('have.length', 1);     
    }
    static setStyleSorterGirly() {
        cy.get('#layered_id_feature_13').click();       
    }
    static checkStyleSorterGirly() {
        cy.get('.product_img_link').should('have.length', 2);         
    }
    static setPropertySorterShortDress() {
        cy.get('#layered_id_feature_19').click();       
    }
    static checkPropertySorterShortDress() {
        cy.get('.product_img_link').should('have.length', 3);        
    }
    static setAvailabilitySorterInStock() {
        cy.get('#layered_quantity_1').click();       
    }
    static checkAvailabilitySorterInStock() {
        cy.get('.product_img_link').should('have.length', 3);     
    }
    static goToOurStoresPage() {
        cy.get('.block_content').contains('Our stores').click();       
    }
    static checkOurStoresPageUrl() {
        cy.url().should('contain', 'stores');    
    }
    static goToSpecialsPage() {
        cy.get('.btn').contains('All specials').click();       
    }
    static checkSpecialsPage() {
        cy.url().should('contain', 'prices-drop');     
    }
    //end of scenario 2

    //scenario 3
    static addToWishlistCheck(string) {
        cy.get(product).eq(0).click({ force: true });
        cy.get(wishList).click({ force: true });
        cy.get(errorBox).should('contain', string);
    }
    static wishlistPageCheck() {
        cy.get(accountButton).click({ force: true });
        cy.get('.icon-heart').click({ force: true });
        cy.get('.table-bordered').should('be.visible');
    }
    static editWishlist() {
        cy.get('tbody tr td a').contains('My wishlist').click();
        cy.get('.wishlist_product_detail .form-group').eq(0).clear().type('10');
        cy.get('#priority_5_19').select('High');
        cy.get('.btn_action').contains('Save').click();
    }
    static wishlistCheck() {
        cy.get('tbody tr td').eq(1).should('contain', '10');
        cy.get('.icon-remove').click({multiple: true});
        cy.get('.table-bordered').should('have.length', '0');
    }

    //end of scenario 3
}

export default SummerDresses