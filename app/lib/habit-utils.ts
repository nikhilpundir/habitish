import { Habit } from '../types';
import { format, subDays, parseISO } from 'date-fns';

export function calculateStreak(habit: Habit): number {
  if (habit.completedDates.length === 0) return 0;

  const sortedDates = [...habit.completedDates]
    .map((d) => parseISO(d))
    .sort((a, b) => b.getTime() - a.getTime());

  const today = new Date();
  const todayStr = format(today, 'yyyy-MM-dd');
  const yesterdayStr = format(subDays(today, 1), 'yyyy-MM-dd');

  // Check if the most recent completion is today or yesterday
  const mostRecentStr = format(sortedDates[0], 'yyyy-MM-dd');
  if (mostRecentStr !== todayStr && mostRecentStr !== yesterdayStr) {
    return 0;
  }

  let streak = 0;
  let currentDate = sortedDates[0];

  for (const date of sortedDates) {
    const dateStr = format(date, 'yyyy-MM-dd');
    const expectedStr = format(currentDate, 'yyyy-MM-dd');

    if (dateStr === expectedStr) {
      streak++;
      currentDate = subDays(currentDate, 1);
    } else {
      break;
    }
  }

  return streak;
}

export function getCompletionRate(habit: Habit, days: number = 7): number {
  const recentDates = Array.from({ length: days }).map((_, i) =>
    format(subDays(new Date(), i), 'yyyy-MM-dd')
  );

  const completedInRange = recentDates.filter((date) => habit.completedDates.includes(date)).length;

  return Math.round((completedInRange / days) * 100);
}
