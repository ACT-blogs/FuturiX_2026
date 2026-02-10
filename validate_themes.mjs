import { events } from './src/data/eventsData.js';

console.log('Checking themes for paper presentation events:');

const paperEvents = events.filter(e => e && e.category === 'paper-presentation');

if (paperEvents.length === 0) {
    console.log('❌ No paper presentation events found!');
} else {
    paperEvents.forEach(event => {
        if (event.themes && Array.isArray(event.themes) && event.themes.length > 0) {
            console.log(`✓ ${event.name}: ${event.themes.length} themes found`);
            console.log(`  First 3 themes: ${event.themes.slice(0, 3).join(', ')}...`);
        } else {
            console.log(`❌ ${event.name}: No themes array found (or empty)`);
        }
    });
}
