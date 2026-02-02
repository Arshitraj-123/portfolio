// Project content for case studies
export const projects = [
    {
        slug: 'taskflow',
        title: 'TaskFlow App',
        subtitle: 'Modern full-stack task management with secure authentication',
        description: 'A modern, full-stack task management application built with React and Express.js. Features secure JWT authentication, real-time task management, browser notifications, password reset functionality, and a beautiful responsive UI.',
        image: '📋',
        liveUrl: 'https://taskflow-app.vercel.app',
        codeUrl: 'https://github.com/Arshitraj-123/Task-flow',
        tags: ['React 19', 'Express.js', 'SQLite', 'JWT', 'Vite'],
        techStack: [
            { name: 'React 19', icon: '⚛️' },
            { name: 'Vite 7', icon: '⚡' },
            { name: 'Express.js 5', icon: '🟢' },
            { name: 'SQLite3', icon: '🗄️' },
            { name: 'Knex.js', icon: '🔧' },
            { name: 'JWT + bcrypt', icon: '🔐' },
        ],
        dataStructure: {
            database: 'SQLite',
            orm: 'Knex.js',
            tables: [
                { name: 'User', fields: [{ name: 'id', type: 'integer' }, { name: 'email', type: 'string' }, { name: 'password', type: 'hash' }, { name: 'notifications', type: 'boolean' }] },
                { name: 'Task', fields: [{ name: 'id', type: 'integer' }, { name: 'title', type: 'string' }, { name: 'priority', type: 'enum' }, { name: 'dueDate', type: 'datetime' }] },
                { name: 'ResetToken', fields: [{ name: 'id', type: 'integer' }, { name: 'userId', type: 'integer' }, { name: 'token', type: 'string' }, { name: 'expiresAt', type: 'datetime' }] },
            ],
        },
        learnings: [
            { title: 'JWT Authentication Flow', text: 'Implemented secure JWT-based authentication with bcrypt password hashing, including login, register, and token-based password reset functionality.' },
            { title: 'Browser Notifications API', text: 'Integrated browser push notifications to alert users about upcoming task deadlines, enhancing user engagement and productivity.' },
            { title: 'Express.js REST API Design', text: 'Built a clean RESTful API with express-validator for input validation, proper error handling, and CORS configuration for frontend communication.' },
            { title: 'React + Vite Development', text: 'Leveraged Vite 7 for lightning-fast HMR and optimized builds, creating a smooth development experience with React 19.' },
        ],
        conclusion: [
            'TaskFlow was an excellent full-stack learning experience. Building secure authentication from scratch taught me the importance of proper password hashing and token management.',
            'The combination of React 19 with Vite and Express.js 5 proved to be a powerful, modern stack for building responsive web applications.',
            'I\'m particularly proud of the browser notification system that helps users stay on top of their task deadlines.',
        ],
    },
    {
        slug: 'bizzflow',
        title: 'BizFlow',
        subtitle: 'Modern CRM Solution with Angular & Express',
        description: 'A full-stack Customer Relationship Management application built with Angular 19 and Express.js. Features Firebase Authentication, Firestore real-time sync, client management, task tracking, and a beautiful Material UI dashboard.',
        image: '💼',
        liveUrl: 'https://bizflow.vercel.app',
        codeUrl: 'https://github.com/Arshitraj-123/Bizz-flow',
        tags: ['Angular 19', 'Express.js', 'Firebase', 'NgRx', 'TypeScript'],
        techStack: [
            { name: 'Angular 19', icon: 'A' },
            { name: 'Angular Material', icon: '🎨' },
            { name: 'NgRx', icon: '📦' },
            { name: 'Firebase', icon: '🔥' },
            { name: 'Express.js', icon: '🟢' },
            { name: 'Tailwind CSS', icon: '🌊' },
        ],
        dataStructure: {
            database: 'Firestore',
            orm: 'Firebase Admin SDK',
            tables: [
                { name: 'User', fields: [{ name: 'uid', type: 'string' }, { name: 'email', type: 'string' }, { name: 'displayName', type: 'string' }, { name: 'photoURL', type: 'string' }] },
                { name: 'Client', fields: [{ name: 'id', type: 'string' }, { name: 'name', type: 'string' }, { name: 'email', type: 'string' }, { name: 'status', type: 'enum' }] },
                { name: 'Task', fields: [{ name: 'id', type: 'string' }, { name: 'title', type: 'string' }, { name: 'priority', type: 'enum' }, { name: 'status', type: 'enum' }] },
            ],
        },
        learnings: [
            { title: 'Angular 19 Architecture', text: 'Structured a large-scale Angular app with feature modules, lazy loading, standalone components, and shared component libraries.' },
            { title: 'NgRx State Management', text: 'Implemented complex state patterns using NgRx store, effects, and selectors for predictable data flow across the CRM.' },
            { title: 'Firebase Full-Stack', text: 'Mastered Firebase Auth, Firestore real-time listeners, and Firebase Admin SDK for the Express.js backend.' },
            { title: 'Express.js API Design', text: 'Built a secure REST API with TypeScript, Helmet for security, JWT middleware, and proper route controllers.' },
        ],
        conclusion: [
            'BizFlow taught me how to build enterprise-grade full-stack applications combining Angular\'s robust frontend with Express.js backend and Firebase services.',
            'The NgRx state management pattern proved invaluable for managing complex CRM data flows across clients, tasks, and user sessions.',
            'I gained deep experience in building feature-rich dashboards with real-time updates and proper authentication guards.',
        ],
    },
    {
        slug: 'cybertrap',
        title: 'CyberTrap',
        subtitle: 'Agentic Scam Intelligence Honey-Pot',
        description: 'An AI-powered honey-pot system that engages scammers using a sophisticated persona (Mrs. Shanthi) to extract intelligence like UPI IDs, bank accounts, and phishing links. Features a 4-stage extraction funnel with consensus confidence scoring.',
        image: '🕷️',
        liveUrl: 'https://cybertrap-demo.onrender.com',
        codeUrl: 'https://github.com/Arshitraj-123/Cyber-Trap',
        tags: ['Python', 'Groq LLM', 'FastAPI', 'React 19', 'TypeScript'],
        techStack: [
            { name: 'FastAPI', icon: '⚡' },
            { name: 'Groq Llama 3.3', icon: '🧠' },
            { name: 'React 19', icon: '⚛️' },
            { name: 'TypeScript', icon: 'TS' },
            { name: 'Tailwind CSS', icon: '🌊' },
            { name: 'Vite', icon: '⚡' },
        ],
        dataStructure: {
            database: 'In-Memory Session Store',
            orm: 'Pydantic Validators',
            tables: [
                { name: 'Intelligence', fields: [{ name: 'upi', type: 'string' }, { name: 'bank_account', type: 'string' }, { name: 'ifsc', type: 'string' }, { name: 'link', type: 'string' }] },
                { name: 'Session', fields: [{ name: 'session_id', type: 'string' }, { name: 'stage', type: 'integer' }, { name: 'confidence', type: 'float' }, { name: 'history', type: 'array' }] },
                { name: 'Response', fields: [{ name: 'classification', type: 'enum' }, { name: 'reply', type: 'string' }, { name: 'thought_process', type: 'array' }, { name: 'detected_language', type: 'string' }] },
            ],
        },
        learnings: [
            { title: 'LLM Function Calling', text: 'Implemented stealth function calling with Groq Llama 3.3 70B to extract intelligence invisibly from scammer conversations without revealing intent.' },
            { title: '4-Stage Extraction Funnel', text: 'Designed Hook → Technical Friction → Pivot → Extraction stages with buffer logic to build rapport before attempting data extraction.' },
            { title: 'Consensus Confidence System', text: 'Built a scoring system reaching 100% confidence when values are confirmed across multiple conversation turns - preventing false positives.' },
            { title: 'Multi-Language Support', text: 'Implemented natural language detection supporting English, Hindi, Tamil, Telugu, Malayalam with realistic code-mixing for authentic responses.' },
        ],
        conclusion: [
            'CyberTrap was a fascinating dive into AI agent design. Creating Mrs. Shanthi - a convincing 68-year-old persona - taught me about prompt engineering and maintaining character consistency.',
            'The combination of FastAPI for the backend and React with TypeScript for the dashboard made it easy to build a real-time intelligence visualization system.',
            'This hackathon project gave me hands-on experience with LLM function calling, conversation state management, and building resilient AI agents.',
        ],
    },
];

export function getProjectBySlug(slug: string) {
    return projects.find(p => p.slug === slug);
}

export function getAllProjectSlugs() {
    return projects.map(p => ({ slug: p.slug }));
}

export function getNextProject(currentSlug: string) {
    const currentIndex = projects.findIndex(p => p.slug === currentSlug);
    const nextIndex = (currentIndex + 1) % projects.length;
    return projects[nextIndex];
}
