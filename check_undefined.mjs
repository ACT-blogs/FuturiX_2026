import { events } from './src/data/eventsData.js';

console.log(`Total events in array: ${events.length}\n`);

let undefinedCount = 0;
let nullCount = 0;
let validCount = 0;

events.forEach((event, index) => {
    if (event === undefined) {
        console.log(`Position ${index}: UNDEFINED`);
        undefinedCount++;
    } else if (event === null) {
        console.log(`Position ${index}: NULL`);
        nullCount++;
    } else if (typeof event !== 'object') {
        console.log(`Position ${index}: NOT AN OBJECT (${typeof event})`);
    } else {
        validCount++;
    }
});

console.log(`\nSummary:`);
console.log(`Valid events: ${validCount}`);
console.log(`Undefined: ${undefinedCount}`);
console.log(`Null: ${nullCount}`);
console.log(`Total: ${events.length}`);
