import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights & Progress Analytics',
  description:
    'View your habit tracking insights, progress charts, completion rates, and streaks. Analyze your performance with detailed statistics and visualizations.',
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
