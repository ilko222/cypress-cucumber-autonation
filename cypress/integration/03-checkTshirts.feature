Feature: Go to the tshirts Page and check the layout

Background: User navigates to the tshirts page
        Given I navigate to the tshirts page

# Scenario: 1 Check the tshirts page layout
#         Then Check the tshirts banner
#         Then Check the tshirts header
#         Then Check the tshirts navigation bar
#         Then Check the tshirts logo
#         Then Check the tshirts cart
#         Then Check the tshirts phone call icon
#         Then Check the tshirts menu
#         Then Check the tshirts left column
#         Then Check the tshirts center column
#         Then Check the tshirts footer
#         Then Check the tshirts left news letter block
#         Then Check the tshirts bottom footer

# Scenario: 2 Check the filtering functionality
#         When I set price slider on the tshirts page in minimal price
#         Then There are no products message on the tshirts page is visible
#         When I set specific color on the tshirts page in the filter section
#         Then Items with specific colour on the tshirts page are visible
#         When I set cotton compositions on the tshirts page in the filter section
#         Then Items with cotton composition are visible

Scenario: 3 Check the ordering functionality
        When The cart is not empty

