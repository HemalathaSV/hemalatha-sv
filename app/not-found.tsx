import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FFCDC9] text-[#2B2323] flex flex-col justify-center py-24">
      <Container>
        <div className="max-w-md mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400">
            <span className="font-mono text-2xl font-bold">404</span>
          </div>
          <h1 className="font-heading text-3xl font-bold">Page Not Found</h1>
          <p className="text-sm text-[#5B4A4A] leading-relaxed">
            The page you are looking for does not exist or has been moved to another URL.
          </p>
          <Link
            href="/"
            className="inline-flex h-11 px-6 items-center justify-center rounded-full bg-gradient-to-r from-[#FD7979] via-[#FDACAC] to-[#FFCDC9] text-[#FFFFFF] font-semibold text-xs uppercase tracking-wider hover:opacity-95 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </Container>
    </main>
  );
}
