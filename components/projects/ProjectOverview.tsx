"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Project } from "@/data/projects";

interface ProjectOverviewProps {
  project: Project;
}

export function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <section className="py-16 sm:py-24 bg-[#151214] relative border-b border-[#FDACAC]/18">
      <Container>
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Overview */}
          <div className="space-y-4">
            <h2 className="font-heading text-xs font-mono font-semibold tracking-wider text-[#FD7979] uppercase">
              Project Overview
            </h2>
            <p className="text-xl sm:text-2xl font-medium text-[#FFFFFF] leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Problem vs Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* Problem Statement Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#19191D]/80 backdrop-blur-xl border border-[#FDACAC]/18 space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-rose-400" />
                <h3 className="font-heading text-lg font-bold text-[#FFFFFF]">
                  The Challenge
                </h3>
              </div>
              <p className="text-sm text-[#B8B8C5] leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Solution Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#19191D]/80 backdrop-blur-xl border border-[#FDACAC]/18 space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#FD7979]" />
                <h3 className="font-heading text-lg font-bold text-[#FFFFFF]">
                  The Solution
                </h3>
              </div>
              <p className="text-sm text-[#B8B8C5] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
