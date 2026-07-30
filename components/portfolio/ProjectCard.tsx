"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Play, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#0B1120]/80 backdrop-blur-xl border border-slate-800/80 shadow-xl hover:-translate-y-1.5 hover:border-[#38BDF8]/40 hover:shadow-2xl hover:shadow-[#38BDF8]/5 transition-all duration-300 w-full"
    >
      <div className="space-y-4">
        {/* Category Badge & Status */}
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/30">
            {project.category}
          </span>
          <span className="text-[11px] font-mono text-[#94A3B8]">
            {project.status}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors duration-200">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-lg bg-[#111827] border border-slate-800 text-[11px] font-mono text-[#94A3B8]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 rounded-lg bg-[#111827] text-[11px] font-mono text-[#94A3B8]/60">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-6 mt-6 border-t border-slate-800/80">
        <Link
          href={project.caseStudyUrl}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38BDF8] hover:underline group-hover:translate-x-0.5 transition-transform"
        >
          View Case Study <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        
        <div className="flex items-center gap-2">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Watch Demo"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#111827] text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8]/40 border border-slate-800 transition-all"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Live Demo"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#111827] text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8]/40 border border-slate-800 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Repository"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#111827] text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8]/40 border border-slate-800 transition-all"
          >
            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
