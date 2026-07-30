"use client";

import React from "react";
import { Container } from "@/components/layout/Container";

export function TechStack() {
  const stack = [
    { name: "Python", role: "Core AI Backend Logic" },
    { name: "FastAPI", role: "High-Performance REST API" },
    { name: "Gemini API", role: "LLM Intelligence Engine" },
    { name: "SQLite", role: "Lightweight Data Store" },
    { name: "Next.js", role: "Modern Frontend Interface" },
    { name: "Tailwind CSS", role: "Responsive UI Architecture" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#050816] relative border-b border-slate-900/60">
      <Container>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <h2 className="font-heading text-xs font-mono font-semibold tracking-wider text-[#38BDF8] uppercase">
              Technology Stack
            </h2>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
              Built with Modern Tools
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {stack.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-[#0B1120] border border-slate-800 space-y-1"
              >
                <span className="font-mono text-sm font-bold text-[#38BDF8]">
                  {item.name}
                </span>
                <p className="text-xs text-[#94A3B8]">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
