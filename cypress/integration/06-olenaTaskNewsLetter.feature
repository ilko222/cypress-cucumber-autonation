Feature: Check Newsletters field

    Background: User navigates to the Main Page and check subcription on the website
        Given I navigate to the Main Page

    Scenario: 1 Check subscription with correct email
    When I enter email and click on submit button
    Then I should see successful submition message 

    