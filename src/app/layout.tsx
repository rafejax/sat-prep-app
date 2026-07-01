import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ variable: "--font-sora", subsets: ["latin"], weight: ["400", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "SATisfied – Daily SAT & PSAT Practice",
  description: "SATisfied is a game show-style daily SAT and PSAT practice app. Answer 10 fresh Math and English questions every day, compete on the leaderboard, and boost your score — one day at a time.",
  metadataBase: new URL("https://www.satisfiedsatprep.com"),
  openGraph: {
    title: "SATisfied – Daily SAT & PSAT Practice",
    description: "Answer 10 fresh SAT/PSAT questions every day in a game show-style format. Compete on the leaderboard and track your progress.",
    url: "https://www.satisfiedsatprep.com",
    siteName: "SATisfied",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SATisfied – Daily SAT & PSAT Practice",
    description: "Answer 10 fresh SAT/PSAT questions every day in a game show-style format. Compete on the leaderboard and track your progress.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.satisfiedsatprep.com",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#040410]" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
        {children}

        {/* Legal footer — shown on /terms and /privacy */}
        <footer className="border-t border-blue-900/20 py-4 text-center text-xs text-slate-600">
          <span className="mr-3">© 2026 SATisfied</span>
          <a href="/profile"      className="mr-3 hover:text-blue-400 transition">Profile</a>
          <a href="/subscription" className="mr-3 hover:text-blue-400 transition">Subscription</a>
          <a href="/terms"        className="mr-3 hover:text-blue-400 transition">Terms of Use</a>
          <a href="/privacy"      className="hover:text-blue-400 transition">Privacy Policy</a>
        </footer>
      </body>
    </html>
  );
}
