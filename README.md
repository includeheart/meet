# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Feature 1:
As a User, I should be able to filter events by city, so that I can search for local events or events specific to a city I'm visiting.

Scenario: Show upcoming events from all cities when no city is searched
    Given the user has not searched for a city
    When the events are displayed
    Then the user should see upcoming events from all cities

Scenario: Show city suggestions when user searches
    Given the user starts typing a city name in the search input
    When the user types at least one character
    Then a list of suggested cities matching the input should appear

Scenario: Select a city from the suggestions
    Given the user sees a list of suggested cities
    When the user selects a city from the list
    Then only upcoming events from the selected city should be displayed

Feature 2:
As a User, I should be able to show/hide event details, so that I can easily get information about an event without having to leave the page with the list.

Scenario: Event element is collapsed by default
    Given the events are displayed
    Then each event should be collapsed by default

Scenario: Expand an event to see details
    Given the events are collapsed
    When the user clicks on "Show Details" for an event
    Then the selected event's details should be displayed

Scenario: Collapse an event to hide details
    Given an event is expanded
    When the user clicks on "Hide Details" for the event
    Then the event's details should be hidden

Feature 3: 
As a User, I should be able to limit the number of events I'm shown, so that I can keep my options concise.

Scenario: Show 32 events by default when no number is specified
    Given the user has not set a number of events to view
    When the events are loaded
    Then 32 events should be displayed by default

Scenario: User can change the number of events displayed
    Given the user sees the number-of-events input
    When the user enters a new number
    Then that number of events should be displayed

Feature 4:
As a User, I should be able to use the app even when I'm offline, so that I can access the information even if I'm in a place without Internet access.

Scenario: Show cached data when there is no internet connection
    Given the user is offline
    When the app is loaded
    Then the app should display cached event data

Scenario: Show error when user changes search settings offline
    Given the user is offline
    When the user tries to change city or number of events
    Then an error message should be displayed

Feature 5:
As a User, I should be able to use a shortcut to return to the home screen, for ease of use.

Scenario: User can install the app as a home screen shortcut
    Given the user is using a supported browser
    When the user chooses to install the app
    Then the app should be added as a shortcut on their home screen

Feature 6:
As a User, I should be able to see a chart of the number of upcoming events in each city, so that I can analyze my options quickly at a glance.

Scenario: Show chart with number of upcoming events in each city
    Given the user is viewing the main dashboard
    When the event data is loaded
    Then a chart showing the number of upcoming events per city should be displayed