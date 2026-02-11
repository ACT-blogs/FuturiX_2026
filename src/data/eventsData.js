import { Code2, Network, Cpu, Zap, Cog, Building2, Brain, Shield, Database, Layout } from 'lucide-react';

export const departments = [
    { id: 'cse', name: 'Computer Science & Engineering', icon: 'Code2', color: 'primary' },
    { id: 'ai&ds', name: 'AI & Data Science', icon: 'Brain', color: 'primary' },
    { id: 'csbs', name: 'CS & Business Systems', icon: 'Database', color: 'secondary' },
    { id: 'it', name: 'Information Technology', icon: 'Network', color: 'secondary' },
    { id: 'aiml', name: 'AI & Machine Learning', icon: 'Layout', color: 'secondary' },
    { id: 'cs', name: 'Cyber Security', icon: 'Shield', color: 'primary' },
    { id: 'ece', name: 'Electronics & Communication', icon: 'Cpu', color: 'primary' },
    { id: 'mech', name: 'Mechanical Engineering', icon: 'Cog', color: 'primary' },
    { id: 'civil', name: 'Civil Engineering', icon: 'Building2', color: 'secondary' }
];

export const categories = [
    { id: 'hackathon', name: 'Hackathon', color: 'primary' },
    { id: 'paper-presentation', name: 'Paper Presentation', color: 'secondary' },
    { id: 'project-exhibit', name: 'Project Exhibit', color: 'primary' },
    { id: 'technical', name: 'Technical', color: 'secondary' },
    { id: 'non-technical', name: 'Non-Technical', color: 'primary' },
];

