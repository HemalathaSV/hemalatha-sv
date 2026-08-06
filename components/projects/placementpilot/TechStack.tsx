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
    <section className="py-16 sm:py-24 bg-[#0F0F12] relative border-b border-[#FDACAC]/18">
      <Container>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <h2 className="font-heading text-xs font-mono font-semibold tracking-wider text-[#FD7979] uppercase">
              Technology Stack
            </h2>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#FFFFFF]">
              Built with Modern Tools
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {stack.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-[#19191D] border border-[#FDACAC]/18 space-y-1"
              >
                <span className="font-mono text-sm font-bold text-[#FD7979]">
                  {item.name}
                </span>
                <p className="text-xs text-[#B8B8C5]">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
