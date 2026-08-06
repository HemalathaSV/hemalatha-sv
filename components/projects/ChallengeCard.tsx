"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { AlertCircle, Lightbulb } from "lucide-react";
import { Project } from "@/data/projects";

interface ChallengeCardProps {
  project: Project;
}

export function ChallengeCard({ project }: ChallengeCardProps) {
  return (
    <section className="py-16 sm:py-24 bg-[#0F0F12] relative border-b border-[#FDACAC]/18">
      <Container>
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Engineering Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="font-heading text-xs font-mono font-semibold tracking-wider text-[#FD7979] uppercase">
                  Technical Deep Dive
                </h2>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#FFFFFF]">
                  Engineering Challenges
                </h3>
              </div>

              <div className="p-6 rounded-2xl bg-[#19191D] border border-[#FDACAC]/18 space-y-4">
                <div className="flex items-center gap-2 text-rose-400">
                  <AlertCircle className="h-5 w-5" />
                  <h4 className="font-heading text-base font-bold text-[#FFFFFF]">
                    Key Technical Roadblocks
                  </h4>
                </div>
                <ul className="space-y-3 text-sm text-[#B8B8C5]">
                  {project.challenges.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Engineering Learnings */}
          {project.learnings && project.learnings.length > 0 && (
            <div className="p-6 rounded-2xl bg-[#19191D] border border-[#FDACAC]/18 space-y-4">
              <div className="flex items-center gap-2 text-[#FD7979]">
                <Lightbulb className="h-5 w-5" />
                <h4 className="font-heading text-base font-bold text-[#FFFFFF]">
                  Engineering Outcomes & Learnings
                </h4>
              </div>
              <ul className="space-y-3 text-sm text-[#B8B8C5]">
                {project.learnings.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FD7979] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
