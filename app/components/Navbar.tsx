'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BarChart2, List } from 'lucide-react';
import { cn } from '../lib/utils';

const links = [
  { href: '/', label: 'Today', icon: Home },
  { href: '/insights', label: 'Insights', icon: BarChart2 },
  { href: '/manage', label: 'Manage', icon: List },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-safe">
      <div className="max-w-2xl mx-auto mb-4">
        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl shadow-lg px-2 py-3">
          <div className="flex justify-around items-center">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'flex flex-col items-center gap-1 px-6 py-2 rounded-xl transition-all duration-200',
                    isActive
                      ? 'bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  )}
                >
                  <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                  <span className={cn('text-xs font-medium', isActive && 'font-semibold')}>
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
