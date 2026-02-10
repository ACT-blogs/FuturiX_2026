import re

with open('src/data/eventsData.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract events array
match = re.search(r'export const events = \[(.*?)\];', content, re.DOTALL)
if not match:
    print("Could not find events array")
    exit(1)

events_str = match.group(1)

# Find and track all event names and IDs
event_names = {}
event_ids = {}
duplicates_to_remove = []

# Parse events
blocks = []
depth = 0
start = -1
for i, char in enumerate(events_str):
    if char == '{':
        if depth == 0:
            start = i
        depth += 1
    elif char == '}':
        depth -= 1
        if depth == 0:
            blocks.append((start, i+1, events_str[start:i+1]))

print(f"Found {len(blocks)} event blocks\n")

# Check for duplicates
for idx, (start_pos, end_pos, block) in enumerate(blocks):
    name_match = re.search(r"name: '([^']+)'", block)
    id_match = re.search(r"id: '([^']+)'", block)
    
    if name_match:
        name = name_match.group(1)
        if name in event_names:
            print(f"DUPLICATE NAME: '{name}' (keeping first occurrence)")
            duplicates_to_remove.append(idx)
        else:
            event_names[name] = idx
    
    if id_match:
        event_id = id_match.group(1)
        if event_id in event_ids:
            print(f"DUPLICATE ID: '{event_id}' (keeping first occurrence)")
            if idx not in duplicates_to_remove:
                duplicates_to_remove.append(idx)
        else:
            event_ids[event_id] = idx

# Fix "Poster Making" department from 'general' to valid department
print(f"\nFixing 'Poster Making' department...")
content = re.sub(
    r"(name: 'Poster Making',\s*department: )'general'",
    r"\1'cse'",
    content
)

# Remove duplicate events
if duplicates_to_remove:
    print(f"\nRemoving {len(duplicates_to_remove)} duplicate events...")
    
    # Sort in reverse to remove from end first
    duplicates_to_remove.sort(reverse=True)
    
    for dup_idx in duplicates_to_remove:
        start_pos, end_pos, block = blocks[dup_idx]
        
        # Find the comma before or after this block
        # Check if there's a comma right after the block
        search_start = end_pos
        search_end = min(end_pos + 10, len(events_str))
        after_block = events_str[search_start:search_end]
        
        # Remove block with trailing comma
        if after_block.strip().startswith(','):
            # Remove block and its trailing comma
            remove_end = search_start + after_block.index(',') + 1
            content = content.replace(events_str[start_pos:remove_end], '')
        else:
            # Check for leading comma
            search_start = max(0, start_pos - 10)
            before_block = events_str[search_start:start_pos]
            if before_block.strip().endswith(','):
                # Remove leading comma and block
                comma_pos = before_block.rindex(',')
                remove_start = search_start + comma_pos
                content = content.replace(events_str[remove_start:end_pos], '')
            else:
                # Just remove the block
                content = content.replace(events_str[start_pos:end_pos], '')

# Write back
with open('src/data/eventsData.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"\n✓ Fixed 'Poster Making' department")
print(f"✓ Removed {len(duplicates_to_remove)} duplicate events")
print(f"✓ Changes saved to eventsData.js")
