'use client';
import { useHabits } from '../hooks/useHabits';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { subDays, format } from 'date-fns';
import { Card } from '../components/ui/Card';
import { TrendingUp, Flame, Target, Award } from 'lucide-react';
import { calculateStreak, getCompletionRate } from '../lib/habit-utils';

export default function InsightsPage() {
  const { habits, mounted } = useHabits();

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-slate-400">Loading...</div>
      </div>
    );
  }

  // Calculate Last 7 Days Activity
  const last7Days = Array.from({ length: 7 }).map((_, i) => {
    const d = subDays(new Date(), 6 - i);
    const dateStr = format(d, 'yyyy-MM-dd');
    const completedCount = habits.filter((h) => h.completedDates.includes(dateStr)).length;

    return {
      day: format(d, 'EEE'),
      completed: completedCount,
      total: habits.length,
    };
  });

  // Calculate overall stats
  const totalCompletions = habits.reduce((sum, h) => sum + h.completedDates.length, 0);
  const longestStreak = Math.max(...habits.map(calculateStreak), 0);
  const avgCompletionRate =
    habits.length > 0
      ? Math.round(habits.reduce((sum, h) => sum + getCompletionRate(h, 7), 0) / habits.length)
      : 0;

  return (
    <div className="py-8 space-y-6">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
          Insights
        </h1>
        <p className="text-slate-600 dark:text-slate-400">Track your progress and stay motivated</p>
      </header>

      {habits.length === 0 ? (
        <Card className="p-12 text-center">
          <div className="mb-4 text-6xl">📊</div>
          <p className="text-slate-500 dark:text-slate-400 mb-2">No data to display yet</p>
          <p className="text-sm text-slate-400 dark:text-slate-500">
            Start tracking habits to see your insights
          </p>
        </Card>
      ) : (
        <>
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                  <Target size={20} className="text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {totalCompletions}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Total Completions</p>
            </Card>

            <Card className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
                  <Flame size={20} className="text-orange-600 dark:text-orange-400" />
                </div>
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {longestStreak}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Longest Streak</p>
            </Card>

            <Card className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-xl">
                  <TrendingUp size={20} className="text-green-600 dark:text-green-400" />
                </div>
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {avgCompletionRate}%
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">7-Day Average</p>
            </Card>

            <Card className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                  <Award size={20} className="text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {habits.length}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Active Habits</p>
            </Card>
          </div>

          {/* Activity Chart */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Last 7 Days Activity
            </h3>
            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={last7Days}>
                  <XAxis
                    dataKey="day"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    stroke="#94a3b8"
                  />
                  <YAxis fontSize={12} tickLine={false} axisLine={false} stroke="#94a3b8" />
                  <Tooltip
                    cursor={{ fill: 'transparent' }}
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '8px 12px',
                    }}
                  />
                  <Bar dataKey="completed" radius={[8, 8, 0, 0]}>
                    {last7Days.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={index === 6 ? 'url(#colorGradient)' : '#cbd5e1'}
                      />
                    ))}
                  </Bar>
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Individual Habit Stats */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Habit Performance
            </h3>
            <div className="space-y-3">
              {habits.map((habit, index) => {
                const streak = calculateStreak(habit);
                const completionRate = getCompletionRate(habit, 7);

                return (
                  <Card
                    key={habit.id}
                    className="p-5 animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        {habit.name}
                      </h4>
                      {streak > 0 && (
                        <div className="flex items-center gap-1 px-2 py-1 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                          <Flame size={14} className="text-orange-600 dark:text-orange-400" />
                          <span className="text-sm font-bold text-orange-700 dark:text-orange-300">
                            {streak} day{streak !== 1 ? 's' : ''}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-slate-600 dark:text-slate-400">7-Day Rate</span>
                          <span className="font-semibold text-slate-900 dark:text-slate-100">
                            {completionRate}%
                          </span>
                        </div>
                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
                            style={{ width: `${completionRate}%` }}
                          />
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                          {habit.completedDates.length}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">Total</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
