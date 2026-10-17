import React, { useState } from 'react';
import { MapPin, ChevronRight, Clock, Bookmark, Filter } from 'lucide-react';
import { Article, DIVISIONS, DISTRICTS_BY_DIVISION } from '../data/newsData';

interface DistrictNewsSectionProps {
  language: 'bn' | 'en';
  articles: Article[];
  onOpenArticle: (article: Article) => void;
  onToggleBookmark: (article: Article) => void;
  isBookmarked: (articleId: string) => boolean;
}

export const DistrictNewsSection: React.FC<DistrictNewsSectionProps> = ({
  language,
  articles,
  onOpenArticle,
  onToggleBookmark,
  isBookmarked,
}) => {
  const [selectedDivision, setSelectedDivision] = useState<string>('all');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('all');

  // Available districts for the current division
  const availableDistricts = DISTRICTS_BY_DIVISION[selectedDivision] || DISTRICTS_BY_DIVISION.all;

  // Filter district articles
  const districtArticles = articles.filter((a) => {
    // If division is selected
    if (selectedDivision !== 'all' && a.division !== selectedDivision) {
      return false;
    }
    // If district is selected
    if (selectedDistrict !== 'all' && a.district !== selectedDistrict) {
      return false;
    }
    // Only show district or regional stories
    return a.category === 'district' || a.division !== undefined;
  });

  // Fallback to more articles if empty
  const displayArticles = districtArticles.length > 0 
    ? districtArticles 
    : articles.slice(4, 8);

  const handleDivisionChange = (divId: string) => {
    setSelectedDivision(divId);
    setSelectedDistrict('all');
  };

  return (
    <section className="my-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-5 sm:p-6">
      
      {/* Header with Title & Filter Selectors */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 gap-4">
        
        {/* Title */}
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-6 bg-red-600 rounded-xs"></div>
          <h2 className="text-xl sm:text-2xl font-bold font-bengali text-slate-900 dark:text-white">
            {language === 'bn' ? 'সারাদেশ ও জেলা সংবাদ' : 'District & Regional News'}
          </h2>
        </div>

        {/* Division & District Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mr-1">
            <Filter className="w-3.5 h-3.5 text-red-600" />
            <span>{language === 'bn' ? 'অঞ্চল বাছাই:' : 'Filter Region:'}</span>
          </div>

          {/* Division Selector */}
          <select
            value={selectedDivision}
            onChange={(e) => handleDivisionChange(e.target.value)}
            className="text-xs sm:text-sm font-medium bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md px-3 py-1.5 text-slate-800 dark:text-slate-200 focus:outline-hidden focus:border-red-600 cursor-pointer"
          >
            {DIVISIONS.map((div) => (
              <option key={div.id} value={div.id}>
                {language === 'bn' ? div.name : div.nameEn}
              </option>
            ))}
          </select>

          {/* District Selector */}
          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="text-xs sm:text-sm font-medium bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md px-3 py-1.5 text-slate-800 dark:text-slate-200 focus:outline-hidden focus:border-red-600 cursor-pointer"
          >
            {availableDistricts.map((dist) => (
              <option key={dist.id} value={dist.id}>
                {language === 'bn' ? dist.name : dist.nameEn}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* Horizontal division quick tabs */}
      <div className="flex items-center gap-1.5 py-3 overflow-x-auto no-scrollbar border-b border-slate-100 dark:border-slate-800/80 mb-6">
        {DIVISIONS.map((div) => (
          <button
            key={div.id}
            onClick={() => handleDivisionChange(div.id)}
            className={`px-3 py-1 rounded text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
              selectedDivision === div.id
                ? 'bg-red-600 text-white font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {language === 'bn' ? div.name : div.nameEn}
          </button>
        ))}
      </div>

      {/* District News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {displayArticles.map((article) => (
          <article
            key={article.id}
            onClick={() => onOpenArticle(article)}
            className="group cursor-pointer flex flex-col justify-between rounded-lg overflow-hidden border border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all hover:shadow-sm"
          >
            <div>
              <div className="aspect-16/10 overflow-hidden relative bg-slate-100 dark:bg-slate-800">
                <img
                  src={article.image}
                  alt={language === 'bn' ? article.title : article.titleEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/75 backdrop-blur-xs text-white text-[11px] font-semibold px-2 py-0.5 rounded">
                  <MapPin className="w-3 h-3 text-red-400" />
                  <span>{language === 'bn' ? (article.district || article.location) : (article.districtEn || article.locationEn)}</span>
                </div>
              </div>

              <div className="p-3.5">
                <h3 className="font-bengali font-bold text-sm sm:text-base text-slate-900 dark:text-white line-clamp-2 group-hover:text-red-600 transition-colors leading-snug">
                  {language === 'bn' ? article.title : article.titleEn}
                </h3>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {language === 'bn' ? article.summary : article.summaryEn}
                </p>
              </div>
            </div>

            <div className="px-3.5 pb-3.5 pt-1 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{language === 'bn' ? article.publishedTimeAgo : article.publishedTimeAgoEn}</span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleBookmark(article);
                }}
                className="p-1 hover:text-red-600 transition-colors"
                aria-label="Bookmark"
              >
                <Bookmark className="w-3.5 h-3.5" fill={isBookmarked(article.id) ? 'currentColor' : 'none'} />
              </button>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
};
