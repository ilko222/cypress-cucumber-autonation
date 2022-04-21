const banner = '.content_scene_cat_bg';
const header = '.cat-name';
const navBar = '.breadcrumb';
const logo = '.logo';
const cart = '.shopping_cart';
const menu = '.sf-menu > li';
const newsLetterBlockLeft = '#newsletter_block_left';
const footer = '#footer  > .row';
const priceSlider = '.ui-slider-handle';
const addToCartBtn = '.ajax_add_to_cart_button ';
var randomEmail = require('random-email');
var randomize = require('randomatic');


class Tshirts {

    static goToTshirtsPage() {
        cy.visit('/');
        cy.xpath("//div[@id='block_top_menu']/ul/li[3]/a[@title='T-shirts']").click();
    }

    //scenario 1

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
        cy.get(footer).children().eq(5).should('have.class', 'bottom-footer').and('contain', '© 2014').and('have.length', 1);
    };
    static checkNewsLetterBlockLeft() {
        cy.get(newsLetterBlockLeft).should('have.class', 'block').and('be.visible').and('contain', 'Newsletter');
    };
    static checkBottomFooter() {
        cy.get('.bottom-footer').should('contain', 'Ecommerce software by PrestaShop™').and('contain', '© 2014');
        cy.get('.bottom-footer>div').children().should('have.class', '_blank').and('have.attr', 'target', '_blank');
    };

    //end of scenario 1

    //scenario 2

    static setPriceSliderMinPrice() {
        cy.get(priceSlider).eq(1).trigger('mousedown', { which: 1 })
        cy.get(priceSlider).eq(0).trigger('mousemove').trigger('mouseup', { force: true });
    };
    static checkPriceSliderMinPrice() {
        cy.get('.product_list').should('contain', 'There are no products.')
        Tshirts.goToTshirtsPage();
    };

    static setColorSorter() {
        cy.get('#ul_layered_id_attribute_group_3 li').contains('Orange').click();        
    };
    static checkColorSorter() {
        cy.get(".color_to_pick_list").as('color').should('have.length', 1); 
        Tshirts.goToTshirtsPage();
    };

    static setCompositionSorterCotton() {
        cy.get('#layered_id_feature_5').click();       
    };
    static checkCompositionSorterCotton() {
        cy.get('.product_img_link').should('have.length', 1);
        Tshirts.goToTshirtsPage();
    };
    //end of scenario 2

    //scenario 3

    static signInDuringCheckoutFlow(email, password) {
        cy.get('#email').type(email);
        cy.get('#passwd').type(password);
        cy.get('#SubmitLogin').contains('Sign in').click();
    };
    static createNewAccountDuringCheckoutFlow() {
        cy.get('#email_create').type(randomEmail({ domain: 'mail.com' }));
        cy.get('#SubmitCreate').contains('Create an account').click({force: true});
        //cy.url().should('contain', 'account-creation'); Should be working well, but is not stable
        cy.get('#id_gender1').check();
        cy.get('#customer_firstname').type(randomize('Aa'));
        cy.get('#customer_lastname').type(randomize('Aa'));
        cy.get('#passwd').type(randomize('*', 10));
        cy.get('#days').select('1');
        cy.get('#months').select('January');
        cy.get('#years').select('1999');
        cy.get('#address1').type(randomize('Aa0'));
        cy.get('#city').type(randomize('Aa'));
        cy.get('#id_state').select('Alabama');
        cy.get('#postcode').type(randomize('0', 5));
        cy.get('#phone_mobile').type(randomize('0', 10));
        cy.get('#submitAccount').click();
    };
    static termsOfServiceConfirmation() {
        cy.get('#cgv').check();
        cy.get('.cart_navigation > .button > span').click();
    };
    static bankwirePaymentMethod(text) {
        cy.get('.bankwire').click();
        cy.get('#cart_navigation > .button > span').click();
        cy.get('.box').should('contain', text);
        cy.get('[title="View my shopping cart"] > span').should('have.class', 'ajax_cart_no_product');
    };
    static checkPaymentMethod(text) {
        cy.get('.cheque').click();
        cy.get('#cart_navigation > .button > span').click();
        cy.get('.box').should('contain', text);
        cy.get('[title="View my shopping cart"] > span').should('have.class', 'ajax_cart_no_product');
    };
    static addOneItemToCart() {
        cy.xpath("//div[@id='block_top_menu']/ul/li[3]/a[@title='T-shirts']").click();
        cy.get(addToCartBtn).click({force: true});
        cy.wait(8000);
        cy.get('.layer_cart_product').should('be.visible');
        cy.get('.icon-ok').should('be.visible');
        cy.get('#layer_cart_product_quantity').should('contain', '1');
        cy.get('.button-medium').contains('Proceed to checkout').click();
    };
    static addMultipleItemsToCart() {
        cy.xpath("//div[@id='block_top_menu']/ul/li[3]/a[@title='T-shirts']").click();
        cy.get(addToCartBtn).click({force: true});
        cy.wait(8000);
        cy.get('.exclusive-medium').contains('Continue shopping');
        cy.get(addToCartBtn).click({force: true});
        cy.wait(8000);
        cy.get('.layer_cart_product').should('be.visible');
        cy.get('.icon-ok').should('be.visible');
        cy.get('#layer_cart_product_quantity').should('contain', '2');
        cy.get('.button-medium').contains('Proceed to checkout').click();
    };
    static logOut() {
        cy.get('.logout').click({ force: true });
    }
    static checkoutUserLoggedOutBankwire() {
        cy.get('.standard-checkout').contains('Proceed to checkout').click({force: true});
        Tshirts.signInDuringCheckoutFlow('asd1234@mail.com', 'Password1234');
        cy.get('.cart_navigation > .button > span').click();
        Tshirts.termsOfServiceConfirmation();
        Tshirts.bankwirePaymentMethod('Your order on My Store is complete');
    };
    static checkoutUserLoggedOutCheck() {
        cy.get('.standard-checkout').contains('Proceed to checkout').click({force: true});
        Tshirts.signInDuringCheckoutFlow('asd1234@mail.com', 'Password1234');
        cy.get('.cart_navigation > .button > span').click();
        Tshirts.termsOfServiceConfirmation();
        Tshirts.checkPaymentMethod('Your check must include:');
    };
    static checkoutUserLoggedInBankwire() {
        cy.get('.standard-checkout').contains('Proceed to checkout').click({force: true});
        cy.get('.cart_navigation > .button > span').click();
        Tshirts.termsOfServiceConfirmation();
        Tshirts.bankwirePaymentMethod('Your order on My Store is complete');
    };
    static checkoutUserLoggedInCheck() {
        cy.get('.standard-checkout').contains('Proceed to checkout').click({force: true});
        cy.get('.cart_navigation > .button > span').click();
        Tshirts.termsOfServiceConfirmation();
        Tshirts.checkPaymentMethod('Your check must include:');
    };
    static checkoutCreateNewAccountBankwire() {
        cy.get('.standard-checkout').contains('Proceed to checkout').click({force: true});
        Tshirts.createNewAccountDuringCheckoutFlow();
        cy.get('.cart_navigation > .button > span').click();
        Tshirts.termsOfServiceConfirmation();
        Tshirts.bankwirePaymentMethod('Your order on My Store is complete');
    };
    static checkoutCreateNewAccountCheck() {
        cy.get('.standard-checkout').contains('Proceed to checkout').click({force: true});
       
        Tshirts.createNewAccountDuringCheckoutFlow();
        cy.get('.cart_navigation > .button > span').click();
        Tshirts.termsOfServiceConfirmation();
        Tshirts.checkPaymentMethod('Your check must include:');
    };
    static checkoutWrongPassword() {
        cy.get('.standard-checkout').contains('Proceed to checkout').click({force: true});
        Tshirts.signInDuringCheckoutFlow('asd1234@mail.com', 'Password');
        cy.get('.alert-danger').contains('There is 1 error').should('be.visible');
        cy.get('.alert-danger').children().should('contain', 'Authentication failed.');
    };
    static checkoutWrongEmail() {
        cy.get('.standard-checkout').contains('Proceed to checkout').click({force: true});
        Tshirts.signInDuringCheckoutFlow('asd@mail.com', 'Password1234');
        cy.get('.alert-danger').contains('There is 1 error').should('be.visible');
        cy.get('.alert-danger').children().should('contain', 'Invalid email address.');
    };
    static checkoutTermsOfServiceNotChecked() {
        cy.get('.standard-checkout').contains('Proceed to checkout').click({force: true});
        Tshirts.signInDuringCheckoutFlow('asd1234@mail.com', 'Password1234');
        cy.get('.cart_navigation > .button > span').click();
        cy.get('.cart_navigation > .button > span').click();
        cy.get('.fancybox-error').should('be.visible').and('contain', 'You must agree to the terms of service before continuing.');
        cy.get('.fancybox-close').click();
    };
    static checkoutReadingTermsOfService() {
        cy.get('.standard-checkout').contains('Proceed to checkout').click({force: true});
        Tshirts.signInDuringCheckoutFlow('asd1234@mail.com', 'Password1234');
        cy.get('.cart_navigation > .button > span').click();
        cy.get('.iframe').click();
        cy.get('.fancybox-opened').children().should('be.visible');
        cy.get('.fancybox-close').click();
    };
    static checkoutUserexistingEmailAccountCreation() {
        cy.get('.standard-checkout').contains('Proceed to checkout').click({force: true});
        cy.get('#email_create').type('asd1234@mail.com');
        cy.get('#SubmitCreate').contains('Create an account').click({force: true});
        cy.wait(8000);
        cy.get('#create_account_error').should('be.visible').and('contain', 'An account using this email address has already been registered.');
    };
}

export default Tshirts