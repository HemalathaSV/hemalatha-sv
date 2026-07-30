"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { NavLogo } from "./NavLogo";
import { NavLinks } from "./NavLinks";
import { MobileMenu } from "./MobileMenu";
import { NAV_ITEMS } from "./nav-config";
import { Container } from "../layout/Container";

export function Navbar() {
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
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
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
      observer.disconnect();
    };
  }, []);

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
          ? "bg-[#050816]/80 backdrop-blur-xl border-b border-slate-800/60 py-3 shadow-lg shadow-black/30"
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
