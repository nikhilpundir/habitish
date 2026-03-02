import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'Habitish - Modern Habit Tracker & Daily Goal Planner',
    template: '%s | Habitish',
  },
  description:
    'Build better habits with Habitish - a beautiful, free habit tracker app. Track daily habits, monitor streaks, visualize progress with insights, and achieve your goals. Works on mobile, tablet, and desktop.',
  keywords: [
    'habit tracker',
    'daily habits',
    'habit tracking app',
    'goal tracker',
    'productivity app',
    'streak tracker',
    'habit builder',
    'daily planner',
    'personal development',
    'self improvement',
    'routine tracker',
    'habit formation',
    'goal setting',
    'progress tracker',
    'free habit tracker',
  ],
  authors: [{ name: 'Habitish Team' }],
  creator: 'Habitish',
  publisher: 'Habitish',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://habitish.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Habitish - Modern Habit Tracker & Daily Goal Planner',
    description:
      'Build better habits with Habitish. Track daily habits, monitor streaks, and visualize your progress. Free, beautiful, and works on all devices.',
    url: 'https://habitish.vercel.app',
    siteName: 'Habitish',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Habitish - Modern Habit Tracker',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Habitish - Modern Habit Tracker & Daily Goal Planner',
    description:
      'Build better habits with Habitish. Track daily habits, monitor streaks, and visualize your progress.',
    images: ['/og-image.png'],
    creator: '@habitish',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Habitish',
    description:
      'A modern habit tracking application to help you build better habits and achieve your goals',
    url: 'https://habitish.vercel.app',
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
    featureList: [
      'Daily habit tracking',
      'Streak monitoring',
      'Progress insights and charts',
      'Dark mode support',
      'Mobile responsive design',
      'Local data storage',
    ],
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100 min-h-screen pb-20">
        <main className="max-w-2xl mx-auto min-h-screen relative px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">{children}</div>
          <Navbar />
        </main>
      </body>
    </html>
  );
}
