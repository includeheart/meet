import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user has not specified a number, 32 events are shown by default', ({ given, when, then }) => {
        given('user is on the events page', () => {

        });

        when('user has not specified a number of events', () => {

        });

        then('user should see 32 events displayed', () => {

        });
    });
    test('User can change the number of events displayed', ({ given, when, then }) => {
        given('user is on the events page', () => {

        });

        when('user changes the number of events to 10', () => {

        });

        then('user should see 10 events displayed', () => {

        });
    });
});