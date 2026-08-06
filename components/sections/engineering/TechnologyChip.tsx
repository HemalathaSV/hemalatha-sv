import React from "react";

interface TechnologyChipProps {
  label: string;
  className?: string;
}

export function TechnologyChip({ label, className = "" }: TechnologyChipProps) {
  return (
    <span
      className={`px-3 py-1 rounded-lg bg-[#2E2A28] border border-[#B18C6A]/20 text-xs font-mono font-medium text-[#5F5854] hover:text-[#B18C6A] hover:border-[#B18C6A]/65 transition-colors duration-200 ${className}`}
    >
      {label}
    </span>
  );
}
