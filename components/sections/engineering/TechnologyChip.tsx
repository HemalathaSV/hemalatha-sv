import React from "react";

interface TechnologyChipProps {
  label: string;
  className?: string;
}

export function TechnologyChip({ label, className = "" }: TechnologyChipProps) {
  return (
    <span
      className={`inline-flex items-center justify-center px-[18px] py-[12px] rounded-full bg-[#F8EEE8] border border-[#D8B89E] text-xs font-medium text-[#7A563C] hover:bg-[#B18C6A] hover:text-white hover:border-[#B18C6A] transition-all duration-300 ease-in-out ${className}`}
    >
      {label}
    </span>
  );
}
