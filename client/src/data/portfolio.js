export const personalInfo = {
  name: 'Sani Haseeb',
  title: 'Full-Stack Software Engineer',
  tagline: '3+ years building enterprise applications at scale — and integrating LLMs and AI agents to ship 40% faster.',
  location: 'Mississauga, ON',
  email: 'muhammad.s.haseeb@mail.mcgill.ca',
  github: 'https://github.com/sanihaseeb',
  linkedin: 'https://linkedin.com/in/sani-haseeb',
}

export const skills = [
  {
    category: 'Languages & Frameworks',
    icon: '⚡',
    items: ['Java', 'Spring Boot', 'JavaScript', 'TypeScript', 'Python', 'Node.js', 'React', 'Bash', 'SQL'],
  },
  {
    category: 'Cloud & Infrastructure',
    icon: '☁️',
    items: ['AWS S3', 'SNS', 'SQS', 'API Gateway', 'CloudWatch', 'CloudFormation', 'OpenShift', 'Harness'],
  },
  {
    category: 'Databases & Messaging',
    icon: '🗄️',
    items: ['MongoDB', 'SQL', 'DynamoDB', 'Apache Kafka', 'SQLite'],
  },
  {
    category: 'Tools & Practices',
    icon: '🛠️',
    items: ['Git', 'Maven', 'REST APIs', 'WebSockets', 'JWT', 'CI/CD', 'Agile/Scrum'],
  },
  {
    category: 'AI-Augmented Development',
    icon: '🤖',
    items: ['Claude Code', 'GitHub Copilot', 'Devin', 'GPT-4', 'Gemini', 'Prompt Engineering', 'LLM API Integration'],
  },
]

export const projects = [
  {
    id: 'movr',
    name: 'MovR',
    subtitle: 'Real-Time Moving Logistics Platform',
    description:
      'A production-grade two-sided marketplace connecting clients with local movers. Features real-time trip tracking via Socket.io, geolocation-based mover matching, in-app chat, Stripe payments, Cloudinary image hosting, and transactional email — deployed across Railway, Vercel, and MongoDB Atlas.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Stripe', 'Tailwind CSS', 'Railway'],
    github: 'https://github.com/sanihaseeb/movr-app',
    live: 'https://movr-app.vercel.app/',
    gradient: 'linear-gradient(135deg, #F97316 0%, #EA580C 50%, #9A3412 100%)',
    accentColor: '#F97316',
    icon: '🚚',
    preview: 'MovR',
    screenshot: '/screenshots/movr.png',
    video: '/videos/movr.webm',
  },
  {
    id: 'stock-app',
    name: 'Staq',
    subtitle: 'Live Stock Market Dashboard',
    description:
      'Real-time stock market dashboard with live price tracking, interactive charts, watchlists, Shariah compliance filtering, and a live ticker. Built for traders who want fast, clean market data at a glance.',
    tech: ['React', 'TypeScript', 'Vite', 'Yahoo Finance API', 'WebSockets', 'Recharts'],
    github: 'https://github.com/sanihaseeb/stock-app',
    live: 'https://sanihaseeb.github.io/stock-app/',
    gradient: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)',
    accentColor: '#3B82F6',
    icon: '📈',
    preview: 'StockPulse',
    screenshot: '/screenshots/stockpulse.png',
  },
  {
    id: 'weather-app',
    name: 'Zephyr',
    subtitle: 'Weather Application',
    description:
      'Real-time weather app with a dynamic aurora-themed UI that adapts visually to weather conditions. Features 7-day forecasts, city autocomplete with debouncing, browser geolocation, and glassmorphism-styled cards.',
    tech: ['React', 'Vite', 'Open-Meteo API', 'CSS'],
    github: 'https://github.com/sanihaseeb/weather-app',
    live: 'https://sanihaseeb.github.io/weather-app/',
    gradient: 'linear-gradient(135deg, #48CAE4 0%, #0096C7 45%, #03045E 100%)',
    accentColor: '#48CAE4',
    icon: '🌤',
    preview: 'SkyPulse',
    screenshot: '/screenshots/skypulse.png',
  },
  {
    id: 'chat-app',
    name: 'ChatApp',
    subtitle: 'Real-Time Messaging',
    description:
      'Full-stack real-time chat application with private 1-on-1 messaging, a shared general channel, live presence indicators, typing status, persistent message history, and JWT-secured authentication.',
    tech: ['React', 'Node.js', 'Socket.IO', 'SQLite', 'JWT', 'Express'],
    github: 'https://github.com/sanihaseeb/chat-app',
    live: null,
    gradient: 'linear-gradient(135deg, #9D4EDD 0%, #5A189A 50%, #240046 100%)',
    accentColor: '#9D4EDD',
    icon: '💬',
    preview: 'ChatApp',
    screenshot: '/screenshots/chatapp.png',
  },
  {
    id: 'notes-cli',
    name: 'notes-cli',
    subtitle: 'CLI Note-Taking App',
    description:
      'A terminal-based note-taking app built in Python with a clean command set — add, list, search, edit, and delete notes. Features colored output, JSON persistence, and is installable as a native CLI command.',
    tech: ['Python', 'Typer', 'JSON', 'CLI'],
    github: 'https://github.com/sanihaseeb/notes-cli',
    live: null,
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #92400E 100%)',
    accentColor: '#F59E0B',
    icon: '📝',
    preview: 'NotesCLI',
  },
]

