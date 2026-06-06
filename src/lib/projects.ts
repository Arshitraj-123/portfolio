// Project content for case studies
export const projects = [
    {
        slug: 'taskflow',
        title: 'TaskFlow App',
        subtitle: 'Modern full-stack task management with secure authentication',
        description: 'A modern, full-stack task management application built with React and Express.js. Features secure JWT authentication, real-time task management, browser notifications, password reset functionality, and a beautiful responsive UI.',
        image: '📋',
        liveUrl: 'https://task-flow-tf2q.vercel.app/',
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
        slug: 'retailops',
        title: 'RetailOps Intelligence',
        subtitle: 'Zero-Config Logistics & Retail Analytics Dashboard',
        description: 'A zero-config logistics & retail analytics dashboard — upload any CSV and instantly get 16 interactive charts, KPI cards, geospatial maps, correlation matrices, and export tools. Features smart column mapping, live filters, one-click CSV export, and a full dark-mode UI with neon accent theme.',
        image: '📦',
        liveUrl: 'https://retailops-intelligence-fa8vgeqm4jpqltppwifakb.streamlit.app',
        codeUrl: 'https://github.com/Arshitraj-123/retailops-intelligence',
        tags: ['Streamlit', 'Python 3.11', 'Plotly', 'Folium', 'Pandas'],
        techStack: [
            { name: 'Streamlit', icon: '🎈' },
            { name: 'Plotly', icon: '📊' },
            { name: 'Folium', icon: '🗺️' },
            { name: 'Pandas', icon: '🐼' },
            { name: 'NumPy', icon: '🔢' },
            { name: 'Python 3.11', icon: '🐍' },
        ],
        dataStructure: {
            database: 'CSV Upload (In-Memory)',
            orm: 'Pandas DataFrame',
            tables: [
                { name: 'CSV Columns Mapping', fields: [{ name: 'Date Column', type: 'datetime' }, { name: 'Primary Metric', type: 'numeric' }, { name: 'Primary Category', type: 'string' }, { name: 'Sub-Category', type: 'string' }] },
                { name: 'Geo Mapping', fields: [{ name: 'Latitude', type: 'float' }, { name: 'Longitude', type: 'float' }, { name: 'Geo Severity', type: 'string' }] },
                { name: 'KPI Cards', fields: [{ name: 'Total', type: 'sum' }, { name: 'Mean', type: 'average' }, { name: 'Max / Min', type: 'numeric' }, { name: 'Row Count', type: 'integer' }] },
            ],
        },
        learnings: [
            { title: 'Streamlit App Architecture', text: 'Designed a zero-config dashboard that auto-detects column types and maps them to appropriate chart modules via sidebar controls.' },
            { title: 'Plotly Interactive Charts', text: 'Built 16 chart types including time-series, treemaps, sunburst drilldowns, violin plots, pivot heatmaps, correlation matrices, and ECDF curves.' },
            { title: 'Folium Geospatial Maps', text: 'Integrated Leaflet.js maps via Folium with marker clusters, proportional circles, density heatmaps, and scatter-geo visualizations.' },
            { title: 'Data Processing Pipeline', text: 'Used Pandas and NumPy for efficient data aggregation, filtering, and export — handling any arbitrary CSV schema without configuration.' },
        ],
        conclusion: [
            'RetailOps Intelligence demonstrates how Python\'s data ecosystem can power a production-grade analytics dashboard with zero configuration required from the user.',
            'The combination of Streamlit for the app framework, Plotly for interactive visualizations, and Folium for geospatial maps creates a powerful and intuitive analytics experience.',
            'Building this project deepened my understanding of data visualization best practices, responsive chart layouts, and building user-friendly data tools.',
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
