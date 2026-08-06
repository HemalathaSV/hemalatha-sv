import React from "react";

interface TechnologyChipProps {
  label: string;
  className?: string;
}

export function TechnologyChip({ label, className = "" }: TechnologyChipProps) {
  return (
    <span
      className={`px-3 py-1 rounded-lg bg-[#2B2323] border border-[#FDACAC]/35 text-xs font-mono font-medium text-[#5B4A4A] hover:text-[#FDACAC] hover:border-[#FDACAC]/40 transition-colors duration-200 ${className}`}
    >
      {label}
    </span>
  );
}
