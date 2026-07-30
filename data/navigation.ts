export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "/#home" },
  { id: "about", label: "About", href: "/#about" },
  { id: "featured-work", label: "Featured Work", href: "/portfolio" },
  { id: "research", label: "Research", href: "/research" },
  { id: "experience", label: "Experience", href: "/#experience" },
  { id: "learning-journey", label: "Learning Journey", href: "/#learning-journey" },
  { id: "contact", label: "Contact", href: "/#contact" },
];
