"use client";

import { useState, useEffect } from "react";
import { Habit } from "../types";

export function useHabits() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [mounted, setMounted] = useState(false);

  // Load from LocalStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("my-habits");
    if (stored) {
      setHabits(JSON.parse(stored));
    }
    setMounted(true);
  }, []);

  // Save to LocalStorage whenever habits change
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("my-habits", JSON.stringify(habits));
    }
  }, [habits, mounted]);

  const addHabit = (name: string, description?: string) => {
    const newHabit: Habit = {
      id: crypto.randomUUID(),
      name,
      description,
      completedDates: [],
      createdAt: new Date().toISOString(),
    };
    setHabits((prev) => [...prev, newHabit]);
  };

  const deleteHabit = (id: string) => {
    setHabits((prev) => prev.filter((h) => h.id !== id));
  };

  const toggleHabit = (id: string, date: string) => {
    setHabits((prev) =>
      prev.map((h) => {
        if (h.id === id) {
          const isCompleted = h.completedDates.includes(date);
          return {
            ...h,
            completedDates: isCompleted
              ? h.completedDates.filter((d) => d !== date)
              : [...h.completedDates, date],
          };
        }
        return h;
      })
    );
  };

  return { habits, addHabit, deleteHabit, toggleHabit, mounted };
}