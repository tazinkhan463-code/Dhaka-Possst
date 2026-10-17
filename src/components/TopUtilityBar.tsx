import React, { useState, useEffect } from 'react';
import { 
  Sun, Moon, Globe, Bookmark, Clock, CloudSun,
  Search, BookOpen, Volume2, TrendingUp
} from 'lucide-react';

interface TopUtilityBarProps {
  language: 'bn' | 'en';
  onToggleLanguage: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  bookmarksCount: number;
  onOpenBookmarks: () => void;
  onOpenSearch: () => void;
  onOpenEpaper: () => void;
  onOpenPrayerTimes: () => void;
}

export const TopUtilityBar: React.FC<TopUtilityBarProps> = ({
  language,
  onToggleLanguage,
  darkMode,
  onToggleDarkMode,
  bookmarksCount,
  onOpenBookmarks,
  onOpenSearch,
  onOpenEpaper,
  onOpenPrayerTimes,
}) => {
  const [currentDateTime, setCurrentDateTime] = useState({
    bnDate: 'শুক্রবার, ১৭ অক্টোবর ২০২৬ | ১ কার্তিক ১৪৩৩',
    enDate: 'Friday, 17 October 2026',
    time: 'দুপুর ২:৩০',
    timeEn: '02:30 PM'
  });

  useEffect(() => {
    // Keep time in sync
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      };
      const enDate = now.toLocaleDateString('en-US', options);
      const timeEn = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      
      setCurrentDateTime({
        bnDate: 'শুক্রবার, ১৭ অক্টোবর ২০২৬ | ১ কার্তিক ১৪৩৩',
        enDate: enDate,
        time: 'দুপুর ২:৩০',
        timeEn: timeEn
      });
    };
    updateTime();
  }, []);

  return (
    <div className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-y-1.5">
        
        {/* Left: Date, Time & Weather */}
        <div className="flex items-center gap-3 md:gap-4 flex-wrap">
          <div className="flex items-center gap-1.5 font-medium">
            <Clock className="w-3.5 h-3.5 text-red-600 shrink-0" />
            <span>{language === 'bn' ? currentDateTime.bnDate : currentDateTime.enDate}</span>
          </div>
          
          <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>

          {/* Dhaka Weather */}
          <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
            <CloudSun className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>{language === 'bn' ? 'ঢাকা ২৯° সে.' : 'Dhaka 29°C'}</span>
          </div>

          <span className="hidden md:inline text-slate-300 dark:text-slate-700">|</span>

          {/* Quick Prayer Times Modal trigger */}
          <button
            onClick={onOpenPrayerTimes}
            className="hidden md:flex items-center gap-1 hover:text-red-600 dark:hover:text-red-400 font-medium transition-colors cursor-pointer"
            title="নামাজের সময়সূচি"
          >
            <span>{language === 'bn' ? 'নামাজের সময়সূচি' : 'Prayer Times'}</span>
          </button>
        </div>

        {/* Right: Currency ticker, E-Paper, Bookmarks, Dark Mode, Language Toggle */}
        <div className="flex items-center gap-3 md:gap-4 ml-auto">
          {/* Currency indicator */}
          <div className="hidden lg:flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <TrendingUp className="w-3 h-3 text-emerald-600 shrink-0" />
            <span>{language === 'bn' ? 'USD: ৳১১৯.৫০' : 'USD: ৳119.50'}</span>
          </div>

          <span className="hidden lg:inline text-slate-300 dark:text-slate-700">|</span>

          {/* E-Paper button */}
          <button
            onClick={onOpenEpaper}
            className="flex items-center gap-1 hover:text-red-600 dark:hover:text-red-400 font-medium transition-colors cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-red-600" />
            <span>{language === 'bn' ? 'ই-পেপার' : 'E-Paper'}</span>
          </button>

          <span className="text-slate-300 dark:text-slate-700">|</span>

          {/* Search trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-1 hover:text-red-600 dark:hover:text-red-400 transition-colors cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{language === 'bn' ? 'অনুসন্ধান' : 'Search'}</span>
          </button>

          {/* Bookmarks */}
          <button
            onClick={onOpenBookmarks}
            className="flex items-center gap-1 hover:text-red-600 dark:hover:text-red-400 transition-colors cursor-pointer relative"
            aria-label="Bookmarks"
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{language === 'bn' ? 'সংরক্ষিত' : 'Saved'}</span>
            {bookmarksCount > 0 && (
              <span className="bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">
                {bookmarksCount}
              </span>
            )}
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded transition-colors cursor-pointer"
            title={darkMode ? 'Light Mode' : 'Dark Mode'}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-700" />}
          </button>

          {/* Language Switcher */}
          <button
            onClick={onToggleLanguage}
            className="flex items-center gap-1 px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-red-500 font-semibold text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
            title={language === 'bn' ? 'Switch to English' : 'বাংলা সংস্করণে যান'}
          >
            <Globe className="w-3 h-3 text-red-600" />
            <span>{language === 'bn' ? 'English' : 'বাংলা'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
