Feature: Check functionality 'More' on subcategory Summer Dresses

    Background: User navigates to the Summer Dresses page
        Given I navigate to the category Dresses, subcategory Summer Dresses

        Scenario: 1 Check View More functionality 
        When I navigate to the first item and click "More"
        Then I should be redirected to the product page

        Scenario: 2 Check product page functionality on subcategory Summer Dresses
        When I click on More button
        Then I should see the the picture of the item
        When I click View larger 
        Then I can see the picture of the product 
        When I click on mini images
        Then They are clickable

        Scenario: 3 Check info product box
        When I click on More button
        Then I should be able to see the price of the product, change quantity, choose color and change size

        Scenario: 4 Check info product box - Add To Cart and Add to WishList
        When I on category page and click on the item
        Then I should be able to see the the buttons Add to Cart and Add To Wishlist, shouldn't be disabled
        
        

    