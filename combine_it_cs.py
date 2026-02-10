import re

# Read the file
with open('src/data/eventsData.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Events that should be shared between IT and CS
# Find all IT events and all CS events and make them shared
it_cs_shared_events = []

# Pattern to find events with IT or CS department
pattern = r"(\{[^{]*?department: '(it|cs)'[^}]*?\})"

matches = list(re.finditer(pattern, content, re.DOTALL))

print(f"Found {len(matches)} IT/CS events to update")

# Replace single department with array for IT and CS events
for match in reversed(matches):  # Reverse to maintain positions
    event_block = match.group(1)
    dept = match.group(2)
    
    # Check if it's a paper presentation (keep separate)
    if 'Paper Presentation' in event_block:
        print(f"  Skipping Paper Presentation for {dept} (keeping separate)")
        continue
    
    # Replace department: 'it' or 'cs' with departments: ['it', 'cs']
    new_block = re.sub(
        r"department: '(it|cs)'",
        "departments: ['it', 'cs']",
        event_block
    )
    
    # Get event name for logging
    name_match = re.search(r"name: '([^']+)'", event_block)
    event_name = name_match.group(1) if name_match else "Unknown"
    
    content = content[:match.start(1)] + new_block + content[match.end(1):]
    print(f"  ✓ Updated '{event_name}' to shared IT/CS event")

# Write back
with open('src/data/eventsData.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("\n✓ IT and CS events are now combined!")
