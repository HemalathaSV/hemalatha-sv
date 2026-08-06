"use client";

import React from "react";
import { ArrowDown, Cpu, User, Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";

export function ArchitectureDiagram() {
  const subAgents = [
    { title: "Resume Agent", desc: "Analyzes content & formatting" },
    { title: "ATS Agent", desc: "Evaluates keyword compliance" },
    { title: "Interview Agent", desc: "Conducts mock Q&A" },
    { title: "Aptitude Agent", desc: "Generates practice tests" },
    { title: "Career Agent", desc: "Provides roadmap guidance" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#E4E0E1] relative border-b border-[#D8C8BB]">
      <Container>
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="font-heading text-xs font-mono font-semibold tracking-wider text-[#5A4030] uppercase">
              System Architecture
            </h2>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#2E2A28]">
              Multi-Agent Orchestration Flow
            </h3>
            <p className="text-sm text-[#5F5854] max-w-xl mx-auto">
              How PlacementPilot AI routes student requests through autonomous specialized agents and LLM backends.
            </p>
          </div>

          {/* Interactive Flow Diagram */}
          <div className="flex flex-col items-center space-y-6 pt-4">
            {/* Step 1: Student Input */}
            <div className="w-full max-w-md p-4 rounded-xl bg-[#F7F5F4] border border-[#D8C8BB] flex items-center justify-center gap-3 text-center shadow-lg">
              <User className="h-5 w-5 text-[#5A4030]" />
              <span className="font-heading text-sm font-semibold text-[#2E2A28]">
                Student Request / Prompt
              </span>
            </div>

            <ArrowDown className="h-5 w-5 text-[#5A4030] animate-bounce" />

            {/* Step 2: Coordinator Agent */}
            <div className="w-full max-w-md p-5 rounded-2xl bg-[#F7F5F4] border border-[#B18C6A]/40 shadow-xl text-center space-y-1">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#5A4030]/15 text-[#2E2A28] text-xs font-mono font-bold">
                <Cpu className="h-3.5 w-3.5" />
                Coordinator Agent
              </div>
              <p className="text-xs text-[#5F5854]">
                Evaluates intent & dispatches sub-agents in parallel
              </p>
            </div>

            <ArrowDown className="h-5 w-5 text-[#5A4030]" />

            {/* Step 3: Sub-Agents Parallel Layer */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
              {subAgents.map((agent, index) => (
                <div
                  key={index}
                  className="p-3.5 rounded-xl bg-[#F7F5F4]/90 border border-[#D8C8BB] flex flex-col items-center text-center space-y-1 hover:border-[#B18C6A]/65 transition-colors"
                >
                  <span className="text-xs font-heading font-bold text-[#2E2A28]">
                    {agent.title}
                  </span>
                  <span className="text-[11px] text-[#5F5854] leading-tight">
                    {agent.desc}
                  </span>
                </div>
              ))}
            </div>

            <ArrowDown className="h-5 w-5 text-[#5A4030]" />

            {/* Step 4: LLM Backend */}
            <div className="w-full max-w-md p-4 rounded-xl bg-[#F7F5F4] border border-[#D8C8BB] flex items-center justify-center gap-3 text-center shadow-lg">
              <Sparkles className="h-5 w-5 text-[#B18C6A]" />
              <span className="font-heading text-sm font-semibold text-[#2E2A28]">
                Google Gemini API & Fast Execution Engine
              </span>
            </div>

            <ArrowDown className="h-5 w-5 text-[#5A4030]" />

            {/* Step 5: Synthesized Response */}
            <div className="w-full max-w-md p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center gap-3 text-center shadow-lg">
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              <span className="font-heading text-sm font-semibold text-emerald-400">
                Actionable Personalized Student Feedback
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
