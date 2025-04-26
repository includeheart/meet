Feature: Show/Hide Event Details
    Scenario: An event element is collapsed by default
        Given the user is on the event list page
        When the user views an event
        Then the event details should be collapsed by default
    Scenario: User can expand an event to see its details
        Given the user is on the event list page
        When the user clicks on an event to expand it
        Then the event details should be displayed
    Scenario: User can collapse an event to hide its details
        Given the user has expanded an event to see its details
        When the user clicks on the event again to collapse it
        Then the event details should be hidden