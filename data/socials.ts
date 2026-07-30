import { PROFILE } from "@/config/profile";

export interface SocialLink {
  name: string;
  href: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", href: PROFILE.github },
  { name: "LinkedIn", href: PROFILE.linkedin },
  { name: "Email", href: `mailto:${PROFILE.email}` },
  { name: "Resume", href: PROFILE.resume },
];
