"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PROFILE } from "@/config/profile";

export function ProjectCTA() {
  return (
    <section className="py-20 sm:py-28 bg-[#FFCDC9] relative">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-8 p-8 sm:p-12 rounded-3xl bg-[#FFF6F5]/90 border border-[#FDACAC]/35 shadow-2xl relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gradient-to-b from-[#FD7979]/10 via-[#FDACAC]/05 to-transparent blur-3xl pointer-events-none"
          />

          <div className="space-y-3 relative z-10">
            <h2 className="font-heading text-2xl sm:text-4xl font-bold tracking-tight text-[#2B2323]">
              Interested in this project?
            </h2>
            <p className="text-sm sm:text-base text-[#5B4A4A] max-w-xl mx-auto">
              Explore the full codebase on GitHub or return to the main portfolio to view more intelligent AI case studies.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-7 rounded-full bg-gradient-to-r from-[#FD7979] via-[#FDACAC] to-[#FFCDC9] text-[#FFFFFF] font-semibold text-sm inline-flex items-center gap-2 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[#FD7979]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD7979]"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View GitHub Repository
            </a>
            <Link
              href="/#featured-work"
              className="h-12 px-7 rounded-full bg-transparent border border-[#FDACAC]/35 text-[#2B2323] font-medium text-sm inline-flex items-center gap-2 hover:bg-[#2B2323] hover:border-[#FDACAC]/40 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD7979]"
            >
              <ArrowLeft className="h-4 w-4 stroke-[2]" />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
