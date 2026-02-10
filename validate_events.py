import re

with open('src/data/eventsData.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract array content
match = re.search(r'export const events = \[(.*?)\];', content, re.DOTALL)
if not match:
    print("Could not find events array")
    exit(1)

events_str = match.group(1)

# Split by objects (rough approximation)
# finding { ... } blocks
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
            blocks.append(events_str[start:i+1])

print(f"Found {len(blocks)} event blocks")

issues = []
for i, block in enumerate(blocks):
    # Check for name to identify
    name_match = re.search(r"name: '([^']+)'", block)
    name = name_match.group(1) if name_match else f"Event #{i}"
    
    # Check keys
    if 'id:' not in block:
        issues.append(f"{name}: Missing 'id'")
    if 'rules:' not in block:
        issues.append(f"{name}: Missing 'rules'")
    if 'requirements:' not in block:
        issues.append(f"{name}: Missing 'requirements'")
    if 'department:' not in block and 'departments:' not in block:
        issues.append(f"{name}: Missing 'department' AND 'departments'")
    if 'category:' not in block:
        issues.append(f"{name}: Missing 'category'")

if issues:
    print("ISSUES FOUND:")
    for issue in issues:
        print(f" - {issue}")
else:
    print("No structural issues found in validation.")
