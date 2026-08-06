"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Download, CheckCircle2, Award, Briefcase, GraduationCap } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PROFILE } from "@/config/profile";

export function ResumeViewer() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#E4E0E1] overflow-hidden">
      {/* Ambient Backlight Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-[#5A4030]/08 via-[#B18C6A]/04 to-transparent blur-3xl pointer-events-none"
      />

      <Container>
        <div className="flex flex-col gap-10 max-w-4xl mx-auto relative z-10">
          {/* Header Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#5F5854] hover:text-[#5A4030] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5A4030] rounded"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>

            <div className="flex items-center gap-3">
              <a
                href={PROFILE.resume}
                download="Hemalatha_SV_Resume.pdf"
                className="h-11 px-6 rounded-full bg-[#5A4030] text-[#FFFFFF] font-semibold text-xs sm:text-sm inline-flex items-center gap-2 hover:bg-[#B18C6A] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-[#5A4030]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5A4030]"
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
            className="p-6 sm:p-10 rounded-3xl bg-[#F7F5F4]/90 backdrop-blur-xl border border-[#D8C8BB] shadow-2xl space-y-10"
          >
            {/* Header / Name */}
            <div className="border-b border-[#D8C8BB] pb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[#2E2A28]">
                  {PROFILE.name}
                </h1>
                <p className="font-heading text-base font-semibold text-[#5A4030] pt-1">
                  {PROFILE.title}
                </p>
                <p className="text-xs text-[#5F5854] pt-1">
                  {PROFILE.location} • {PROFILE.email}
                </p>
              </div>

              <div className="flex flex-col sm:items-end space-y-1 text-xs font-mono text-[#5F5854]">
                <span>GitHub: github.com/HemalathaSV</span>
                <span>LinkedIn: linkedin.com/in/hemalatha-sv</span>
              </div>
            </div>

            {/* Core Competencies & Skills */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#5A4030]">
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
                    className="inline-flex items-center justify-center px-[18px] py-[12px] rounded-full bg-[#F7F1EC] border border-[#D6C3B3] text-xs font-medium text-[#6F5542] hover:bg-[#B18C6A] hover:text-white hover:border-[#B18C6A] transition-all duration-300 ease-in-out"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#5A4030]">
                <Briefcase className="h-4 w-4" />
                <h2 className="font-heading text-sm font-bold uppercase tracking-wider">
                  Key Projects & Work
                </h2>
              </div>

              <div className="space-y-4 text-xs text-[#5F5854]">
                <div className="p-4 rounded-xl bg-[#F8F3EF] border border-[#D8C8BB] space-y-1.5">
                  <div className="flex items-center justify-between font-heading text-sm font-bold text-[#2E2A28]">
                    <span>PlacementPilot AI (Flagship Project)</span>
                    <span className="font-mono text-xs text-[#5A4030]">Completed</span>
                  </div>
                  <p>
                    Intelligent placement preparation platform with autonomous micro-agents for resume evaluation, mock interviews, ATS scoring, and career roadmaps.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F3EF] border border-[#D8C8BB] space-y-1.5">
                  <div className="flex items-center justify-between font-heading text-sm font-bold text-[#2E2A28]">
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
              <div className="flex items-center gap-2 text-[#5A4030]">
                <GraduationCap className="h-4 w-4" />
                <h2 className="font-heading text-sm font-bold uppercase tracking-wider">
                  Education
                </h2>
              </div>
              <div className="p-4 rounded-xl bg-[#F8F3EF] border border-[#D8C8BB] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div>
                  <h3 className="font-heading font-bold text-[#2E2A28] text-sm">
                    Maharaja Institute of Technology Mysore
                  </h3>
                  <p className="text-[#5F5854]">
                    Bachelor of Engineering — Computer Science (AI & ML)
                  </p>
                </div>
                <span className="font-mono text-[#5A4030]">CSE (AI & ML)</span>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#5A4030]">
                <Award className="h-4 w-4" />
                <h2 className="font-heading text-sm font-bold uppercase tracking-wider">
                  Industry Certifications
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono text-[#5F5854]">
                <div className="p-3 rounded-lg bg-[#F8F3EF] border border-[#D8C8BB]">
                  <span className="text-[#5A4030] block font-bold">AWS APAC</span> Solutions Architecture
                </div>
                <div className="p-3 rounded-lg bg-[#F8F3EF] border border-[#D8C8BB]">
                  <span className="text-[#5A4030] block font-bold">IBM</span> Cloud Computing
                </div>
                <div className="p-3 rounded-lg bg-[#F8F3EF] border border-[#D8C8BB]">
                  <span className="text-[#5A4030] block font-bold">Microsoft</span> Azure Cloud
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
