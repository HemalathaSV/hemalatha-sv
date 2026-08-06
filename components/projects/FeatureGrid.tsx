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
    <section className="py-16 sm:py-24 bg-[#0F0F12] relative border-b border-[#FDACAC]/18">
      <Container>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-3">
            <h2 className="font-heading text-xs font-mono font-semibold tracking-wider text-[#FD7979] uppercase">
              Core Capabilities
            </h2>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#FFFFFF]">
              Key Platform Features
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {project.features.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#19191D]/80 backdrop-blur-xl border border-[#FDACAC]/18 space-y-3 hover:-translate-y-1 hover:border-[#FD7979]/40 transition-all duration-300 shadow-xl"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#222228] text-[#FD7979] border border-[#FDACAC]/18 font-mono text-xs font-bold">
                  0{index + 1}
                </div>
                <h4 className="font-heading text-base font-bold text-[#FFFFFF]">
                  {item.title}
                </h4>
                <p className="text-xs text-[#B8B8C5] leading-relaxed">
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
