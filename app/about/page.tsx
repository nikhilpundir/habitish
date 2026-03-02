'use client';
import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Database,
  FileDown,
  CheckCircle2,
  ArrowRight,
  Github,
  Heart,
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const features = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
    title: 'Privacy First',
    description:
      'Your data never leaves your device. No accounts, no tracking, no cloud databases.',
  },
  {
    icon: <Database className="w-6 h-6 text-emerald-500" />,
    title: 'Local Storage',
    description:
      "Habits are stored directly in your browser's local storage for instant access and total control.",
  },
  {
    icon: <FileDown className="w-6 h-6 text-purple-500" />,
    title: 'Excel Export',
    description:
      'Export your entire history to an Excel sheet anytime to prevent data loss or analyze your progress.',
  },
];

export default function AboutPage() {
  return (
    <div className="py-12 space-y-16 animate-fade-in">
      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-2xl mx-auto">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400 bg-clip-text text-transparent leading-tight">
          Master your routine with Habitish.
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          A minimalist habit tracker designed for speed, simplicity, and 100% user privacy.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/">
            <Button variant="primary" size="lg" icon={ArrowRight}>
              Start Tracking
            </Button>
          </Link>
          <a href="https://habitish.vercel.app" target="_blank" rel="noreferrer">
            <Button variant="secondary" size="lg">
              Visit Website
            </Button>
          </a>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="grid md:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <Card
            key={idx}
            className="p-8 space-y-4 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
          >
            <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              {feature.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {feature.description}
            </p>
          </Card>
        ))}
      </section>

      {/* Philosophy / How it Works */}
      <section className="max-w-3xl mx-auto bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Why Habitish?</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Most habit trackers require accounts and store your personal data on their servers.
              Habitish takes a different approach.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="mt-1">
                <CheckCircle2 className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  Zero Data Collection
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  We don't use cookies or analytics. What you do is your business.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1">
                <CheckCircle2 className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Own Your Data</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Since your data is local, we provide an "Export" feature so you can keep a
                  permanent record in Excel format.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1">
                <CheckCircle2 className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Blazing Fast</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Built with Next.js for a seamless, lag-free experience on mobile and desktop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer-like CTA */}
      <footer className="text-center pt-12 border-t border-slate-200 dark:border-slate-800 space-y-6">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-50 dark:bg-red-950/30 text-red-500 animate-pulse">
            <Heart fill="currentColor" size={24} />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Built with heart by Nikhil
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
              I created Habitish to be a safe, private space for personal growth. If it has helped
              you stay consistent, a star on GitHub would be the best way to say thanks and help the
              project reach more people!
            </p>
          </div>
        </div>

        <div className="pt-2">
          <a
            href="https://github.com/nikhilpundir/habitish"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-semibold hover:bg-slate-800 dark:hover:bg-white transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-slate-200 dark:shadow-none"
          >
            <Github size={20} />
            Star on GitHub
          </a>
        </div>

        <div className="pt-8">
          <p className="text-xs tracking-widest uppercase text-slate-400 dark:text-slate-500 font-medium">
            habitish.vercel.app • © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
