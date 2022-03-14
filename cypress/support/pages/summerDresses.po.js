const banner = ".rte"

class SummerDresses {
    static bannerCheck () {
        //cy.get(banner).should('be visible');
        cy.get(banner).should('contain', 'Short dress, long dress, silk dress, printed dress, you will find the perfect dress for summer.')
    }
}

export default SummerDresses