Feature: Go to the Main Page And check Top Menu Functionality

    Background: User navigates to the Main Page
        Given I navigate to te Main Page

    Scenario: 1 Check the main Top Menu
        Then I check the Main Page
        Then I check the Top Menu item with text "Women" is not highlighted
        Then I check the Top Menu item with text "Dresses" is not highlighted
        Then I check the Top Menu item with text "T-shirts" is not highlighted
        When I click on Top Menu item with text "Women"
        Then I check the Top Menu item with text "Women" is highlighted
        When I click on Top Menu item with text "Dresses"
        Then I check the Top Menu item with text "Dresses" is highlighted
        When I click on Top Menu item with text "T-shirts"
        Then I check the Top Menu item with text "T-shirts" is highlighted

    Scenario: 2 Check the Search Functionality
        When I input "Cotton" into the Top Search field and click Search button
        Then Amout of found results is equal to 3
    
    Scenario: 3 Check the Shopping cart Functionality
    When I click on Shopping Cart
    Then I see Shopping-Cart summary with the following message "Your shopping cart is empty."
    And I should be presented with navigation bar 

    