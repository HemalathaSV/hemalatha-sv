"use client";

import React from "react";
import { Mail, FileText } from "lucide-react";
import { PROFILE } from "@/config/profile";

export function SocialIcons() {
  const links = [
    {
      name: "GitHub",
      href: PROFILE.github,
      isSvg: true,
      path: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z",
    },
    {
      name: "LinkedIn",
      href: PROFILE.linkedin,
      isSvg: true,
      path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
    {
      name: "Email",
      href: `mailto:${PROFILE.email}`,
      icon: Mail,
    },
    {
      name: "Resume",
      href: PROFILE.resume,
      icon: FileText,
    },
  ];

  return (
    <div className="flex flex-col space-y-3">
      <h4 className="font-heading text-xs font-mono font-semibold tracking-wider text-[#5A4030] uppercase">
        Connect
      </h4>
      <div className="flex flex-wrap gap-2.5">
        {links.map((item, i) => {
          const Icon = item.icon;
          return (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={item.name}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#F7F5F4] border border-[#D8C8BB] text-[#5F5854] hover:text-[#5A4030] hover:border-[#B18C6A]/65 hover:scale-105 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5A4030]"
            >
              {item.isSvg ? (
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d={item.path} />
                </svg>
              ) : Icon ? (
                <Icon className="h-4 w-4 stroke-[1.75]" />
              ) : null}
              <span className="text-xs font-medium">{item.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
