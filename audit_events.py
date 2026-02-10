import re

# Read the file
with open('src/data/eventsData.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract all events with their categories
pattern = r"name: '([^']+)',\s*(?:department|departments): [^,]+,\s*category: '([^']+)'"
events = re.findall(pattern, content)

# Required events by category
required_events = {
    'hackathon': ['Vibe-Athon', 'Prompt-Athon', 'Data-Athon', 'Fix-It Code', 'Web-Sprint'],
    'paper-presentation': ['Paper Presentation'],
    'project-exhibit': ['Project Expo', 'Project Presentation'],
    'technical': ['Data Dash', 'BI-Crunch', 'Blind Coding', 'Circuit Debugging', 'Cyber-Safe', 
                  'CAD Modeling', 'CADD Master', 'Logic Lockdown', 'Tech Trek', 'Tech Quiz', 
                  'Unbreakable Challenge'],
    'non-technical': ['JAM', 'Poster Design', 'Hear-Me-Out', 'Adboard', 'Anime Quiz', 
                      'Technical Memes', 'Photography', 'Voltx Treasure', 'Fun Collage', 
                      'Brick-O-Mania', 'Mr. King & Ms. Queen']
}

# Organize current events by category
current_events = {}
for name, category in events:
    if category not in current_events:
        current_events[category] = []
    current_events[category].append(name)

print("=" * 60)
print("EVENT AUDIT REPORT")
print("=" * 60)

# Check each category
missing_events = []
wrong_category = []

for category, required in required_events.items():
    print(f"\n{category.upper().replace('-', ' ')}:")
    print(f"  Required: {len(required)} events")
    
    current = current_events.get(category, [])
    print(f"  Current: {len(current)} events")
    
    # Check for missing events
    for req_event in required:
        # Case-insensitive partial match
        found = False
        found_in_wrong_cat = None
        
        for curr_event in current:
            if req_event.lower() in curr_event.lower() or curr_event.lower() in req_event.lower():
                found = True
                print(f"    [OK] {req_event} -> {curr_event}")
                break
        
        if not found:
            # Check if it's in another category
            for cat, events_list in current_events.items():
                for event in events_list:
                    if req_event.lower() in event.lower() or event.lower() in req_event.lower():
                        found_in_wrong_cat = (event, cat)
                        break
                if found_in_wrong_cat:
                    break
            
            if found_in_wrong_cat:
                print(f"    [X] {req_event} -> WRONG CATEGORY (found in {found_in_wrong_cat[1]} as '{found_in_wrong_cat[0]}')")
                wrong_category.append((req_event, category, found_in_wrong_cat[0], found_in_wrong_cat[1]))
            else:
                print(f"    [X] {req_event} -> MISSING")
                missing_events.append((req_event, category))

print("\n" + "=" * 60)
print("SUMMARY")
print("=" * 60)
print(f"\nMissing Events: {len(missing_events)}")
for event, cat in missing_events:
    print(f"  - {event} (should be in {cat})")

print(f"\nWrong Category: {len(wrong_category)}")
for req_name, correct_cat, actual_name, wrong_cat in wrong_category:
    print(f"  - '{actual_name}' is in {wrong_cat}, should be in {correct_cat}")

print("\n" + "=" * 60)
