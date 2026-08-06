"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { NAV_ITEMS } from "./nav-config";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  activeSection: string;
  onNavigate: (href: string) => void;
}

const menuVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: -12,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut",
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: -12,
    transition: {
      duration: 0.18,
      ease: "easeIn",
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

export function MobileMenu({
  isOpen,
  onToggle,
  onClose,
  activeSection,
  onNavigate,
}: MobileMenuProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
        buttonRef.current?.focus();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Auto-close on viewport resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        onClose();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, onClose]);

  const handleLinkClick = (href: string) => {
    onClose();
    onNavigate(href);
  };

  return (
    <div className="lg:hidden">
      {/* Hamburger Toggle Button */}
      <button
        ref={buttonRef}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-menu"
        aria-label={isOpen ? "Close main menu" : "Open main menu"}
        className="relative z-50 flex h-9 w-9 items-center justify-center rounded-lg text-[#2E2A28] hover:bg-[#F7F5F4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5A4030] transition-colors"
      >
        <svg
          className="h-5 w-5 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile Drawer AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-40">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onClose}
              className="fixed inset-0 bg-[#E4E0E1]/80 backdrop-blur-xl"
            />

            {/* Menu Container */}
            <motion.nav
              id="mobile-navigation-menu"
              aria-label="Mobile Navigation Menu"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative z-50 mt-20 mx-4 p-5 bg-[#F7F5F4]/95 backdrop-blur-2xl border border-[#B18C6A]/20 rounded-2xl shadow-2xl flex flex-col gap-3"
            >
              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.li key={item.id} variants={itemVariants}>
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(item.href);
                        }}
                        aria-current={isActive ? "page" : undefined}
                        className={`flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5A4030] ${
                          isActive
                            ? "text-[#5A4030] bg-[#2E2A28] font-semibold border border-[#B18C6A]/20"
                            : "text-[#5F5854] hover:text-[#B18C6A] hover:bg-[#2E2A28]/50"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#5A4030] shadow-[0_0_8px_rgba(90,64,48,0.6)]" />
                        )}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
