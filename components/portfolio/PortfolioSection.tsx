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
    <section className="relative min-h-screen w-full flex flex-col justify-center pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#E4E0E1] overflow-hidden">
      {/* Ambient Radial Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-[#5A4030]/08 via-[#B18C6A]/04 to-transparent blur-3xl pointer-events-none"
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
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#F7F5F4] border border-[#D8C8BB]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5A4030]" />
              <span className="text-xs font-mono font-semibold text-[#5A4030] tracking-wider uppercase">
                Portfolio
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-[#2E2A28] leading-[1.1]">
              Featured Projects
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5F5854] leading-relaxed">
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
