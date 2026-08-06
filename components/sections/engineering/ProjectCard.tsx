"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";
import { CategoryBadge } from "./CategoryBadge";
import { TechnologyChip } from "./TechnologyChip";

export interface ProjectCardProps {
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

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#FFF6F5]/80 backdrop-blur-xl border border-[#FDACAC]/35 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#FDACAC]/40 hover:shadow-2xl hover:shadow-[#FD7979]/5 h-full"
    >
      <div className="space-y-4">
        {/* Category Badge */}
        <div className="flex items-center justify-between">
          <CategoryBadge category={project.category} />
          <span className="text-[11px] font-mono text-[#5B4A4A]">
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-2xl font-bold tracking-tight text-[#2B2323] group-hover:text-[#FD7979] transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#5B4A4A] leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <TechnologyChip key={i} label={tech} />
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 rounded bg-[#2B2323] text-[10px] font-mono text-[#5B4A4A]/60">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-6 mt-6 border-t border-[#FDACAC]/35">
        {/* Case Study */}
        <Link
          href={project.caseStudyUrl}
          className="h-10 px-5 rounded-full text-xs font-semibold tracking-wide inline-flex items-center gap-1.5 bg-[#FD7979] text-[#2B2323] hover:bg-[#FD7979]/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md shadow-[#FD7979]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD7979]"
        >
          Case Study <ArrowRight className="h-3.5 w-3.5" />
        </Link>



        {/* GitHub Button (Inline SVG) */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 px-5 rounded-full text-xs font-medium tracking-wide inline-flex items-center gap-1.5 bg-transparent border border-[#FDACAC]/35 text-[#2B2323] hover:bg-[#2B2323] hover:border-[#FDACAC]/40 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD7979]"
        >
          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
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
            className="h-10 px-5 rounded-full text-xs font-medium tracking-wide inline-flex items-center gap-1.5 bg-transparent border border-[#FDACAC]/35 text-[#2B2323] hover:bg-[#2B2323] hover:border-[#FDACAC]/40 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD7979]"
          >
            <ExternalLink className="h-3.5 w-3.5" /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}
