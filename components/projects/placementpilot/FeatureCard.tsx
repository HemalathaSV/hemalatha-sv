"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import {
  FileText,
  Target,
  MessageSquare,
  BookOpen,
  Compass,
  Network,
} from "lucide-react";

export function FeatureCard() {
  const features = [
    {
      icon: FileText,
      title: "Resume Analysis",
      desc: "Deep linguistic scan of resume structure, action verbs, and impact metrics.",
    },
    {
      icon: Target,
      title: "ATS Score Evaluation",
      desc: "Calculates keyword match percentage against targeted job descriptions.",
    },
    {
      icon: MessageSquare,
      title: "Mock Interview Practice",
      desc: "Simulates technical & behavioral interview scenarios with immediate feedback.",
    },
    {
      icon: BookOpen,
      title: "Aptitude Practice",
      desc: "Generates custom quantitative and logical reasoning problem sets.",
    },
    {
      icon: Compass,
      title: "Career Suggestions",
      desc: "Recommends skill upgrades and learning paths tailored to candidate goals.",
    },
    {
      icon: Network,
      title: "Multi-Agent Coordination",
      desc: "Intelligent agent routing ensures fast, context-aware student responses.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#151214] relative border-b border-[#FDACAC]/18">
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
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-[#19191D]/80 backdrop-blur-xl border border-[#FDACAC]/18 space-y-3 hover:-translate-y-1 hover:border-[#FDACAC]/40 transition-all duration-300 shadow-xl"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#222228] text-[#FD7979] border border-[#FDACAC]/18">
                    <Icon className="h-5 w-5 stroke-[1.75]" />
                  </div>
                  <h4 className="font-heading text-base font-bold text-[#FFFFFF]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#B8B8C5] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
