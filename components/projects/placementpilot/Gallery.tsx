"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Layout, FileSearch, MessageSquareCode, BrainCircuit } from "lucide-react";

export function Gallery() {
  const screenshots = [
    {
      title: "Desktop Dashboard",
      desc: "Central student preparation portal with score tracking",
      icon: Layout,
    },
    {
      title: "Resume Analyzer",
      desc: "ATS score breakdown & keyword improvement suggestions",
      icon: FileSearch,
    },
    {
      title: "Interview Module",
      desc: "Real-time AI mock interview simulation feed",
      icon: MessageSquareCode,
    },
    {
      title: "Aptitude Module",
      desc: "Timed problem sets with step-by-step AI solutions",
      icon: BrainCircuit,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0F0F12] relative border-b border-[#FDACAC]/18">
      <Container>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <h2 className="font-heading text-xs font-mono font-semibold tracking-wider text-[#FD7979] uppercase">
              Interface & Experience
            </h2>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#FFFFFF]">
              Project Gallery & Interfaces
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {screenshots.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative flex flex-col justify-between h-52 p-6 rounded-2xl bg-[#19191D] border border-[#FDACAC]/18 hover:border-[#FD7979]/40 transition-all shadow-xl overflow-hidden"
                >
                  <div
                    aria-hidden="true"
                    className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[radial-gradient(circle_at_top_right,rgba(253,121,121,0.06),transparent_70%)]"
                  />
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#222228] text-[#FD7979] border border-[#FDACAC]/18">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1 relative z-10">
                    <h4 className="font-heading text-base font-bold text-[#FFFFFF] group-hover:text-[#FD7979] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#B8B8C5]">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
