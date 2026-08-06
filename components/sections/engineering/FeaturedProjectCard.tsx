"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";
import { CategoryBadge } from "./CategoryBadge";
import { TechnologyChip } from "./TechnologyChip";

export interface FeaturedProjectCardProps {
  project: Project;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="group relative flex flex-col justify-between p-6 sm:p-10 rounded-2xl bg-[#F7F5F4]/90 backdrop-blur-xl border border-[#B18C6A]/20 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#B18C6A]/50 hover:shadow-[0_0_30px_rgba(90,64,48,0.1)] w-full"
    >
      {/* Ambient Inner Gradient Glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(90,64,48,0.08),transparent_70%)] pointer-events-none"
      />

      <div className="space-y-6 relative z-10">
        {/* Header Badge */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-amber-400 text-lg">⭐</span>
            <CategoryBadge category={project.category} />
          </div>
          <span className="text-xs font-mono text-[#5F5854]">
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#2E2A28] group-hover:text-[#5A4030] transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-base sm:text-lg text-[#5F5854] leading-relaxed max-w-4xl">
          {project.description}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-2.5 pt-2">
          {project.technologies.map((tech, i) => (
            <TechnologyChip key={i} label={tech} />
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-4 pt-8 mt-6 border-t border-[#B18C6A]/20 relative z-10">
        {/* Case Study */}
        <Link
          href={project.caseStudyUrl}
          className="h-11 px-6 rounded-full text-xs sm:text-sm font-semibold tracking-wide inline-flex items-center gap-2 bg-[#5A4030] text-[#2E2A28] hover:bg-[#5A4030]/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md shadow-[#5A4030]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5A4030]"
        >
          Case Study <ArrowRight className="h-4 w-4" />
        </Link>



        {/* GitHub Button (Inline SVG) */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="h-11 px-6 rounded-full text-xs sm:text-sm font-medium tracking-wide inline-flex items-center gap-2 bg-transparent border border-[#B18C6A]/20 text-[#2E2A28] hover:bg-[#2E2A28] hover:border-[#B18C6A]/65 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5A4030]"
        >
          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </a>

        {/* Live Demo Button (optional) */}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 px-6 rounded-full text-xs sm:text-sm font-medium tracking-wide inline-flex items-center gap-2 bg-transparent border border-[#B18C6A]/20 text-[#2E2A28] hover:bg-[#2E2A28] hover:border-[#B18C6A]/65 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5A4030]"
          >
            <ExternalLink className="h-4 w-4" /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}
