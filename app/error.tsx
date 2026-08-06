"use client";

import React, { useEffect } from "react";
import { Container } from "@/components/layout/Container";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Global boundary error:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-[#E4E0E1] text-[#2E2A28] flex flex-col justify-center py-24">
      <Container>
        <div className="max-w-md mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400">
            <span className="font-mono text-2xl font-bold">!</span>
          </div>
          <h1 className="font-heading text-3xl font-bold">Something went wrong</h1>
          <p className="text-sm text-[#5F5854] leading-relaxed">
            An unexpected error occurred during application execution.
          </p>
          <button
            onClick={() => reset()}
            className="inline-flex h-11 px-6 items-center justify-center rounded-full bg-[#5A4030] text-[#FFFFFF] font-semibold text-xs uppercase tracking-wider hover:bg-[#B18C6A] transition-colors"
          >
            Retry Page Load
          </button>
        </div>
      </Container>
    </main>
  );
}
