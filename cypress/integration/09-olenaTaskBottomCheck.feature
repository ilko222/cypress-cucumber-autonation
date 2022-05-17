Feature: Go to the website and check Bottom Menu Functionality
  
  Background: User navigates to the Main Page
        Given I navigate to the Main Page

    Scenario: 1 User navigates to the Information menu
    When I click on Specials category
    Then I should see items with reduced price
    


