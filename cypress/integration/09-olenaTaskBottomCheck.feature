Feature: Go to the website and check Bottom Menu Functionality
  
  Background: User navigates to the Main Page
        Given I navigate to the Main Page

    Scenario: 1 User navigates to the Information menu
    When I click on Specials category
    Then I should see items with reduced price
    
    Scenario: 2 User navigates to New products on Bottom menu
    When I click on New products
    Then I should be presented with message of quantity New products

    Scenario: 3 User navigates to Best Sellers on Bottom menu
    When I click on Best Sellers on bottom website
    Then I should see Best sellers on the website

    Scenario: 4 User navigates to Bottom menu 
    When I click on Our Store
    Then I should be redirected to the Our store page
    When I click on Contact us page
    Then I should be redirected to Contact us page

    

