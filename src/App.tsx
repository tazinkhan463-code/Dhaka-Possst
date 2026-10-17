/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowUp, Filter, RefreshCw, Radio } from 'lucide-react';
import { ARTICLES_DATA, Article } from './data/newsData';
import { TopUtilityBar } from './components/TopUtilityBar';
import { Header } from './components/Header';
import { BreakingTicker } from './components/BreakingTicker';
import { HeroLeadGrid } from './components/HeroLeadGrid';
import { DistrictNewsSection } from './components/DistrictNewsSection';
import { CategoryPortals } from './components/CategoryPortals';
import { MultimediaSection } from './components/MultimediaSection';
import { ArticleModal } from './components/ArticleModal';
import { EpaperModal } from './components/EpaperModal';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { SearchModal } from './components/SearchModal';
import { PrayerTimesModal } from './components/PrayerTimesModal';
import { Footer } from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState<'bn' | 'en'>('bn');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('dhakapost_bookmarks');
      return saved ? JSON.parse(saved) : ['art-1', 'art-3'];
    } catch {
      return ['art-1', 'art-3'];
    }
  });

  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isEpaperOpen, setIsEpaperOpen] = useState(false);
  const [isPrayerTimesOpen, setIsPrayerTimesOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync dark mode class on <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Persist bookmarks
  useEffect(() => {
    try {
      localStorage.setItem('dhakapost_bookmarks', JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedIds]);

  // Handle scroll listener for back-to-top
  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleToggleBookmark = (article: Article) => {
    setBookmarkedIds((prev) => {
      if (prev.includes(article.id)) {
        return prev.filter((id) => id !== article.id);
      } else {
        return [...prev, article.id];
      }
    });
  };

  const isBookmarked = (articleId: string) => bookmarkedIds.includes(articleId);

  const bookmarkedArticles = ARTICLES_DATA.filter((a) => bookmarkedIds.includes(a.id));

  // Filter articles by active category
  const categoryFilteredArticles = activeCategory === 'all'
    ? ARTICLES_DATA
    : ARTICLES_DATA.filter((a) => a.category === activeCategory);

  const handleBreakingNewsClick = (breakingText: string) => {
    // Open lead or matching article
    const target = ARTICLES_DATA.find((a) => 
      a.title.includes('মেট্রোরেল') || a.titleEn.includes('Metro')
    ) || ARTICLES_DATA[0];
    setSelectedArticle(target);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors font-bengali">
      
      {/* 1. Top Utility Bar */}
      <TopUtilityBar
        language={language}
        onToggleLanguage={() => setLanguage((l) => (l === 'bn' ? 'en' : 'bn'))}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((d) => !d)}
        bookmarksCount={bookmarkedIds.length}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenEpaper={() => setIsEpaperOpen(true)}
        onOpenPrayerTimes={() => setIsPrayerTimesOpen(true)}
      />

      {/* 2. Main Header & Category Nav */}
      <Header
        language={language}
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 3. Breaking News Ticker */}
      <BreakingTicker
        language={language}
        onSelectBreakingNews={handleBreakingNewsClick}
      />

      {/* Main News Content Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* If a specific category is selected (not 'all'), show curated category feed */}
        {activeCategory !== 'all' ? (
          <div className="py-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-7 bg-red-600 rounded-xs"></span>
                <h1 className="text-2xl sm:text-3xl font-bold font-bengali text-slate-900 dark:text-white capitalize">
                  {language === 'bn' 
                    ? `${categoryFilteredArticles[0]?.categoryLabel || activeCategory} বিভাগের সকল সংবাদ`
                    : `${categoryFilteredArticles[0]?.categoryLabelEn || activeCategory} Feed`}
                </h1>
              </div>
              <button
                onClick={() => setActiveCategory('all')}
                className="text-xs font-semibold text-red-600 hover:underline cursor-pointer"
              >
                {language === 'bn' ? '← প্রচ্ছদে ফিরে যান' : '← Back to Home'}
              </button>
            </div>

            {categoryFilteredArticles.length === 0 ? (
              <div className="py-20 text-center text-slate-400">
                <p className="text-lg font-medium">
                  {language === 'bn' ? 'এই বিভাগে কোনো সংবাদ পাওয়া যায়নি।' : 'No articles found in this category.'}
                </p>
                <button
                  onClick={() => setActiveCategory('all')}
                  className="mt-3 px-4 py-2 bg-red-600 text-white rounded text-sm font-semibold"
                >
                  {language === 'bn' ? 'সকল সংবাদ দেখুন' : 'Browse All Stories'}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryFilteredArticles.map((article) => (
                  <article
                    key={article.id}
                    onClick={() => setSelectedArticle(article)}
                    className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="aspect-16/10 overflow-hidden relative bg-slate-100 dark:bg-slate-800">
                        <img
                          src={article.image}
                          alt={article.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-2 left-2 bg-red-600 text-white text-[11px] font-bold px-2 py-0.5 rounded">
                          {language === 'bn' ? article.categoryLabel : article.categoryLabelEn}
                        </span>
                      </div>
                      <div className="p-4">
                        <h2 className="font-bengali font-bold text-base text-slate-900 dark:text-white group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                          {language === 'bn' ? article.title : article.titleEn}
                        </h2>
                        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                          {language === 'bn' ? article.summary : article.summaryEn}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 pt-0 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                      <span>{language === 'bn' ? article.publishedTimeAgo : article.publishedTimeAgoEn}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleBookmark(article);
                        }}
                        className="text-slate-400 hover:text-red-600"
                      >
                        {isBookmarked(article.id) ? 'সংরক্ষিত' : 'সংরক্ষণ'}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Standard Dhaka Post Front Page */
          <>
            {/* 4. Hero Lead & Latest / Most Read Strip */}
            <HeroLeadGrid
              language={language}
              articles={ARTICLES_DATA}
              onOpenArticle={(art) => setSelectedArticle(art)}
              onToggleBookmark={handleToggleBookmark}
              isBookmarked={isBookmarked}
            />

            {/* 5. District News Section (সারাদেশ ও ৬৪ জেলা) */}
            <DistrictNewsSection
              language={language}
              articles={ARTICLES_DATA}
              onOpenArticle={(art) => setSelectedArticle(art)}
              onToggleBookmark={handleToggleBookmark}
              isBookmarked={isBookmarked}
            />

            {/* 6. Thematic Category Portals (Politics, Economy, Sports, Tech, Opinion) */}
            <CategoryPortals
              language={language}
              articles={ARTICLES_DATA}
              onOpenArticle={(art) => setSelectedArticle(art)}
              onToggleBookmark={handleToggleBookmark}
              isBookmarked={isBookmarked}
              onSelectCategory={(cat) => {
                setActiveCategory(cat);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 7. Multimedia Hub: Video News, Photo Essay, and Live Public Poll */}
            <MultimediaSection
              language={language}
              articles={ARTICLES_DATA}
              onOpenArticle={(art) => setSelectedArticle(art)}
            />
          </>
        )}

      </main>

      {/* 8. Footer */}
      <Footer
        language={language}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenEpaper={() => setIsEpaperOpen(true)}
      />

      {/* Back to top floating button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 transition-all cursor-pointer animate-in fade-in"
          title="উপরে যান"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Modals & Drawers */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        language={language}
        onToggleBookmark={handleToggleBookmark}
        isBookmarked={selectedArticle ? isBookmarked(selectedArticle.id) : false}
        relatedArticles={ARTICLES_DATA.filter((a) => a.id !== selectedArticle?.id)}
        onSelectArticle={(art) => setSelectedArticle(art)}
      />

      <EpaperModal
        isOpen={isEpaperOpen}
        onClose={() => setIsEpaperOpen(false)}
        language={language}
      />

      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        language={language}
        bookmarkedArticles={bookmarkedArticles}
        onOpenArticle={(art) => setSelectedArticle(art)}
        onRemoveBookmark={(id) => handleToggleBookmark({ id } as Article)}
        onClearAll={() => setBookmarkedIds([])}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        language={language}
        articles={ARTICLES_DATA}
        onOpenArticle={(art) => setSelectedArticle(art)}
      />

      <PrayerTimesModal
        isOpen={isPrayerTimesOpen}
        onClose={() => setIsPrayerTimesOpen(false)}
        language={language}
      />

    </div>
  );
}
