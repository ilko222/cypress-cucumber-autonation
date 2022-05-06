Feature: User proseeds to Checkout 

    Background: User navigates to the website 
        Given I navigate to the website, main page

    Scenario: 1 Check process Checkout when user isn't logged-in  
    When I add the item to the shopping cart from the main page
    And I proceed to the Checkout page 
    Then I should be redirected to the Sign in page 

    Scenario: 2 Check process Checkout while user is logged in
    When I add the item from the main page and click on Proceed to CheckOut page
    And I should enter valid credentials on Sign In page
    Then I should see delivery and billing addresses 
    When I click on Proceed to Checkout, I accept the terms of service
    Then I should be able to see two types of payment 
    When I click on Payment bank wire
    Then I should be presented with conformation of my order

    Scenario: 3 Check process Checkout while user is logged in but doesn't agree with Turms of service 
    When I add the item on the main page and Proceed to CheckOut
    And I don't tick the option Turms of service
    Then I should see the error pop-up 

    Scenario: 4 Check process CheckOut while user isn't logged in and interrupts it by clicking on Continue shopping 
    When I add the product on the main page and Proceed to CheckOut
    And On Summery step I click on Continue shopping
    Then I should be on category page 

    Scenario: 5 Check process CheckOut when user is logged out on last step of it
    When I add the item to Shopping card, proceed to CheckOut
    And On Payment step I log-out
    Then Shopping Cart should be empty 

