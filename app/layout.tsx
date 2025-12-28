import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Habitish - Build Better Habits",
  description: "Track your daily habits and build a better you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100 min-h-screen pb-20">
        <main className="max-w-2xl mx-auto min-h-screen relative px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            {children}
          </div>
          <Navbar />
        </main>
      </body>
    </html>
  );
}