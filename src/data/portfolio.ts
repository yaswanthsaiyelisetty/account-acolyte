export const profile = {
  name: "Yelisetty Yaswanth Sai",
  short: "Yaswanth Sai",
  role: "AI & Data Engineer",
  tagline: "I build intelligent data systems.",
  intro:
    "Microsoft Certified Fabric Data Engineer building ETL pipelines, BI dashboards and production AI agents — turning raw data into decisions and LLMs into working products.",
  about:
    "I work across the AI and data stack: designing ETL pipelines and lakehouse-style data layers, building Power BI and SQL-driven reporting, and shipping LLM products with RAG, vector search and agentic workflows. My focus is the unglamorous part that makes systems real — clean data, validated pipelines and reliable deployments.",
  quote:
    "Good AI starts with good data. I build both ends of that pipeline.",
  email: "yaswanthsaiyelisetty@gmail.com",
  phone: "+91 93472 72614",
  location: "Andhra Pradesh, India",
  github: "https://github.com/yaswanthsaiyelisetty",
  linkedin: "https://www.linkedin.com/in/yelisettyyaswanthsai",
  specializations: [
    "Data Engineering & ETL",
    "Business Intelligence",
    "RAG Architectures",
    "LLM & Agent Systems",
    "Cloud Deployment",
  ],
};

export const stats = [
  { value: "2x", label: "Microsoft Fabric Certified" },
  { value: "10+", label: "Production deployments" },
  { value: "RL / RAG", label: "Specialization" },
  { value: "150+", label: "Users reached" },
];

