import { events, departments, categories, getEventById, getEventsByFilter, getDepartmentById, getCategoryById } from './src/data/eventsData.js';

console.log('='.repeat(60));
console.log('COMPREHENSIVE EVENT DATA VALIDATION');
console.log('='.repeat(60));

// 1. Basic Stats
console.log(`\n✓ Total Events: ${events.length}`);
console.log(`✓ Total Departments: ${departments.length}`);
console.log(`✓ Total Categories: ${categories.length}`);

// 2. Check for undefined/null events
const invalidEvents = events.filter((e, i) => !e || typeof e !== 'object');
if (invalidEvents.length > 0) {
    console.log(`\n❌ ERROR: Found ${invalidEvents.length} invalid events (undefined/null)`);
} else {
    console.log(`\n✓ All events are valid objects`);
}

// 3. Check required fields for each event
const requiredFields = ['id', 'name', 'category', 'shortDescription', 'description', 'rules', 'eligibility', 'teamSize', 'requirements', 'coordinators', 'prizePool'];
const missingFields = [];

events.forEach((event, index) => {
    if (!event) {
        missingFields.push(`Event #${index}: Event is null/undefined`);
        return;
    }

    requiredFields.forEach(field => {
        if (!(field in event)) {
            missingFields.push(`${event.name || `Event #${index}`}: Missing '${field}'`);
        }
    });

    // Check department or departments
    if (!event.department && !event.departments) {
        missingFields.push(`${event.name}: Missing both 'department' and 'departments'`);
    }
});

if (missingFields.length > 0) {
    console.log(`\n❌ MISSING FIELDS (${missingFields.length}):`);
    missingFields.forEach(msg => console.log(`  - ${msg}`));
} else {
    console.log(`✓ All events have required fields`);
}

// 4. Check array fields
const arrayFieldIssues = [];
events.forEach(event => {
    if (!event) return;

    if (!Array.isArray(event.rules)) {
        arrayFieldIssues.push(`${event.name}: 'rules' is not an array`);
    }
    if (!Array.isArray(event.requirements)) {
        arrayFieldIssues.push(`${event.name}: 'requirements' is not an array`);
    }
    if (!Array.isArray(event.coordinators)) {
        arrayFieldIssues.push(`${event.name}: 'coordinators' is not an array`);
    }
    if (event.departments && !Array.isArray(event.departments)) {
        arrayFieldIssues.push(`${event.name}: 'departments' is not an array`);
    }
});

if (arrayFieldIssues.length > 0) {
    console.log(`\n❌ ARRAY FIELD ISSUES (${arrayFieldIssues.length}):`);
    arrayFieldIssues.forEach(msg => console.log(`  - ${msg}`));
} else {
    console.log(`✓ All array fields are valid`);
}

// 5. Check category validity
const invalidCategories = [];
const validCategoryIds = categories.map(c => c.id);
events.forEach(event => {
    if (!event) return;
    if (!validCategoryIds.includes(event.category)) {
        invalidCategories.push(`${event.name}: Invalid category '${event.category}'`);
    }
});

if (invalidCategories.length > 0) {
    console.log(`\n❌ INVALID CATEGORIES (${invalidCategories.length}):`);
    invalidCategories.forEach(msg => console.log(`  - ${msg}`));
} else {
    console.log(`✓ All categories are valid`);
}

// 6. Check department validity
const invalidDepartments = [];
const validDeptIds = departments.map(d => d.id);
events.forEach(event => {
    if (!event) return;

    if (event.department && !validDeptIds.includes(event.department)) {
        invalidDepartments.push(`${event.name}: Invalid department '${event.department}'`);
    }

    if (event.departments) {
        event.departments.forEach(deptId => {
            if (!validDeptIds.includes(deptId)) {
                invalidDepartments.push(`${event.name}: Invalid department '${deptId}' in departments array`);
            }
        });
    }
});

if (invalidDepartments.length > 0) {
    console.log(`\n❌ INVALID DEPARTMENTS (${invalidDepartments.length}):`);
    invalidDepartments.forEach(msg => console.log(`  - ${msg}`));
} else {
    console.log(`✓ All departments are valid`);
}

// 7. Test utility functions
console.log(`\n${'='.repeat(60)}`);
console.log('TESTING UTILITY FUNCTIONS');
console.log('='.repeat(60));

// Test getEventById
const testEventId = events[0]?.id;
if (testEventId) {
    const foundEvent = getEventById(testEventId);
    console.log(`✓ getEventById('${testEventId}'): ${foundEvent ? 'PASS' : 'FAIL'}`);
}

// Test getEventsByFilter
const allEvents = getEventsByFilter(null, null);
console.log(`✓ getEventsByFilter(null, null): ${allEvents.length} events`);

const cseEvents = getEventsByFilter('cse', null);
console.log(`✓ getEventsByFilter('cse', null): ${cseEvents.length} events`);

const hackathonEvents = getEventsByFilter(null, 'hackathon');
console.log(`✓ getEventsByFilter(null, 'hackathon'): ${hackathonEvents.length} events`);

// Test getDepartmentById
const cseDept = getDepartmentById('cse');
console.log(`✓ getDepartmentById('cse'): ${cseDept ? cseDept.name : 'NOT FOUND'}`);

// Test getCategoryById
const hackathonCat = getCategoryById('hackathon');
console.log(`✓ getCategoryById('hackathon'): ${hackathonCat ? hackathonCat.name : 'NOT FOUND'}`);

// 8. Category breakdown
console.log(`\n${'='.repeat(60)}`);
console.log('EVENTS BY CATEGORY');
console.log('='.repeat(60));

categories.forEach(cat => {
    const catEvents = events.filter(e => e && e.category === cat.id);
    console.log(`${cat.name}: ${catEvents.length} events`);
    catEvents.forEach(e => console.log(`  - ${e.name}`));
});

// 9. Department breakdown
console.log(`\n${'='.repeat(60)}`);
console.log('EVENTS BY DEPARTMENT');
console.log('='.repeat(60));

departments.forEach(dept => {
    const deptEvents = events.filter(e => {
        if (!e) return false;
        if (e.departments) {
            return e.departments.includes(dept.id);
        }
        return e.department === dept.id;
    });
    console.log(`${dept.name}: ${deptEvents.length} events`);
});

console.log(`\n${'='.repeat(60)}`);
console.log('VALIDATION COMPLETE');
console.log('='.repeat(60));
