Feature: Go to the Main Page And check Top Menu Functionality

    Background: User navigates to the Main Page
        Given I navigate to the Main Page

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

    Scenario: 4 Check Contact Us Functionality
        When I click on Contact us form button
        Then I should be redirected to Contact Us form

    Scenario: 5 Check Sign In functionality
        When I click on Sign in button
        Then I should be redirected to Sign in form
        And I can see two forms: for Creating a new account and for existing account

    Scenario: 6 Check quantity of the items on main page
        When I click on "Popular" section and "Best Sellers"
        Then I should be shown 14 available items in both of these categories

   
