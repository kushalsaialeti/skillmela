export const workshops = [
    {
        id: 'domains',
        title: 'DOMAINS',
        subtitle: 'Multi-Stack Web Development',
        price: 79,
        originalPrice: 100,
        badge: 'HOT',
        level: 'BEGINNER-INT',
        duration: '4.5 HOURS',
        format: 'INTERACTIVE LAB',
        certificate: 'INCLUDED',
        description: 'Master 2.0 apps—a unified full-stack for every niche. We\'ll walk you through Web & App Development, Artificial Intelligence, Machine Learning, Cloud Infrastructure, and the Internet of Things (IoT).',
        fullDescription: 'Dive into the core pillars of modern technology. This workshop covers the convergence of Web & App Development, Artificial Intelligence, Machine Learning, Cloud Infrastructure, and the Internet of Things (IoT). Designed for the next generation of digital architects, this session will break down the barriers between different tech stacks, showing you how to build cohesive, intelligent ecosystems.',
        outcomes: [
            'Building scalable React-based web applications',
            'Cloud deployment strategies using AWS & Docker',
            'Cross-platform app dev with Flutter fundamentals',
            'Integrating Python AI models into production',
            'Real-time data synchronization with IoT sensors',
            'MLOps: Automated training and deployment loops'
        ],
        techStack: ['VS CODE', 'PYTHON 3.9+', 'NODE.JS', 'DOCKER', 'AWS CONSOLE', 'TENSORFLOW'],
        prerequisites: [
            'Basic understanding of Logic & Algorithms',
            'Familiarity with Command Line (CLI)',
            'Laptop with minimum 8GB RAM'
        ],
        featured: true,
        color: 'cyan',
        animationType: 'glitch',
        highlights: [
            'Web & App Development',
            'Artificial Intelligence',
            'Machine Learning',
            'Cloud Infrastructure',
            'Internet of Things (IoT)'
        ]
    },
    {
        id: 'ai-tools',
        title: 'AI TOOLS',
        subtitle: 'Next-Gen AI Productivity',
        price: 79,
        originalPrice: 100,
        badge: 'NEW',
        level: 'ALL LEVELS',
        duration: '3 HOURS',
        format: 'HANDS-ON',
        certificate: 'INCLUDED',
        description: 'Master AI-first productivity. Master the tools redefining work: ChatGPT, Gemini, Midjourney, and more. Learn to leverage AI for maximum efficiency.',
        fullDescription: 'Unlock the power of AI-first productivity. Master the tools redefining work: ChatGPT, Gemini, Midjourney, and more. Learn to leverage AI for maximum efficiency in content creation, design, coding, and problem-solving.',
        outcomes: [
            'Advanced prompt engineering for ChatGPT & Gemini',
            'Creating stunning visuals with Midjourney & DALL-E',
            'AI-powered code generation and debugging',
            'Automating workflows with AI tools',
            'Ethical AI usage and best practices'
        ],
        techStack: ['CHATGPT', 'GEMINI', 'MIDJOURNEY', 'GITHUB COPILOT', 'NOTION AI'],
        prerequisites: [
            'Basic computer literacy',
            'Internet connection',
            'Curiosity and willingness to experiment'
        ],
        featured: false,
        color: 'teal',
        animationType: 'neural',
        highlights: [
            'ChatGPT Mastery',
            'Gemini Advanced',
            'Midjourney Pro',
            'AI Automation'
        ]
    },
    {
        id: 'photoshop',
        title: 'PHOTOSHOP',
        subtitle: 'Digital Design Mastery',
        price: 149,
        originalPrice: 200,
        badge: 'CREATIVE',
        level: 'BEGINNER-ADV',
        duration: '4 HOURS',
        format: 'PROJECT-BASED',
        certificate: 'INCLUDED',
        description: 'From zero to creative pro. Learn to create stunning visuals for branding, social media, and professional design work.',
        fullDescription: 'Transform your creative vision into reality. This comprehensive Photoshop workshop takes you from basics to advanced techniques, covering photo manipulation, digital art, UI design, and professional retouching.',
        outcomes: [
            'Master essential Photoshop tools and shortcuts',
            'Advanced photo manipulation techniques',
            'Creating social media graphics and branding',
            'UI/UX design mockups',
            'Professional retouching workflows',
            'Working with layers, masks, and blend modes'
        ],
        techStack: ['PHOTOSHOP CC', 'ADOBE CREATIVE CLOUD', 'FIGMA', 'CANVA PRO'],
        prerequisites: [
            'Computer with Photoshop installed (trial OK)',
            'Basic understanding of design concepts',
            'Creative mindset'
        ],
        featured: false,
        color: 'purple',
        animationType: 'prism',
        highlights: [
            'Photo Manipulation',
            'Digital Art',
            'UI Design',
            'Brand Graphics'
        ]
    },
    {
        id: 'dsa',
        title: 'DSA',
        subtitle: 'Data Structures & Algorithms',
        price: 79,
        originalPrice: 100,
        badge: 'CORE',
        level: 'INTERMEDIATE',
        duration: '5 HOURS',
        format: 'CODE-ALONG',
        certificate: 'INCLUDED',
        description: 'Cracking the logic. Master the logic "Gems" for DSA (Data Structures and Algorithms) that will help you ace technical interviews and build efficient systems.',
        fullDescription: 'Dive deep into the fundamental building blocks of computer science. This intensive workshop covers essential data structures and algorithms that form the foundation of technical interviews and efficient software development.',
        outcomes: [
            'Understanding time and space complexity',
            'Mastering arrays, linked lists, and trees',
            'Graph algorithms and traversal techniques',
            'Dynamic programming patterns',
            'Sorting and searching algorithms',
            'Problem-solving strategies for interviews'
        ],
        techStack: ['PYTHON', 'JAVA', 'C++', 'LEETCODE', 'HACKERRANK'],
        prerequisites: [
            'Proficiency in at least one programming language',
            'Basic understanding of programming concepts',
            'Laptop with code editor installed'
        ],
        featured: false,
        color: 'green',
        animationType: 'binary',
        highlights: [
            'Arrays & Strings',
            'Trees & Graphs',
            'Dynamic Programming',
            'Interview Prep'
        ]
    },
    {
        id: 'github',
        title: 'GITHUB',
        subtitle: 'Version Control & Collaboration',
        price: 'Free',
        originalPrice: 0,
        badge: 'ESSENTIAL',
        level: 'BEGINNER',
        duration: '2.5 HOURS',
        format: 'TERMINAL-BASED',
        certificate: 'INCLUDED',
        description: 'Master your code at any time. In this hands-free, no-code-loss environment, you\'ll learn Git version control and GitHub collaboration workflows.',
        fullDescription: 'Learn the essential tool every developer needs. Master Git version control and GitHub collaboration workflows to manage your code professionally, contribute to open source, and work effectively in teams.',
        outcomes: [
            'Git fundamentals: commit, push, pull, merge',
            'Branching strategies and workflows',
            'Resolving merge conflicts',
            'GitHub collaboration: PRs, issues, reviews',
            'Open source contribution guidelines',
            'CI/CD basics with GitHub Actions'
        ],
        techStack: ['GIT', 'GITHUB', 'VS CODE', 'TERMINAL', 'GITHUB ACTIONS'],
        prerequisites: [
            'Basic command line knowledge',
            'GitHub account (free)',
            'Any code editor installed'
        ],
        featured: false,
        color: 'cyan',
        animationType: 'terminal',
        highlights: [
            'Git Basics',
            'Branching & Merging',
            'Collaboration',
            'Open Source'
        ]
    }
];

export const getWorkshopById = (id) => {
    return workshops.find(workshop => workshop.id === id);
};

export const getFeaturedWorkshop = () => {
    return workshops.find(workshop => workshop.featured);
};

export const getNonFeaturedWorkshops = () => {
    return workshops.filter(workshop => !workshop.featured);
};
