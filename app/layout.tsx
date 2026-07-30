import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { SkipToContent, Navbar } from "@/components/navigation";
import { Footer } from "@/components/layout";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";
import { CommandPalette } from "@/components/ui/CommandPalette";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hemalatha S V AI — AI Engineer & Researcher",
    template: "%s | Hemalatha S V AI",
  },
  description:
    "Official personal brand and engineering portfolio for Hemalatha S V AI, showcasing intelligent multi-agent AI systems, machine learning pipelines, and research publications.",
  keywords: [
    "Hemalatha S V",
    "Hemalatha S V AI",
    "AI Engineer",
    "Agentic AI",
    "Multi-Agent Systems",
    "FastAPI",
    "Next.js",
    "Machine Learning",
    "Research",
  ],
  authors: [{ name: "Hemalatha S V" }],
  creator: "Hemalatha S V",
  metadataBase: new URL("https://hemalathasv.ai"),
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hemalathasv.ai",
    title: "Hemalatha S V AI — AI Engineer & Researcher",
    description:
      "Official personal brand and engineering portfolio for Hemalatha S V AI, showcasing intelligent multi-agent AI systems, machine learning pipelines, and research publications.",
    siteName: "Hemalatha S V AI Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hemalatha S V AI — AI Engineer & Researcher",
    description:
      "Official personal brand and engineering portfolio for Hemalatha S V AI, showcasing intelligent multi-agent AI systems, machine learning pipelines, and research publications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050816] text-[#F8FAFC] selection:bg-[#38BDF8]/30 selection:text-[#38BDF8]">
        <ScrollProgress />
        <LoadingScreen />
        <CommandPalette />
        <SkipToContent />
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
