"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
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
      <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-800/80">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38BDF8] hover:underline group-hover:translate-x-0.5 transition-transform"
        >
          View Case Study <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub Repository for ${project.title}`}
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#111827] text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8]/40 border border-slate-800 transition-all"
        >
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.div>
  );
}
