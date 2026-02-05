import { Code2, Network, Cpu, Zap, Cog, Building2, Brain, Shield, Database, Layout } from 'lucide-react';

export const departments = [
    { id: 'cse', name: 'Computer Science & Engineering', icon: 'Code2', color: 'primary' },
    { id: 'it', name: 'Information Technology', icon: 'Network', color: 'secondary' },
    { id: 'ece', name: 'Electronics & Communication', icon: 'Cpu', color: 'primary' },
    { id: 'mech', name: 'Mechanical Engineering', icon: 'Cog', color: 'primary' },
    { id: 'civil', name: 'Civil Engineering', icon: 'Building2', color: 'secondary' },
    { id: 'aids', name: 'AI & Data Science', icon: 'Brain', color: 'primary' },
    { id: 'aiml', name: 'AI & Machine Learning', icon: 'Layout', color: 'secondary' },
    { id: 'cs', name: 'Cyber Security', icon: 'Shield', color: 'primary' },
    { id: 'csbs', name: 'CS & Business Systems', icon: 'Database', color: 'secondary' },
];

export const categories = [
    { id: 'technical', name: 'Technical', color: 'primary' },
    { id: 'non-technical', name: 'Non-Technical', color: 'secondary' },
];

export const events = [
    // CSE Events
    {
        id: 'code-rush',
        name: 'Code Rush',
        department: 'cse',
        category: 'technical',
        shortDescription: 'Speed coding competition',
        description: 'Code Rush is an intense algorithmic programming competition where participants race against time to solve complex coding challenges.',
        rules: ['Individual only', '2 hours duration', 'No AI tools allowed'],
        eligibility: 'Open to all',
        teamSize: '1',
        requirements: ['Laptop', 'College ID'],
        coordinators: [],
        prizePool: '₹15,000',
    },
    // AIDS Events
    {
        id: 'data-throne',
        name: 'Data Throne',
        department: 'aids',
        category: 'technical',
        shortDescription: 'Data Science Hackathon',
        description: 'Analyze complex datasets and build predictive models to solve real-world problems in this data science challenge.',
        rules: ['Team of 2-3', '4 hours duration', 'Datasets provided on spot'],
        eligibility: 'Open to all',
        teamSize: '2-3',
        requirements: ['Laptop with Python/R', 'College ID'],
        coordinators: [],
        prizePool: '₹20,000',
    },
    // AIML Events
    {
        id: 'neural-nexus',
        name: 'Neural Nexus',
        department: 'aiml',
        category: 'technical',
        shortDescription: 'Deep Learning Championship',
        description: 'Build and train neural networks to optimize accuracy on computer vision or NLP tasks.',
        rules: ['Team of 2-4', '6 hours duration', 'Pre-trained models allowed'],
        eligibility: 'Open to all',
        teamSize: '2-4',
        requirements: ['Laptop with GPU support (cloud allowed)', 'College ID'],
        coordinators: [],
        prizePool: '₹25,000',
    },
    // Cyber Security (CS) Events
    {
        id: 'capture-the-flag',
        name: 'Capture The Flag',
        department: 'cs',
        category: 'technical',
        shortDescription: 'Cyber Security Challenge',
        description: 'Find vulnerabilities, exploit them, and capture flags in this jeopardy-style CTF competition.',
        rules: ['Team of 2-3', '4 hours duration', 'Kali Linux recommended'],
        eligibility: 'Open to all',
        teamSize: '2-3',
        requirements: ['Laptop', 'College ID'],
        coordinators: [],
        prizePool: '₹20,000',
    },
    // CSBS Events
    {
        id: 'biz-tech',
        name: 'BizTech Strategy',
        department: 'csbs',
        category: 'technical',
        shortDescription: 'Business Technology Case Study',
        description: 'Solve complex business problems using technology solutions. Present your strategy to a panel of judges.',
        rules: ['Team of 2-4', 'Presentation round', 'Focus on feasibility and ROI'],
        eligibility: 'Open to all',
        teamSize: '2-4',
        requirements: ['Presentation slides', 'College ID'],
        coordinators: [],
        prizePool: '₹15,000',
    },
    // IT Events
    {
        id: 'web-master',
        name: 'Web Master',
        department: 'it',
        category: 'technical',
        shortDescription: 'Full Stack Development',
        description: 'Create responsive and dynamic web applications based on the given theme.',
        rules: ['Team of 2-3', '4 hours', 'Any stack allowed'],
        eligibility: 'Open to all',
        teamSize: '2-3',
        coordinators: [],
        prizePool: '₹18,000',
    }
];

// Utility functions
export const getEventById = (id) => events.find(event => event.id === id);
export const getEventsByDepartment = (deptId) => events.filter(event => event.department === deptId);
export const getEventsByCategory = (catId) => events.filter(event => event.category === catId);
export const getEventsByFilter = (deptId = null, catId = null) => {
    let filtered = events;
    if (deptId && deptId !== 'all') filtered = filtered.filter(event => event.department === deptId);
    if (catId && catId !== 'all') filtered = filtered.filter(event => event.category === catId);
    return filtered;
};
export const getDepartmentById = (id) => departments.find(dept => dept.id === id);
export const getCategoryById = (id) => categories.find(cat => cat.id === id);
export const getStats = () => ({
    departments: departments.length,
    totalEvents: events.length,
    technicalEvents: events.filter(e => e.category === 'technical').length,
    prizePool: '₹2,00,000+',
});
