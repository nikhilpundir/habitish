import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Habitish - Modern Habit Tracker',
    short_name: 'Habitish',
    description: 'Build better habits with Habitish. Track daily habits, monitor streaks, and visualize your progress.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/mainLogo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
    categories: ['lifestyle', 'productivity', 'health'],
  };
}