export const experience = [
  {
    company: 'Citigroup',
    role: 'Software Developer (AVP)',
    period: 'July 2022 – Present',
    location: 'Mississauga, ON',
    logo: 'C',
    logoImg: '/logos/citi.png',
    color: '#003B70',
    highlights: [
      'Own the full SDLC for a mission-critical deal settlement platform using Java, Spring Boot, and TypeScript.',
      'Architected an in-house Entitlements Microservice, eliminating third-party dependencies and reducing downtime.',
      'Migrated 11 microservices to Java 17 and Spring Boot 3.x, resolving security vulnerabilities.',
      'Integrated Claude Code, Devin, GitHub Copilot, and Gemini into the team\'s dev workflow — increasing throughput by 40% and cutting review cycles significantly.',
      'Built LLM-powered tooling directly into internal codebases via API integrations with GPT-4 and Claude.',
      'Mentored and onboarded 6 engineers within a year across the full development cycle.',
    ],
  },
  {
    company: 'Architek Health',
    role: 'Software Engineer (Part-Time)',
    period: 'Nov 2023 – Jun 2024',
    location: 'USA – Remote',
    logo: 'A',
    logoImg: '/logos/architek.jpg',
    color: '#10B981',
    highlights: [
      'Led backend architecture for health-tech v2 MVP from scratch using Node.js, TypeScript, AWS, and Serverless.',
      'Built a real-time WebSocket chat service and integrated multiple pharmacy APIs with webhook-based tracking.',
      'Developed SNS notifications, Stripe payments, and SQS queuing — improving order throughput by over 95%.',
    ],
  },
  {
    company: 'Microsoft (Nuance)',
    role: 'Software Developer (Co-op)',
    period: 'May 2021 – Aug 2021',
    location: 'Montreal, QC – Remote',
    logo: 'M',
    logoImg: '/logos/microsoft.png',
    color: '#0078D4',
    highlights: [
      'Redesigned and extended Python test suites post-storage migration — ensuring full coverage across migrated data paths and eliminating regression risk from day one of cutover.',
      'Automated end-to-end validation pipelines using Harness CI/CD, reducing manual deployment verification from hours to minutes.',
      'Leveraged Grafana and Prometheus to build observability dashboards that surfaced application behaviour in real time, enabling the team to catch and resolve post-deploy anomalies proactively.',
    ],
  },
  {
    company: 'Manulife',
    role: 'Software Engineer (Co-op)',
    period: 'Jan 2020 – Apr 2020',
    location: 'Montreal, QC',
    logo: 'M',
    logoImg: '/logos/manulife.svg',
    color: '#00A758',
    highlights: [
      'Built a Slack bot (Node.js) that improved timesheet compliance by 40%.',
      'Contributed to a goal-tracking and evaluation tool using Node.js, React, GraphQL, and MongoDB.',
    ],
  },
]

export const education = {
  institution: 'McGill University',
  degree: 'Bachelor of Engineering in Software',
  period: 'December 2021',
  location: 'Montreal, QC',
}
