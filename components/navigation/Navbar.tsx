"use client";

import React, { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NavLogo } from "./NavLogo";
import { NavLinks } from "./NavLinks";
import { MobileMenu } from "./MobileMenu";
import { NAV_ITEMS } from "./nav-config";
import { Container } from "../layout/Container";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Robust top/bottom boundaries check
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (window.scrollY < 40) {
        setActiveSection("home");
      } else if (isAtBottom) {
        setActiveSection("contact");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    // Determine active section immediately on path mount (deferred to avoid synchronous state updates in effect body)
    const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
    const timer = setTimeout(() => {
      if (window.scrollY < 40) {
        setActiveSection("home");
      } else if (isAtBottom) {
        setActiveSection("contact");
      }
    }, 0);

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-30% 0px -40% 0px",
      threshold: 0,
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        // Prevent overriding scroll top/bottom logic at boundary extremes
        const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
        if (window.scrollY < 40 || isAtBottom) return;

        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  const handleNavigate = useCallback((href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(targetId);
    }
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#E4E0E1]/80 backdrop-blur-xl border-b border-[#B18C6A]/20 py-3 shadow-lg shadow-[#B18C6A]/10"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <NavLogo onNavigate={handleNavigate} />

          <nav aria-label="Main Navigation" className="hidden lg:flex items-center">
            <NavLinks
              activeSection={activeSection}
              onNavigate={handleNavigate}
            />
          </nav>

          <MobileMenu
            isOpen={isMobileMenuOpen}
            onToggle={() => setIsMobileMenuOpen((prev) => !prev)}
            onClose={() => setIsMobileMenuOpen(false)}
            activeSection={activeSection}
            onNavigate={handleNavigate}
          />
        </div>
      </Container>
    </motion.header>
  );
}
