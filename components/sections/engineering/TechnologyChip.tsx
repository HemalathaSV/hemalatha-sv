import React from "react";

interface TechnologyChipProps {
  label: string;
  className?: string;
}

export function TechnologyChip({ label, className = "" }: TechnologyChipProps) {
  return (
    <span
      className={`px-3 py-1 rounded-lg bg-[#222228] border border-[#FDACAC]/18 text-xs font-mono font-medium text-[#B8B8C5] hover:text-[#FFFFFF] hover:border-[#FD7979]/40 transition-colors duration-200 ${className}`}
    >
      {label}
    </span>
  );
}
