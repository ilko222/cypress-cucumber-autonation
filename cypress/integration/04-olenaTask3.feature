Feature: Verify Compare functionality
Background: User compares items different categories
Given I go to the category page Summer Dresses


Scenario:1 User redirects to category page and compare two items from this category
When I click on the button Add to compare on the item's boxes and click on button Compare
Then I should be redirected to the Page Comparising

Scenario: 2 User redirects to category page and trying to compare 4 items
When I add four items to compare and click on the button Compare
Then I should be able to see an error message



