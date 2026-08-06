import React from "react";

interface PublicationBadgeProps {
  status?: string;
  category?: string;
  className?: string;
}

export function PublicationBadge({
  status = "Published",
  category = "Research Publication",
  className = "",
}: PublicationBadgeProps) {
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {/* Status Badge */}
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
        {status}
      </span>

      {/* Category Badge */}
      <span className="inline-flex items-center justify-center px-[18px] py-[12px] rounded-full text-xs font-medium bg-[#F7F1EC] border border-[#D6C3B3] text-[#6F5542] hover:bg-[#B18C6A] hover:text-white hover:border-[#B18C6A] transition-all duration-300 ease-in-out">
        {category}
      </span>
    </div>
  );
}
