import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#E4E0E1]">
      <div className="h-10 w-10 rounded-full border-2 border-[#B18C6A]/20 border-t-[#5A4030] animate-spin" />
    </div>
  );
}
