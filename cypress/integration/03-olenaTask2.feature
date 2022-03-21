Feature: Check functionality 'More' on subcategory Summer Dresses

    Background: User navigates to the Summer Dresses page
        Given I navigate to the category Dresses, subcategory Summer Dresses

        Scenario: 1 Check View More functionality 
        When I navigate to the first item and click "More"
        Then I should be redirected to the product page 