export interface Publication {
  id: string;
  title: string;
  journal: string;
  status: "Published" | "Under Review" | "In Preparation";
  category: "Agentic AI" | "Machine Learning" | "Computer Vision" | "NLP";
  date: string;
  description: string;
  highlights: string[];
  pdfUrl?: string;
  projectSlug?: string;
}

export const PUBLICATIONS: Publication[] = [
  {
    id: "tournament-management-agent",
    title: "Tournament Management Agent Using Agentic Artificial Intelligence",
    journal: "International Journal of Creative Research Thoughts (IJCRT)",
    status: "Published",
    category: "Agentic AI",
    date: "2024",
    description:
      "This research presents an Agentic AI-powered tournament management system capable of understanding natural language requests and automating tournament operations using intelligent workflows. The work demonstrates the practical application of autonomous AI agents, FastAPI, SQLite, and Large Language Models to simplify tournament management.",
    highlights: [
      "Agentic AI",
      "Multi-Agent Workflow",
      "FastAPI Backend",
      "Natural Language Processing",
      "SQLite Database",
      "Research Publication",
    ],
    pdfUrl: "/research/IJCRT2512785.pdf",
    projectSlug: "tournament-management-agent",
  },
];

export function getResearchPublications(): Publication[] {
  return PUBLICATIONS;
}