export const education = [
  {
    period: "2023 — 2027",
    title: "B.Tech, Computer Science & Engineering",
    org: "Dhanekula Institute of Engineering and Technology",
    score: "7.96 CGPA",
    detail:
      "Expected graduation 2027. Focus on data engineering, AI/ML and cloud — building real products with Microsoft Fabric, Google Gemini and Azure infrastructure.",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  code?: string;
  tier?: boolean;
};

export const certifications: Certification[] = [
  {
    name: "Fabric Data Engineer Associate",
    issuer: "Microsoft Certified",
    code: "DP-700",
    tier: true,
  },
  {
    name: "Fabric Analytics Engineer Associate",
    issuer: "Microsoft Certified",
    code: "DP-600",
    tier: true,
  },
  { name: "Skill Badge – RAG", issuer: "Google Cloud", tier: true },
  { name: "Java Developer Certification", issuer: "Infosys" },
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
  live?: string;
};

export const projects: Project[] = [
  {
    name: "Global E-Commerce BI & Profit Optimization",
    subtitle: "End-to-end analytics on three years of sales data",
    meta: "Data Engineering / Business Intelligence",
    status: "Completed",
    summary:
      "An end-to-end analytics project turning a global e-commerce transactions dataset (2023–2025) into a profit-optimization dashboard. Raw CSV flows through a Python cleaning and validation pipeline into SQLite, then into notebook EDA and an interactive web dashboard.",
    stack: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL / SQLite",
      "Matplotlib & Seaborn",
      "Chart.js",
    ],
    metrics: [
      { value: "3 yrs", label: "Data covered" },
      { value: "4-stage", label: "ETL pipeline" },
      { value: "SQLite", label: "Analytics store" },
      { value: "Medallion", label: "Layered design" },
    ],
    highlights: [
      "Full pipeline: raw CSV → cleaned layers → SQLite → EDA → dashboard",
      "Data quality enforced through validation and feature engineering in Pandas",
      "Optimized SQL for revenue, margin and regional profitability analysis",
      "Analyzes discounting and shipping cost as profit drivers",
    ],
    link: "https://github.com/yaswanthsaiyelisetty/Global-E-Commerce-Business-Intelligence-Profit-Optimization",
  },
  {
    name: "Gmail Support Agent",
    subtitle: "RAG-powered support desk on top of Gmail",
    meta: "AI Product / Data Platform",
    status: "Deployed",
    summary:
      "A support platform that syncs Gmail into tickets, uses Gemini to analyze intent, sentiment and urgency, and retrieves company knowledge through pgvector semantic search to draft context-aware replies. A human agent reviews and sends every draft in the original thread.",
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL + pgvector",
      "Gemini",
      "Celery & Redis",
      "Next.js",
      "Docker",
    ],
    metrics: [
      { value: "RAG", label: "Reply drafting" },
      { value: "HITL", label: "Review flow" },
      { value: "5", label: "Doc formats indexed" },
      { value: "OAuth2", label: "Gmail access" },
    ],
    highlights: [
      "Semantic search over a knowledge base using Gemini embeddings and pgvector",
      "Human-in-the-loop review, regeneration and threaded sending",
      "Analytics on volume, sentiment, urgency, escalations and response time",
      "Containerized services with secure REST APIs and Google OAuth",
    ],
    link: "https://github.com/yaswanthsaiyelisetty/gmail-agent",
    live: "https://web-two-sage-90.vercel.app",
  },
  {
    name: "CloudScale-RL",
    subtitle: "AI-powered cloud auto-scaling environment",
    meta: "Machine Learning / MLOps · April 2026",
    status: "Completed",
    award: "Meta × Hugging Face OpenEnv Hackathon 2026",
    summary:
      "A high-fidelity digital-twin reinforcement learning environment for cloud auto-scaling. It replaces reactive threshold rules with learned autonomous policies, solving both over-provisioning waste and under-provisioning outages.",
    stack: [
      "Reinforcement Learning",
      "Python",
      "Docker",
      "FastAPI",
      "OpenEnv",
      "WebSockets",
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
    link: "https://github.com/yaswanthsaiyelisetty/cloudscale_rl",
  },
  {
    name: "UniPeasy",
    subtitle: "Unified student success platform",
    meta: "EdTech / AI Product · Feb 2026 launch",
    status: "Live",
    summary:
      "From a student pain-point in May 2025 to a live AI-powered success platform in Feb 2026. UniPeasy fixes fragmented resources, exam stress, skill gaps and trust issues with verified materials and authenticated opportunities.",
    role: "Founder & Technical Lead · Team of 9 · 6-month build",
    stack: ["Next.js 14", "Firebase", "Google Gemini", "TypeScript", "Tailwind CSS"],
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
    link: "https://github.com/yaswanthsaiyelisetty/unipeasy",
    live: "https://unipeasy.com",
  },
  {
    name: "AutoTask",
    subtitle: "AI task management over WhatsApp",
    meta: "AI Productivity / Cloud Backend · v2 production",
    status: "Live",
    summary:
      "A production-grade task-management platform that converts natural-language WhatsApp messages into scheduled, recurring reminders. Built around a Gemini-powered parser with strict JSON guardrails, a timezone-aware recurrence engine and monitored Azure infrastructure.",
    role: "Product Builder & Backend Architect",
    stack: ["Node.js", "Express", "MongoDB", "Azure VM", "Twilio", "Gemini", "Cosmos DB"],
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
    ],
    link: "https://github.com/yaswanthsaiyelisetty/autotask",
  },
  {
    name: "Swiggy Orchestrator AI",
    subtitle: "WhatsApp-first conversational commerce agent",
    meta: "Agentic AI / Conversational Commerce",
    status: "In progress",
    summary:
      "An AI concierge that lets users order food, buy groceries and book restaurant tables entirely over WhatsApp. Gemini handles language understanding while Swiggy's Builders Club MCP acts as the commerce execution layer.",
    stack: ["TypeScript", "Gemini", "MCP", "WhatsApp API"],
    metrics: [
      { value: "3", label: "Commerce verticals" },
      { value: "MCP", label: "Execution layer" },
      { value: "Multi", label: "Intent handling" },
      { value: "Session", label: "Stateful chat" },
    ],
    highlights: [
      "Reasoning pipeline covering intent parsing, planning and execution",
      "Spans Food, Instamart and Dineout in one conversation",
      "Session management with multi-intent order flows",
      "Documented error recovery and security model",
    ],
    link: "https://github.com/yaswanthsaiyelisetty/swiggy-orchestrator-AI",
  },
  {
    name: "CreatorIQ Agent",
    subtitle: "Per-campaign Instagram DM automation",
    meta: "Marketing Automation / Analytics",
    status: "Completed",
    summary:
      "A Node.js platform that maps every Instagram reel or post to its own campaign, knowledge base and automation rules. An AI decision layer picks the campaign-correct DM for each comment, with a dashboard for leads and analytics.",
    stack: ["Node.js", "SQLite", "Meta Graph API", "JavaScript"],
    metrics: [
      { value: "1:1", label: "Reel to campaign" },
      { value: "Webhook", label: "Signature verified" },
      { value: "Mock", label: "Safe demo mode" },
      { value: "Leads", label: "Dashboard" },
    ],
    highlights: [
      "Same keyword triggers different DMs depending on the source reel",
      "Webhook signature validation plus a built-in event simulator",
      "Lead capture and campaign analytics dashboard",
      "Smoke tests and audit scripts included",
    ],
    link: "https://github.com/yaswanthsaiyelisetty/IQcreator-agent",
  },
  {
    name: "AI Call Agent",
    subtitle: "Telugu-speaking voice secretary on Twilio",
    meta: "Voice AI / Telephony",
    status: "Completed",
    summary:
      "A FastAPI phone secretary that answers Twilio calls and converses in Telugu/Manglish using Gemini 2.5 Flash, gathering the information you need before hanging up and pushing a structured summary to WhatsApp.",
    stack: ["Python", "FastAPI", "Twilio Voice", "Gemini 2.5 Flash", "WhatsApp API"],
    metrics: [
      { value: "te-IN", label: "Speech locale" },
      { value: "Live", label: "Call loop" },
      { value: "Auto", label: "Call summary" },
      { value: "WA", label: "Summary delivery" },
    ],
    highlights: [
      "Telugu ASR with an accent-matched Polly voice",
      "Conversation loop continues until required info is captured",
      "Background Gemini summarization of the full transcript",
      "Summary delivered straight to WhatsApp",
    ],
    link: "https://github.com/yaswanthsaiyelisetty/AI-call-agent",
  },
];

