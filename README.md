# Habitish - Modern Habit Tracker

A beautiful, modern habit tracking application built with Next.js 16, React 19, and Tailwind CSS 4.

## ✨ Features

- **Daily Habit Tracking** - Mark habits as complete with a single tap
- **Streak Tracking** - See your current streak for each habit
- **Insights Dashboard** - Visualize your progress with charts and statistics
- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **Dark Mode Support** - Automatic dark mode based on system preferences
- **Local Storage** - All data stored locally in your browser
- **Modern UI** - Beautiful gradients, smooth animations, and intuitive interface

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd habitish
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
habitish/
├── app/
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   └── Card.tsx
│   │   ├── DailyQuote.tsx
│   │   ├── HabitItem.tsx
│   │   └── Navbar.tsx
│   ├── hooks/              # Custom React hooks
│   │   └── useHabits.tsx
│   ├── lib/                # Utility functions
│   │   ├── constants.ts
│   │   ├── habit-utils.ts
│   │   └── utils.ts
│   ├── insights/           # Insights page
│   ├── manage/             # Manage habits page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── types.ts            # TypeScript types
└── public/                 # Static assets
```

## 🎨 Design Features

- **Gradient Backgrounds** - Beautiful color gradients throughout the app
- **Glass Morphism** - Frosted glass effect on cards and navigation
- **Smooth Animations** - Fade-in and slide-up animations for better UX
- **Responsive Layout** - Mobile-first design that scales to any screen size
- **Accessible** - ARIA labels and semantic HTML for better accessibility

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4
- **Charts:** Recharts
- **Icons:** Lucide React
- **Date Handling:** date-fns
- **TypeScript:** Full type safety

## 📱 Pages

### Today (Dashboard)
- View all your habits for today
- Quick completion toggle
- Progress summary
- Daily motivational quote

### Insights
- 7-day activity chart
- Overall statistics (total completions, longest streak, average rate)
- Individual habit performance metrics
- Visual progress bars

### Manage
- Add new habits with name and description
- View all active habits
- Delete habits
- See total completion count per habit

## 🎯 Usage

1. **Add a Habit:** Go to the Manage page and click "Add New Habit"
2. **Track Daily:** On the Today page, tap any habit to mark it complete
3. **View Progress:** Check the Insights page to see your statistics and trends
4. **Build Streaks:** Complete habits daily to build and maintain streaks

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
