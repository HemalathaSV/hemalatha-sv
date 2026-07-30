export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface CertificationItem {
  id: string;
  issuer: string;
  title: string;
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

export const CERTIFICATIONS: CertificationItem[] = [
  { id: "cert-1", issuer: "AWS APAC", title: "Solutions Architecture" },
  { id: "cert-2", issuer: "IBM", title: "Cloud Computing" },
  { id: "cert-3", issuer: "Microsoft", title: "Azure Cloud Services" },
  { id: "cert-4", issuer: "Google", title: "Python" },
  { id: "cert-5", issuer: "Tata", title: "GenAI Data Analytics" },
  { id: "cert-6", issuer: "Wells Fargo", title: "Software Engineering" },
];

export function getCertifications(): CertificationItem[] {
  return CERTIFICATIONS;
}

export function getSkillCategories(): SkillCategory[] {
  return SKILL_CATEGORIES;
}
