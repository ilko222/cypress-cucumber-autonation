Feature: Go to the Summer Dresses Page and check the layout

    Background: User navigates to the Woman Summer Dresses page
        Given I navigate to the Woman Summer Dresses page

    Scenario: 1 Check the Summer Dresses page layout
        Then Check the banner
        Then Check the header
        Then Check the navigation bar
        Then Check the logo
        Then Check the cart
        Then Check the phone call icon
        Then Check the menu
        Then Check the left column
        Then Check the center column
        Then Check the left news letter block
        Then Check the footer
        Then Check the bottom footer

    Scenario: 2 Check the sorting functionality
        When I select in stock option in the sorter dropdown
        Then In stock items are visible
        When I set price slider in minimal price
        Then There are no products message is visible
        When I set specific color in the filter section
        Then Items with specific colour are visible
        When I set polyester compositions in the filter section
        Then Items with polyester composition are visible
        When I set viscose compositions in the filter section
        Then Items with viscose composition are visible
        When I set casual style in the filter section
        Then Items with casual style are visible
        When I set girly style in the filter section
        Then Items with girly style are visible
        When I set short dress in properties in the filter section
        Then Items with short dresses property are visible
        When I set in stock in availability in the filter section
        Then Items with in stock availability are visible
        When I click on our stores in the information section
        Then I go to our stores page
        When I click on all specials in the specials section
        Then I go to specials page

    Scenario: 3 Check the Add To Wishlist functionality
         Then I verify Add To Wishlist functionality user logged out
         When The user is logged in
         When I navigate to the Woman Summer Dresses page
         Then I verify Add To Wishlist functionality user logged in
         When I navigate to the Woman Summer Dresses page
         Then I check the Wishlist page
         Then I edit the Wishlist
         Then I check the Wishlist
