export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "engineering-work", label: "Engineering Work", href: "#engineering-work" },
  { id: "research", label: "Research", href: "#research" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "learning-journey", label: "Learning Journey", href: "#learning-journey" },
  { id: "contact", label: "Contact", href: "#contact" },
];
