"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { PublicationCard } from "./PublicationCard";
import { ResearchHighlight } from "./ResearchHighlight";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export function ResearchSection() {
  const highlights = [
    "Agentic AI",
    "Multi-Agent Workflow",
    "FastAPI Backend",
    "Natural Language Processing",
    "SQLite Database",
    "Research Publication",
  ];

  const publication = {
    title: "Tournament Management Agent Using Agentic Artificial Intelligence",
    journal: "International Journal of Creative Research Thoughts (IJCRT)",
    status: "Published",
    category: "Research Publication",
    description:
      "This research presents an Agentic AI-powered tournament management system capable of understanding natural language requests and automating tournament operations using intelligent workflows. The work demonstrates the practical application of autonomous AI agents, FastAPI, SQLite, and Large Language Models to simplify tournament management.",
  };

  return (
    <section
      id="research"
      className="relative min-h-screen w-full flex flex-col justify-center py-24 sm:py-32 bg-[#050816] overflow-hidden border-t border-slate-900/60"
    >
      {/* Ambient Background Radial Backlights */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#8B5CF6]/06 to-[#38BDF8]/04 blur-3xl pointer-events-none"
      />

      <Container>
        <div className="flex flex-col gap-12 sm:gap-16 relative z-10">
          {/* Section Header */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col space-y-4 max-w-3xl"
          >
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#0B1120] border border-slate-800/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]" />
              <span className="text-xs font-mono font-semibold text-[#8B5CF6] tracking-wider uppercase">
                Research
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8FAFC] leading-[1.1]">
              Research That Drives Innovation
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Exploring intelligent systems through applied research and practical implementation.
            </p>
          </motion.div>

          {/* Desktop 2-Column Academic Showcase Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Publication Card */}
            <div className="lg:col-span-7">
              <PublicationCard
                title={publication.title}
                journal={publication.journal}
                status={publication.status}
                category={publication.category}
                description={publication.description}
              />
            </div>

            {/* Right Column: Research Highlights Showcase */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <div className="p-6 rounded-2xl bg-[#0B1120]/75 backdrop-blur-md border border-slate-800/80 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#38BDF8]" />
                  <h4 className="font-heading text-sm font-semibold text-[#F8FAFC] tracking-tight">
                    Key Research Pillars
                  </h4>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Core computational domains and methodologies demonstrated in this research publication.
                </p>

                <motion.div
                  variants={gridContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
                >
                  {highlights.map((title, i) => (
                    <ResearchHighlight key={i} title={title} iconIndex={i} />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
