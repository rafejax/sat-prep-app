import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SATisfied – Daily Practice",
  description: "Jeopardy-style SAT/PSAT daily practice with Math and English challenges.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#040410]">
        {children}

        {/* Legal footer — shown on /terms and /privacy */}
        <footer className="border-t border-blue-900/20 py-4 text-center text-xs text-slate-600">
          <span className="mr-3">© 2026 SATisfied</span>
          <a href="/subscription" className="mr-3 hover:text-blue-400 transition">Subscription</a>
          <a href="/terms"        className="mr-3 hover:text-blue-400 transition">Terms of Use</a>
          <a href="/privacy"      className="hover:text-blue-400 transition">Privacy Policy</a>
        </footer>
      </body>
    </html>
  );
}
