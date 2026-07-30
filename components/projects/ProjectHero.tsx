"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Project } from "@/data/projects";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative w-full pt-32 pb-20 sm:pt-40 sm:pb-24 bg-[#050816] overflow-hidden border-b border-slate-900/80">
      {/* Radial Backlight Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-[#38BDF8]/10 via-[#8B5CF6]/05 to-transparent blur-3xl pointer-events-none"
      />

      <Container>
        <div className="flex flex-col space-y-8 max-w-4xl mx-auto relative z-10">
          {/* Back Link */}
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#94A3B8] hover:text-[#38BDF8] transition-colors self-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>

          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1120] border border-[#38BDF8]/30 self-start">
            <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
            <span className="text-xs font-mono font-semibold text-[#38BDF8] tracking-wider uppercase">
              {project.category}
            </span>
          </div>

          {/* Title & Tagline */}
          <div className="space-y-4">
            <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-[#F8FAFC] leading-[1.1]">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl text-[#94A3B8] leading-relaxed max-w-3xl">
              {project.tagline}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-6 rounded-full bg-[#38BDF8] text-[#050816] font-semibold text-sm inline-flex items-center gap-2.5 hover:bg-[#38BDF8]/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[#38BDF8]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub Repository
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-6 rounded-full bg-[#0B1120] border border-slate-800 text-[#F8FAFC] font-medium text-sm inline-flex items-center gap-2 hover:border-[#38BDF8]/40 hover:bg-[#111827] active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
              >
                <ExternalLink className="h-4 w-4 stroke-[2]" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
