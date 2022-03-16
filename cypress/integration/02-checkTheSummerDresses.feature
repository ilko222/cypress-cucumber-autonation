Feature: Go to the Summer Dresses Page and check the layout

    Background: User navigates to the Woman Summer Dresses page
        Given I navigate to the Woman Summer Dresses page

    Scenario: 1 Check the Summer Dresses page layout
        Then Check the banner
        Then Check the header
        Then Check the navigation bar

    Scenario: 2 Check the sorting functionality
        Then Verify sorting functionality

    Scenario: 3 Check the Add To Wishlist functionality
         Then Verify Add To Wishlist functionality user logged out