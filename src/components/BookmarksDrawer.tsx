import React from 'react';
import { X, Bookmark, Trash2, Clock, ChevronRight } from 'lucide-react';
import { Article } from '../data/newsData';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'bn' | 'en';
  bookmarkedArticles: Article[];
  onOpenArticle: (article: Article) => void;
  onRemoveBookmark: (articleId: string) => void;
  onClearAll: () => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  language,
  bookmarkedArticles,
  onOpenArticle,
  onRemoveBookmark,
  onClearAll,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-md h-full flex flex-col shadow-2xl border-l border-slate-200 dark:border-slate-800 animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-red-600 fill-red-600" />
            <h3 className="font-bengali font-bold text-base text-slate-900 dark:text-white">
              {language === 'bn' ? `সংরক্ষিত সংবাদ (${bookmarkedArticles.length})` : `Saved Articles (${bookmarkedArticles.length})`}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {bookmarkedArticles.length === 0 ? (
            <div className="py-16 text-center text-slate-400">
              <Bookmark className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p className="text-sm font-medium">
                {language === 'bn' ? 'কোনো সংবাদ সংরক্ষিত নেই' : 'No saved articles yet'}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                {language === 'bn' ? 'যেকোনো সংবাদের বুকমার্ক আইকনে ক্লিক করে সংরক্ষণ করুন' : 'Click the bookmark icon on any article to save for later'}
              </p>
            </div>
          ) : (
            bookmarkedArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => {
                  onClose();
                  onOpenArticle(article);
                }}
                className="group cursor-pointer p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-red-500 dark:hover:border-red-500 transition-all flex gap-3 items-center justify-between"
              >
                <div className="w-16 h-16 rounded overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-800">
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
                  <h4 className="font-bengali font-bold text-xs sm:text-sm text-slate-900 dark:text-white line-clamp-2 leading-tight group-hover:text-red-600">
                    {language === 'bn' ? article.title : article.titleEn}
                  </h4>
                  <div className="mt-1 flex items-center gap-1 text-[10px] text-slate-400">
                    <Clock className="w-3 h-3" />
                    <span>{language === 'bn' ? article.publishedTimeAgo : article.publishedTimeAgoEn}</span>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveBookmark(article.id);
                  }}
                  className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"
                  title="Remove"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {bookmarkedArticles.length > 0 && (
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <button
              onClick={onClearAll}
              className="text-xs text-red-600 font-bold hover:underline"
            >
              {language === 'bn' ? 'সব মুছে ফেলুন' : 'Clear All'}
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-xs font-semibold rounded text-slate-700 dark:text-slate-300"
            >
              {language === 'bn' ? 'বন্ধ করুন' : 'Close'}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
