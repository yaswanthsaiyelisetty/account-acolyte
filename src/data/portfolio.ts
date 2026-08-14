export const profile = {
  name: "Yelisetty Yaswanth Sai",
  short: "Yaswanth Sai",
  role: "AI & Cloud Engineer",
  tagline: "I build intelligent systems.",
  intro:
    "Architecting scalable cloud infrastructure and integrating advanced LLMs to turn complex challenges into production-ready solutions.",
  about:
    "I specialize in building intelligent systems that bridge the gap between cutting-edge AI and real-world applications. From architecting RAG pipelines to deploying scalable cloud infrastructure, I turn complex technical challenges into elegant, production-ready solutions.",
  quote:
    "Building intelligent, scalable infrastructure that bridges cutting-edge AI with real-world applications.",
  email: "yaswanthsaiyelisetty@gmail.com",
  github: "https://github.com/yaswanthsaiyelisetty",
  linkedin: "https://www.linkedin.com/in/yaswanthsaiyelisetty",
  specializations: [
    "LLM Integration",
    "RAG Architectures",
    "Cloud Computing",
    "Full-Stack Development",
  ],
};

export const stats = [
  { value: "30+", label: "Certifications" },
  { value: "5+", label: "Projects deployed" },
  { value: "20+", label: "Technologies" },
  { value: "150+", label: "Users reached" },
];

export const education = [
  {
    period: "2022 — Present",
    title: "B.Tech, Computer Science & Engineering",
    org: "Dhanekula Institute of Engineering and Technology",
    score: "7.96 CGPA",
    detail:
      "Specialized in AI/ML, cloud computing and full-stack development. Building real-world products with Google Gemini and Azure infrastructure.",
  },
  {
    period: "2023",
    title: "Intermediate (MPC)",
    org: "Sri Dhanalakshmi Junior College",
    score: "89%",
    detail:
      "Strong foundation in mathematics, physics and chemistry. Early interest in programming and problem solving.",
  },
  {
    period: "2021",
    title: "Secondary Education (SSC)",
    org: "Alfried Nobel High School",
    score: "92%",
    detail:
      "Established fundamentals in analytical thinking alongside consistent academic excellence.",
  },
];

export type Project = {
  name: string;
  subtitle: string;
  meta: string;
  status: string;
  award?: string;
  summary: string;
  role?: string;
  stack: string[];
  metrics: { value: string; label: string }[];
  highlights: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    name: "CloudScale-RL",
    subtitle: "AI-powered cloud auto-scaling environment",
    meta: "Machine Learning / DevOps · April 2026",
    status: "Completed",
    award: "Meta × Hugging Face OpenEnv Hackathon 2026",
    summary:
      "A high-fidelity digital-twin reinforcement learning environment for cloud auto-scaling. It replaces reactive threshold rules with learned autonomous policies, solving both over-provisioning waste and under-provisioning outages.",
    stack: [
      "Reinforcement Learning",
      "Docker",
      "FastAPI",
      "OpenEnv",
      "WebSockets",
      "MLOps",
    ],
    metrics: [
      { value: "3", label: "Tasks" },
      { value: "16", label: "Observation fields" },
      { value: "~2k", label: "Lines of code" },
      { value: "3/3", label: "Validation checks" },
    ],
    highlights: [
      "Digital-twin simulation modelling real server warm-up delays",
      "Exponential latency physics using a quartic transfer function",
      "Predictive scaling that survives 10x traffic spikes",
      "Deployed to Hugging Face Spaces with Docker",
    ],
  },
  {
    name: "UniPeasy",
    subtitle: "Unified student success platform",
    meta: "EdTech / AI Product · Feb 2026 launch",
    status: "Live",
    summary:
      "From a student pain-point in May 2025 to a live AI-powered success platform in Feb 2026. UniPeasy fixes fragmented resources, exam stress, skill gaps and trust issues with verified materials and authenticated opportunities.",
    role: "Founder & Technical Lead · Team of 9 · 6-month build",
    stack: [
      "Next.js 14",
      "Firebase",
      "Google Gemini",
      "TypeScript",
      "Tailwind CSS",
    ],
    metrics: [
      { value: "150+", label: "Active students" },
      { value: "9", label: "Team members" },
      { value: "6 mo", label: "Idea to launch" },
      { value: "100%", label: "Verified listings" },
    ],
    highlights: [
      "AI learning assistant with analogies, mind maps and adaptive quizzes",
      "AI exam strategist generating personalized Pomodoro timetables",
      "Centralized, topper-verified materials hub by branch, year and subject",
      "Memory Palace for spaced repetition and manually verified internships",
    ],
  },
  {
    name: "AutoTask",
    subtitle: "AI task management over WhatsApp",
    meta: "AI Productivity / Cloud Backend · v2 production",
    status: "Live",
    summary:
      "Built to solve my own problem of forgetting tasks. A natural-language WhatsApp assistant — \"remind me about the box at 9am\" — grown into a production-grade platform with strict parsing guardrails and a robust recurrence engine.",
    role: "Product Builder & Backend Architect",
    stack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Azure VM",
      "Twilio",
      "Gemini",
      "Cosmos DB",
    ],
    metrics: [
      { value: "v2", label: "Production release" },
      { value: "24/7", label: "Monitored uptime" },
      { value: "E2E", label: "Tested pipeline" },
      { value: "RAG", label: "Next phase" },
    ],
    highlights: [
      "Natural-language task extraction with a Gemini parser and JSON guardrails",
      "Timezone-aware reminders with an advanced recurrence engine",
      "Exceptions for weekends, holidays, pauses and custom dates",
      "Azure VM + PM2 + Nginx runtime with monitored health checks",
      "In progress: ChromaDB vector store with text-embedding-004 retrieval",
    ],
  },
];

export const skills = [
  {
    group: "Artificial Intelligence",
    items: [
      "Google Gemini",
      "Reinforcement Learning",
      "OpenEnv Framework",
      "RAG Architectures",
      "Prompt Engineering",
      "LLM Integration",
      "Vector Embeddings",
      "Genkit",
    ],
  },
  {
    group: "Cloud Infrastructure",
    items: [
      "Microsoft Azure",
      "Hugging Face Spaces",
      "Docker",
      "Docker Compose",
      "Azure VMs",
      "PM2",
      "Nginx",
      "Firebase",
    ],
  },
  {
    group: "Application Development",
    items: [
      "Next.js",
      "TypeScript",
      "React",
      "FastAPI",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "WebSockets",
      "REST APIs",
    ],
  },
];
