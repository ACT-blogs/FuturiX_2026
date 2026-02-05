export const departments = [
    { id: 'cse', name: 'Computer Science & Engineering', icon: 'Code2', color: 'primary' },
    { id: 'it', name: 'Information Technology', icon: 'Network', color: 'secondary' },
    { id: 'ece', name: 'Electronics & Communication Engineering', icon: 'Cpu', color: 'primary' },
    { id: 'eee', name: 'Electrical & Electronics Engineering', icon: 'Zap', color: 'secondary' },
    { id: 'mech', name: 'Mechanical Engineering', icon: 'Cog', color: 'primary' },
    { id: 'civil', name: 'Civil Engineering', icon: 'Building2', color: 'secondary' },
];

export const categories = [
    { id: 'technical', name: 'Technical', color: 'primary' },
    { id: 'non-technical', name: 'Non-Technical', color: 'secondary' },
    { id: 'workshop', name: 'Workshop', color: 'green' },
];

export const events = [
    // CSE Events
    {
        id: 'code-rush',
        name: 'Code Rush',
        department: 'cse',
        category: 'technical',
        shortDescription: 'Speed coding competition testing algorithmic thinking and problem-solving skills',
        description: 'Code Rush is an intense algorithmic programming competition where participants race against time to solve complex coding challenges. Test your speed, accuracy, and problem-solving abilities in this high-energy coding marathon.',
        rules: [
            'Individual participation only',
            'Duration: 2 hours',
            'Problems will be of varying difficulty levels',
            'Use of AI tools or external help is strictly prohibited',
            'Internet access will be restricted to IDE and compiler only',
            'Scoring based on correctness and time taken',
        ],
        eligibility: 'Open to all undergraduate students',
        teamSize: '1 (Individual)',
        requirements: [
            'Laptop with competitive programming environment set up',
            'Familiarity with at least one programming language (C++/Java/Python)',
            'Valid college ID card',
        ],
        coordinators: [
            { name: 'Arvind Kumar', phone: '+91 98765 43210' },
            { name: 'Priya Sharma', phone: '+91 98765 43211' },
        ],
        prizePool: '₹15,000',
    },
    {
        id: 'web-weaver',
        name: 'Web Weaver',
        department: 'cse',
        category: 'technical',
        shortDescription: 'Build stunning websites in a time-bound hackathon',
        description: 'Web Weaver challenges teams to design and develop creative, responsive websites within a limited timeframe. Showcase your frontend and backend skills, creativity, and user experience design prowess.',
        rules: [
            'Team size: 2-3 members',
            'Duration: 4 hours',
            'Use any web technologies (HTML, CSS, JavaScript, React, etc.)',
            'Must be responsive and mobile-friendly',
            'Pre-built templates not allowed',
            'Judging criteria: design, functionality, innovation, code quality',
        ],
        eligibility: 'Open to all undergraduate students',
        teamSize: '2-3 members',
        requirements: [
            'Laptops with web development environment',
            'Text editor/IDE of choice',
            'Basic knowledge of HTML, CSS, JavaScript',
            'Valid college ID cards for all team members',
        ],
        coordinators: [
            { name: 'Karthik Raj', phone: '+91 98765 43212' },
            { name: 'Sneha Reddy', phone: '+91 98765 43213' },
        ],
        prizePool: '₹20,000',
    },
    {
        id: 'ai-challenge',
        name: 'AI Innovation Challenge',
        department: 'cse',
        category: 'technical',
        shortDescription: 'Build AI/ML solutions for real-world problems',
        description: 'The AI Innovation Challenge invites teams to develop cutting-edge AI and machine learning solutions for real-world problems. Demonstrate your knowledge of modern AI frameworks and create impactful applications.',
        rules: [
            'Team size: 2-4 members',
            'Duration: 6 hours',
            'Use any AI/ML framework (TensorFlow, PyTorch, scikit-learn, etc.)',
            'Problem statement will be announced on the spot',
            'Solution must include model training and deployment demo',
            'Documentation and presentation required',
        ],
        eligibility: 'Students with basic ML knowledge',
        teamSize: '2-4 members',
        requirements: [
            'Laptops with Python and ML libraries installed',
            'Knowledge of machine learning fundamentals',
            'Jupyter Notebook or similar environment',
            'Valid college ID cards',
        ],
        coordinators: [
            { name: 'Rahul Krishnan', phone: '+91 98765 43214' },
            { name: 'Divya Menon', phone: '+91 98765 43215' },
        ],
        prizePool: '₹25,000',
    },
    {
        id: 'tech-quiz',
        name: 'Tech Quiz',
        department: 'cse',
        category: 'non-technical',
        shortDescription: 'Test your technical knowledge across domains',
        description: 'A fast-paced technical quiz covering computer science fundamentals, current technology trends, programming concepts, and tech trivia. Battle it out with fellow tech enthusiasts!',
        rules: [
            'Individual or team of 2',
            'Multiple rounds: prelims, buzzer round, rapid fire',
            'Questions cover CS fundamentals, current tech, and general tech trivia',
            'No electronic devices allowed during the quiz',
            'Negative marking in buzzer round',
        ],
        eligibility: 'Open to all',
        teamSize: '1-2 members',
        requirements: [
            'Valid college ID',
            'No special equipment needed',
        ],
        coordinators: [
            { name: 'Vishal Patel', phone: '+91 98765 43216' },
            { name: 'Anjali Singh', phone: '+91 98765 43217' },
        ],
        prizePool: '₹10,000',
    },

    // IT Events
    {
        id: 'cyber-hunt',
        name: 'Cyber Hunt',
        department: 'it',
        category: 'technical',
        shortDescription: 'Capture the flag cybersecurity competition',
        description: 'Cyber Hunt is an exciting CTF (Capture The Flag) competition where participants solve cybersecurity challenges including cryptography, reverse engineering, web exploitation, and forensics.',
        rules: [
            'Team size: 2-3 members',
            'Duration: 3 hours',
            'Challenges include crypto, web, forensics, and reversing',
            'No DDoS attacks or destructive activities',
            'Write-ups must be submitted for solved challenges',
            'Hints available at point deductions',
        ],
        eligibility: 'Students with basic cybersecurity knowledge',
        teamSize: '2-3 members',
        requirements: [
            'Laptops with Kali Linux or similar security tools',
            'Basic knowledge of networking and security',
            'Valid college ID cards',
        ],
        coordinators: [
            { name: 'Aditya Verma', phone: '+91 98765 43218' },
            { name: 'Kavya Nair', phone: '+91 98765 43219' },
        ],
        prizePool: '₹18,000',
    },
    {
        id: 'database-derby',
        name: 'Database Derby',
        department: 'it',
        category: 'technical',
        shortDescription: 'Design and optimize complex database systems',
        description: 'Database Derby challenges participants to design, implement, and optimize relational and NoSQL databases based on real-world scenarios. Test your knowledge of normalization, indexing, and query optimization.',
        rules: [
            'Individual or team of 2',
            'Duration: 3 hours',
            'Design database schema for given scenarios',
            'Write complex SQL queries',
            'Optimize query performance',
            'Both theoretical and practical components',
        ],
        eligibility: 'Students familiar with DBMS concepts',
        teamSize: '1-2 members',
        requirements: [
            'Laptops with DBMS software (MySQL/PostgreSQL/MongoDB)',
            'Knowledge of SQL and database design',
            'Valid college ID',
        ],
        coordinators: [
            { name: 'Suresh Kumar', phone: '+91 98765 43220' },
            { name: 'Meera Iyer', phone: '+91 98765 43221' },
        ],
        prizePool: '₹12,000',
    },
    {
        id: 'it-treasure-hunt',
        name: 'IT Treasure Hunt',
        department: 'it',
        category: 'non-technical',
        shortDescription: 'Technology-themed treasure hunt across campus',
        description: 'An adventurous tech-themed treasure hunt where teams solve riddles, decode ciphers, and complete tech challenges to find hidden clues across the campus.',
        rules: [
            'Team size: 3-4 members',
            'Navigate campus using clues and QR codes',
            'Solve tech puzzles and riddles',
            'Team must stay together',
            'First team to reach final destination wins',
            'Mobile phones allowed only for QR scanning',
        ],
        eligibility: 'Open to all',
        teamSize: '3-4 members',
        requirements: [
            'Comfortable footwear',
            'One smartphone per team',
            'Valid college IDs for all members',
        ],
        coordinators: [
            { name: 'Rohan Desai', phone: '+91 98765 43222' },
            { name: 'Pooja Raman', phone: '+91 98765 43223' },
        ],
        prizePool: '₹8,000',
    },

    // ECE Events
    {
        id: 'circuit-master',
        name: 'Circuit Master',
        department: 'ece',
        category: 'technical',
        shortDescription: 'Design and debug complex electronic circuits',
        description: 'Circuit Master tests your electronics knowledge through hands-on circuit design, simulation, and debugging challenges. Demonstrate mastery over analog and digital circuits.',
        rules: [
            'Individual participation',
            'Duration: 2.5 hours',
            'Design circuits based on given specifications',
            'Both simulation and hardware rounds',
            'Judging on accuracy, efficiency, and innovation',
        ],
        eligibility: 'ECE/EEE students',
        teamSize: '1 (Individual)',
        requirements: [
            'Knowledge of basic electronics',
            'Familiarity with circuit simulation tools (optional)',
            'Valid college ID',
        ],
        coordinators: [
            { name: 'Manoj Kumar', phone: '+91 98765 43224' },
            { name: 'Lakshmi Prasad', phone: '+91 98765 43225' },
        ],
        prizePool: '₹15,000',
    },
    {
        id: 'robo-race',
        name: 'Robo Race',
        department: 'ece',
        category: 'technical',
        shortDescription: 'Build and race autonomous/remote-controlled robots',
        description: 'Design, build, and race your robots through challenging obstacle courses. Test your robotics, control systems, and mechanical design skills.',
        rules: [
            'Team size: 3-4 members',
            'Robot specifications provided beforehand',
            'Either autonomous or remote-controlled',
            'Time-based racing with obstacle penalties',
            'Pre-event bot inspection required',
        ],
        eligibility: 'Open to all engineering students',
        teamSize: '3-4 members',
        requirements: [
            'Self-built robot (within size and weight limits)',
            'Remote control (if not autonomous)',
            'Spare batteries',
            'Valid college IDs',
        ],
        coordinators: [
            { name: 'Kiran Reddy', phone: '+91 98765 43226' },
            { name: 'Sowmya Rao', phone: '+91 98765 43227' },
        ],
        prizePool: '₹22,000',
    },
    {
        id: 'ece-paper-presentation',
        name: 'Paper Presentation',
        department: 'ece',
        category: 'non-technical',
        shortDescription: 'Present your research ideas on emerging technologies',
        description: 'Showcase your research and ideas on cutting-edge topics in electronics and communication. Present to a panel of judges and receive valuable feedback.',
        rules: [
            'Individual or team of 2',
            'Presentation duration: 10-12 minutes',
            'Topics: IoT, 5G, VLSI, Embedded Systems, Signal Processing, etc.',
            'Abstract submission required before event',
            'Judging on content, presentation, and Q&A',
        ],
        eligibility: 'Open to all',
        teamSize: '1-2 members',
        requirements: [
            'Laptop with presentation',
            'Abstract (submitted in advance)',
            'Valid college ID',
        ],
        coordinators: [
            { name: 'Deepak Sharma', phone: '+91 98765 43228' },
            { name: 'Nithya Krishnan', phone: '+91 98765 43229' },
        ],
        prizePool: '₹10,000',
    },

    // EEE Events
    {
        id: 'power-grid-challenge',
        name: 'Power Grid Challenge',
        department: 'eee',
        category: 'technical',
        shortDescription: 'Design efficient power distribution systems',
        description: 'Take on the challenge of designing optimal power distribution networks. Solve real-world electrical engineering problems involving load balancing, efficiency, and sustainability.',
        rules: [
            'Team size: 2-3 members',
            'Duration: 3 hours',
            'Design power systems for given scenarios',
            'Calculations and simulations required',
            'Presentation of solution mandatory',
        ],
        eligibility: 'EEE/ECE students',
        teamSize: '2-3 members',
        requirements: [
            'Calculators',
            'Laptops with simulation tools (optional)',
            'Valid college IDs',
        ],
        coordinators: [
            { name: 'Rajesh Babu', phone: '+91 98765 43230' },
            { name: 'Shanthi Devi', phone: '+91 98765 43231' },
        ],
        prizePool: '₹14,000',
    },
    {
        id: 'renewable-energy-expo',
        name: 'Renewable Energy Expo',
        department: 'eee',
        category: 'workshop',
        shortDescription: 'Exhibition and workshop on sustainable energy solutions',
        description: 'Learn about and present renewable energy innovations. This event combines workshop sessions on solar, wind, and hybrid energy systems with a project exhibition.',
        rules: [
            'Individual or team participation',
            'Workshop attendance mandatory for exhibition participants',
            'Models/projects will be judged on innovation and feasibility',
            'Poster presentation also accepted',
        ],
        eligibility: 'Open to all',
        teamSize: '1-4 members',
        requirements: [
            'Project model or poster (for exhibition)',
            'Notebook for workshop',
            'Valid college ID',
        ],
        coordinators: [
            { name: 'Venkat Rao', phone: '+91 98765 43232' },
            { name: 'Aruna Kumari', phone: '+91 98765 43233' },
        ],
        prizePool: '₹12,000',
    },

    // Mechanical Events
    {
        id: 'cad-wars',
        name: 'CAD Wars',
        department: 'mech',
        category: 'technical',
        shortDescription: 'Speed CAD modeling competition',
        description: 'Compete in a high-intensity CAD modeling challenge. Create accurate 3D models based on technical drawings within strict time limits.',
        rules: [
            'Individual participation',
            'Duration: 2 hours',
            'Software: AutoCAD/SolidWorks/CATIA',
            'Technical drawings provided on the spot',
            'Judging on accuracy, time, and complexity',
        ],
        eligibility: 'Open to all engineering students',
        teamSize: '1 (Individual)',
        requirements: [
            'Laptop with CAD software installed',
            'Mouse (recommended)',
            'Valid college ID',
        ],
        coordinators: [
            { name: 'Prakash Reddy', phone: '+91 98765 43234' },
            { name: 'Madhavi Latha', phone: '+91 98765 43235' },
        ],
        prizePool: '₹13,000',
    },
    {
        id: 'bridge-building',
        name: 'Bridge Building Competition',
        department: 'mech',
        category: 'technical',
        shortDescription: 'Build the strongest bridge with limited materials',
        description: 'Design and construct bridges using provided materials. Test your understanding of structural mechanics, load distribution, and practical engineering.',
        rules: [
            'Team size: 3-4 members',
            'Build using provided materials only',
            'Bridge must meet minimum span requirements',
            'Load testing will determine winner',
            'Bonus points for aesthetic design',
        ],
        eligibility: 'Open to all engineering students',
        teamSize: '3-4 members',
        requirements: [
            'Basic tools (will be provided)',
            'No prior materials allowed',
            'Valid college IDs',
        ],
        coordinators: [
            { name: 'Sunil Kumar', phone: '+91 98765 43236' },
            { name: 'Geetha Ramesh', phone: '+91 98765 43237' },
        ],
        prizePool: '₹16,000',
    },
    {
        id: 'mech-workshop',
        name: '3D Printing Workshop',
        department: 'mech',
        category: 'workshop',
        shortDescription: 'Hands-on workshop on additive manufacturing',
        description: 'Learn the fundamentals of 3D printing technology, design for additive manufacturing, and get hands-on experience with 3D printers.',
        rules: [
            'Open registration',
            'Workshop duration: 4 hours',
            'Includes design session and printing demo',
            'Participants get certificate of completion',
            'Limited seats: first come, first served',
        ],
        eligibility: 'Open to all',
        teamSize: 'Individual registration',
        requirements: [
            'Laptop (optional, for design session)',
            'Notebook and pen',
            'Valid college ID',
        ],
        coordinators: [
            { name: 'Naveen Chandra', phone: '+91 98765 43238' },
            { name: 'Bharathi Subramanian', phone: '+91 98765 43239' },
        ],
        prizePool: 'Certificates',
    },

    // Civil Events
    {
        id: 'structural-design',
        name: 'Structural Design Challenge',
        department: 'civil',
        category: 'technical',
        shortDescription: 'Design earthquake-resistant structures',
        description: 'Apply your knowledge of structural engineering to design buildings that can withstand seismic activities. Use software tools and calculations to optimize your designs.',
        rules: [
            'Team size: 2-3 members',
            'Duration: 3.5 hours',
            'Design must meet building codes',
            'Software: STAAD Pro/ETABS (or manual calculations)',
            'Presentation and Q&A session',
        ],
        eligibility: 'Civil engineering students',
        teamSize: '2-3 members',
        requirements: [
            'Laptops with structural analysis software',
            'Calculators',
            'Valid college IDs',
        ],
        coordinators: [
            { name: 'Ramesh Babu', phone: '+91 98765 43240' },
            { name: 'Vasantha Lakshmi', phone: '+91 98765 43241' },
        ],
        prizePool: '₹15,000',
    },
    {
        id: 'urban-planning',
        name: 'Urban Planning Competition',
        department: 'civil',
        category: 'non-technical',
        shortDescription: 'Design sustainable and smart cities',
        description: 'Envision the cities of tomorrow. Create comprehensive urban development plans incorporating sustainability, smart infrastructure, and quality of life improvements.',
        rules: [
            'Team size: 3-5 members',
            'Create detailed urban plan with maps/models',
            'Focus on sustainability and innovation',
            'Poster/model presentation required',
            'Judging on creativity, feasibility, and presentation',
        ],
        eligibility: 'Open to all',
        teamSize: '3-5 members',
        requirements: [
            'Poster boards/model materials',
            'Design software (optional)',
            'Valid college IDs',
        ],
        coordinators: [
            { name: 'Murali Krishna', phone: '+91 98765 43242' },
            { name: 'Radhika Menon', phone: '+91 98765 43243' },
        ],
        prizePool: '₹11,000',
    },
    {
        id: 'surveying-workshop',
        name: 'Modern Surveying Workshop',
        department: 'civil',
        category: 'workshop',
        shortDescription: 'Learn GPS and drone-based surveying techniques',
        description: 'Hands-on workshop covering modern surveying techniques including GPS systems, total stations, and drone-based photogrammetry for civil engineering applications.',
        rules: [
            'Open registration',
            'Workshop duration: 5 hours',
            'Field demonstration included',
            'Certificate of participation provided',
            'Limited seats available',
        ],
        eligibility: 'Open to all',
        teamSize: 'Individual registration',
        requirements: [
            'Comfortable outdoor clothing',
            'Notebook and pen',
            'Valid college ID',
        ],
        coordinators: [
            { name: 'Srinivas Reddy', phone: '+91 98765 43244' },
            { name: 'Lalitha Kumari', phone: '+91 98765 43245' },
        ],
        prizePool: 'Certificates',
    },
];

// Utility functions
export const getEventById = (id) => events.find(event => event.id === id);

export const getEventsByDepartment = (deptId) =>
    events.filter(event => event.department === deptId);

export const getEventsByCategory = (catId) =>
    events.filter(event => event.category === catId);

export const getEventsByFilter = (deptId = null, catId = null) => {
    let filtered = events;

    if (deptId && deptId !== 'all') {
        filtered = filtered.filter(event => event.department === deptId);
    }

    if (catId && catId !== 'all') {
        filtered = filtered.filter(event => event.category === catId);
    }

    return filtered;
};

export const getDepartmentById = (id) =>
    departments.find(dept => dept.id === id);

export const getCategoryById = (id) =>
    categories.find(cat => cat.id === id);

// Statistics
export const getStats = () => ({
    departments: departments.length,
    totalEvents: events.length,
    technicalEvents: events.filter(e => e.category === 'technical').length,
    workshops: events.filter(e => e.category === 'workshop').length,
    prizePool: '₹2,50,000+',
});
