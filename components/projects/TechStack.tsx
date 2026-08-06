"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Project } from "@/data/projects";

interface TechStackProps {
  project: Project;
}

export function TechStack({ project }: TechStackProps) {
  return (
    <section className="py-16 sm:py-24 bg-[#151214] relative border-b border-[#FDACAC]/18">
      <Container>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <h2 className="font-heading text-xs font-mono font-semibold tracking-wider text-[#FD7979] uppercase">
              Technology Stack
            </h2>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#FFFFFF]">
              Tools & Frameworks
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-xl bg-[#19191D] border border-[#FDACAC]/18 font-mono text-sm font-semibold text-[#FD7979] shadow-sm hover:border-[#FDACAC]/40 transition-colors"
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
