export interface Habit {
  id: string;
  name: string;
  description?: string;
  color?: string;
  icon?: string;
  completedDates: string[];
  createdAt: string;
}