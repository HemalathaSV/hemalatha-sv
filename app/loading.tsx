import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#E4E0E1]">
      <div className="h-10 w-10 rounded-full border-2 border-[#D8C8BB] border-t-[#5A4030] animate-spin" />
    </div>
  );
}
