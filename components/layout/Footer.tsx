"use client";

import React from "react";
import { motion } from "framer-motion";
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
      className="w-full bg-[#050816] border-t border-slate-900/80 pt-16 pb-8 relative z-10 overflow-hidden"
    >
      {/* Ambient Radial Backlight */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.04),transparent_70%)] blur-3xl pointer-events-none"
      />

      <Container>
        <div className="flex flex-col gap-12 relative z-10">
          {/* Top 3-Column Desktop Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Left Column: Brand & Tagline */}
            <div className="md:col-span-5 flex flex-col space-y-3">
              <a
                href="#home"
                aria-label="Hemalatha S V AI Home"
                className="font-heading text-lg font-bold tracking-tight text-[#F8FAFC] inline-flex items-center gap-2 self-start hover:opacity-90 transition-opacity"
              >
                Hemalatha S V{" "}
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-mono font-bold bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/30">
                  AI
                </span>
              </a>
              <p className="text-xs sm:text-sm font-medium text-[#38BDF8]">
                Building Intelligent AI Solutions
              </p>
              <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm pt-1">
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
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]/70 text-center sm:text-left">
            <div className="space-y-1">
              <p>© 2026 Hemalatha S V. All rights reserved.</p>
              <p className="text-[11px] text-[#94A3B8]/50">
                Designed & Developed by Hemalatha S V
              </p>
            </div>
            <p className="text-[11px] text-[#94A3B8]/50 max-w-xs sm:text-right leading-relaxed">
              Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
            </p>
          </div>
        </div>
      </Container>
    </motion.footer>
  );
}
