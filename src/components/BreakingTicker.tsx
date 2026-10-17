import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import { BREAKING_NEWS } from '../data/newsData';

interface BreakingTickerProps {
  language: 'bn' | 'en';
  onSelectBreakingNews: (text: string) => void;
}

export const BreakingTicker: React.FC<BreakingTickerProps> = ({
  language,
  onSelectBreakingNews,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BREAKING_NEWS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + BREAKING_NEWS.length) % BREAKING_NEWS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % BREAKING_NEWS.length);
  };

  const currentItem = BREAKING_NEWS[currentIndex];

  return (
    <div className="bg-red-50 dark:bg-red-950/30 border-b border-red-200 dark:border-red-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-10 gap-2 sm:gap-3 text-xs sm:text-sm">
          
          {/* Red Breaking Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1 bg-red-600 text-white font-bold tracking-wide rounded-sm shrink-0 uppercase select-none">
            <Zap className="w-3.5 h-3.5 fill-white" />
            <span className="font-bengali">{language === 'bn' ? 'ব্রেকিং নিউজ' : 'BREAKING'}</span>
          </div>

          {/* Rotating Headline */}
          <div 
            className="flex-1 overflow-hidden relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <button
              onClick={() => onSelectBreakingNews(language === 'bn' ? currentItem.text : currentItem.textEn)}
              className="text-left font-medium text-slate-800 dark:text-slate-100 hover:text-red-600 dark:hover:text-red-400 transition-colors truncate block w-full cursor-pointer"
            >
              <span className="text-red-600 dark:text-red-400 font-semibold mr-1.5">[{currentItem.category}]</span>
              {language === 'bn' ? currentItem.text : currentItem.textEn}
            </button>
          </div>

          {/* Ticker Nav Controls */}
          <div className="flex items-center gap-0.5 shrink-0 text-slate-500 dark:text-slate-400">
            <button
              onClick={handlePrev}
              className="p-1 hover:bg-red-200/50 dark:hover:bg-red-900/40 rounded transition-colors"
              title="Previous headline"
              aria-label="Previous headline"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs px-1 font-mono text-slate-400">
              {currentIndex + 1}/{BREAKING_NEWS.length}
            </span>
            <button
              onClick={handleNext}
              className="p-1 hover:bg-red-200/50 dark:hover:bg-red-900/40 rounded transition-colors"
              title="Next headline"
              aria-label="Next headline"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
