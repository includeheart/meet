import { loadFeature, defineFeature } from 'jest-cucumber';
const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');
defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('the user is on the event list page', () => {

        });

        when('the user views an event', () => {

        });

        then('the event details should be collapsed by default', () => {

        });
    });
    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('the user is on the event list page', () => {

        });

        when('the user clicks on an event to expand it', () => {

        });

        then('the event details should be displayed', () => {

        });
    });
    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('the user has expanded an event to see its details', () => {

        });

        when('the user clicks on the event again to collapse it', () => {

        });

        then('the event details should be hidden', () => {

        });
    });
});