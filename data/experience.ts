export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period?: string;
  description: string;
  skills?: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    title: "Executive Coordinator",
    organization: "InnovateX – Department of CSE (AI & ML)",
    description:
      "Led technical events, coordinated workshops, managed teams, and contributed to organizing innovation-focused activities within the department.",
    skills: ["Leadership", "Event Management", "Technical Coordination"],
  },
  {
    id: "exp-2",
    title: "Research Publication",
    organization: "IJCRT",
    description:
      "Published research on an Agentic AI-powered Tournament Management System demonstrating intelligent automation using autonomous AI agents.",
    skills: ["Agentic AI", "Academic Writing", "FastAPI"],
  },
  {
    id: "exp-3",
    title: "Hackathon Participant",
    organization: "National & College Level Hackathons",
    description:
      "Designed and developed AI-powered solutions under time constraints while collaborating with multidisciplinary teams.",
    skills: ["Rapid Prototyping", "Machine Learning", "Teamwork"],
  },
  {
    id: "exp-4",
    title: "AI/ML Student",
    organization: "Maharaja Institute of Technology Mysore",
    description:
      "Pursuing Computer Science Engineering with specialization in Artificial Intelligence & Machine Learning while continuously building intelligent software solutions.",
    skills: ["Python", "Machine Learning", "Data Structures"],
  },
];

export function getExperiences(): ExperienceItem[] {
  return EXPERIENCES;
}
