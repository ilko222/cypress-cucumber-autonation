Feature: Go to the tshirts Page and check the layout

# Scenario: 1 Check the tshirts page layout
#         Given I navigate to the tshirts page
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
#         Given I navigate to the tshirts page
#         When I set price slider on the tshirts page in minimal price
#         Then There are no products message on the tshirts page is visible
#         When I set specific color on the tshirts page in the filter section
#         Then Items with specific colour on the tshirts page are visible
#         When I set cotton compositions on the tshirts page in the filter section
#         Then Items with cotton composition are visible

Scenario: 3 Check the ordering functionality: one item; logged out user; bankwire
        Given I navigate to the tshirts page
        When I add one item to the cart
        Then Check the checkout flow for logged out user bankwire

Scenario: 3 Check the ordering functionality: one item; logged out user; check
        Given I navigate to the tshirts page
        When I add one item to the cart
        Then Check the checkout flow for logged out user check
        
Scenario: 3 Check the ordering functionality: multiple items; logged out user; bankwire
        Given I navigate to the tshirts page
        When I add multiple items to the cart
        Then Check the checkout flow for logged out user bankwire

Scenario: 3 Check the ordering functionality: multiple items; logged out user; check
        Given I navigate to the tshirts page
        When I add multiple items to the cart
        Then Check the checkout flow for logged out user check

Scenario: 3 Check the ordering functionality: one item; logged in user; bankwire
        Given I navigate to the Main Page
        When The user is logged in
        When I add one item to the cart
        Then Check the checkout flow for logged in user bankwire

Scenario: 3 Check the ordering functionality: one item; logged in user; check
        Given I navigate to the Main Page
        When The user is logged in
        When I add one item to the cart
        Then Check the checkout flow for logged in user check

Scenario: 3 Check the ordering functionality: multiple items; logged in user; bankwire
        Given I navigate to the Main Page
        When The user is logged in
        When I add multiple items to the cart
        Then Check the checkout flow for logged in user bankwire

Scenario: 3 Check the ordering functionality: one item; logged in user; check
        Given I navigate to the Main Page
        When The user is logged in
        When I add one item to the cart
        Then Check the checkout flow for logged in user check

# Scenario: 3 Check the ordering functionality: one item; wrong password
#         Given I navigate to the tshirts page
#         When I add one item to the cart
#         Then Check the checkout flow for the user with wrong password

# Scenario: 3 Check the ordering functionality: one item; wrong email
#         Given I navigate to the tshirts page
#         When I add one item to the cart
#         Then Check the checkout flow for the user with wrong email

# Scenario: 3 Check the ordering functionality: terms of service not checked
#         Given I navigate to the tshirts page
#         When I add one item to the cart
#         Then Check the checkout flow with terms of service not checked

