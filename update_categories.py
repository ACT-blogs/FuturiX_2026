import re

# Read the file
with open('src/data/eventsData.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Events that should be in hackathon category (with exact names from file)
hackathon_events = [
    'Vibeathon',
    'Prompt-A-Thon', 
    'Data-A-Thon',
    'FIX-IT CODE',
    'WEB-SPRINT'
]

# Events that should be in project-exhibit category  
project_exhibit_events = [
    'Project Expo',
    'Project Presentation'
]

# Function to update event category
def update_event_category(content, event_name, new_category):
    # Find the event block - case insensitive
    pattern = rf"({{[^{{]*?name: '{re.escape(event_name)}'[^}}]*?category: ')([^']+)('[^}}]*?}})"
    
    def replacer(match):
        return match.group(1) + new_category + match.group(3)
    
    result = re.sub(pattern, replacer, content, flags=re.DOTALL | re.IGNORECASE)
    if result != content:
        print(f"✓ Updated '{event_name}' to {new_category} category")
        return result
    else:
        print(f"✗ Could not find '{event_name}'")
        return content

# Update hackathon events
for event in hackathon_events:
    content = update_event_category(content, event, 'hackathon')

# Update project-exhibit events
for event in project_exhibit_events:
    content = update_event_category(content, event, 'project-exhibit')

# Write back
with open('src/data/eventsData.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("\n✓ Category updates complete!")
