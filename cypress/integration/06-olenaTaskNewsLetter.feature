Feature: Check Newsletters field

    Background: User navigates to the Main Page and check subcription on the website
        Given I navigate to the Main Page

    Scenario: 1 Check subscription with correct email
    When I enter email and click on submit button
    Then I should see successful submition message 

    Scenario: 2 Check subscription with already registered email
    When I enter email that was already registered and click on submit button
    Then I should see a notice with error message

    Scenario: 3 Check subscription with empty input 
    When I leave the field Newsletter empty 
    Then I should be represented with error message