export const events = [
    // Hackathon Events,
    {
        id: 'data-athon',
        name: 'Data-AThon',
        department: 'aiml',
        category: 'hackathon',
        shortDescription: 'Turn raw data into meaningful insights',
        description: 'Data Athon is an intensive, hands-on analytics challenge where participants work with large, unstructured datasets. Teams are required to clean, analyze, and interpret data to uncover hidden patterns and insights. The final outcome should clearly communicate findings using charts, visualizations, and logical reasoning. This event evaluates analytical thinking, data storytelling, and problem-solving skills.',
        rules: [
            'Teams of 2 to 3 participants',
            'Any data analysis tool such as Excel, Python, R, or equivalent is allowed',
            'Limited internet access permitted only for reference',
            'Final submission must include charts and a concise analytical report',
            'Judges’ decision will be final and binding'
        ],
        eligibility: 'Open to all departments',
        teamSize: '2-3',
        requirements: [
            'Laptop',
            'Preferred data analysis tools installed',
            'College ID'
        ],
        coordinators: [],
        prizePool: 'Cash Prize + Certificate of Merit'
    },
    ,
    // Paper Presentation Events,
    {
        id: 'cse-paper-presentation',
        name: 'Paper Presentation - CSE',
        department: 'cse',
        category: 'paper-presentation',
        theme: 'Software Engineering & Computing',
        shortDescription: 'Software Engineering & Computing',
        description: 'Present your research on cutting-edge topics in Computer Science including AI, Machine Learning, Cloud Computing, Blockchain, IoT, and Software Engineering.',
        themes: [
            "Ethical Hacking",
            "Cloud Computing & DevOps",
            "Internet of Things",
            "Cryptography",
            "Big Data Analytics",
            "Blockchain Technologies",
            "Green Computing",
            "Networking",
            "Artificial Intelligence",
            "Cyber Security"
        ],
        rules: [
            'Individual or Team of 4',
            '7 minutes presentation',
            '3 minutes Q&A session',
            'PPT/PDF format required',
        ],
        eligibility: 'Open to all',
        teamSize: '1-4',
        requirements: ['Presentation slides', 'College ID'],
        coordinators: [],
        prizePool: 'Cash + Certificate',
    },
    {
        id: 'ece-paper-presentation',
        name: 'Paper Presentation - ECE',
        department: 'ece',
        category: 'paper-presentation',
        theme: 'Electronics & Communication Engineering',
        shortDescription: 'ECE Research & Innovation',
        description: 'Present your cutting-edge research in Electronics & Communication Engineering. Topics include: VLSI Design & Semiconductor Technology, Embedded Systems & Real-Time Operating Systems, Internet of Things (IoT), Communication Systems (Analog & Digital), Wireless Communication & 5G/6G Technologies, Signal Processing (DSP & Image Processing), Microwave & Antenna Engineering, Control Systems, Robotics & Automation, Artificial Intelligence in ECE Applications. This event provides a platform to showcase innovative ideas, original research work, and technical solutions in core and emerging ECE domains.',
        themes: [
            "VLSI Design & Semiconductor Technology",
            "Embedded Systems & Real-Time Operating Systems",
            "Internet of Things (IoT)",
            "Communication Systems (Analog & Digital)",
            "Wireless Communication & 5G/6G Technologies",
            "Signal Processing (DSP & Image Processing)",
            "Microwave & Antenna Engineering",
            "Control Systems",
            "Robotics & Automation",
            "Artificial Intelligence in ECE Applications"
        ],
        rules: [
            'Individual or Team of 4',
            '5-7 minutes presentation',
            '3 minutes Q&A session',
            'PPT/PDF format required',
        ],
        eligibility: 'Open to all',
        teamSize: '1-4',
        requirements: [ 'Presentation slides', 'College ID'],
        coordinators: [],
        prizePool: 'Cash + Certificate',
    },
    {
        id: 'aiml-paper-presentation',
        name: 'Paper Presentation - AIML',
        department: 'aiml',
        category: 'paper-presentation',
        theme: 'AI & Machine Learning',
        shortDescription: 'AI & Machine Learning',
        description: 'Share your research on Deep Learning, Neural Networks, Computer Vision, NLP, Reinforcement Learning, and AI Ethics.',
        themes: [
            "Generative AI: Applications and Challenges",
            "Large Language Models: Concepts and Uses",
            "AI Agents and Autonomous Systems",
            "Edge AI Systems and Applications",
            "Reinforcement Learning in Automation",
            "Multimodal AI Systems",
            "Machine Learning for Cybersecurity",
            "Responsible AI and Model Governance"
         ],
        rules: [
            'Individual or Team of 4',
            '5-7 minutes presentation',
            '3 minutes Q&A session',
            'PPT/PDF format required',
        ],
        eligibility: 'Open to all',
        teamSize: '1-4',
        requirements: [ 'Presentation slides', 'College ID'],
        coordinators: [],
        prizePool: 'Cash + Certificate',
    },
    {
        id: 'ai&ds-paper-presentation',
        name: 'Paper Presentation - AI&DS',
        department: 'ai&ds',
        category: 'paper-presentation',
        theme: 'Data Science & Analytics',
        shortDescription: 'Data Science & Analytics',
        description: 'Present research on Big Data Analytics, Predictive Modeling, Data Mining, Business Intelligence, and Data Visualization techniques.',
        themes: [
            "Explainable AI for Trustworthy Systems",
            "Predictive Analytics in Healthcare and Finance",
            "Big Data Analytics for Smart Cities",
            "AI for Climate Sustainability",
            "Data-Centric AI for Model Improvement",
            "Federated Learning and Data Privacy",
            "Real-Time Big Data Analytics",
            "Ethics in AI Data Systems"
        ],
        rules: [
            'Individual or Team of 4',
            '5-7 minutes presentation',
            '3 minutes Q&A session',
            'PPT/PDF format required',
        ],
        eligibility: 'Open to all',
        teamSize: '1-4',
        requirements: ['Presentation slides', 'College ID'],
        coordinators: [],
        prizePool: 'Cash + Certificate',
    },
    {
        id: 'mech-paper-presentation',
        name: 'Paper Presentation - Mechanical',
        department: 'mech',
        category: 'paper-presentation',
        theme: 'Mechanical Engineering',
        shortDescription: 'Mechanical Engineering',
        description: 'Showcase innovations in Robotics, Automation, Renewable Energy, Manufacturing, Thermal Systems, and Sustainable Engineering.',
        themes: [
            "Emerging Technologies & Industry 4.0",
            "Industrial Internet of Things (IIoT)",
            "Mechanical Metamaterials",
            "Automotive & Aerospace Innovation",
            "Adaptive Cruise Control",
            "Scramjet Engines",
            "Energy & Sustainability",
            "Advanced Manufacturing & Materials",
            "Robotics & Automation",
            "Autonomous Underwater Vehicles (AUVs)"
        ],
        rules: [
            'Individual or Team of 4',
            '5-7 minutes presentation',
            '3 minutes Q&A session',
            'PPT/PDF format required',
        ],
        eligibility: 'Open to all',
        teamSize: '1-4',
        requirements: ['Research paper (IEEE format)', 'Presentation slides', 'College ID'],
        coordinators: [],
        prizePool: 'Cash + Certificate',
    },
    {
        id: 'csbs-paper-presentation',
        name: 'Paper Presentation - CSBS',
        department: 'csbs',
        category: 'paper-presentation',
        theme: 'Business Systems & Technology',
        shortDescription: 'Business Systems & Technology',
        description: 'Present on Digital Transformation, E-Commerce, Fintech, Business Analytics, ERP Systems, and Technology-driven Business Solutions.',
        themes: [
            "AI-Based Business Intelligence",
            "AI-Driven Digital Transformation",
            "Predictive Analytics for Financial Risk",
            "Intelligent Business Process Automation",
            "Data-Driven Customer Analytics",
            "Blockchain for Business Systems",
            "AI in Supply Chain Optimization",
            "AI Applications in FinTech"
        ],
        rules: [
            'Individual or Team of 4',
            '10-15 minutes presentation',
            '5 minutes Q&A session',
            'PPT/PDF format required',
        ],
        eligibility: 'Open to all',
        teamSize: '1-4',
        requirements: ['Presentation slides', 'College ID'],
        coordinators: [],
        prizePool: 'Cash + Certificate',
    },
    // Project Exhibit Events,
    {
        id: 'project-presentation-mech',
        name: 'Project Presentation',
        department: 'mech',
        category: 'project-exhibit',
        shortDescription: 'Showcase engineering projects professionally',
        description: 'Project Presentation is a formal technical event where participants present their project objectives, design, methodology, implementation, and results using visual aids. The event emphasizes clarity, originality, teamwork, and technical understanding.',
        rules: [
            'Presentation must be completed within the allotted time',
            'Participants must follow the specified presentation format and guidelines',
            'All team members must actively participate',
            'Project content must be original and free from plagiarism',
            'Participants must answer questions confidently during the Q&A session',
            'Professional behavior and clear communication must be maintained'
        ],
        eligibility: 'Open to all students',
        teamSize: '1-4',
        requirements: [
            'Well-prepared project report(optional)',
            'Presentation slides (PPT or PDF)',
            'Clear understanding of project objectives and working',
            'Charts, diagrams, or working model (if applicable)',
            'College ID'
        ],
        coordinators: [],
        prizePool: 'Cash Prize + Certificate'
    },
    {
        id: 'project-expo-ece',
        name: 'Project Expo',
        department: 'ece',
        category: 'project-exhibit',
        shortDescription: 'Showcase innovative ECE projects and prototypes',
        description: 'The Project Expo offers ECE students an opportunity to exhibit innovative projects, working models, and practical solutions in electronics and communication. The event bridges theory and practice, encouraging creativity, teamwork, and hands-on learning through live demonstrations and expert interaction.',
        rules: [
            'Participation is open only to ECE students',
            'Teams must consist of 3 to 4 members',
            'Projects must be original and developed by the team',
            'Projects can be hardware, software, or simulation-based related to ECE',
            'Each team must bring their working model or prototype',
            'Time allotted per team is 5 to 7 minutes including Q&A',
            'Use of unsafe or hazardous components is strictly prohibited',
            'Plagiarism or copied projects will result in disqualification',
            'Judges’ decision will be final and binding'
        ],
        eligibility: 'ECE students only',
        teamSize: '1-4',
        requirements: [
            'Working model or prototype',
            'Required accessories and setup materials',
            'Presentation slides (PPT or PDF)',
            'Clear understanding of project objectives and working',
            'College ID'
        ],
        coordinators: [],
        prizePool: 'Certificates + Prizes'
    },
    ,
    // Technical Events,
    {
        id: 'logic-lockdown',
        name: 'Logic Lockdown',
        department: 'cse',
        category: 'technical',
        shortDescription: 'Multi-round logical debugging challenge',
        description: 'Logic Lockdown is a progressive debugging competition where participants identify and fix errors in given programs using strong logical reasoning. Each round increases in difficulty, testing participants’ accuracy, speed, and problem-solving abilities.',
        rules: [
            'Participation can be individual or a team of 2 members',
            'The event consists of three rounds with increasing difficulty',
            'Round 1: Bug Hunt fix simple syntax errors',
            'Round 2: Logic Breaker correct logical mistakes',
            'Round 3: Lockdown Round solve a complex debugging problem',
            'Internet usage is strictly prohibited',
            'All rounds are time-based'
        ],
        eligibility: 'Open to all',
        teamSize: '1-2',
        requirements: [
            'Basic programming knowledge',
            'Laptop',
            'College ID'
        ],
        coordinators: [],
        prizePool: 'Cash Prize + Certificate'
    },
    {
        id: 'tech-trek',
        name: 'Tech Trek',
        department: 'cse',
        category: 'technical',
        shortDescription: 'Technical treasure hunt with quizzes and challenges',
        description: 'Tech Trek is an exciting technical treasure hunt where teams compete across multiple rounds involving quizzes, clue decoding, and checkpoint tasks. Teams earn points in every round, and winners are determined based on cumulative scores.',
        rules: [
            'The event consists of three rounds',
            'Round 1: Tech Quiz – answer technical questions',
            'Round 2: Clue Decode – solve technical clues and puzzles',
            'Round 3: Treasure Trail – complete tasks at various checkpoints',
            'Points are awarded in all rounds',
            'Team with the highest total points will be declared the winner',
            'Use of mobile phones or internet is not allowed',
            'Teams must stay together throughout the event',
            'Judges’ decision will be final'
        ],
        eligibility: 'Open to all students',
        teamSize: '2-4',
        requirements: [
            'Strong teamwork and problem-solving skills',
            'College ID'
        ],
        coordinators: [],
        prizePool: 'Cash Prize + Certificate'
    },
    {
        id: 'vibeathon',
        name: 'Vibe-AThon',
        department: 'ai&ds',
        category: 'hackathon',
        shortDescription: 'Ideate, analyze, and innovate with data-driven thinking',
        description: 'Vibeathon is an idea-driven technical event where participants collaborate to analyze real-world problems and propose innovative, data-driven or AI-based solutions. The event focuses on creativity, feasibility, analytical thinking, and how effectively participants can translate ideas into impactful solutions.',
        rules: [
            'Participation can be individual or in teams of up to 4 members',
            'Teams must present one unique and original idea',
            'Problem statements may be provided or chosen within the given theme',
            'Participants must explain the problem, proposed solution, and expected impact',
            'Evaluation is based on innovation, feasibility, clarity and presentation',
            'Judges’ decision will be final'
        ],
        eligibility: 'Open to all students',
        teamSize: '1-4',
        requirements: [
            'Laptop with vibe coding tools installed',
            'Basic understanding of AI and data concepts',
            'College ID'
        ],
        coordinators: [],
        prizePool: 'Cash Prize + Certificate'
    },
    {
        id: 'promptathon',
        name: 'Prompt-AThon',
        department: 'ai&ds',
        category: 'hackathon',
        shortDescription: 'Craft powerful prompts to unlock AI potential',
        description: 'Promptathon is a creative AI-focused competition where participants design effective prompts to achieve specific outputs from generative AI systems. The event tests participants’ understanding of prompt engineering, clarity of instructions, creativity, and optimization of AI responses.',
        rules: [
            'Participation can be individual or teams of two',
            'Problem statements or tasks will be given on the spot',
            'Participants must generate outputs using well-structured prompts',
            'Evaluation is based on prompt clarity, creativity, relevance, and output quality',
            'Use of pre-written prompts is not allowed',
            'Internet usage may be limited as specified by the organizers'
        ],
        eligibility: 'Open to all students',
        teamSize: '1-2',
        requirements: [
            'Laptop / Mobile',
            'Basic knowledge of AI tools and prompting techniques',
            'College ID'
        ],
        coordinators: [],
        prizePool: 'Cash Prize + Certificate'
    },
    {
        id: 'data-dash',
        name: 'Data Dash',
        department: 'ai&ds',
        category: 'technical',
        shortDescription: 'Build professional data dashboards with actionable insights',
        description: 'Data Dash is a high-impact analytics competition where participants design and develop professional dashboards from a given dataset. The objective is to transform raw data into meaningful business insights using visualization tools. Participants must demonstrate analytical thinking, storytelling through data, and effective dashboard design that supports data-driven decision-making.',
        rules: [
            'Participation can be individual or teams of up to 3 members',
            'Datasets and problem statements will be provided at the start of the event',
            'Participants must create a professional, interactive dashboard within the time limit',
            'Allowed tools include Excel, Power BI, Tableau, Python, or similar visualization platforms',
            'Dashboard must include clear KPIs, charts, filters, and actionable insights',
            'Limited internet access may be permitted for reference only',
            'Evaluation will be based on clarity, insight generation, design quality, and interactivity',
            'Judges’ decision will be final and binding'
        ],
        eligibility: 'Open to all students',
        teamSize: '1-3',
        requirements: [
            'Laptop with required data visualization tools installed',
            'Basic knowledge of data analysis and dashboard design principles',
            'College ID'
        ],
        coordinators: [],
        prizePool: 'Cash Prize + Certificate'
    },
    {
        id: 'bi-crunch',
        name: 'BI - Crunch',
        department: 'csbs',
        category: 'technical',
        shortDescription: 'Innovative startup and business idea pitching',
        description: 'BI - Crunch is an innovation-driven event where participants pitch creative and feasible startup or product ideas that address real-world problems. Contestants present their concept, business model, target audience, and implementation strategy to judges. The event focuses on innovation, practicality, market relevance, and overall impact.',
        rules: [
            'Participation can be individual or teams of 2 to 4 members',
            'Each participant or team must present one original business idea',
            'Presentation duration is 5 to 8 minutes followed by judge Q&A',
            'PPT or demo may be used to explain the idea',
            'The pitch must include problem statement, solution, target users, and revenue model',
            'Evaluation is based on innovation, feasibility, impact, clarity, and presentation',
            'Exceeding the time limit may result in score reduction'
        ],
        eligibility: 'Open to all students',
        teamSize: '1-3',
        requirements: [
            'Laptop',
            'Presentation slides or demo',
            'College ID'
        ],
        coordinators: [],
        prizePool: 'Cash Prize + Certificate'
    },
    {
        id: 'blind-coding',
        name: 'Blind Coding',
        department: 'csbs',
        category: 'technical',
        shortDescription: 'Code without seeing the output',
        description: 'Blind Coding is a challenging programming event where participants write complete programs without seeing the Screen or, in some cases, the code while typing. The event emphasizes strong understanding of syntax, logic, and problem-solving skills rather than trial-and-error execution.',
        rules: [
            'Individual participation only',
            'Participants must solve the given problem within the allotted time',
            'Screen or editor view may be hidden and compile or run may be restricted until the end',
            'Allowed programming languages Python, Java, C and C++',
            'The final output must strictly match the required format'
        ],
        eligibility: 'Open to all',
        teamSize: 'Individual',
        requirements: [
            'Strong programming fundamentals',
            'College ID'
        ],
        coordinators: [],
        prizePool: 'Cash Prize + Certificate'
    },
    {
        id: 'web-sprint',
        name: 'WEB-SPRINT',
        departments: ['it', 'cs'],
        category: 'hackathon',
        shortDescription: 'Web Development Sprint',
        description: 'WEB-SPRINT is a fast-paced web development competition that challenges participants to design and develop a functional, responsive website within a limited time based on a given theme. It tests creativity, UI/UX design, and efficient coding under pressure.',
        rules: [
            'Individual or team of 2-4 members',
            'Fixed time limit (3 hours)',
            'Theme will be given on the spot',
            'Use HTML, CSS, and JavaScript only',
            'No pre-built templates allowed',
            'Internet allowed only for reference',
            'Late submissions not accepted',
            'Judges’ decision is final'
        ],
        eligibility: 'Open to all',
        teamSize: '1-4',
        requirements: ['Laptop', 'Code editor', 'Internet access (if allowed)'],
        coordinators: [],
        prizePool: 'Cash + Certificate',
    },
    {
        id: 'cyber-safe',
        name: 'Cyber Safe',
        departments: ['it', 'cs'],
        category: 'technical',
        shortDescription: 'Cyber Security Awareness',
        description: 'Cyber Safe is an awareness event that educates participants on cyber threats, digital safety, and safe internet practices. The event aims to build responsible and secure online behavior.',
        rules: [
            'Open to all registered participants',
            'Individual or team participation',
            'Follow the given time limit',
            'No cheating or unfair means',
            'Mobile phones allowed only if permitted',
            'Maintain discipline',
            'Judges’ decision is final'
        ],
        eligibility: 'Open to all',
        teamSize: '1-4',
        requirements: ['College ID'],
        coordinators: [],
        prizePool: 'Certificate',
    },
    {
        id: 'technical-quiz-mech',
        name: 'Technical Quiz',
        department: 'mech',
        category: 'technical',
        shortDescription: 'Test your mechanical engineering fundamentals',
        description: 'The Technical Quiz is designed to assess participants’ knowledge of core mechanical engineering subjects. Conducted across multiple rounds, the quiz challenges accuracy, speed, and conceptual understanding.',
        rules: [
            'Participation is limited to teams of two members',
            'The quiz will be conducted in multiple rounds',
            'Each question will have a fixed time limit',
            'Use of electronic devices is strictly prohibited unless specified',
            'No discussion is allowed between teams during the quiz',
            'Marks will be awarded according to the quiz rules',
            'Quiz master’s decision will be final'
        ],
        eligibility: 'Open to Mechanical Engineering students',
        teamSize: '2',
        requirements: [
            'Basic knowledge of mechanical engineering subjects',
            'Awareness of quiz rules and format',
            'College ID'
        ],
        coordinators: [],
        prizePool: 'Cash Prize + Certificate'
    },

    {
        id: 'circuit-debugging-ece',
        name: 'Circuit Debugging',
        department: 'ece',
        category: 'technical',
        shortDescription: 'Identify and fix faults in electronic circuits',
        description: 'Circuit Debugging is a hands-on technical challenge where participants analyze electronic circuits, identify faults, and rectify them within a stipulated time. The event enhances practical knowledge, troubleshooting ability, and understanding of core ECE concepts.',
        rules: [
            'Participation is open only to ECE students',
            'Teams may consist of 1 or 4 participants',
            'The event will be conducted in multiple rounds',
            'Participants must identify and correct predefined circuit faults',
            'Time limits will be strictly enforced for each round',
            'Use of mobile phones, notes, or external resources is prohibited',
            'All required tools and components will be provided',
            'Any damage to components due to negligence will lead to disqualification',
            'Judges’ decision will be final and binding'
        ],
        eligibility: 'ECE students only',
        teamSize: '1-4',
        requirements: [
            'Basic circuit analysis and troubleshooting knowledge',
            'College ID'
        ],
        coordinators: [],
        prizePool: 'Cash Prize + Certificate'
    },
    ,
    ,
    // Non-Technical Events,
    {
        id: 'hear-me-out',
        name: 'HearMeOut',
        department: 'cse',
        category: 'non-technical',
        shortDescription: 'Music recognition and on-spot meme creativity',
        description: 'HearMeOut is a fun-filled two-round event designed to test participants’ listening skills, creativity, and quick thinking. The event blends music-based identification with on-the-spot meme creation, offering an engaging and entertaining competitive experience.',
        rules: [
            'The event consists of two rounds',
            'Round 1: Participants listen to a music clip and must correctly identify the song',
            'Only qualified participants from Round 1 advance to Round 2',
            'Round 2: An on-spot topic will be given to create a meme within the given time',
            'Judging is based on accuracy, creativity, and relevance to the topic'
        ],
        eligibility: 'Open to all students',
        teamSize: '1-2',
        requirements: [
            'Smartphone or laptop',
            'Basic creativity and quick thinking',
            'College ID'
        ],
        coordinators: [],
        prizePool: 'Certificate of Appreciation'
    },
    {
        id: 'adboard',
        name: 'AdBoard',
        department: 'cse',
        category: 'non-technical',
        shortDescription: 'Create impactful advertisements on the spot',
        description: 'AdBoard is a creative advertising event where participants design an advertisement based on an on-spot topic. Using chart paper and visual elements, participants must effectively communicate a message, product, or idea within a limited time. The event emphasizes creativity, clarity, and presentation skills.',
        rules: [
            'Participation can be individual or a team of up to 2 members',
            'Topic will be given on the spot during the event',
            'Participants must create the advertisement within the allotted time',
            'Advertisement should clearly convey the theme or message',
            'Evaluation is based on content clarity, relevance, visual appeal, and overall impact'
        ],
        eligibility: 'Open to all students',
        teamSize: '1-2',
        requirements: [
            'Creative thinking',
            'College ID'
        ],
        coordinators: [],
        prizePool: 'Certificate of Appreciation'
    },
   {
        id: 'fun-collage',
        name: 'Fun Collage',
        department: 'ai&ds',
        category: 'non-technical',
        shortDescription: 'Solve creative collage-based puzzles with speed and accuracy',
        description: 'Fun Collage is a non-technical puzzle event where participants are required to solve a prepared collage challenge within a limited time. The collage may include visual clues, hidden elements, scrambled images, or logical connections that must be identified and arranged correctly. The event tests observation skills, pattern recognition, teamwork, and creative thinking.',
        rules: [
            'Participation can be individual or a team of up to 2 members',
            'Participants must solve the given collage puzzle within the allotted time',
            'The collage materials will be provided by the organizers',
            'No external help, mobile phones, or internet usage is allowed',
            'Evaluation is based on accuracy, completion time, and logical approach',
            'Judges’ decision will be final and binding'
        ],
        eligibility: 'Open to all students',
        teamSize: '1-2',
        requirements: [
            'Strong observation and analytical skills',
            'College ID'
        ],
        coordinators: [],
        prizePool: 'Certificate of Excellence'
    },
    {
        id: 'poster-making',
        name: 'Poster Making',
        department: 'aiml',
        category: 'non-technical',
        shortDescription: 'Express ideas through visual creativity',
        description: 'Poster Making is a creative competition that focuses on visual storytelling. Participants are required to design an original poster based on a theme announced on the spot. The event evaluates creativity, clarity of message, and artistic expression.',
        rules: [
            'Individual participation only',
            'Theme will be announced at the start of the event',
            'Participants must bring their own drawing and coloring materials',
            'College will provide drawing sheets',
            'Tracing or using pre-designed templates is strictly prohibited'
        ],
        eligibility: 'Open to all students',
        teamSize: 'Individual',
        requirements: [
            'Art supplies (pencils, colors, brushes)',
            'College ID'
        ],
        coordinators: [],
        prizePool: 'Certificate of Excellence'
    },
    {
        id: 'just-a-minute',
        name: 'Just A Minute (JAM)',
        department: 'csbs',
        category: 'non-technical',
        shortDescription: 'Speak confidently for one uninterrupted minute',
        description: 'Just A Minute (JAM) is a lively speaking competition where participants must speak on a given topic for exactly one minute without hesitation, repetition, or deviation. The event evaluates spontaneity, communication skills, clarity of thought, and confidence under pressure.',
        rules: [
            'Individual participation only',
            'Topics will be given on the spot or selected by lot',
            'Speaking time is exactly 60 seconds',
            'Participants must speak continuously without long pauses',
            'Repetition of words or ideas is not allowed',
            'Deviation from the topic is not permitted',
            'Evaluation is based on fluency, relevance, confidence, and clarity'
        ],
        eligibility: 'Open to all students',
        teamSize: 'Individual',
        requirements: [
            'Good communication skills',
            'College ID'
        ],
        coordinators: [],
        prizePool: 'Certificate of Excellence'
    },
    {
        id: 'mobile-photography',
        name: 'Photography',
        department: 'mech',
        category: 'non-technical',
        shortDescription: 'Capture creativity through your smartphone lens',
        description: 'Mobile Photography is a creative competition that encourages visual storytelling using smartphone cameras. Participants capture original photographs that reflect creativity, emotion, and unique perspective based on a given theme.',
        rules: [
            'Only smartphone cameras are allowed',
            'DSLR or professional cameras are strictly prohibited',
            'Each participant may submit 2 to 3 photographs',
            'Photos must be original and captured by the participant ',
            'No plagiarism or AI-generated images are allowed',
            'Basic editing is permitted using mobile applications only',
            'Excessive editing or manipulation is not allowed',
            'Images must not contain obscene, offensive, or inappropriate content',
            'Last submission date 20/02/2026 ',
            'Late submissions will not be accepted',
            'Judges’ decision will be final and binding'
        ],
        eligibility: 'Open to all students',
        teamSize: 'Individual',
        requirements: [
            'Smartphone with inbuilt camera',
            'Images in JPEG or PNG format',
            'Title and short caption for each photograph',
            'College ID'
        ],
        coordinators: [],
        prizePool: 'Certificate of Excellence'
    },
    {
        id: 'anime-quiz',
        name: 'Anime Quiz',
        departments: ['it', 'cs'],
        category: 'non-technical',
        shortDescription: 'Anime Knowledge Challenge',
        description: 'Anime Quiz is a fun and exciting competition that tests participants’ knowledge of popular anime series, characters, scenes, and trivia through multiple rounds.',
        rules: [
            'Open to all participants',
            'Individual or team participation',
            'Questions based on anime knowledge',
            'Time limit for each round',
            'Mobile phones are not allowed',
            'No cheating',
            'Judges’ decision is final'
        ],
        eligibility: 'Open to all',
        teamSize: '1-2',
        requirements: ['College ID'],
        coordinators: [],
        prizePool: 'Certificate',
    },
    {
        id: 'fix-it-code',
        name: 'Fix-It Code',
        department: 'aiml',
        category: 'hackathon',
        shortDescription: 'Debug and optimize code rapidly',
        description: 'A fast-paced coding challenge where participants must debug, fix, and optimize broken code snippets within a limited time. Test your debugging skills and efficiency.',
        rules: [
            'Individual or Team participation', 
            'No IDE assistance', 
            'Time-based scoring', 
            'Standard compilers used'
        ],
        eligibility: 'Open to all',
        teamSize: '1-2',
        requirements: ['College ID'],
        coordinators: [],
        prizePool: 'Exciting Prizes + Certificate'
    },
    {
        id: 'cad-modeling',
        name: 'CAD Modeling',
        department: 'mech',
        category: 'technical',
        shortDescription: '3D Design & Modeling Challenge',
        description: 'Showcase your design skills by creating precise 3D models using CAD software based on given specifications.',
        rules: ['Participation can be individual or a team', 'Software provided', 'Time limit: 2 hours', 'Judged on accuracy & efficiency'],
        eligibility: 'Open to Mechanical/Civil/Auto',
        teamSize: '1-2',
        requirements: ['College ID'],
        coordinators: [],
        prizePool: 'Exciting Prizes + Certificate'
    },
    {
        id: 'cadd-master',
        name: 'CADD Master',
        department: 'civil',
        category: 'technical',
        shortDescription: 'Civil Engineering Design Challenge',
        description: 'Design complex civil structures and layouts using CADD tools. Focus on structural integrity and design aesthetics.',
        rules: ['Participation can be individual or a team', 'AutoCAD software', 'Theme given on spot'],
        eligibility: 'Civil Engineering students',
        teamSize: '1-2',
        requirements: ['College ID'],
        coordinators: [],
        prizePool: 'Exciting Prizes + Certificate'
    },
    {
        id: 'unbreakable-challenge',
        name: 'Unbreakable Challenge',
        department: 'civil',
        category: 'technical',
        shortDescription: 'Structural Engineering Contest',
        description: 'Build a structure using provided materials that can withstand maximum load. Test your practical engineering skills.',
        rules: ['Team of 3-4', 'Materials provided', 'Load testing on site'],
        eligibility: 'Open to Civil/Mech',
        teamSize: '3-4',
        requirements: ['College ID'],
        coordinators: [],
        prizePool: 'Exciting Prizes + Certificate'
    },
    {
        id: 'poster-design',
        name: 'Poster Design',
        department: 'sss',
        category: 'ttt',
        shortDescription: 'Creative Digital Art',
        description: 'Design a poster on a given theme using digital tools. Express your creativity and design thinking.',
        rules: ['Participation can be individual or a team', 'Software: Photoshop/Canva/etc', 'Theme on spot'],
        eligibility: 'Open to all',
        teamSize: '1-2',
        requirements: ['Laptop', 'College ID'],
        coordinators: [],
        prizePool: 'Exciting Prizes + Certificate'
    },

    {
        id: 'technical-memes',
        name: 'Technical Memes',
        departments: ['it', 'cs'],
        category: 'non-technical',
        shortDescription: 'Humor meets Technology',
        description: 'Create hilarious memes related to technology, coding, and engineering life.',
        rules: ['Participation can be individual or a team', 'Original content only', 'No offensive content'],
        eligibility: 'Open to all',
        teamSize: '1-2',
        requirements: ['Mobile/Laptop', 'College ID'],
        coordinators: [],
        prizePool: 'Exciting Prizes + Certificate'
    },
    {
        id: 'voltx-treasure',
        name: 'Voltx Treasure',
        department: 'ece',
        category: 'non-technical',
        shortDescription: 'Electronics Treasure Hunt',
        description: 'Solve clues related to electronics and find the treasure. A fun blend of technical knowledge and adventure.',
        rules: ['Team of 3-4', 'Campus-wide hunt', 'Time-based'],
        eligibility: 'Open to all',
        teamSize: '3-4',
        requirements: ['College ID'],
        coordinators: [],
        prizePool: 'Exciting Prizes + Certificate'
    },
    {
        id: 'brick-o-mania',
        name: 'Brick-O-Mania',
        department: 'civil',
        category: 'non-technical',
        shortDescription: 'Creative Construction',
        description: 'Build creative structures using bricks or blocks. Fun construction challenge.',
        rules: ['Team of 2-3', 'Materials provided', 'Stable structure required'],
        eligibility: 'Open to all',
        teamSize: '2-3',
        requirements: ['College ID'],
        coordinators: [],
        prizePool: 'Exciting Prizes + Certificate'
    },
    {
        id: 'mr-king-ms-queen',
        name: 'Mr. King & Ms. Queen',
        department: 'civil',
        category: 'non-technical',
        shortDescription: 'Personality Contest',
        description: 'Showcase your personality, talent, and confidence to win the title of Mr. King or Ms. Queen of FuturiX 2026.',
        rules: ['Individual participation', 'Talent round', 'Q&A round', 'Ramp walk'],
        eligibility: 'Open to all',
        teamSize: 'Individual',
        requirements: ['College ID'],
        coordinators: [],
        prizePool: 'Title + Crown + Prizes'
    },];

// Utility functions
export const getEventById = (id) => events.find(event => event && event.id === id);
export const getEventsByDepartment = (deptId) => events.filter(event => {
    if (!event) return false;
    // Support both single department and multiple departments
    if (Array.isArray(event.departments)) {
        return event.departments.includes(deptId);
    }
    return event.department === deptId;
});
export const getEventsByCategory = (catId) => events.filter(event => event && event.category === catId);
export const getEventsByFilter = (deptId = null, catId = null) => {
    let filtered = events.filter(event => event); // Remove undefined/null first
    if (deptId && deptId !== 'all') {
        filtered = filtered.filter(event => {
            // Support both single department and multiple departments
            if (Array.isArray(event.departments)) {
                return event.departments.includes(deptId);
            }
            return event.department === deptId;
        });
    }
    if (catId && catId !== 'all') filtered = filtered.filter(event => event.category === catId);
    return filtered;
};
export const getDepartmentById = (id) => departments.find(dept => dept.id === id);
export const getCategoryById = (id) => categories.find(cat => cat.id === id);
export const getStats = () => ({
    departments: departments.length,
    totalEvents: events.filter(e => e).length,
    technicalEvents: events.filter(e => e && e.category === 'technical').length,
    prizePool: '₹20,000+',
});