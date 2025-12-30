import { QUOTES } from '../lib/constants';
import { getDayOfYear } from 'date-fns';
import { Sparkles } from 'lucide-react';
import { Card } from './ui/Card';

export default function DailyQuote() {
  const dayOfYear = getDayOfYear(new Date());
  const quoteIndex = dayOfYear % QUOTES.length;

  return (
    <Card className="p-5 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 border-violet-200 dark:border-violet-800">
      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <div className="p-2 bg-violet-100 dark:bg-violet-900/50 rounded-xl">
            <Sparkles size={20} className="text-violet-600 dark:text-violet-400" />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-violet-900 dark:text-violet-100 leading-relaxed">
            "{QUOTES[quoteIndex]}"
          </p>
        </div>
      </div>
    </Card>
  );
}
