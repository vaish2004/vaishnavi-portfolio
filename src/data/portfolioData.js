import BuildIcon from '@mui/icons-material/Build';

export const NAV_LINKS = ["Skills", "Experience", "Projects", "AI", "Architecture", "Contact"];

export const SKILLS = {
  "Backend Technologies": [
    "Java (10+ years)",
    "Spring Boot & Spring Framework",
    "Spring Security & JWT",
    "JPA / Hibernate",
    "RESTful APIs & Microservices",
    "Kotlin",
  ],
  "Databases": [
    "PostgreSQL, MySQL, MSSQL",
    "MongoDB, DynamoDB",
    "Redis",
    "Database Design & Optimization",
  ],
  "Cloud & DevOps": [
    "AWS (EC2, S3, Lambda, SQS, SNS)",
    "Docker & Containerization",
    "CI/CD Pipelines",
    "CloudFormation & IaC",
    "CloudWatch & Monitoring",
  ],
  "Architecture": [
    "Microservices Architecture",
    "Event-Driven Architecture",
    "Design Patterns & SOLID",
    "Domain-Driven Design",
    "System Design & Scalability",
  ],
  "AI & Smart Tools": [
    "Cursor, GitHub Copilot, Claude Code",
    "Building AI Agents",
    "AI Voice Bots & Chatbots",
    "LLMs & Prompt Engineering",
  ],
};

