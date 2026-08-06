import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#151214]">
      <div className="h-10 w-10 rounded-full border-2 border-[#FDACAC]/18 border-t-[#FD7979] animate-spin" />
    </div>
  );
}
