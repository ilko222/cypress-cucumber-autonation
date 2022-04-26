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

    Scenario: 3 Check compasiotion filters
    When I click on available option on Compositions Filter - Polyster 
    Then I should see items with this Composition
    When I click on Viscose
    Then I should see items with Viscose composition 

    Scenario: 4 Check In stock filter on Summer dresses category
    When I click on In Stock filter
    Then I should see available items those are in stock of this category



    