export const EXPERIENCE = [
  {
    role: "Senior Java Developer",
    company: "Sabi Market",
    period: "Recent",
    desc: "Led backend for a B2B marketplace handling FMCG. Built microservices for onboarding, KYC/KYB, inventory, and logistics. Cut manual work by 60% with automation. Used Cursor and Claude Code to save ~40% dev time.",
    tags: ["Spring Boot", "PostgreSQL", "AWS", "Angular", "Docker", "Claude Code"],
  },
  {
    role: "Senior Java Developer",
    company: "ForwoodSafety",
    period: "Recent",
    desc: "Built a low-code SaaS safety management platform. Serverless AWS with Lambda, DynamoDB, Kinesis. Used GitHub Copilot and Cursor to cut feature delivery time by ~35%.",
    tags: ["AWS Lambda", "DynamoDB", "Kinesis", "Terraform", "GitHub Copilot"],
  },
  {
    role: "Senior Java Developer",
    company: "NousTalk",
    period: "Recent",
    desc: "Built HIPAA/PHIPA/GDPR-compliant telehealth backend. End-to-end encryption, WebRTC video, JWT auth. 99.9% uptime supporting thousands of concurrent sessions.",
    tags: ["Spring Boot", "WebRTC", "AWS", "ReactJS", "GitHub Actions"],
  },
  {
    role: "Full Stack Developer",
    company: "Nod Innovations",
    period: "Recent",
    desc: "Scheduling system for specialist telehealth visits across time zones. Twilio Video integration, EHR connections (Cerner, Nextgen, AthenaHealth) using HL7 standards.",
    tags: ["Twilio Video", "PostgreSQL", "Angular", "EHR Integration"],
  },
];

  export const PROJECTS = [
  {
    name: "NousTalk Healthcare Platform",
    role: "Senior Java Developer | Architecture Lead",
    challenge:
      "Therapy providers needed a way to see patients online, but the platform had to be rock-solid on privacy — HIPAA, PHIPA, and GDPR all had to be covered. Patient data security was non-negotiable.",
    built:
      "Built the backend with microservices, added end-to-end encryption, JWT login, and hooked up WebRTC for video/audio calls. Added real-time chat using WebSockets and built practice management features. Also added an AI chatbot that handles patient intake and books appointments. Used Cursor and GitHub Copilot to write code faster and keep quality high. Set up CI/CD with GitHub Actions and AWS CodeDeploy.",
    stats: [
      ["99.9%", "Uptime"],
      ["1000+", "Concurrent Sessions"],
      ["40%", "Code Quality Improvement"],
    ],
    tags: ["Spring Boot Microservices", "WebRTC", "AWS", "ReactJS", "PostgreSQL", "AI Chatbot", "Cursor & Copilot", "GitHub Actions"],
  },
  {
    name: "Sabi Market Platform",
    role: "Senior Java Developer | Technical Lead",
    challenge:
      "FMCG businesses needed one place to restock products, manage inventory from different suppliers, track deliveries, and handle payments — all while staying compliant with regulations.",
    built:
      "Built a B2B marketplace with role-based access, automated inventory management, and live logistics tracking. Added GDPR-compliant user management, KYC/KYB checks, contract signing with Zoho Sign. Built an AI-based demand forecasting tool and smart search across suppliers. Used Claude Code and Cursor to prototype features fast and automate code reviews.",
    stats: [
      ["60%", "Time Reduction"],
      ["<200ms", "API Response"],
      ["99.5%", "Uptime"],
    ],
    tags: ["Spring Boot", "Spring Security", "PostgreSQL", "AWS", "Angular", "Docker", "AI Demand Forecasting", "Claude Code & Cursor"],
  },
  {
    name: "NodMD Telehealth Platform",
    role: "Full Stack Developer | Architecture & Integration Lead",
    challenge:
      "Hospitals and care facilities needed a way for patients to see specialists remotely, especially across different time zones. It also had to work with existing EHR systems and offer smooth video consultations.",
    built:
      "Built a scheduling system for multi-timezone bookings. Added Twilio Video across Provider, Patient, and Guest portals with fallback options. Connected to Cerner, Nextgen, and AthenaHealth EHRs via REST APIs and HL7. Built an AI voice agent that calls patients to confirm or reschedule appointments, cutting no-shows by 30%.",
    stats: [
      ["500+", "Facilities"],
      ["80%", "Travel Reduction"],
      ["3", "EHR Integrations"],
    ],
    tags: ["Spring Boot Microservices", "Twilio Video SDK", "PostgreSQL", "Angular", "AI Voice Agent", "AI Chatbot", "EHR Integration", "Docker"],
  },
];

 export const AI_CARDS = [
  {
    icon: "⚡",
    title: "AI-Powered Development Tools",
    desc: "I use AI coding tools every day to write code faster, refactor better, and catch bugs early. These tools help me generate boilerplate, write tests, do code reviews, and think through architecture decisions quicker than before.",
    tags: ["Cursor IDE", "GitHub Copilot", "Claude Code", "AI Code Review"],
  },
  {
    icon: "🔧",
    title: "AI Build & Development",
    desc: "I've added AI features into real products — things like smart search, recommendation systems, auto-generated content, and prediction tools. I know how to plug LLMs and AI APIs into Java/Spring Boot apps and make them work in production.",
    tags: ["LLM Integration", "AI APIs", "Prompt Engineering", "AI Pipelines"],
  },
  {
    icon: "🤖",
    title: "AI Agent Development",
    desc: "I build AI agents that can handle tasks on their own — think multi-step workflows where the agent talks to APIs, reads from databases, and follows business rules to get things done without someone watching over it.",
    tags: ["Autonomous Agents", "Tool Orchestration", "Multi-Step Reasoning", "Workflow Automation"],
  },
  {
    icon: "🎙️",
    title: "AI Voice Agents & Chatbots",
    desc: "I've built voice bots that make phone calls to patients for appointment reminders, and chatbots that handle customer questions and triage. I work with speech-to-text, text-to-speech, and natural language understanding to make these conversations feel real.",
    tags: ["Voice AI", "Conversational AI", "NLU / NLP", "Chatbot Platforms"],
  },
];

export const ARCH_CARDS = [
  {
    title: "Microservices",
    desc: "Small, independent services with clear APIs. Each can be deployed, scaled, and updated independently.",
  },
  {
    title: "Event-Driven Design",
    desc: "Kafka, RabbitMQ, and SQS so services stay loosely coupled. More reliable and easier to scale.",
  },
  {
    title: "Security First",
    desc: "Spring Security, JWT, encryption everywhere, compliance controls (HIPAA, GDPR) from day one.",
  },
  {
    title: "Infrastructure as Code",
    desc: "Everything in Terraform or CloudFormation. CI/CD handles the rest — no manual server setup.",
  },
  {
    title: "Monitoring",
    desc: "CloudWatch, structured logs, and distributed tracing so issues are found and fixed fast.",
  },
  {
    title: "Right DB for the Job",
    desc: "SQL for strict transactions, NoSQL for flexible data. Redis caching and read replicas for speed.",
  },
];
