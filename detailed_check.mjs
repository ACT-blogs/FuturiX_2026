import { events } from './src/data/eventsData.js';

console.log(`Checking all ${events.length} events:\n`);

events.forEach((event, index) => {
    if (event === undefined) {
        console.log(`${index}: UNDEFINED`);
    } else if (event === null) {
        console.log(`${index}: NULL`);
    } else if (typeof event !== 'object') {
        console.log(`${index}: ${typeof event} - Value: ${JSON.stringify(event)}`);
    } else if (!event.id) {
        console.log(`${index}: Object missing 'id' - Keys: ${Object.keys(event).join(', ')}`);
    } else {
        // Valid event
        console.log(`${index}: ✓ ${event.id} - ${event.name}`);
    }
});
