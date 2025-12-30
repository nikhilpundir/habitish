import { cn } from '@/app/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className, onClick, ...props }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all duration-200',
        onClick && 'cursor-pointer active:scale-[0.98]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
