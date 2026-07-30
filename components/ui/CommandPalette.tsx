"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FolderGit2, BookOpen, FileText, Home, X } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { PUBLICATIONS } from "@/data/research";

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavigate = (path: string) => {
    setIsOpen(false);
    setQuery("");
    if (path.startsWith("http") || path.startsWith("mailto:")) {
      window.open(path, "_blank");
    } else {
      router.push(path);
    }
  };

  const filteredProjects = PROJECTS.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredResearch = PUBLICATIONS.filter((r) =>
    r.title.toLowerCase().includes(query.toLowerCase()) ||
    r.journal.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/60 backdrop-blur-md">
          {/* Backdrop Click */}
          <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 w-full max-w-xl rounded-2xl bg-[#0B1120] border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
          >
            {/* Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-slate-800 gap-3">
              <Search className="h-5 w-5 text-[#38BDF8] shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Search projects, research, resume, contact... (Esc to exit)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-[#F8FAFC] placeholder-[#94A3B8]/60 focus:outline-none"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#94A3B8] hover:text-[#F8FAFC] p-1"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="overflow-y-auto p-3 space-y-4 text-xs font-sans">
              {/* Quick Navigation Section */}
              <div className="space-y-1">
                <span className="px-2 font-mono font-semibold text-[10px] text-[#38BDF8] uppercase tracking-wider">
                  Navigation
                </span>
                <div
                  onClick={() => handleNavigate("/")}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-[#94A3B8] hover:bg-[#111827] hover:text-[#F8FAFC] cursor-pointer transition-colors"
                >
                  <Home className="h-4 w-4 text-[#38BDF8]" />
                  <span>Home Page</span>
                </div>
                <div
                  onClick={() => handleNavigate("/portfolio")}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-[#94A3B8] hover:bg-[#111827] hover:text-[#F8FAFC] cursor-pointer transition-colors"
                >
                  <FolderGit2 className="h-4 w-4 text-[#38BDF8]" />
                  <span>All Portfolio Projects</span>
                </div>
                <div
                  onClick={() => handleNavigate("/research")}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-[#94A3B8] hover:bg-[#111827] hover:text-[#F8FAFC] cursor-pointer transition-colors"
                >
                  <BookOpen className="h-4 w-4 text-[#8B5CF6]" />
                  <span>Research Library</span>
                </div>
                <div
                  onClick={() => handleNavigate("/resume")}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-[#94A3B8] hover:bg-[#111827] hover:text-[#F8FAFC] cursor-pointer transition-colors"
                >
                  <FileText className="h-4 w-4 text-emerald-400" />
                  <span>Resume Viewer</span>
                </div>
              </div>

              {/* Projects Results */}
              {filteredProjects.length > 0 && (
                <div className="space-y-1">
                  <span className="px-2 font-mono font-semibold text-[10px] text-[#38BDF8] uppercase tracking-wider">
                    Projects ({filteredProjects.length})
                  </span>
                  {filteredProjects.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => handleNavigate(`/projects/${p.slug}`)}
                      className="flex items-center justify-between px-3 py-2 rounded-xl text-[#94A3B8] hover:bg-[#111827] hover:text-[#F8FAFC] cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <FolderGit2 className="h-4 w-4 text-[#38BDF8] shrink-0" />
                        <span className="font-semibold truncate">{p.title}</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111827] border border-slate-800 text-[#38BDF8] shrink-0">
                        {p.category}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Research Results */}
              {filteredResearch.length > 0 && (
                <div className="space-y-1">
                  <span className="px-2 font-mono font-semibold text-[10px] text-[#8B5CF6] uppercase tracking-wider">
                    Research ({filteredResearch.length})
                  </span>
                  {filteredResearch.map((r) => (
                    <div
                      key={r.id}
                      onClick={() => handleNavigate(`/projects/${r.projectSlug || "tournament-management-agent"}`)}
                      className="flex items-center justify-between px-3 py-2 rounded-xl text-[#94A3B8] hover:bg-[#111827] hover:text-[#F8FAFC] cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <BookOpen className="h-4 w-4 text-[#8B5CF6] shrink-0" />
                        <span className="font-semibold truncate">{r.title}</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 shrink-0">
                        {r.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Bar */}
            <div className="px-4 py-2 bg-[#050816] border-t border-slate-800/80 text-[11px] font-mono text-[#94A3B8]/60 flex items-center justify-between">
              <span>Press <kbd className="px-1.5 py-0.5 rounded bg-[#111827] border border-slate-800">Ctrl + K</kbd> anytime to search</span>
              <span>Antigravity Engine</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
