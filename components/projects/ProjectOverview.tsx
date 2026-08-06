"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Project } from "@/data/projects";

interface ProjectOverviewProps {
  project: Project;
}

export function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <section className="py-16 sm:py-24 bg-[#E4E0E1] relative border-b border-[#D8C8BB]">
      <Container>
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Overview */}
          <div className="space-y-4">
            <h2 className="font-heading text-xs font-mono font-semibold tracking-wider text-[#5A4030] uppercase">
              Project Overview
            </h2>
            <p className="text-xl sm:text-2xl font-medium text-[#2E2A28] leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Problem vs Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* Problem Statement Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F7F5F4]/80 backdrop-blur-xl border border-[#D8C8BB] space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-rose-400" />
                <h3 className="font-heading text-lg font-bold text-[#2E2A28]">
                  The Challenge
                </h3>
              </div>
              <p className="text-sm text-[#5F5854] leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Solution Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F7F5F4]/80 backdrop-blur-xl border border-[#D8C8BB] space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#5A4030]" />
                <h3 className="font-heading text-lg font-bold text-[#2E2A28]">
                  The Solution
                </h3>
              </div>
              <p className="text-sm text-[#5F5854] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
