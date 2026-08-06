"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Project } from "@/data/projects";

interface TechStackProps {
  project: Project;
}

export function TechStack({ project }: TechStackProps) {
  return (
    <section className="py-16 sm:py-24 bg-[#E4E0E1] relative border-b border-[#B18C6A]/20">
      <Container>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <h2 className="font-heading text-xs font-mono font-semibold tracking-wider text-[#5A4030] uppercase">
              Technology Stack
            </h2>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#2E2A28]">
              Tools & Frameworks
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-xl bg-[#F7F5F4] border border-[#B18C6A]/20 font-mono text-sm font-semibold text-[#5A4030] shadow-sm hover:border-[#B18C6A]/65 transition-colors"
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
