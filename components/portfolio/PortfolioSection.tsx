"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ProjectGrid } from "./ProjectGrid";
import { FilterTabs } from "./FilterTabs";
import { SearchBar } from "./SearchBar";
import { filterProjects } from "@/data/projects";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "AI Projects",
    "Research",
    "Hackathons",
    "Machine Learning",
  ];

  const filteredProjects = filterProjects(activeCategory, searchQuery);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#050816] overflow-hidden">
      {/* Ambient Radial Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-[#38BDF8]/08 via-[#8B5CF6]/04 to-transparent blur-3xl pointer-events-none"
      />

      <Container>
        <div className="flex flex-col gap-10 sm:gap-12 relative z-10">
          {/* Section Header */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-4 max-w-3xl"
          >
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#0B1120] border border-slate-800/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
              <span className="text-xs font-mono font-semibold text-[#38BDF8] tracking-wider uppercase">
                Portfolio
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-[#F8FAFC] leading-[1.1]">
              Featured Projects
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              A collection of AI-powered applications, research, hackathon solutions, and full-stack engineering projects.
            </p>
          </motion.div>

          {/* Interactive Controls: Search & Category Filter */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-2">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <FilterTabs
              categories={categories}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
          </div>

          {/* Results Count & Project Grid */}
          {filteredProjects.length > 0 ? (
            <ProjectGrid projects={filteredProjects} />
          ) : (
            <div className="p-12 text-center rounded-2xl bg-[#0B1120] border border-slate-800 space-y-3 my-8">
              <p className="font-heading text-lg font-bold text-[#F8FAFC]">
                No matching projects found
              </p>
              <p className="text-xs text-[#94A3B8]">
                Try adjusting your search query or switching category filters.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="mt-2 text-xs font-mono text-[#38BDF8] underline hover:opacity-80"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
