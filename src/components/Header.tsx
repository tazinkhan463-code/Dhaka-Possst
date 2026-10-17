import React, { useState } from 'react';
import { Menu, X, ChevronDown, Radio, Flame, Sparkles, Newspaper } from 'lucide-react';

interface HeaderProps {
  language: 'bn' | 'en';
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenLiveCoverage?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  activeCategory,
  onSelectCategory,
  onOpenLiveCoverage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const navCategories = [
    { id: 'all', labelBn: 'প্রচ্ছদ', labelEn: 'Home' },
    { id: 'national', labelBn: 'জাতীয়', labelEn: 'National' },
    { id: 'politics', labelBn: 'রাজনীতি', labelEn: 'Politics' },
    { id: 'economy', labelBn: 'অর্থনীতি', labelEn: 'Economy' },
    { id: 'international', labelBn: 'আন্তর্জাতিক', labelEn: 'World' },
    { id: 'sports', labelBn: 'খেলা', labelEn: 'Sports' },
    { id: 'entertainment', labelBn: 'বিনোদন', labelEn: 'Entertainment' },
    { id: 'district', labelBn: 'সারাদেশ', labelEn: 'Districts' },
    { id: 'opinion', labelBn: 'মতামত', labelEn: 'Opinion' },
    { id: 'tech', labelBn: 'তথ্যপ্রযুক্তি', labelEn: 'Tech' },
    { id: 'lifestyle', labelBn: 'লাইফস্টাইল', labelEn: 'Lifestyle' },
    { id: 'video', labelBn: 'ভিডিও', labelEn: 'Video' },
  ];

  const moreCategories = [
    { id: 'education', labelBn: 'শিক্ষা ও ক্যাম্পাস', labelEn: 'Education & Campus' },
    { id: 'expatriate', labelBn: 'প্রবাস জীবন', labelEn: 'Expatriate' },
    { id: 'health', labelBn: 'স্বাস্থ্য ও চিকিৎসা', labelEn: 'Health & Wellness' },
    { id: 'religion', labelBn: 'ধর্ম ও জীবন', labelEn: 'Religion' },
    { id: 'jobs', labelBn: 'চাকরি ও ক্যারিয়ার', labelEn: 'Jobs & Careers' }
  ];

  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40 shadow-xs transition-colors">
      {/* Brand & Main Hub Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20 gap-4">
          
          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Authentic Dhaka Post Brand Logo */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onSelectCategory('all');
              }}
              className="group flex items-center gap-2.5"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold text-2xl shadow-sm group-hover:bg-red-700 transition-colors">
                <span className="font-bengali-serif">ঢা</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white font-bengali">
                    {language === 'bn' ? 'ঢাকা' : 'DHAKA'}
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-red-600 font-bengali">
                    {language === 'bn' ? 'পোস্ট' : 'POST'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 inline-block animate-pulse"></span>
                  <span>{language === 'bn' ? 'সত্যের সাথে ২৪ ঘণ্টা' : 'Truth Round the Clock'}</span>
                </div>
              </div>
            </a>
          </div>

          {/* Center: Live / Special Flash Indicator */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60">
            <Radio className="w-4 h-4 text-red-600 animate-pulse" />
            <span className="text-xs font-semibold text-red-700 dark:text-red-400">
              {language === 'bn' ? 'লাইভ আপডেট: বিশেষ সংসদীয় সংস্কার ও মেট্রো ট্রায়াল' : 'LIVE UPDATE: Metro Trial & Parliamentary Briefings'}
            </span>
          </div>

          {/* Right Action: Live TV / Highlights button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => onSelectCategory('video')}
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md bg-red-600 text-white font-medium text-xs sm:text-sm hover:bg-red-700 transition-colors shadow-xs cursor-pointer"
            >
              <Flame className="w-4 h-4" />
              <span>{language === 'bn' ? 'ডিজিটাল টিভি' : 'Live Video'}</span>
            </button>
          </div>

        </div>
      </div>

      {/* Primary Category Navigation Bar */}
      <div className="border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hidden md:flex items-center justify-between overflow-x-auto py-2 no-scrollbar gap-1 text-sm font-medium">
            <div className="flex items-center gap-1">
              {navCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => onSelectCategory(cat.id)}
                    className={`px-3 py-1.5 rounded transition-colors whitespace-nowrap cursor-pointer text-sm font-medium ${
                      isActive
                        ? 'bg-red-600 text-white shadow-xs font-semibold'
                        : 'text-slate-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {language === 'bn' ? cat.labelBn : cat.labelEn}
                  </button>
                );
              })}
            </div>

            {/* More dropdown */}
            <div className="relative shrink-0">
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className="flex items-center gap-1 px-3 py-1.5 rounded text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-red-600 transition-colors cursor-pointer text-sm"
              >
                <span>{language === 'bn' ? 'আরও' : 'More'}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${moreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {moreDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-52 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
                  onMouseLeave={() => setMoreDropdownOpen(false)}
                >
                  {moreCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        onSelectCategory(cat.id);
                        setMoreDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-red-50 dark:hover:bg-slate-700 hover:text-red-600 transition-colors"
                    >
                      {language === 'bn' ? cat.labelBn : cat.labelEn}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 space-y-1">
          <div className="grid grid-cols-2 gap-1.5 pb-3 border-b border-slate-200 dark:border-slate-800">
            {navCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2 rounded text-sm font-medium ${
                  activeCategory === cat.id
                    ? 'bg-red-600 text-white font-semibold'
                    : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {language === 'bn' ? cat.labelBn : cat.labelEn}
              </button>
            ))}
          </div>

          <div className="pt-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">
              {language === 'bn' ? 'বিশেষ বিভাগ' : 'Special Categories'}
            </span>
            <div className="grid grid-cols-2 gap-1.5 mt-1">
              {moreCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    onSelectCategory(cat.id);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left px-3 py-2 rounded text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {language === 'bn' ? cat.labelBn : cat.labelEn}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
