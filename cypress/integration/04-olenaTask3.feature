Feature: Verify Compare functionality
Background: User compares two items on category Summer Dresses
Given I go to the category page Summer Dresses


Scenario:1 User redirects to category page and compare two items from this category
When I click on the button Add to compare on the item's boxes and click on button Compare
Then I should be redirected to the Page Comparising 