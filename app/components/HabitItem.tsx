'use client';
import { Habit } from '../types';
import { Check, Circle, Flame } from 'lucide-react';
import { Card } from './ui/Card';
import { calculateStreak } from '../lib/habit-utils';
import { cn } from '../lib/utils';

interface Props {
  habit: Habit;
  date: string;
  onToggle: (id: string, date: string) => void;
}

export default function HabitItem({ habit, date, onToggle }: Props) {
  const isCompleted = habit.completedDates.includes(date);
  const streak = calculateStreak(habit);

  return (
    <Card
      onClick={() => onToggle(habit.id, date)}
      className={cn(
        'p-4 transition-all duration-300 animate-slide-up',
        isCompleted
          ? 'bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border-emerald-300 dark:border-emerald-700'
          : 'hover:border-slate-300 dark:hover:border-slate-600'
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3
              className={cn(
                'font-semibold text-base truncate',
                isCompleted
                  ? 'text-emerald-900 dark:text-emerald-100'
                  : 'text-slate-900 dark:text-slate-100'
              )}
            >
              {habit.name}
            </h3>
            {streak > 0 && (
              <div className="flex items-center gap-1 px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                <Flame size={12} className="text-orange-600 dark:text-orange-400" />
                <span className="text-xs font-bold text-orange-700 dark:text-orange-300">
                  {streak}
                </span>
              </div>
            )}
          </div>
          {habit.description && (
            <p className="text-xs text-slate-600 dark:text-slate-400 truncate">
              {habit.description}
            </p>
          )}
        </div>

        <div
          className={cn(
            'ml-4 p-2.5 rounded-full transition-all duration-300 flex-shrink-0',
            isCompleted
              ? 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg scale-110'
              : 'bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500'
          )}
        >
          {isCompleted ? <Check size={20} strokeWidth={3} /> : <Circle size={20} />}
        </div>
      </div>
    </Card>
  );
}
