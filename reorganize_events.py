import re
import json

# Read the file
with open('src/data/eventsData.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the header (imports and exports before events array)
header_match = re.search(r'^(.*?export const events = \[)', content, re.DOTALL)
header = header_match.group(1) if header_match else ''

# Extract the footer (everything after events array)
footer_match = re.search(r'(\];\s*// Utility functions.*?)$', content, re.DOTALL)
footer = footer_match.group(1) if footer_match else '];'

# Extract all events
events_section = re.search(r'export const events = \[(.*?)\];', content, re.DOTALL)
if not events_section:
    print("Could not find events array")
    exit(1)

events_text = events_section.group(1)

# Split into individual events (each event starts with a comment or opening brace)
event_blocks = re.split(r'(?=\s*(?://.*?\n)?\s*\{)', events_text)
event_blocks = [block.strip() for block in event_blocks if block.strip()]

# Parse each event to extract name and category
events_data = []
for block in event_blocks:
    # Extract event details
    name_match = re.search(r"name: '([^']+)'", block)
    category_match = re.search(r"category: '([^']+)'", block)
    
    if name_match and category_match:
        name = name_match.group(1)
        category = category_match.group(1)
        
        # Update team size for presentation categories
        if category in ['paper-presentation', 'project-exhibit']:
            block = re.sub(r"teamSize: '[^']*'", "teamSize: '1-4'", block)
        
        events_data.append({
            'name': name,
            'category': category,
            'block': block
        })

# Category order as specified
category_order = {
    'hackathon': 1,
    'paper-presentation': 2,
    'project-exhibit': 3,
    'technical': 4,
    'non-technical': 5
}

# Sort events by category order
events_data.sort(key=lambda x: category_order.get(x['category'], 999))

# Rebuild the events array
new_events = []
current_category = None

for event in events_data:
    # Add category comment when category changes
    if event['category'] != current_category:
        current_category = event['category']
        category_names = {
            'hackathon': 'Hackathon Events',
            'paper-presentation': 'Paper Presentation Events',
            'project-exhibit': 'Project Exhibit Events',
            'technical': 'Technical Events',
            'non-technical': 'Non-Technical Events'
        }
        if new_events:  # Add spacing between categories
            new_events.append('')
        new_events.append(f'    // {category_names.get(current_category, current_category)}')
    
    new_events.append('    ' + event['block'].strip())

# Combine everything
final_content = header + '\n' + ',\n'.join(new_events) + '\n' + footer

# Write back
with open('src/data/eventsData.js', 'w', encoding='utf-8') as f:
    f.write(final_content)

print(f"✓ Reorganized {len(events_data)} events")
print(f"✓ Updated presentation team sizes to '1-4'")
print("\nEvents by category:")
for cat in category_order:
    count = sum(1 for e in events_data if e['category'] == cat)
    if count > 0:
        print(f"  {cat}: {count} events")
