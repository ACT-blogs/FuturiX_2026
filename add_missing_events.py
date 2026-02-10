import re

# Read the file
with open('src/data/eventsData.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Define missing events
missing_events = [
    # HACKATHON
    {
        'id': 'vibeathon',
        'name': 'Vibe-Athon',
        'department': 'ai&ds', # Assuming AI&DS
        'category': 'hackathon',
        'shortDescription': 'Solve real-world problems with data',
        'description': 'Vibe-Athon is a creative ideation and problem-solving hackathon where participants vibe with data to solve real-world challenges. Teams will brainstorm, analyze, and present innovative solutions.',
        'rules': ['Team of 2-3', 'Laptop mandatory', 'Internet allowed', 'Original ideas only'],
        'eligibility': 'Open to all',
        'teamSize': '2-3',
        'requirements': ['Laptop', 'College ID'],
        'prizePool': 'Exciting Prizes + Certificate'
    },
    {
        'id': 'fix-it-code',
        'name': 'Fix-It Code',
        'department': 'cse', # Assuming CSE
        'category': 'hackathon',
        'shortDescription': 'Debug and optimize code rapidly',
        'description': 'A fast-paced coding challenge where participants must debug, fix, and optimize broken code snippets within a limited time. Test your debugging skills and efficiency.',
        'rules': ['Individual participation', 'No IDE assistance', 'Time-based scoring', 'Standard compilers used'],
        'eligibility': 'Open to all',
        'teamSize': 'Individual',
        'requirements': ['College ID'],
        'prizePool': 'Exciting Prizes + Certificate'
    },
    # TECHNICAL
    {
        'id': 'bi-crunch',
        'name': 'BI-Crunch',
        'department': 'csbs', # Assuming CSBS (Business Systems)
        'category': 'technical',
        'shortDescription': 'Business Intelligence Analytics Challenge',
        'description': 'Analyze business data and create insightful dashboards. Participants will be tested on their ability to interpret data and present actionable business intelligence.',
        'rules': ['Team of 2', 'Use provided datasets', 'Present findings clearly', 'Tools: Excel/PowerBI/Tableau'],
        'eligibility': 'Open to all departments',
        'teamSize': '2',
        'requirements': ['Laptop', 'College ID'],
        'prizePool': 'Exciting Prizes + Certificate'
    },
    {
        'id': 'cyber-safe',
        'name': 'Cyber-Safe',
        'departments': "['it', 'cs']",
        'category': 'technical',
        'shortDescription': 'Cybersecurity Awareness & Defense',
        'description': 'A challenge focused on cybersecurity best practices, vulnerability assessment, and digital safety. Test your knowledge in securing digital assets.',
        'rules': ['Individual or Team of 2', 'Quiz & Practical rounds', 'No malicious tools allowed'],
        'eligibility': 'Open to all',
        'teamSize': '1-2',
        'requirements': ['College ID'],
        'prizePool': 'Exciting Prizes + Certificate'
    },
    {
        'id': 'cad-modeling',
        'name': 'CAD Modeling',
        'department': 'mech',
        'category': 'technical',
        'shortDescription': '3D Design & Modeling Challenge',
        'description': 'Showcase your design skills by creating precise 3D models using CAD software based on given specifications.',
        'rules': ['Individual event', 'Software provided', 'Time limit: 2 hours', 'Judged on accuracy & efficiency'],
        'eligibility': 'Open to Mechanical/Civil/Auto',
        'teamSize': 'Individual',
        'requirements': ['College ID'],
        'prizePool': 'Exciting Prizes + Certificate'
    },
    {
        'id': 'cadd-master',
        'name': 'CADD Master',
        'department': 'civil',
        'category': 'technical',
        'shortDescription': 'Civil Engineering Design Challenge',
        'description': 'Design complex civil structures and layouts using CADD tools. Focus on structural integrity and design aesthetics.',
        'rules': ['Individual event', 'AutoCAD software', 'Theme given on spot'],
        'eligibility': 'Civil Engineering students',
        'teamSize': 'Individual',
        'requirements': ['College ID'],
        'prizePool': 'Exciting Prizes + Certificate'
    },
    {
        'id': 'tech-quiz',
        'name': 'Tech Quiz',
        'department': 'ece', 
        'category': 'technical',
        'shortDescription': 'Test your technical knowledge',
        'description': 'A comprehensive quiz covering various technical domains including electronics, computing, and general technology trends.',
        'rules': ['Team of 2', 'Multiple rounds', 'Buzzer round included'],
        'eligibility': 'Open to all',
        'teamSize': '2',
        'requirements': ['College ID'],
        'prizePool': 'Exciting Prizes + Certificate'
    },
    {
        'id': 'unbreakable-challenge',
        'name': 'Unbreakable Challenge',
        'department': 'civil',
        'category': 'technical',
        'shortDescription': 'Structural Engineering Contest',
        'description': 'Build a structure using provided materials that can withstand maximum load. Test your practical engineering skills.',
        'rules': ['Team of 3-4', 'Materials provided', 'Load testing on site'],
        'eligibility': 'Open to Civil/Mech',
        'teamSize': '3-4',
        'requirements': ['College ID'],
        'prizePool': 'Exciting Prizes + Certificate'
    },
    # NON-TECHNICAL
    {
        'id': 'poster-design',
        'name': 'Poster Design',
        'department': 'it',
        'category': 'non-technical',
        'shortDescription': 'Creative Digital Art',
        'description': 'Design a poster on a given theme using digital tools. Express your creativity and design thinking.',
        'rules': ['Individual event', 'Software: Photoshop/Canva/etc', 'Theme on spot'],
        'eligibility': 'Open to all',
        'teamSize': 'Individual',
        'requirements': ['Laptop', 'College ID'],
        'prizePool': 'Exciting Prizes + Certificate'
    },
    {
        'id': 'hear-me-out',
        'name': 'Hear-Me-Out',
        'department': 'cse',
        'category': 'non-technical',
        'shortDescription': 'Debate & Public Speaking',
        'description': 'Voice your opinions on trending topics. A platform to showcase your communication and argumentation skills.',
        'rules': ['Individual participation', 'Topics given on spot', '3 mins speaking time'],
        'eligibility': 'Open to all',
        'teamSize': 'Individual',
        'requirements': ['College ID'],
        'prizePool': 'Exciting Prizes + Certificate'
    },
    {
        'id': 'anime-quiz',
        'name': 'Anime Quiz',
        'departments': "['it', 'cs']",
        'category': 'non-technical',
        'shortDescription': 'Ultimate Anime Trivia',
        'description': 'Test your knowledge of anime series, characters, and storylines in this exciting quiz event.',
        'rules': ['Team of 2', 'Multiple rounds', 'Buzzer round included'],
        'eligibility': 'Open to all',
        'teamSize': '2',
        'requirements': ['College ID'],
        'prizePool': 'Exciting Prizes + Certificate'
    },
    {
        'id': 'technical-memes',
        'name': 'Technical Memes',
        'department': 'aiml',
        'category': 'non-technical',
        'shortDescription': 'Humor meets Technology',
        'description': 'Create hilarious memes related to technology, coding, and engineering life.',
        'rules': ['Individual event', 'Original content only', 'No offensive content'],
        'eligibility': 'Open to all',
        'teamSize': 'Individual',
        'requirements': ['Mobile/Laptop', 'College ID'],
        'prizePool': 'Exciting Prizes + Certificate'
    },
    {
        'id': 'voltx-treasure',
        'name': 'Voltx Treasure',
        'department': 'ece',
        'category': 'non-technical',
        'shortDescription': 'Electronics Treasure Hunt',
        'description': 'Solve clues related to electronics and find the treasure. A fun blend of technical knowledge and adventure.',
        'rules': ['Team of 3-4', 'Campus-wide hunt', 'Time-based'],
        'eligibility': 'Open to all',
        'teamSize': '3-4',
        'requirements': ['College ID'],
        'prizePool': 'Exciting Prizes + Certificate'
    },
    {
        'id': 'brick-o-mania',
        'name': 'Brick-O-Mania',
        'department': 'civil',
        'category': 'non-technical',
        'shortDescription': 'Creative Construction',
        'description': 'Build creative structures using bricks or blocks. Fun construction challenge.',
        'rules': ['Team of 2-3', 'Materials provided', 'Stable structure required'],
        'eligibility': 'Open to all',
        'teamSize': '2-3',
        'requirements': ['College ID'],
        'prizePool': 'Exciting Prizes + Certificate'
    },
    {
        'id': 'mr-king-ms-queen',
        'name': 'Mr. King & Ms. Queen',
        'department': 'cse',
        'category': 'non-technical',
        'shortDescription': 'Personality Contest',
        'description': 'Showcase your personality, talent, and confidence to win the title of Mr. King or Ms. Queen of FuturiX 2026.',
        'rules': ['Individual participation', 'Talent round', 'Q&A round', 'Ramp walk'],
        'eligibility': 'Open to all',
        'teamSize': 'Individual',
        'requirements': ['College ID'],
        'prizePool': 'Title + Crown + Prizes'
    }
]

# Find the end of the events array
insertion_point = content.rfind('];')

# Build the new events string
new_events_str = ""
for event in missing_events:
    # Check if event already exists to avoid duplicates (basic check)
    if f"name: '{event['name']}'" in content:
        print(f"Skipping {event['name']} as it already exists")
        continue

    dept_str = f"departments: {event['departments']}" if 'departments' in event else f"department: '{event['department']}'"
    
    new_events_str += f"""
    {{
        id: '{event['id']}',
        name: '{event['name']}',
        {dept_str},
        category: '{event['category']}',
        shortDescription: '{event['shortDescription']}',
        description: '{event['description']}',
        rules: {event['rules']},
        eligibility: '{event['eligibility']}',
        teamSize: '{event['teamSize']}',
        requirements: {event['requirements']},
        coordinators: [],
        prizePool: '{event['prizePool']}'
    }},"""
    print(f"Adding {event['name']}...")

# Insert new events before the closing bracket
if new_events_str:
    content = content[:insertion_point] + new_events_str + content[insertion_point:]
    
    # Write back
    with open('src/data/eventsData.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("\n✓ Added missing events successfully!")
else:
    print("\nNo new events to add.")
