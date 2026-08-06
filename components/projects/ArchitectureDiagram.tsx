"use client";

import React from "react";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Project } from "@/data/projects";

interface ArchitectureDiagramProps {
  project: Project;
}

export function ArchitectureDiagram({ project }: ArchitectureDiagramProps) {
  if (!project.architecture || project.architecture.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-[#FFCDC9] relative border-b border-[#FDACAC]/35">
      <Container>
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="font-heading text-xs font-mono font-semibold tracking-wider text-[#FD7979] uppercase">
              System Architecture
            </h2>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#2B2323]">
              Component Flow & Pipeline
            </h3>
          </div>

          <div className="flex flex-col items-center space-y-4 pt-4">
            {project.architecture.map((step, index) => (
              <React.Fragment key={index}>
                <div className="w-full max-w-md p-5 rounded-2xl bg-[#FFF6F5] border border-[#FDACAC]/35 shadow-xl text-center space-y-1 hover:border-[#FDACAC]/40 transition-colors">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#FD7979]/15 text-[#2B2323] text-xs font-mono font-bold">
                    Step 0{index + 1}: {step.title}
                  </div>
                  <p className="text-xs text-[#5B4A4A] pt-1">
                    {step.desc}
                  </p>
                </div>
                {index < project.architecture.length - 1 && (
                  <ArrowDown className="h-5 w-5 text-[#FD7979] shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
