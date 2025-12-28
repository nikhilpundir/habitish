"use client";
import { useHabits } from "./hooks/useHabits";
import HabitItem from "./components/HabitItem";
import DailyQuote from "./components/DailyQuote";
import { format } from "date-fns";
import { Calendar, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  const { habits, toggleHabit, mounted } = useHabits();
  const today = format(new Date(), "yyyy-MM-dd");
  const completedToday = habits.filter((h) => h.completedDates.includes(today)).length;
  const totalHabits = habits.length;

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-slate-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="py-8 space-y-6">
      {/* Header */}
      <header className="space-y-2">
        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
          <Calendar size={18} />
          <p className="text-sm font-medium">{format(new Date(), "EEEE, MMMM do, yyyy")}</p>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
          Good Day! 👋
        </h1>
      </header>

      {/* Progress Summary */}
      {totalHabits > 0 && (
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium mb-1">Today's Progress</p>
              <p className="text-3xl font-bold">
                {completedToday} / {totalHabits}
              </p>
              <p className="text-blue-100 text-sm mt-1">
                {totalHabits > 0
                  ? `${Math.round((completedToday / totalHabits) * 100)}% Complete`
                  : "No habits yet"}
              </p>
            </div>
            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
              <TrendingUp size={32} />
            </div>
          </div>
        </div>
      )}

      {/* Daily Quote */}
      <DailyQuote />

      {/* Habits Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            Today's Habits
          </h2>
          {habits.length === 0 && (
            <Link
              href="/manage"
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Add your first habit →
            </Link>
          )}
        </div>

        <div className="space-y-3">
          {habits.length === 0 ? (
            <div className="text-center py-16">
              <div className="mb-4 text-6xl">🎯</div>
              <p className="text-slate-500 dark:text-slate-400 mb-2">No habits yet</p>
              <p className="text-sm text-slate-400 dark:text-slate-500">
                Start building better habits today!
              </p>
            </div>
          ) : (
            habits.map((habit) => (
              <HabitItem
                key={habit.id}
                habit={habit}
                date={today}
                onToggle={toggleHabit}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