export const skills = [
  {
    group: "Data Engineering",
    items: [
      "Microsoft Fabric",
      "ETL Pipelines",
      "Medallion Architecture",
      "Lakehouse",
      "Apache Spark / PySpark",
      "dbt",
      "Data Cleaning & Validation",
      "Pandas",
    ],
  },
  {
    group: "Business Intelligence",
    items: [
      "Power BI",
      "Advanced Excel",
      "Power Query",
      "Pivot Tables",
      "XLOOKUP / INDEX-MATCH",
      "Dashboard Development",
      "Report Automation",
      "Data Visualization",
    ],
  },
  {
    group: "Artificial Intelligence",
    items: [
      "Google Gemini",
      "RAG Architectures",
      "LLM Integration",
      "Vector Embeddings",
      "NLP",
      "Prompt Engineering",
      "Reinforcement Learning",
      "Agentic Workflows",
    ],
  },
  {
    group: "Databases",
    items: ["SQL", "PostgreSQL + pgvector", "SQLite", "MongoDB", "Azure Cosmos DB", "Firebase Firestore"],
  },
  {
    group: "Programming",
    items: ["Python", "SQL", "TypeScript", "JavaScript", "C", "Node.js", "FastAPI", "Next.js"],
  },
  {
    group: "Cloud & Tooling",
    items: ["Microsoft Azure", "Docker", "Git & GitHub", "Vercel", "Hugging Face Spaces", "PM2", "Nginx", "VS Code"],
  },
];
