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
    <section className="py-16 sm:py-24 bg-[#050816] relative border-b border-slate-900/60">
      <Container>
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Engineering Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="font-heading text-xs font-mono font-semibold tracking-wider text-[#38BDF8] uppercase">
                  Technical Deep Dive
                </h2>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
                  Engineering Challenges
                </h3>
              </div>

              <div className="p-6 rounded-2xl bg-[#0B1120] border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-rose-400">
                  <AlertCircle className="h-5 w-5" />
                  <h4 className="font-heading text-base font-bold text-[#F8FAFC]">
                    Key Technical Roadblocks
                  </h4>
                </div>
                <ul className="space-y-3 text-sm text-[#94A3B8]">
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
            <div className="p-6 rounded-2xl bg-[#0B1120] border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-[#38BDF8]">
                <Lightbulb className="h-5 w-5" />
                <h4 className="font-heading text-base font-bold text-[#F8FAFC]">
                  Engineering Outcomes & Learnings
                </h4>
              </div>
              <ul className="space-y-3 text-sm text-[#94A3B8]">
                {project.learnings.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8] mt-2 shrink-0" />
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
