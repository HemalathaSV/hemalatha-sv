"use client";

import React from "react";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = "Search projects by name, tech, or description...",
}: SearchBarProps) {
  return (
    <div className="relative flex items-center w-full max-w-md">
      <div className="absolute left-3.5 text-[#38BDF8] pointer-events-none">
        <Search className="h-4 w-4" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#0B1120] border border-slate-800 text-xs sm:text-sm text-[#F8FAFC] placeholder-[#94A3B8]/60 focus:outline-none focus:border-[#38BDF8]/60 focus:ring-2 focus:ring-[#38BDF8]/20 transition-all"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-3.5 text-[#94A3B8] hover:text-[#F8FAFC] p-0.5 rounded-md"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
}
