import type { Metadata } from "next";
import "./globals.css";
import { SkipToContent, Navbar } from "@/components/navigation";

export const metadata: Metadata = {
  title: "Hemalatha S V AI — AI Engineer & Researcher",
  description: "Official personal brand and engineering portfolio for Hemalatha S V AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-[#050816] text-[#F8FAFC] selection:bg-[#38BDF8]/30 selection:text-[#38BDF8]">
        <SkipToContent />
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
      </body>
    </html>
  );
}
