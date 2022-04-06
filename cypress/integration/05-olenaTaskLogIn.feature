Feature: Go to the main page and check functionality Log in

Background: User go to the main page and log-in on the Sign in page
Given User goes to the main page and goes to the Sign in page


    Scenario: 1 User fills in valid credentials
    When I fill in email address and password
    And I click on Sign in button 
    Then I should be redirected to My Account page

    Scenario: 2 User fills in incorrect email address and correct password
    When I fill in invalid email address and valid password
    Then I should see an error message 

    Scenario: 3 User doesn't fill in email address and password
    When I don't fill in email and password and click on Sign in button
    Then I should see an error message about required fields  
    