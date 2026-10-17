import React from 'react';
import { ChevronRight, Clock, Bookmark, TrendingUp, Trophy, Film, Laptop, BookOpen } from 'lucide-react';
import { Article } from '../data/newsData';

interface CategoryPortalsProps {
  language: 'bn' | 'en';
  articles: Article[];
  onOpenArticle: (article: Article) => void;
  onToggleBookmark: (article: Article) => void;
  isBookmarked: (articleId: string) => boolean;
  onSelectCategory: (category: string) => void;
}

export const CategoryPortals: React.FC<CategoryPortalsProps> = ({
  language,
  articles,
  onOpenArticle,
  onToggleBookmark,
  isBookmarked,
  onSelectCategory,
}) => {
  // Filter subsets
  const politicsArticles = articles.filter((a) => a.category === 'politics' || a.category === 'national');
  const economyArticles = articles.filter((a) => a.category === 'economy');
  const sportsArticles = articles.filter((a) => a.category === 'sports');
  const techArticles = articles.filter((a) => a.category === 'tech');
  const opinionArticles = articles.filter((a) => a.category === 'opinion');
  const entertainmentArticles = articles.filter((a) => a.category === 'lifestyle' || a.category === 'entertainment');

  return (
    <div className="space-y-12">
      
      {/* 2-Column Split: Politics/National & Economy/Business */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Section 1: Politics & National */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-5 bg-red-600 rounded-xs"></span>
              <h3 className="font-bengali font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                {language === 'bn' ? 'রাজনীতি ও জাতীয়' : 'Politics & National'}
              </h3>
            </div>
            <button
              onClick={() => onSelectCategory('politics')}
              className="text-xs font-semibold text-red-600 hover:text-red-700 flex items-center gap-0.5 cursor-pointer"
            >
              <span>{language === 'bn' ? 'আরও খবর' : 'More'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {politicsArticles.length > 0 && (
            <div className="space-y-4">
              {/* Featured article */}
              <article
                onClick={() => onOpenArticle(politicsArticles[0])}
                className="group cursor-pointer"
              >
                <div className="aspect-16/9 rounded overflow-hidden relative mb-2.5 bg-slate-100 dark:bg-slate-800">
                  <img
                    src={politicsArticles[0].image}
                    alt={language === 'bn' ? politicsArticles[0].title : politicsArticles[0].titleEn}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-bengali font-bold text-base text-slate-900 dark:text-white group-hover:text-red-600 transition-colors leading-snug">
                  {language === 'bn' ? politicsArticles[0].title : politicsArticles[0].titleEn}
                </h4>
                <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                  {language === 'bn' ? politicsArticles[0].summary : politicsArticles[0].summaryEn}
                </p>
              </article>

              {/* Sub items */}
              <div className="border-t border-slate-100 dark:border-slate-800/80 pt-3 space-y-3">
                {politicsArticles.slice(1, 4).map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onOpenArticle(item)}
                    className="group cursor-pointer flex items-start justify-between gap-3"
                  >
                    <h5 className="font-bengali text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-red-600 transition-colors line-clamp-2">
                      {language === 'bn' ? item.title : item.titleEn}
                    </h5>
                    <span className="text-[11px] text-slate-400 shrink-0">
                      {language === 'bn' ? item.publishedTimeAgo : item.publishedTimeAgoEn}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Section 2: Economy & Business */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-5 bg-red-600 rounded-xs"></span>
              <h3 className="font-bengali font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                {language === 'bn' ? 'অর্থনীতি ও বাণিজ্য' : 'Economy & Business'}
              </h3>
            </div>
            <button
              onClick={() => onSelectCategory('economy')}
              className="text-xs font-semibold text-red-600 hover:text-red-700 flex items-center gap-0.5 cursor-pointer"
            >
              <span>{language === 'bn' ? 'আরও খবর' : 'More'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {economyArticles.length > 0 ? (
            <div className="space-y-4">
              <article
                onClick={() => onOpenArticle(economyArticles[0])}
                className="group cursor-pointer"
              >
                <div className="aspect-16/9 rounded overflow-hidden relative mb-2.5 bg-slate-100 dark:bg-slate-800">
                  <img
                    src={economyArticles[0].image}
                    alt={language === 'bn' ? economyArticles[0].title : economyArticles[0].titleEn}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-bengali font-bold text-base text-slate-900 dark:text-white group-hover:text-red-600 transition-colors leading-snug">
                  {language === 'bn' ? economyArticles[0].title : economyArticles[0].titleEn}
                </h4>
                <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                  {language === 'bn' ? economyArticles[0].summary : economyArticles[0].summaryEn}
                </p>
              </article>

              <div className="border-t border-slate-100 dark:border-slate-800/80 pt-3 space-y-3">
                {articles.slice(3, 6).map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onOpenArticle(item)}
                    className="group cursor-pointer flex items-start justify-between gap-3"
                  >
                    <h5 className="font-bengali text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-red-600 transition-colors line-clamp-2">
                      {language === 'bn' ? item.title : item.titleEn}
                    </h5>
                    <span className="text-[11px] text-slate-400 shrink-0">
                      {language === 'bn' ? item.publishedTimeAgo : item.publishedTimeAgoEn}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>

      </div>

      {/* Sports / Cricket Stadium Special Strip */}
      <div className="bg-slate-900 text-white rounded-xl p-6 relative overflow-hidden">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
          <div className="flex items-center gap-2.5">
            <Trophy className="w-6 h-6 text-amber-400" />
            <div>
              <h3 className="font-bengali font-bold text-xl sm:text-2xl text-white">
                {language === 'bn' ? 'খেলাধুলা ও ক্রিকেট কর্নার' : 'Sports & Cricket Arena'}
              </h3>
              <p className="text-xs text-slate-400">
                {language === 'bn' ? 'মিরপুর থেকে সরাসরি আপডেট ও খেলার বিশ্লেষণ' : 'Live updates & match analyses from Mirpur and beyond'}
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectCategory('sports')}
            className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>{language === 'bn' ? 'সব খেলার খবর' : 'All Sports'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sportsArticles.concat(articles.slice(1, 3)).slice(0, 3).map((item) => (
            <article
              key={item.id}
              onClick={() => onOpenArticle(item)}
              className="group cursor-pointer bg-slate-800/80 border border-slate-700 rounded-lg overflow-hidden hover:border-slate-500 transition-all"
            >
              <div className="aspect-16/10 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={language === 'bn' ? item.title : item.titleEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute bottom-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {language === 'bn' ? item.categoryLabel : item.categoryLabelEn}
                </span>
              </div>
              <div className="p-4">
                <h4 className="font-bengali font-bold text-sm text-white group-hover:text-red-400 transition-colors line-clamp-2 leading-snug">
                  {language === 'bn' ? item.title : item.titleEn}
                </h4>
                <div className="mt-3 flex items-center gap-1 text-[11px] text-slate-400">
                  <Clock className="w-3 h-3" />
                  <span>{language === 'bn' ? item.publishedTimeAgo : item.publishedTimeAgoEn}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 3-Column Strip: Tech & Startups, Opinions & Editorial, Lifestyle */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Column 1: Tech */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-4">
            <div className="flex items-center gap-2">
              <Laptop className="w-4 h-4 text-red-600" />
              <h3 className="font-bengali font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                {language === 'bn' ? 'তথ্যপ্রযুক্তি' : 'Technology'}
              </h3>
            </div>
            <button
              onClick={() => onSelectCategory('tech')}
              className="text-xs text-red-600 font-semibold hover:underline"
            >
              {language === 'bn' ? 'আরও' : 'More'}
            </button>
          </div>

          {techArticles.length > 0 && (
            <article
              onClick={() => onOpenArticle(techArticles[0])}
              className="group cursor-pointer"
            >
              <div className="aspect-16/10 rounded overflow-hidden relative mb-2.5 bg-slate-100 dark:bg-slate-800">
                <img
                  src={techArticles[0].image}
                  alt={language === 'bn' ? techArticles[0].title : techArticles[0].titleEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                />
              </div>
              <h4 className="font-bengali font-bold text-sm text-slate-900 dark:text-white group-hover:text-red-600 transition-colors line-clamp-2">
                {language === 'bn' ? techArticles[0].title : techArticles[0].titleEn}
              </h4>
              <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                {language === 'bn' ? techArticles[0].summary : techArticles[0].summaryEn}
              </p>
            </article>
          )}
        </div>

        {/* Column 2: Opinion */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-red-600" />
              <h3 className="font-bengali font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                {language === 'bn' ? 'মতামত ও কলাম' : 'Opinions & Columns'}
              </h3>
            </div>
            <button
              onClick={() => onSelectCategory('opinion')}
              className="text-xs text-red-600 font-semibold hover:underline"
            >
              {language === 'bn' ? 'আরও' : 'More'}
            </button>
          </div>

          {opinionArticles.length > 0 ? (
            <article
              onClick={() => onOpenArticle(opinionArticles[0])}
              className="group cursor-pointer"
            >
              <div className="p-3 bg-red-50/50 dark:bg-slate-800/60 rounded-md border border-red-100 dark:border-slate-700/60 mb-3">
                <span className="text-xs font-semibold text-red-600">
                  {language === 'bn' ? opinionArticles[0].author : opinionArticles[0].authorEn}
                </span>
                <p className="text-[11px] text-slate-500">
                  {language === 'bn' ? opinionArticles[0].reporterTitle : opinionArticles[0].reporterTitleEn}
                </p>
              </div>
              <h4 className="font-bengali font-bold text-sm text-slate-900 dark:text-white group-hover:text-red-600 transition-colors line-clamp-2">
                {language === 'bn' ? opinionArticles[0].title : opinionArticles[0].titleEn}
              </h4>
              <p className="mt-1 text-xs text-slate-500 line-clamp-3">
                {language === 'bn' ? opinionArticles[0].summary : opinionArticles[0].summaryEn}
              </p>
            </article>
          ) : null}
        </div>

        {/* Column 3: Lifestyle & Feature */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-4">
            <div className="flex items-center gap-2">
              <Film className="w-4 h-4 text-red-600" />
              <h3 className="font-bengali font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                {language === 'bn' ? 'ফিচার ও বিনোদন' : 'Feature & Lifestyle'}
              </h3>
            </div>
            <button
              onClick={() => onSelectCategory('lifestyle')}
              className="text-xs text-red-600 font-semibold hover:underline"
            >
              {language === 'bn' ? 'আরও' : 'More'}
            </button>
          </div>

          {entertainmentArticles.length > 0 && (
            <article
              onClick={() => onOpenArticle(entertainmentArticles[0])}
              className="group cursor-pointer"
            >
              <div className="aspect-16/10 rounded overflow-hidden relative mb-2.5 bg-slate-100 dark:bg-slate-800">
                <img
                  src={entertainmentArticles[0].image}
                  alt={language === 'bn' ? entertainmentArticles[0].title : entertainmentArticles[0].titleEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                />
              </div>
              <h4 className="font-bengali font-bold text-sm text-slate-900 dark:text-white group-hover:text-red-600 transition-colors line-clamp-2">
                {language === 'bn' ? entertainmentArticles[0].title : entertainmentArticles[0].titleEn}
              </h4>
              <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                {language === 'bn' ? entertainmentArticles[0].summary : entertainmentArticles[0].summaryEn}
              </p>
            </article>
          )}
        </div>

      </div>

    </div>
  );
};
