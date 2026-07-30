export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  provider: string;
  category: string;
  skills: string[];
  completionDate?: string;
  credentialUrl?: string;
  featured: boolean;
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
  {
    id: "cert-1",
    provider: "AWS APAC",
    title: "Solutions Architecture",
    category: "Cloud Computing",
    skills: ["AWS", "Cloud Architecture"],
    completionDate: "2024",
    featured: true,
  },
  {
    id: "cert-2",
    provider: "IBM",
    title: "Cloud Computing",
    category: "Cloud Computing",
    skills: ["IBM Cloud", "Cloud Fundamentals"],
    completionDate: "2024",
    featured: true,
  },
  {
    id: "cert-3",
    provider: "Microsoft",
    title: "Azure Cloud Services",
    category: "Cloud Computing",
    skills: ["Azure", "Cloud Infrastructure"],
    completionDate: "2024",
    featured: true,
  },
  {
    id: "cert-4",
    provider: "Google",
    title: "Python",
    category: "Programming",
    skills: ["Python", "Programming Logic"],
    completionDate: "2024",
    featured: true,
  },
  {
    id: "cert-5",
    provider: "Tata",
    title: "GenAI Data Analytics",
    category: "Artificial Intelligence",
    skills: ["Generative AI", "Data Analytics"],
    completionDate: "2024",
    featured: true,
  },
  {
    id: "cert-6",
    provider: "Wells Fargo",
    title: "Software Engineering",
    category: "Professional Development",
    skills: ["Software Engineering", "Systems Design"],
    completionDate: "2024",
    featured: true,
  },
];

export function getCertifications(): CertificationItem[] {
  return CERTIFICATIONS;
}

export function getFeaturedCertifications(): CertificationItem[] {
  return CERTIFICATIONS.filter((c) => c.featured);
}

export function getSkillCategories(): SkillCategory[] {
  return SKILL_CATEGORIES;
}
