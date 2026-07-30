"use client";

import React from "react";
import { NAV_ITEMS } from "@/components/navigation/nav-config";

export function FooterLinks() {
  const handleNavigate = (href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col space-y-3">
      <h4 className="font-heading text-xs font-mono font-semibold tracking-wider text-[#38BDF8] uppercase">
        Quick Links
      </h4>
      <ul className="grid grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs font-medium text-[#94A3B8]">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavigate(item.href);
              }}
              className="hover:text-[#38BDF8] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded py-0.5"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
