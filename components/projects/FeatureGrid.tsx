"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Project } from "@/data/projects";

interface FeatureGridProps {
  project: Project;
}

export function FeatureGrid({ project }: FeatureGridProps) {
  if (!project.features || project.features.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-[#E4E0E1] relative border-b border-[#D8C8BB]">
      <Container>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-3">
            <h2 className="font-heading text-xs font-mono font-semibold tracking-wider text-[#5A4030] uppercase">
              Core Capabilities
            </h2>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#2E2A28]">
              Key Platform Features
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {project.features.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#F7F5F4]/80 backdrop-blur-xl border border-[#D8C8BB] space-y-3 hover:-translate-y-1 hover:border-[#B18C6A]/65 transition-all duration-300 shadow-xl"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F5E9DF] text-[#8A6348] border border-[#D6C3B3] font-mono text-xs font-bold">
                  0{index + 1}
                </div>
                <h4 className="font-heading text-base font-bold text-[#2E2A28]">
                  {item.title}
                </h4>
                <p className="text-xs text-[#5F5854] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
