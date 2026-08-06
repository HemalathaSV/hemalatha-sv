import React from "react";

interface TechnologyChipProps {
  label: string;
  className?: string;
}

export function TechnologyChip({ label, className = "" }: TechnologyChipProps) {
  return (
    <span
      className={`inline-flex items-center justify-center px-[18px] py-[12px] rounded-full bg-[#F7F1EC] border border-[#D6C3B3] text-xs font-medium text-[#6F5542] hover:bg-[#B18C6A] hover:text-white hover:border-[#B18C6A] transition-all duration-300 ease-in-out ${className}`}
    >
      {label}
    </span>
  );
}
