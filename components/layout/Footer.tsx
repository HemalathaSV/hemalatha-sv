"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROFILE } from "@/config/profile";
import { Container } from "./Container";
import { FooterLinks } from "./FooterLinks";
import { SocialIcons } from "./SocialIcons";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full bg-[#0F0F12] border-t border-[#FDACAC]/18 pt-16 pb-8 relative z-10 overflow-hidden"
    >
      {/* Ambient Radial Backlight */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(253,121,121,0.04),transparent_70%)] blur-3xl pointer-events-none"
      />

      <Container>
        <div className="flex flex-col gap-12 relative z-10">
          {/* Top 3-Column Desktop Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Left Column: Brand & Tagline */}
            <div className="md:col-span-5 flex flex-col space-y-3">
              <a
                href="#home"
                aria-label={`${PROFILE.brand} Home`}
                className="font-heading text-lg font-bold tracking-tight text-[#FFFFFF] inline-flex items-center gap-2 self-start hover:opacity-90 transition-opacity"
              >
                {PROFILE.name}{" "}
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-mono font-bold bg-[#FD7979]/10 text-[#FD7979] border border-[#FD7979]/30">
                  AI
                </span>
              </a>
              <p className="text-xs sm:text-sm font-medium text-[#FD7979]">
                {PROFILE.tagline}
              </p>
              <p className="text-xs text-[#B8B8C5] leading-relaxed max-w-sm pt-1">
                Engineering research-driven AI applications, multi-agent systems, and scalable backend platforms.
              </p>
            </div>

            {/* Center Column: Quick Links */}
            <div className="md:col-span-4">
              <FooterLinks />
            </div>

            {/* Right Column: Connect Links */}
            <div className="md:col-span-3">
              <SocialIcons />
            </div>
          </div>

          {/* Soft Divider Line */}
          <div aria-hidden="true" className="w-full h-px bg-slate-900/80" />

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#B8B8C5]/70 text-center sm:text-left">
            <div className="space-y-1">
              <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
              <p className="text-[11px] text-[#B8B8C5]/50">
                Designed & Developed by {PROFILE.name}
              </p>
            </div>
            <p className="text-[11px] text-[#B8B8C5]/50 max-w-xs sm:text-right leading-relaxed">
              Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
            </p>
          </div>
        </div>
      </Container>
    </motion.footer>
  );
}
