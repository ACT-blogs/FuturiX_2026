import re

# Read the file
with open('src/data/eventsData.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update ECE Paper Presentation with detailed themes
ece_themes = """VLSI Design & Semiconductor Technology, Embedded Systems & Real-Time Operating Systems, Internet of Things (IoT), Communication Systems (Analog & Digital), Wireless Communication & 5G/6G Technologies, Signal Processing (DSP & Image Processing), Microwave & Antenna Engineering, Control Systems, Robotics & Automation, Artificial Intelligence in ECE Applications"""

ece_description = f"""Present your cutting-edge research in Electronics & Communication Engineering. Topics include: {ece_themes}. This event provides a platform to showcase innovative ideas, original research work, and technical solutions in core and emerging ECE domains."""

# Find and update ECE Paper Presentation
pattern = r"(id: 'ece-paper-presentation',\s*name: 'Paper Presentation - ECE',\s*department: 'ece',\s*category: 'paper-presentation',\s*theme: ')[^']*(',\s*shortDescription: ')[^']*(',\s*description: ')[^']*(')"

def update_ece(match):
    return (match.group(1) + 'Electronics & Communication Engineering' + 
            match.group(2) + 'ECE Research & Innovation' +
            match.group(3) + ece_description + match.group(4))

content = re.sub(pattern, update_ece, content, flags=re.DOTALL)

print("✓ Updated ECE Paper Presentation with detailed themes")

# Write back
with open('src/data/eventsData.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("✓ Changes saved!")
