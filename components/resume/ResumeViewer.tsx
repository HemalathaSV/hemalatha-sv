"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Download, CheckCircle2, Award, Briefcase, GraduationCap } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PROFILE } from "@/config/profile";

export function ResumeViewer() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#050816] overflow-hidden">
      {/* Ambient Backlight Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-[#38BDF8]/08 via-[#8B5CF6]/04 to-transparent blur-3xl pointer-events-none"
      />

      <Container>
        <div className="flex flex-col gap-10 max-w-4xl mx-auto relative z-10">
          {/* Header Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#94A3B8] hover:text-[#38BDF8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>

            <div className="flex items-center gap-3">
              <a
                href={PROFILE.resume}
                className="h-11 px-6 rounded-full bg-[#38BDF8] text-[#050816] font-semibold text-xs sm:text-sm inline-flex items-center gap-2 hover:bg-[#38BDF8]/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-[#38BDF8]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
              >
                <Download className="h-4 w-4 stroke-[2]" />
                Download Resume PDF
              </a>
            </div>
          </div>

          {/* Interactive Resume Card Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-10 rounded-3xl bg-[#0B1120]/90 backdrop-blur-xl border border-slate-800 shadow-2xl space-y-10"
          >
            {/* Header / Name */}
            <div className="border-b border-slate-800 pb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[#F8FAFC]">
                  {PROFILE.name}
                </h1>
                <p className="font-heading text-base font-semibold text-[#38BDF8] pt-1">
                  {PROFILE.title}
                </p>
                <p className="text-xs text-[#94A3B8] pt-1">
                  {PROFILE.location} • {PROFILE.email}
                </p>
              </div>

              <div className="flex flex-col sm:items-end space-y-1 text-xs font-mono text-[#94A3B8]">
                <span>GitHub: github.com/HemalathaSV</span>
                <span>LinkedIn: linkedin.com/in/hemalatha-sv</span>
              </div>
            </div>

            {/* Core Competencies & Skills */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#38BDF8]">
                <CheckCircle2 className="h-4 w-4" />
                <h2 className="font-heading text-sm font-bold uppercase tracking-wider">
                  Technical Core Competencies
                </h2>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  "Agentic AI",
                  "Multi-Agent Workflows",
                  "Python",
                  "FastAPI",
                  "Gemini API",
                  "Machine Learning",
                  "SQLite",
                  "Next.js 15",
                  "TypeScript",
                  "Tailwind CSS",
                  "Prompt Engineering",
                  "REST Architecture",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-[#111827] border border-slate-800 text-xs font-mono text-[#94A3B8]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#38BDF8]">
                <Briefcase className="h-4 w-4" />
                <h2 className="font-heading text-sm font-bold uppercase tracking-wider">
                  Key Projects & Work
                </h2>
              </div>

              <div className="space-y-4 text-xs text-[#94A3B8]">
                <div className="p-4 rounded-xl bg-[#111827] border border-slate-800/80 space-y-1.5">
                  <div className="flex items-center justify-between font-heading text-sm font-bold text-[#F8FAFC]">
                    <span>PlacementPilot AI (Flagship Project)</span>
                    <span className="font-mono text-xs text-[#38BDF8]">Completed</span>
                  </div>
                  <p>
                    Intelligent placement preparation platform with autonomous micro-agents for resume evaluation, mock interviews, ATS scoring, and career roadmaps.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#111827] border border-slate-800/80 space-y-1.5">
                  <div className="flex items-center justify-between font-heading text-sm font-bold text-[#F8FAFC]">
                    <span>Tournament Management Agent (Research Publication)</span>
                    <span className="font-mono text-xs text-emerald-400">Published - IJCRT</span>
                  </div>
                  <p>
                    Autonomous AI agent capable of scheduling sports double-elimination brackets and managing venue conflict resolution via conversational natural language commands.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#38BDF8]">
                <GraduationCap className="h-4 w-4" />
                <h2 className="font-heading text-sm font-bold uppercase tracking-wider">
                  Education
                </h2>
              </div>
              <div className="p-4 rounded-xl bg-[#111827] border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div>
                  <h3 className="font-heading font-bold text-[#F8FAFC] text-sm">
                    Maharaja Institute of Technology Mysore
                  </h3>
                  <p className="text-[#94A3B8]">
                    Bachelor of Engineering — Computer Science (AI & ML)
                  </p>
                </div>
                <span className="font-mono text-[#38BDF8]">CSE (AI & ML)</span>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#38BDF8]">
                <Award className="h-4 w-4" />
                <h2 className="font-heading text-sm font-bold uppercase tracking-wider">
                  Industry Certifications
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono text-[#94A3B8]">
                <div className="p-3 rounded-lg bg-[#111827] border border-slate-800">
                  <span className="text-[#38BDF8] block font-bold">AWS APAC</span> Solutions Architecture
                </div>
                <div className="p-3 rounded-lg bg-[#111827] border border-slate-800">
                  <span className="text-[#38BDF8] block font-bold">IBM</span> Cloud Computing
                </div>
                <div className="p-3 rounded-lg bg-[#111827] border border-slate-800">
                  <span className="text-[#38BDF8] block font-bold">Microsoft</span> Azure Cloud
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
