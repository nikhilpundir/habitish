"use client";
import { useState } from "react";
import { useHabits } from "../hooks/useHabits";
import { Trash2, Plus, Download, Info, Github, Heart } from "lucide-react"; // Added Info, Github, Heart
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { cn, downloadExcel } from "../lib/utils";
import Link from "next/link"; // Import Link

export default function ManagePage() {
  const { habits, addHabit, deleteHabit, mounted } = useHabits();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    addHabit(name, desc);
    setName("");
    setDesc("");
    setIsFormVisible(false);
  };

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
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            Manage Habits
          </h1>
          {/* Seamless About Button */}
          <Link 
            href="/about" 
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 text-sm font-medium border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
          >
            <Info size={18} />
            <span className="hidden sm:inline">About</span>
          </Link>
        </div>
        <p className="text-slate-600 dark:text-slate-400">
          Create and organize your daily habits
        </p>
      </header>

      {/* Add Habit Button/Form */}
      {!isFormVisible ? (
        <Button
          variant="primary"
          size="lg"
          icon={Plus}
          onClick={() => setIsFormVisible(true)}
          className="w-full"
        >
          Add New Habit
        </Button>
      ) : (
        <Card className="p-6 animate-slide-up">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Habit Name *
              </label>
              <input
                type="text"
                placeholder="e.g., Read for 10 minutes"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                required
                autoFocus
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Description (Optional)
              </label>
              <input
                type="text"
                placeholder="Add a short description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
              />
            </div>
            <div className="flex gap-3">
              <Button type="submit" variant="primary" icon={Plus} className="flex-1">
                Add Habit
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  setIsFormVisible(false);
                  setName("");
                  setDesc("");
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* Habits List */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Your Habits ({habits.length})
        </h2>

        {habits.length === 0 ? (
          <Card className="p-12 text-center">
            <div className="mb-4 text-6xl">📝</div>
            <p className="text-slate-500 dark:text-slate-400 mb-2">No habits created yet</p>
            <p className="text-sm text-slate-400 dark:text-slate-500">
              Click the button above to create your first habit
            </p>
          </Card>
        ) : (
          <div className="space-y-3">
            {habits.map((habit, index) => (
              <Card
                key={habit.id}
                className={cn("p-4 group animate-slide-up")}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                      {habit.name}
                    </h3>
                    {habit.description && (
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {habit.description}
                      </p>
                    )}
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
                      {habit.completedDates.length} days completed
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      if (confirm(`Delete "${habit.name}"?`)) {
                        deleteHabit(habit.id);
                      }
                    }}
                    className="p-2 text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30"
                    aria-label="Delete habit"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      <div className="pt-8 space-y-8 border-t border-slate-200 dark:border-slate-800">
         <Button
          variant="secondary"
          size="lg"
          icon={Download}
          onClick={() => downloadExcel(habits)}
          className="w-full shadow-sm"
        >
          Export Data to Excel
        </Button>

        {/* Heartwarming Footer */}
        <footer className="text-center space-y-4">
          <div className="flex flex-col items-center gap-2">
            <Heart size={20} className="text-red-500 animate-pulse" fill="currentColor" />
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Support the developer
            </p>
            <a 
              href="https://github.com/nikhilpundir" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Github size={16} />
              Star Habitish
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}