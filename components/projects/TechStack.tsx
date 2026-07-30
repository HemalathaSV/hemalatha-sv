"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Project } from "@/data/projects";

interface TechStackProps {
  project: Project;
}

export function TechStack({ project }: TechStackProps) {
  return (
    <section className="py-16 sm:py-24 bg-[#050816] relative border-b border-slate-900/60">
      <Container>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <h2 className="font-heading text-xs font-mono font-semibold tracking-wider text-[#38BDF8] uppercase">
              Technology Stack
            </h2>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
              Tools & Frameworks
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-xl bg-[#0B1120] border border-slate-800 font-mono text-sm font-semibold text-[#38BDF8] shadow-sm hover:border-[#38BDF8]/40 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
