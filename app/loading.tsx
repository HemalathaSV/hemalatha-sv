import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050816]">
      <div className="h-10 w-10 rounded-full border-2 border-slate-800 border-t-[#38BDF8] animate-spin" />
    </div>
  );
}
