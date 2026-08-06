"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Layout } from "lucide-react";
import { Project } from "@/data/projects";

interface GalleryProps {
  project: Project;
}

export function Gallery({ project }: GalleryProps) {
  if (!project.screenshots || project.screenshots.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-[#151214] relative border-b border-[#FDACAC]/18">
      <Container>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <h2 className="font-heading text-xs font-mono font-semibold tracking-wider text-[#FD7979] uppercase">
              Interface & Experience
            </h2>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#FFFFFF]">
              Project Gallery & Screenshots
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.screenshots.map((item, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between h-48 p-6 rounded-2xl bg-[#19191D] border border-[#FDACAC]/18 hover:border-[#FDACAC]/40 transition-all shadow-xl overflow-hidden"
              >
                <div
                  aria-hidden="true"
                  className="absolute top-0 right-0 w-36 h-36 rounded-full bg-[radial-gradient(circle_at_top_right,rgba(253,121,121,0.06),transparent_70%)]"
                />
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#222228] text-[#FD7979] border border-[#FDACAC]/18">
                  <Layout className="h-4 w-4" />
                </div>
                <div className="space-y-1 relative z-10">
                  <h4 className="font-heading text-base font-bold text-[#FFFFFF] group-hover:text-[#FD7979] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#B8B8C5]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
