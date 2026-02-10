import re

# Theme Dictionaries for the 7 existing presentation events
themes_map = {
    'cse-paper-presentation': [
        'Artificial Intelligence & Machine Learning',
        'Cloud Computing & Edge Computing',
        'Blockchain & Cryptocurrency',
        'Cybersecurity & Ethical Hacking',
        'Internet of Things (IoT) & Smart Systems',
        'Big Data Analytics & Data Science',
        'Web 3.0 & Metaverse',
        'Augmented Reality (AR) & Virtual Reality (VR)',
        'Software Engineering & DevOps',
        'Quantum Computing'
    ],
    'ece-paper-presentation': [
        'VLSI Design & Semiconductor Technology',
        'Embedded Systems & RTOS',
        'Wireless Communication (5G/6G)',
        'Signal & Image Processing',
        'Robotics & Automation',
        'Internet of Things (IoT)',
        'Antenna & Microwave Engineering',
        'Nano-Electronics & MEMS',
        'Optical Communication',
        'Satellite & Space Communication'
    ],
    'aiml-paper-presentation': [
        'Deep Learning & Neural Networks',
        'Natural Language Processing (NLP)',
        'Computer Vision & Image Recognition',
        'Generative AI & Large Language Models',
        'Reinforcement Learning',
        'AI in Healthcare & Diagnostics',
        'Predictive Analytics & Forecasting',
        'Ethics in AI & Explainable AI (XAI)',
        'AI in Finance & FinTech',
        'Autonomous Systems & Robotics'
    ],
    'ai&ds-paper-presentation': [
        'Deep Learning & Neural Networks',
        'Natural Language Processing (NLP)',
        'Computer Vision & Image Recognition',
        'Generative AI & Large Language Models',
        'Reinforcement Learning',
        'AI in Healthcare & Diagnostics',
        'Predictive Analytics & Forecasting',
        'Ethics in AI & Explainable AI (XAI)',
        'AI in Finance & FinTech',
        'Autonomous Systems & Robotics'
    ],
    'mech-paper-presentation': [
        'Robotics & Industrial Automation',
        'Renewable Energy & Sustainability',
        'Electric Vehicles (EV) & Battery Tech',
        '3D Printing & Additive Manufacturing',
        'CAD/CAM/CAE & Simulation',
        'Automobile Engineering',
        'Material Science & Nanotechnology',
        'Thermodynamics & Heat Transfer',
        'Mechatronics & Control Systems',
        'Fluid Dynamics & Aerodynamics'
    ],
    'civil-paper-presentation': [
        'Smart Cities & Urban Planning',
        'Green Buildings & Sustainable Design',
        'Structural Health Monitoring',
        'Earthquake Engineering & Disaster Management',
        'Transportation & Traffic Engineering',
        'Geotechnical Engineering',
        'Water Resource Management & Hydrology',
        'Advanced Construction Materials',
        'Remote Sensing & GIS Applications',
        'Environmental Engineering'
    ],
    'csbs-paper-presentation': [
        'FinTech & Digital Banking',
        'E-Commerce & Digital Marketing',
        'Business Analytics & Intelligence',
        'Enterprise Resource Planning (ERP)',
        'Supply Chain Management & Logistics',
        'Cyber Law & IT Regulations',
        'Cloud Strategy for Business',
        'Artificial Intelligence in Business',
        'Blockchain for Finance',
        'User Experience (UX) & Product Design'
    ]
}

file_path = 'src/data/eventsData.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def format_themes(theme_list):
    formatted = "        themes: [\n"
    for theme in theme_list:
        formatted += f"            '{theme}',\n"
    formatted += "        ],"
    return formatted

count = 0
for event_id, theme_list in themes_map.items():
    print(f"Processing {event_id}...")
    
    # Escape special characters in ID for regex
    escaped_id = re.escape(event_id)
    
    # Pattern to find the event ID and look for where to insert themes (before 'rules:')
    # Using broader matching to be safe
    pattern = r"(id:\s*['\"]" + escaped_id + r"['\"],[\s\S]*?)(\s+rules:)"
    
    match = re.search(pattern, content)
    
    if match:
        full_match = match.group(0)
        
        # Check if themes already exist in this block
        if "themes: [" in full_match:
            print(f"Skipping {event_id}, themes already present.")
            continue
            
        themes_block = format_themes(theme_list)
        
        # Insert themes before 'rules:'
        # Using simple string replace on the match is safer than re.sub on content if matches are unique
        # But content likely has unique IDs.
        
        # Let's verify we found the exact spot
        print(f"Inserting themes for {event_id}...")
        
        # Construct replacement
        replacement = f"{match.group(1)}\n{themes_block}{match.group(2)}"
        
        # Replace ONLY this occurrence in content
        # To do this safely, we can split the content or use re.sub with count=1 on this specific pattern
        
        # But wait, patterns overlap? No, because we match specific ID.
        
        # We need to escape the replacement string for re.sub because it contains backslashes? No, simple string.
        # Actually re.sub replacement string processes backslashes. We don't have backslashes in themes block.
        
        # But 'match.group(1)' might contain backslashes or special chars.
        # Safe way: use string concatenation of content parts.
        
        start_idx = match.start()
        end_idx = match.end()
        
        # Reconstruct content
        content = content[:start_idx] + replacement + content[end_idx:]
        
        count += 1
    else:
        print(f"Event ID {event_id} not found.")

print(f"\nUpdated {count} events with themes.")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
