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

    Scenario: 2.1 Check the sorting functionality: in stock items(dropdown)
        When I select in stock option in the sorter dropdown
        Then In stock items are visible
    Scenario: 2.2 Check the sorting functionality: price slider
        When I set price slider in minimal price
        Then There are no products message is visible
    Scenario: 2.3 Check the sorting functionality: color
        When I set specific color in the filter section
        Then Items with specific colour are visible
    Scenario: 2.4 Check the sorting functionality: compositions(polyester)
        When I set polyester compositions in the filter section
        Then Items with polyester composition are visible
    Scenario: 2.5 Check the sorting functionality: compositions(viscose)
        When I set viscose compositions in the filter section
        Then Items with viscose composition are visible
    Scenario: 2.6 Check the sorting functionality: style(casual)
        When I set casual style in the filter section
        Then Items with casual style are visible
    Scenario: 2.7 Check the sorting functionality: style(girly)
        When I set girly style in the filter section
        Then Items with girly style are visible
    Scenario: 2.8 Check the sorting functionality: short dress
        When I set short dress in properties in the filter section
        Then Items with short dresses property are visible
    Scenario: 2.9 Check the sorting functionality: in stock items(filter section)
        When I set in stock in availability in the filter section
        Then Items with in stock availability are visible
    Scenario: 2.10 Check the sorting functionality: our stores
        When I click on our stores in the information section
        Then I go to our stores page
    Scenario: 2.11 Check the sorting functionality: all specials
        When I click on all specials in the specials section
        Then I go to specials page

    # Scenario: 3 Check the Add To Wishlist functionality
    #      Then I verify Add To Wishlist functionality user logged out
    #      When The user is logged in
    #      When I navigate to the Woman Summer Dresses page
    #      Then I verify Add To Wishlist functionality user logged in
    #      When I navigate to the Woman Summer Dresses page
    #      Then I check the Wishlist page
    #      Then I edit the Wishlist
    #      Then I check the Wishlist
