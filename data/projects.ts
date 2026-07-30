import { PROFILE } from "@/config/profile";

export interface ProjectFeature {
  title: string;
  desc: string;
}

export interface ArchitectureStep {
  title: string;
  desc: string;
}

export interface ProjectScreenshot {
  title: string;
  desc: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  tagline: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  github: string;
  demo?: string;
  coverImage: string;
  featured: boolean;
  status: string;
  features: ProjectFeature[];
  challenges: string[];
  learnings: string[];
  architecture: ArchitectureStep[];
  screenshots: ProjectScreenshot[];
}

export const PROJECTS: Project[] = [
  {
    id: "placementpilot-ai",
    title: "PlacementPilot AI",
    slug: "placementpilot-ai",
    category: "Flagship AI Project",
    tagline:
      "An intelligent multi-agent placement preparation platform that helps students become job-ready through AI-powered guidance.",
    description:
      "An intelligent placement preparation platform powered by multiple AI agents for resume analysis, interview preparation, aptitude practice, ATS evaluation, and personalized career guidance.",
    overview:
      "PlacementPilot AI is an AI-powered career preparation platform that combines multiple intelligent agents into one coordinated system. Students receive real-time personalized assistance for resume optimization, ATS evaluation, aptitude practice, mock interviews, and tailored career roadmap suggestions.",
    problem:
      "Students often rely on multiple disconnected platforms for resume reviews, aptitude practice, interview preparation, and career guidance, creating an inefficient learning experience.",
    solution:
      "PlacementPilot AI integrates specialized autonomous AI agents under a central Coordinator Agent to provide an all-in-one placement preparation workspace.",
    technologies: ["Python", "FastAPI", "Gemini API", "Agentic AI", "SQLite", "Next.js", "Tailwind CSS"],
    github: PROFILE.github,
    demo: PROFILE.github,
    coverImage: "/images/profile.png",
    featured: true,
    status: "Completed",
    features: [
      { title: "Resume Analysis", desc: "Deep linguistic scan of resume structure, action verbs, and impact metrics." },
      { title: "ATS Score Evaluation", desc: "Calculates keyword match percentage against targeted job descriptions." },
      { title: "Mock Interview Practice", desc: "Simulates technical & behavioral interview scenarios with immediate feedback." },
      { title: "Aptitude Practice", desc: "Generates custom quantitative and logical reasoning problem sets." },
      { title: "Career Suggestions", desc: "Recommends skill upgrades and learning paths tailored to candidate goals." },
      { title: "Multi-Agent Coordination", desc: "Intelligent agent routing ensures fast, context-aware student responses." },
    ],
    challenges: [
      "Managing multiple AI agents without blocking main event loops.",
      "Structuring strict Pydantic schemas for deterministic LLM outputs.",
      "Optimizing API response latency for real-time interactive mock interviews.",
    ],
    learnings: [
      "Decomposing monolithic prompts into micro-agents yields higher response accuracy.",
      "Schema-based output validation prevents LLM hallucinations in evaluation tools.",
    ],
    architecture: [
      { title: "Student Input", desc: "Request sent via Web Interface" },
      { title: "Coordinator Agent", desc: "Routes request to appropriate sub-agents" },
      { title: "Sub-Agents", desc: "Resume, ATS, Interview, Aptitude, & Career Agents" },
      { title: "Gemini API", desc: "Processes LLM inference requests" },
      { title: "Synthesized Output", desc: "Structured actionable feedback returned to student" },
    ],
    screenshots: [
      { title: "Desktop Dashboard", desc: "Central student preparation portal with score tracking" },
      { title: "Resume Analyzer", desc: "ATS score breakdown & keyword improvement suggestions" },
      { title: "Interview Module", desc: "Real-time AI mock interview simulation feed" },
      { title: "Aptitude Module", desc: "Timed problem sets with step-by-step AI solutions" },
    ],
  },
  {
    id: "tournament-management-agent",
    title: "Tournament Management Agent",
    slug: "tournament-management-agent",
    category: "Research Publication",
    tagline:
      "Autonomous Agentic AI platform automating complex sports tournament operations via natural language processing.",
    description:
      "An Agentic AI-powered tournament management system capable of understanding natural language requests and automating complex tournament workflows.",
    overview:
      "This project implements an autonomous AI agent capable of scheduling matches, managing brackets, tracking team statistics, and resolving venue conflicts entirely through natural language interaction.",
    problem:
      "Traditional tournament management software requires manual data entry, manual fixture scheduling, and complex configuration tables that slow down tournament organizers.",
    solution:
      "By combining LLMs with deterministic python scheduling tools, the agent interprets commands like 'Schedule 16 teams into double elimination' and outputs fully structured fixtures instantly.",
    technologies: ["Python", "FastAPI", "SQLite", "Gemini API", "Agentic AI"],
    github: PROFILE.github,
    demo: PROFILE.github,
    coverImage: "/images/profile.png",
    featured: true,
    status: "Published",
    features: [
      { title: "Natural Language Fixtures", desc: "Generates tournament brackets directly from conversational text." },
      { title: "Conflict Resolution", desc: "Detects team double-booking and venue overlap automatically." },
      { title: "Automated Standings", desc: "Updates leaderboard tables in real-time after score submissions." },
    ],
    challenges: [
      "Translating ambiguous natural language tournament rules into exact math algorithms.",
      "Ensuring deterministic database transactions from probabilistic LLM responses.",
    ],
    learnings: [
      "Combining LLMs as function routers with pure Python business logic guarantees reliability.",
    ],
    architecture: [
      { title: "User Prompt", desc: "Natural language tournament request" },
      { title: "Intent Parser", desc: "Extracts teams, format, and venue rules" },
      { title: "Scheduler Engine", desc: "Generates optimal bracket math" },
      { title: "Database Sync", desc: "Persists fixtures to SQLite" },
    ],
    screenshots: [
      { title: "Tournament Dashboard", desc: "Live match schedules and auto-updating bracket view" },
      { title: "Natural Language Prompt", desc: "Conversational fixture generator interface" },
    ],
  },
  {
    id: "campusos",
    title: "CampusOS",
    slug: "campusos",
    category: "Hackathon Project",
    tagline:
      "Intelligent campus management operating system unifying student workflows, administrative tasks, and AI assistance.",
    description:
      "An AI-driven campus administration platform built to streamline student workflows, department notifications, and automated academic support.",
    overview:
      "CampusOS acts as a digital operating system for academic institutions, deploying AI agents to handle student queries, department hall bookings, and attendance analytics.",
    problem:
      "Colleges operate on siloed systems for attendance, notices, hall booking, and student helpdesks, creating administrative friction.",
    solution:
      "CampusOS unifies student services into a single clean web application powered by intelligent FastAPI microservices.",
    technologies: ["Python", "FastAPI", "SQLite", "Next.js", "Tailwind CSS"],
    github: PROFILE.github,
    demo: PROFILE.github,
    coverImage: "/images/profile.png",
    featured: true,
    status: "Hackathon Winner",
    features: [
      { title: "Automated Helpdesk", desc: "Instant answers for campus procedures and academic regulations." },
      { title: "Smart Resource Booking", desc: "Prevents seminar hall overbooking with conflict detection." },
      { title: "Department Analytics", desc: "Real-time dashboard monitoring student engagement." },
    ],
    challenges: [
      "Designing a high-throughput backend within a 24-hour hackathon timeframe.",
      "Ensuring smooth responsive UI state across diverse mobile devices.",
    ],
    learnings: [
      "Rapid prototyping with FastAPI and Next.js enables rapid deployment under time pressure.",
    ],
    architecture: [
      { title: "Frontend Client", desc: "Next.js responsive dashboard" },
      { title: "API Gateway", desc: "FastAPI REST microservices" },
      { title: "AI Assistant", desc: "Domain-trained student query bot" },
    ],
    screenshots: [
      { title: "Campus Portal", desc: "Unified student dashboard and announcement feed" },
      { title: "Hall Booking System", desc: "Interactive room reservation schedule grid" },
    ],
  },
  {
    id: "resqnet",
    title: "ResQNet",
    slug: "resqnet",
    category: "Disaster Response AI",
    tagline:
      "Emergency resource allocation and situational awareness platform powered by aerial computer vision and AI dispatch.",
    description:
      "An AI-powered emergency management system deploying machine learning vision models to assess disaster damage and optimize rescue worker dispatch.",
    overview:
      "ResQNet helps first responders triage disaster zones by analyzing satellite/drone imagery and routing emergency supplies based on AI urgency predictions.",
    problem:
      "During natural disasters, emergency responders suffer from information overload and lack real-time priority mapping for rescue teams.",
    solution:
      "ResQNet automates damage assessment from image feeds and runs optimization algorithms to dispatch resources where urgency is highest.",
    technologies: ["Python", "PyTorch", "FastAPI", "Next.js", "Tailwind CSS"],
    github: PROFILE.github,
    demo: PROFILE.github,
    coverImage: "/images/profile.png",
    featured: false,
    status: "Completed",
    features: [
      { title: "Damage Classification", desc: "AI image classification of structural damage levels." },
      { title: "Rescue Routing", desc: "Calculates shortest safe path for emergency vehicle dispatch." },
      { title: "Live Heatmap", desc: "Real-time incident map with geographic priority overlays." },
    ],
    challenges: [
      "Processing high-resolution aerial imagery quickly on edge devices.",
      "Handling noisy, incomplete real-time emergency report feeds.",
    ],
    learnings: [
      "Lightweight vision backbones are essential for low-latency emergency response tools.",
    ],
    architecture: [
      { title: "Image Feed", desc: "Drone / Satellite imagery input" },
      { title: "Vision Model", desc: "Damage level classification model" },
      { title: "Dispatch Engine", desc: "Optimal vehicle route solver" },
    ],
    screenshots: [
      { title: "Situation Map", desc: "Real-time disaster zone heatmaps and active rescue units" },
    ],
  },
  {
    id: "customer-risk-intelligence",
    title: "Customer Risk Intelligence System",
    slug: "customer-risk-[#38BDF8]",
    category: "Machine Learning",
    tagline:
      "Predictive machine learning pipeline analyzing financial behavior to quantify churn and credit risk indicators.",
    description:
      "A predictive analytics system leveraging machine learning algorithms to evaluate customer risk profiles, churn probability, and financial anomaly detection.",
    overview:
      "This machine learning system analyzes historical transaction patterns and customer demographics to generate actionable risk scores for financial decision makers.",
    problem:
      "Financial institutions fail to identify early churn signals and credit default risks due to static rule-based legacy systems.",
    solution:
      "Customer Risk Intelligence uses ensemble machine learning models to continuously recalculate dynamic risk scores per account.",
    technologies: ["Python", "Scikit-Learn", "FastAPI", "SQLite", "Tailwind CSS"],
    github: PROFILE.github,
    demo: PROFILE.github,
    coverImage: "/images/profile.png",
    featured: false,
    status: "Completed",
    features: [
      { title: "Churn Prediction", desc: "Identifies high-risk customer accounts prior to cancellation." },
      { title: "Anomaly Detection", desc: "Flags irregular transaction velocity or unusual activity." },
      { title: "Explainable AI Metrics", desc: "Provides feature importance metrics for risk score transparency." },
    ],
    challenges: [
      "Handling highly imbalanced credit risk datasets without overfitting.",
      "Providing interpretable feature weights for compliance auditing.",
    ],
    learnings: [
      "SHAP values and feature attribution are crucial for stakeholder trust in risk models.",
    ],
    architecture: [
      { title: "Data Pipeline", desc: "Extracts & cleans financial history" },
      { title: "Ensemble Model", desc: "Scikit-Learn Random Forest / XGBoost" },
      { title: "Risk API", desc: "FastAPI risk scoring endpoint" },
    ],
    screenshots: [
      { title: "Risk Dashboard", desc: "Customer risk tier distribution and anomaly flag feed" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
