Feature: Go to the Summer Dresses category and check Sort and Filter functionality on this category

    Background: User navigates to the Summer Dresses category
        Given I navigate to the Summer Dresses category

    Scenario: 1 Check Sorty by category
    When I choose Sort by 
    Then Items should be sorted by available options

    Scenario: 2 Check checkboxes on category pages 
    When I click on checkboxes Size 
    Then Checkboxes should be clickable
    When I click on checkboxes Color
    Then I should be able to see the items for the choosen color



    