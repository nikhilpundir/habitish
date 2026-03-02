import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manage Your Habits',
  description:
    'Create, edit, and organize your daily habits. Add new habits, delete old ones, and export your habit tracking data to Excel.',
};

export default function ManageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
