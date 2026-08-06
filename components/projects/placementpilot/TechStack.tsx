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
    <section className="py-16 sm:py-24 bg-[#E4E0E1] relative border-b border-[#D8C8BB]">
      <Container>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <h2 className="font-heading text-xs font-mono font-semibold tracking-wider text-[#5A4030] uppercase">
              Technology Stack
            </h2>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#2E2A28]">
              Built with Modern Tools
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {stack.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-[#F7F5F4] border border-[#D8C8BB] space-y-1"
              >
                <span className="font-mono text-sm font-bold text-[#5A4030]">
                  {item.name}
                </span>
                <p className="text-xs text-[#5F5854]">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
