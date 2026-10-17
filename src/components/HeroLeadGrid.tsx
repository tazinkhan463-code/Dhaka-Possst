import React, { useState } from 'react';
import { Clock, Bookmark, Share2, Flame, Eye, ChevronRight } from 'lucide-react';
import { Article } from '../data/newsData';

interface HeroLeadGridProps {
  language: 'bn' | 'en';
  articles: Article[];
  onOpenArticle: (article: Article) => void;
  onToggleBookmark: (article: Article) => void;
  isBookmarked: (articleId: string) => boolean;
}

export const HeroLeadGrid: React.FC<HeroLeadGridProps> = ({
  language,
  articles,
  onOpenArticle,
  onToggleBookmark,
  isBookmarked,
}) => {
  const [sidebarTab, setSidebarTab] = useState<'latest' | 'popular'>('latest');

  // Identify lead article
  const leadArticle = articles.find((a) => a.isLead) || articles[0];
  // Sub-leads (next 3 articles)
  const subLeads = articles.filter((a) => a.id !== leadArticle?.id).slice(0, 3);
  
  // Latest articles (sorted by recency)
  const latestArticles = [...articles].slice(0, 5);
  // Popular / Most read
  const mostReadArticles = [...articles].filter((a) => a.isMostRead).slice(0, 5);
  const activeSidebarList = sidebarTab === 'latest' ? latestArticles : (mostReadArticles.length > 0 ? mostReadArticles : latestArticles);

  if (!leadArticle) return null;

  return (
    <div className="py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Main Column: Lead Story (7 cols on lg) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <article 
            className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md"
            onClick={() => onOpenArticle(leadArticle)}
          >
            {/* Lead Image */}
            <div className="relative aspect-16/9 overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img
                src={leadArticle.image}
                alt={language === 'bn' ? leadArticle.title : leadArticle.titleEn}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded shadow-sm">
                  {language === 'bn' ? leadArticle.categoryLabel : leadArticle.categoryLabelEn}
                </span>
              </div>
            </div>

            {/* Lead Content */}
            <div className="p-5 sm:p-6">
              <h1 className="text-2xl sm:text-3xl font-bold font-bengali text-slate-900 dark:text-white leading-tight group-hover:text-red-600 transition-colors">
                {language === 'bn' ? leadArticle.title : leadArticle.titleEn}
              </h1>

              <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-3">
                {language === 'bn' ? leadArticle.summary : leadArticle.summaryEn}
              </p>

              {/* Lead Metadata */}
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {language === 'bn' ? leadArticle.author : leadArticle.authorEn}
                  </span>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{language === 'bn' ? leadArticle.publishedTimeAgo : leadArticle.publishedTimeAgoEn}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleBookmark(leadArticle);
                    }}
                    className={`p-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${
                      isBookmarked(leadArticle.id) ? 'text-red-600' : 'text-slate-400 hover:text-red-600'
                    }`}
                    title="Bookmark story"
                    aria-label="Bookmark story"
                  >
                    <Bookmark className="w-4 h-4" fill={isBookmarked(leadArticle.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Middle Column: 2nd Tier Sub-Leads (2 cols or 3 cols on lg) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          {/* Sub-leads list */}
          <div className="space-y-4">
            {subLeads.map((article) => (
              <article
                key={article.id}
                onClick={() => onOpenArticle(article)}
                className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3.5 flex gap-3.5 transition-all duration-200 hover:shadow-sm hover:border-slate-300 dark:hover:border-slate-700"
              >
                <div className="w-28 sm:w-32 aspect-4/3 rounded overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-800 relative">
                  <img
                    src={article.image}
                    alt={language === 'bn' ? article.title : article.titleEn}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute bottom-1 left-1 bg-black/70 text-white text-[10px] font-medium px-1.5 py-0.5 rounded">
                    {language === 'bn' ? article.categoryLabel : article.categoryLabelEn}
                  </span>
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <h3 className="font-bengali font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug line-clamp-2 group-hover:text-red-600 transition-colors">
                    {language === 'bn' ? article.title : article.titleEn}
                  </h3>

                  <div className="mt-2 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{language === 'bn' ? article.publishedTimeAgo : article.publishedTimeAgoEn}</span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleBookmark(article);
                      }}
                      className="p-1 text-slate-400 hover:text-red-600"
                      aria-label="Bookmark"
                    >
                      <Bookmark className="w-3.5 h-3.5" fill={isBookmarked(article.id) ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Special Highlights Bar */}
          <div className="p-3.5 rounded-lg bg-linear-to-r from-red-600 to-rose-700 text-white flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-300 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-rose-100">
                  {language === 'bn' ? 'বিশেষ ধারাবাহিক প্রতিবেদন' : 'Dhaka Post Special Report'}
                </p>
                <p className="text-sm font-bold">
                  {language === 'bn' ? 'স্মার্ট বাংলাদেশের নতুন অর্থনৈতিক দিগন্ত' : 'New Economic Horizons of Smart Bangladesh'}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                const techArticle = articles.find((a) => a.category === 'tech') || articles[0];
                onOpenArticle(techArticle);
              }}
              className="px-2.5 py-1 bg-white/20 hover:bg-white/30 rounded text-xs font-medium backdrop-blur-xs transition-colors shrink-0"
            >
              {language === 'bn' ? 'পড়ুন' : 'Read'}
            </button>
          </div>

        </div>

      </div>

      {/* Row 2: "সর্বশেষ" (Latest) and "সর্বাধিক পঠিত" (Most Read) Horizontal Section */}
      <div className="mt-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 sm:p-5">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-4">
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setSidebarTab('latest')}
              className={`px-3 py-1.5 rounded-md text-sm font-bold transition-all cursor-pointer ${
                sidebarTab === 'latest'
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {language === 'bn' ? 'সর্বশেষ সংবাদ' : 'Latest News'}
            </button>
            <button
              onClick={() => setSidebarTab('popular')}
              className={`px-3 py-1.5 rounded-md text-sm font-bold transition-all cursor-pointer ${
                sidebarTab === 'popular'
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {language === 'bn' ? 'সর্বাধিক পঠিত' : 'Most Read'}
            </button>
          </div>

          <div className="text-xs text-slate-500 font-medium hidden sm:flex items-center gap-1">
            <span>{language === 'bn' ? 'প্রতি মিনিটে আপডেট' : 'Updated round the clock'}</span>
          </div>
        </div>

        {/* 5-Column Responsive Ranking Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {activeSidebarList.map((item, index) => (
            <article
              key={item.id}
              onClick={() => onOpenArticle(item)}
              className="group cursor-pointer p-2.5 rounded hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 text-red-600 font-bold text-xs flex items-center justify-center font-mono">
                    {index + 1}
                  </span>
                  <span className="text-[11px] text-red-600 font-medium">
                    {language === 'bn' ? item.categoryLabel : item.categoryLabelEn}
                  </span>
                </div>
                
                <h4 className="font-bengali font-semibold text-sm text-slate-800 dark:text-slate-200 line-clamp-3 group-hover:text-red-600 transition-colors leading-snug">
                  {language === 'bn' ? item.title : item.titleEn}
                </h4>
              </div>

              <div className="mt-3 flex items-center gap-1 text-[11px] text-slate-400">
                <Clock className="w-3 h-3" />
                <span>{language === 'bn' ? item.publishedTimeAgo : item.publishedTimeAgoEn}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

    </div>
  );
};
