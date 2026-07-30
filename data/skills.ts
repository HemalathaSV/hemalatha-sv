export interface SkillCategory {
  title: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Artificial Intelligence",
    skills: ["Agentic AI", "Generative AI", "Machine Learning", "Prompt Engineering"],
  },
  {
    title: "Cloud Computing",
    skills: ["Microsoft Azure", "AWS Cloud", "IBM Cloud"],
  },
  {
    title: "Programming",
    skills: ["Python", "FastAPI", "Next.js", "TypeScript"],
  },
  {
    title: "Professional Development",
    skills: ["Hackathons", "Research", "Leadership", "Problem Solving"],
  },
];

export const INTERESTS = [
  "Agentic AI",
  "Multi-Agent Systems",
  "Machine Learning",
  "Backend Engineering",
  "AI Research",
];

export function getSkillCategories(): SkillCategory[] {
  return SKILL_CATEGORIES;
}

export function getInterests(): string[] {
  return INTERESTS;
}
