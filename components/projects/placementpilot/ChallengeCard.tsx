"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { AlertCircle, Lightbulb } from "lucide-react";

export function ChallengeCard() {
  const challenges = [
    "Multi-Agent Coordination: Ensuring non-blocking parallel sub-agent execution without race conditions.",
    "Prompt Engineering: Structuring strict JSON schema prompts for deterministic evaluation results.",
    "Latency Minimization: Optimizing FastAPI payload processing to deliver real-time feedback.",
    "Context Preservation: Retaining student session data across distinct preparation modules.",
  ];

  const learnings = [
    "Agentic Architecture: Dissecting monolithic AI workflows into focused micro-agents dramatically improves answer quality.",
    "Schema-Driven Validation: Pydantic schemas prevent LLM hallucination and ensure reliable API response payloads.",
    "Modular API Design: Decoupling the FastApi backend from the frontend UI allowed rapid iteration during prototyping.",
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#050816] relative border-b border-slate-900/60">
      <Container>
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Engineering Challenges */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="font-heading text-xs font-mono font-semibold tracking-wider text-[#38BDF8] uppercase">
                Technical Deep Dive
              </h2>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
                Engineering Challenges & Solutions
              </h3>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B1120] border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-rose-400">
                <AlertCircle className="h-5 w-5" />
                <h4 className="font-heading text-base font-bold text-[#F8FAFC]">
                  Key Technical Roadblocks
                </h4>
              </div>
              <ul className="space-y-3 text-sm text-[#94A3B8]">
                {challenges.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Engineering Learnings */}
          <div className="p-6 rounded-2xl bg-[#0B1120] border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-[#38BDF8]">
              <Lightbulb className="h-5 w-5" />
              <h4 className="font-heading text-base font-bold text-[#F8FAFC]">
                Engineering Insights & Takeaways
              </h4>
            </div>
            <ul className="space-y-3 text-sm text-[#94A3B8]">
              {learnings.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8] mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
