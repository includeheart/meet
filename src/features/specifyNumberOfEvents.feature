Feature: Specify Number of Events
    Scenario: When user has not specified a number, 32 events are shown by default
        Given user is on the events page
        When user has not specified a number of events
        Then user should see 32 events displayed
    Scenario: User can change the number of events displayed
        Given user is on the events page
        When user changes the number of events to 10
        Then user should see 10 events displayed