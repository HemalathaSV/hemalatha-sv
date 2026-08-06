"use client";

import React from "react";
import { Container } from "@/components/layout/Container";

export function ProjectOverview() {
  return (
    <section className="py-16 sm:py-24 bg-[#FFCDC9] relative border-b border-[#FDACAC]/35">
      <Container>
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Overview */}
          <div className="space-y-4">
            <h2 className="font-heading text-xs font-mono font-semibold tracking-wider text-[#FD7979] uppercase">
              Project Overview
            </h2>
            <p className="text-xl sm:text-2xl font-medium text-[#2B2323] leading-relaxed">
              PlacementPilot AI is an AI-powered career preparation platform that combines multiple intelligent agents into one coordinated system.
            </p>
            <p className="text-base text-[#5B4A4A] leading-relaxed">
              Students receive real-time personalized assistance spanning resume optimization, ATS evaluation, aptitude practice, mock interviews, and tailored career roadmap suggestions—all integrated into a single seamless experience.
            </p>
          </div>

          {/* Problem vs Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* Problem Statement Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FFF6F5]/80 backdrop-blur-xl border border-[#FDACAC]/35 space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-rose-400" />
                <h3 className="font-heading text-lg font-bold text-[#2B2323]">
                  The Challenge
                </h3>
              </div>
              <p className="text-sm text-[#5B4A4A] leading-relaxed">
                Students often rely on multiple disconnected platforms for resume reviews, aptitude practice, interview preparation, and career guidance. This creates an inefficient, disjointed learning experience with no unified tracking or feedback loop.
              </p>
            </div>

            {/* Solution Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FFF6F5]/80 backdrop-blur-xl border border-[#FDACAC]/35 space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#FD7979]" />
                <h3 className="font-heading text-lg font-bold text-[#2B2323]">
                  The Solution
                </h3>
              </div>
              <p className="text-sm text-[#5B4A4A] leading-relaxed">
                PlacementPilot AI solves this by integrating specialized autonomous AI agents under a central Coordinator Agent. Each agent handles a targeted task while maintaining context across the student&apos;s preparation journey.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
