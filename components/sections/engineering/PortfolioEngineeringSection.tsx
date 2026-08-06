"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ExternalLink, CheckCircle } from "lucide-react";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function PortfolioEngineeringSection() {
  const techStack = [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Vercel",
    "Responsive Design",
    "SEO Optimization",
  ];

  const highlights = [
    "Fully Responsive",
    "Dynamic Project Architecture",
    "Case Study System",
    "Research Integration",
    "Performance Optimized",
    "Modern Dark UI",
    "Component-based Architecture",
    "Professional Navigation",
    "Production-ready Deployment",
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#151214] overflow-hidden border-t border-[#FDACAC]/18">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(253,121,121,0.06),transparent_70%)] blur-3xl pointer-events-none"
      />

      <Container>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-10 sm:gap-12 relative z-10 max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex flex-col space-y-4 text-center items-center">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#19191D] border border-[#FDACAC]/18">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FD7979]" />
              <span className="text-xs font-mono font-semibold text-[#FD7979] tracking-wider uppercase">
                Portfolio Engineering
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#FFFFFF]">
              Portfolio Engineering
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#B8B8C5] leading-relaxed max-w-3xl">
              This portfolio itself is engineered as a modern software product to showcase my technical expertise, projects, research, and engineering practices.
            </p>
          </div>

          {/* Full-Width Premium Showcase Card */}
          <div className="group relative p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#19191D]/90 backdrop-blur-xl border border-[#FDACAC]/18 shadow-2xl hover:border-[#FDACAC]/40 transition-all duration-300 w-full overflow-hidden">
            {/* Subtle backlight inside card */}
            <div
              aria-hidden="true"
              className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(253,121,121,0.05),transparent_70%)] pointer-events-none"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
              {/* Left Side: Overview & Tech Stack (7 cols on desktop) */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  <span className="text-xs font-mono text-[#FD7979] uppercase tracking-wider font-semibold">
                    System Architecture
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#FFFFFF]">
                    Hemalatha SV AI Portfolio
                  </h3>
                  <p className="text-sm sm:text-base text-[#B8B8C5] leading-relaxed">
                    A production-quality developer portfolio built to showcase AI projects, research publications, engineering experience, and technical capabilities through a modern responsive architecture.
                  </p>
                </div>

                {/* Tech Stack List */}
                <div className="space-y-3.5">
                  <h4 className="font-heading text-xs font-mono font-semibold text-[#FFFFFF] uppercase tracking-wider">
                    Technology Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-xl bg-[#222228] border border-[#FDACAC]/18 text-xs font-mono text-[#B8B8C5] hover:border-[#FDACAC]/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side: Engineering Highlights (5 cols on desktop) */}
              <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#222228]/60 border border-[#FDACAC]/18/60 space-y-6">
                <div className="space-y-4">
                  <h4 className="font-heading text-xs font-mono font-semibold text-[#FD7979] uppercase tracking-wider">
                    Engineering Highlights:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
                    {highlights.map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#B8B8C5]">
                        <CheckCircle className="h-4 w-4 text-[#FD7979] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom: CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-8 mt-8 border-t border-[#FDACAC]/18 relative z-10">
              <a
                href="https://github.com/HemalathaSV/hemalatha-sv"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-6 rounded-full text-xs sm:text-sm font-semibold tracking-wide inline-flex items-center justify-center gap-2.5 bg-[#FD7979] text-[#151214] hover:bg-[#FD7979]/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md shadow-[#FD7979]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD7979]"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub Repository
              </a>
              <a
                href="#home"
                className="h-11 px-6 rounded-full text-xs sm:text-sm font-medium tracking-wide inline-flex items-center justify-center gap-2.5 bg-transparent border border-[#FDACAC]/18 text-[#FFFFFF] hover:bg-[#222228] hover:border-[#FDACAC]/40 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD7979]"
              >
                Live Portfolio <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
