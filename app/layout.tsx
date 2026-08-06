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
    default: "Hemalatha S V — AI Engineer & Researcher",
    template: "%s | Hemalatha S V",
  },
  description:
    "Official personal brand and engineering portfolio for Hemalatha S V, showcasing intelligent multi-agent AI systems, machine learning pipelines, and research publications.",
  keywords: [
    "Hemalatha S V",
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
  metadataBase: new URL("https://hemalatha-sv.vercel.app"),
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hemalatha-sv.vercel.app",
    title: "Hemalatha S V — AI Engineer & Researcher",
    description:
      "Official personal brand and engineering portfolio for Hemalatha S V, showcasing intelligent multi-agent AI systems, machine learning pipelines, and research publications.",
    siteName: "Hemalatha S V Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hemalatha S V — AI Engineer & Researcher",
    description:
      "Official personal brand and engineering portfolio for Hemalatha S V, showcasing intelligent multi-agent AI systems, machine learning pipelines, and research publications.",
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
      <body className="min-h-full flex flex-col bg-[#0F0F12] text-[#FFFFFF] selection:bg-[#FD7979]/30 selection:text-[#FD7979]">
        {/* Premium Ambient Background Glows */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 select-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] rounded-full bg-gradient-to-tr from-[#FD7979]/03 via-[#FDACAC]/02 to-transparent blur-3xl ambient-glow-1" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] sm:w-[550px] h-[400px] sm:h-[550px] rounded-full bg-gradient-to-bl from-[#FDACAC]/03 via-[#FD7979]/02 to-transparent blur-3xl ambient-glow-2" />
        </div>

        <ScrollProgress />
        <LoadingScreen />
        <CommandPalette />
        <SkipToContent />
        <Navbar />
        <div className="flex-1 flex flex-col relative z-10">{children}</div>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
