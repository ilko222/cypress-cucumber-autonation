Feature: Go to the Summer Dresses Page and check the layout

    Background: User navigates to the Woman Summer Dresses page
        Given I navigate to the Woman Summer Dresses page

    Scenario: 1 Check the Summer Dresses page layout
        Then Check the banner
        Then Check the header
        Then Check the navigation bar

    Scenario: 2 Check the sorting functionality
        When I select in stock option in the sorter dropdown
        Then In stock items are visible
        When I set price slider in minimal price
        Then There are no products message is visible
        When I set specific color in the filter section
        Then Items with specific colour are visible

    Scenario: 3 Check the Add To Wishlist functionality
         Then I verify Add To Wishlist functionality user logged out
         When The user is logged in
         When I navigate to the Woman Summer Dresses page
         Then I verify Add To Wishlist functionality user logged in
         When I navigate to the Woman Summer Dresses page
         Then I check the Wishlist
