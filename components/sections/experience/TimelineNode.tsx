import React from "react";

export function TimelineNode() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer Glowing Ring */}
      <div className="h-7 w-7 rounded-full bg-[#19191D] border border-[#FDACAC]/40 shadow-[0_0_12px_rgba(253,121,121,0.25)] flex items-center justify-center z-10">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FD7979] shadow-[0_0_8px_rgba(253,121,121,0.8)]" />
      </div>
    </div>
  );
}
