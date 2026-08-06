"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Project } from "@/data/projects";

interface TechStackProps {
  project: Project;
}

export function TechStack({ project }: TechStackProps) {
  return (
    <section className="py-16 sm:py-24 bg-[#E4E0E1] relative border-b border-[#D8C8BB]">
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
                className="inline-flex items-center justify-center px-[18px] py-[12px] rounded-full bg-[#F7F1EC] border border-[#D6C3B3] text-xs font-medium text-[#6F5542] hover:bg-[#B18C6A] hover:text-white hover:border-[#B18C6A] transition-all duration-300 ease-in-out"
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
