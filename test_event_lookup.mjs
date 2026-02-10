import { getEventById } from './src/data/eventsData.js';

// Test a few event IDs
const testIds = ['data-athon', 'fix-it-code', 'paper-presentation-cse', 'logic-lockdown'];

console.log('Testing getEventById function:\n');

testIds.forEach(id => {
    const event = getEventById(id);
    if (event) {
        console.log(`✓ ${id}: Found - "${event.name}"`);
    } else {
        console.log(`✗ ${id}: NOT FOUND`);
    }
});

// List all event IDs
import { events } from './src/data/eventsData.js';
console.log('\n\nAll Event IDs in database:');
events.forEach((e, i) => {
    if (e) {
        console.log(`${i + 1}. ${e.id} - ${e.name}`);
    } else {
        console.log(`${i + 1}. [UNDEFINED EVENT]`);
    }
});
