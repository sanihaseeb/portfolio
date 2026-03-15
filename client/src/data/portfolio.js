export const personalInfo = {
  name: 'Sani Haseeb',
  title: 'Full-Stack Software Engineer',
  tagline: '3+ years building and scaling enterprise applications across financial institutions and health-tech startups.',
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
    items: ['AWS S3', 'DynamoDB', 'SNS', 'SQS', 'API Gateway', 'CloudWatch', 'CloudFormation', 'OpenShift', 'Harness'],
  },
  {
    category: 'Databases & Messaging',
    icon: '🗄️',
    items: ['MongoDB', 'SQL', 'Apache Kafka', 'SQLite'],
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
    id: 'weather-app',
    name: 'SkyPulse',
    subtitle: 'Weather Application',
    description:
      'Real-time weather app with a dynamic aurora-themed UI that adapts visually to weather conditions. Features 7-day forecasts, city autocomplete with debouncing, browser geolocation, and glassmorphism-styled cards.',
    tech: ['React', 'Vite', 'Open-Meteo API', 'CSS'],
    github: 'https://github.com/sanihaseeb/weather-app',
    live: null,
    gradient: 'linear-gradient(135deg, #48CAE4 0%, #0096C7 45%, #03045E 100%)',
    accentColor: '#48CAE4',
    icon: '🌤',
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
  },
]

export const experience = [
  {
    company: 'Citigroup',
    role: 'Software Developer (AVP)',
    period: 'July 2022 – Present',
    location: 'Mississauga, ON',
    logo: 'C',
    color: '#003B70',
    highlights: [
      'Own the full SDLC for a mission-critical deal settlement platform using Java, Spring Boot, and TypeScript.',
      'Architected an in-house Entitlements Microservice, eliminating third-party dependencies and reducing downtime.',
      'Migrated 11 microservices to Java 17 and Spring Boot 3.x, resolving security vulnerabilities.',
      'Achieved 5× speed improvement integrating Claude, GitHub Copilot, Devin, and Gemini into daily workflows.',
      'Mentored and onboarded 6 engineers within a year across the full development cycle.',
    ],
  },
  {
    company: 'Architek Health',
    role: 'Software Engineer (Part-Time)',
    period: 'Nov 2023 – Jun 2024',
    location: 'USA – Remote',
    logo: 'A',
    color: '#10B981',
    highlights: [
      'Led backend architecture for health-tech v2 MVP from scratch using Node.js, TypeScript, AWS, and Serverless.',
      'Built a real-time WebSocket chat service and integrated multiple pharmacy APIs with webhook-based tracking.',
      'Developed SNS notifications, Stripe payments, and SQS queuing — improving order throughput by over 95%.',
    ],
  },
  {
    company: 'Manulife',
    role: 'Software Engineer (Co-op)',
    period: 'Jan 2020 – Apr 2020',
    location: 'Montreal, QC',
    logo: 'M',
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
