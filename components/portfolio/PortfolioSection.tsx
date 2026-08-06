"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ProjectGrid } from "./ProjectGrid";
import { PROJECTS } from "@/data/projects";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function PortfolioSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#FFCDC9] overflow-hidden">
      {/* Ambient Radial Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-[#FD7979]/08 via-[#FDACAC]/04 to-transparent blur-3xl pointer-events-none"
      />

      <Container>
        <div className="flex flex-col gap-12 sm:gap-16 relative z-10">
          {/* Section Header */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-4 max-w-3xl"
          >
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#FFF6F5] border border-[#FDACAC]/35">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FD7979]" />
              <span className="text-xs font-mono font-semibold text-[#FD7979] tracking-wider uppercase">
                Portfolio
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-[#2B2323] leading-[1.1]">
              Featured Projects
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5B4A4A] leading-relaxed">
              A collection of AI-powered applications, research, hackathon solutions, and full-stack engineering projects.
            </p>
          </motion.div>

          {/* Project Grid */}
          <div className="pt-2">
            <ProjectGrid projects={PROJECTS} />
          </div>
        </div>
      </Container>
    </section>
  );
}
