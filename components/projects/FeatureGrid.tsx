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
    <section className="py-16 sm:py-24 bg-[#050816] relative border-b border-slate-900/60">
      <Container>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-3">
            <h2 className="font-heading text-xs font-mono font-semibold tracking-wider text-[#38BDF8] uppercase">
              Core Capabilities
            </h2>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
              Key Platform Features
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {project.features.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#0B1120]/80 backdrop-blur-xl border border-slate-800/80 space-y-3 hover:-translate-y-1 hover:border-[#38BDF8]/40 transition-all duration-300 shadow-xl"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#111827] text-[#38BDF8] border border-slate-800 font-mono text-xs font-bold">
                  0{index + 1}
                </div>
                <h4 className="font-heading text-base font-bold text-[#F8FAFC]">
                  {item.title}
                </h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
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
