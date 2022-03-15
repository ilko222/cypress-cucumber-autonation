const banner = ".rte";
const selector = '.selector'

class SummerDresses {
    static bannerCheck () {
        cy.get(banner).should('contain', 'Short dress, long dress, silk dress, printed dress, you will find the perfect dress for summer.')
    };

    static sortingCheck () {
        cy.get(selector). click();
        cy.get('.selectProductSort').select('In stock');

        cy.get('.available-now').each(($el, index, $list) => {
            cy.log('index ' + index + ' : ' + $el.text())
            cy.get($el).should('contain', 'In stock')
          })
          
    }
}

export default SummerDresses