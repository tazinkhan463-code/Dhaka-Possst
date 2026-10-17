import React, { useState } from 'react';
import { X, Search, Clock, Tag } from 'lucide-react';
import { Article } from '../data/newsData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'bn' | 'en';
  articles: Article[];
  onOpenArticle: (article: Article) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  language,
  articles,
  onOpenArticle,
}) => {
  const [query, setQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  if (!isOpen) return null;

  const popularTags = ['মেট্রোরেল', 'নির্বাচন', 'ক্রিকেট', 'রেমিট্যান্স', 'কক্সবাজার', 'বিনিয়োগ', 'আবহাওয়া'];

  const filteredArticles = articles.filter((a) => {
    const q = query.toLowerCase().trim();
    if (selectedTag) {
      if (!a.tags.includes(selectedTag)) return false;
    }
    if (!q) return true;
    return (
      a.title.toLowerCase().includes(q) ||
      a.titleEn.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.author.toLowerCase().includes(q) ||
      a.categoryLabel.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center p-4 pt-16 sm:pt-24">
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Search input field */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-red-600 shrink-0" />
          <input
            type="text"
            placeholder={language === 'bn' ? 'সংবাদ, বিষয়বস্তু বা কীওয়ার্ড খুঁজুন...' : 'Search articles, topics or keywords...'}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full text-sm sm:text-base bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Popular Tags */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-xs text-slate-400 font-semibold shrink-0">
            {language === 'bn' ? 'জনপ্রিয় বিষয়:' : 'Trending:'}
          </span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`text-xs px-2.5 py-1 rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                selectedTag === tag
                  ? 'bg-red-600 text-white font-semibold'
                  : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-red-400'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span>
              {language === 'bn' ? `ফলাফল পাওয়া গেছে: ${filteredArticles.length}টি` : `Found: ${filteredArticles.length} articles`}
            </span>
            {selectedTag && (
              <button 
                onClick={() => setSelectedTag(null)}
                className="text-red-600 hover:underline font-semibold"
              >
                {language === 'bn' ? 'ট্যাগ ফিল্টার সরান' : 'Clear tag filter'}
              </button>
            )}
          </div>

          {filteredArticles.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <p className="text-sm">
                {language === 'bn' ? 'কোনো ফলাফল পাওয়া যায়নি' : 'No matching articles found'}
              </p>
            </div>
          ) : (
            filteredArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => {
                  onClose();
                  onOpenArticle(article);
                }}
                className="group cursor-pointer p-3 rounded-lg border border-slate-100 dark:border-slate-800 hover:border-red-400 dark:hover:border-red-500 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all flex gap-3 items-center"
              >
                <div className="w-20 aspect-4/3 rounded overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-800">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-red-600 font-bold block mb-0.5">
                    {language === 'bn' ? article.categoryLabel : article.categoryLabelEn}
                  </span>
                  <h4 className="font-bengali font-bold text-xs sm:text-sm text-slate-900 dark:text-white line-clamp-2 group-hover:text-red-600 transition-colors">
                    {language === 'bn' ? article.title : article.titleEn}
                  </h4>
                  <div className="mt-1 flex items-center gap-2 text-[11px] text-slate-400">
                    <span>{language === 'bn' ? article.author : article.authorEn}</span>
                    <span>·</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{language === 'bn' ? article.publishedTimeAgo : article.publishedTimeAgoEn}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
