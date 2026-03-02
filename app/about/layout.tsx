import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Habitish - Privacy-First Habit Tracker',
  description:
    'Learn about Habitish, a privacy-focused habit tracking app with local storage, no accounts required, and Excel export. Built for speed, simplicity, and 100% user privacy.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
