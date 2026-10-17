import React, { useState } from 'react';
import { Play, Image, Vote, CheckCircle2, ChevronRight, X, Share2 } from 'lucide-react';
import { Article, PollData, INITIAL_POLL } from '../data/newsData';

interface MultimediaSectionProps {
  language: 'bn' | 'en';
  articles: Article[];
  onOpenArticle: (article: Article) => void;
}

export const MultimediaSection: React.FC<MultimediaSectionProps> = ({
  language,
  articles,
  onOpenArticle,
}) => {
  const [poll, setPoll] = useState<PollData>(INITIAL_POLL);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [activeVideoModal, setActiveVideoModal] = useState<Article | null>(null);
  const [activePhotoModal, setActivePhotoModal] = useState<string | null>(null);

  const videoArticles = articles.filter((a) => a.isVideo || a.category === 'video').concat(articles.slice(0, 2)).slice(0, 3);
  const photoStory = articles.find((a) => a.category === 'lifestyle') || articles[4];

  const handleVote = () => {
    if (!selectedOption || hasVoted) return;

    setPoll((prev) => {
      const updatedOptions = prev.options.map((opt) => {
        if (opt.id === selectedOption) {
          return { ...opt, votes: opt.votes + 1 };
        }
        return opt;
      });
      return {
        ...prev,
        options: updatedOptions,
        totalVotes: prev.totalVotes + 1
      };
    });

    setHasVoted(true);
  };

  return (
    <section className="my-12 space-y-8">
      
      {/* 1. Video News Section */}
      <div className="bg-slate-900 rounded-xl p-5 sm:p-6 text-white">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
              <Play className="w-4 h-4 fill-white text-white ml-0.5" />
            </div>
            <div>
              <h3 className="font-bengali font-bold text-lg sm:text-xl text-white">
                {language === 'bn' ? 'ঢাকা পোস্ট ভিডিও' : 'Dhaka Post Video News'}
              </h3>
              <p className="text-xs text-slate-400">
                {language === 'bn' ? 'মাঠপর্যায়ের বিশেষ অনুসন্ধান ও ভিডিও বুলেটিন' : 'Ground investigative reports & daily video bulletins'}
              </p>
            </div>
          </div>
          <button 
            onClick={() => onOpenArticle(videoArticles[0])}
            className="text-xs font-semibold text-red-400 hover:text-red-300 flex items-center gap-1 cursor-pointer"
          >
            <span>{language === 'bn' ? 'সকল ভিডিও' : 'All Videos'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {videoArticles.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideoModal(video)}
              className="group cursor-pointer rounded-lg overflow-hidden bg-slate-800 border border-slate-700 hover:border-red-500 transition-all flex flex-col justify-between"
            >
              <div className="aspect-16/9 relative overflow-hidden bg-black">
                <img
                  src={video.image}
                  alt={language === 'bn' ? video.title : video.titleEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center group-hover:scale-110 shadow-lg transition-transform">
                    <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/80 font-mono text-[11px] font-bold px-2 py-0.5 rounded text-white">
                  {video.videoDuration || '০৩:৪৫'}
                </span>
              </div>

              <div className="p-3.5">
                <h4 className="font-bengali font-bold text-sm text-white group-hover:text-red-400 transition-colors line-clamp-2 leading-snug">
                  {language === 'bn' ? video.title : video.titleEn}
                </h4>
                <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{language === 'bn' ? video.author : video.authorEn}</span>
                  <span>{language === 'bn' ? video.publishedTimeAgo : video.publishedTimeAgoEn}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Photo Feature & Live Poll Grid (Split 7 / 5) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Photo Feature: ছবিতে বাংলাদেশ */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 sm:p-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-4">
            <div className="flex items-center gap-2">
              <Image className="w-5 h-5 text-red-600" />
              <h3 className="font-bengali font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                {language === 'bn' ? 'ছবিতে বাংলাদেশ' : 'In Pictures: Bangladesh'}
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              {language === 'bn' ? 'বিশেষ ফটো অ্যালবাম' : 'Special Photo Album'}
            </span>
          </div>

          <div
            onClick={() => setActivePhotoModal(photoStory.image)}
            className="group cursor-pointer aspect-16/9 rounded-lg overflow-hidden relative shadow-sm"
          >
            <img
              src={photoStory.image}
              alt="Photo Essay"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-6">
              <span className="text-xs font-semibold text-amber-300 mb-1">
                {language === 'bn' ? 'মেঘনা নদী ও লোকজীবন' : 'Meghna River & Pastoral Life'}
              </span>
              <h4 className="text-white font-bengali font-bold text-base sm:text-xl leading-tight">
                {language === 'bn' ? photoStory.title : photoStory.titleEn}
              </h4>
              <p className="text-slate-200 text-xs sm:text-sm mt-1.5 line-clamp-2">
                {language === 'bn' ? photoStory.caption : photoStory.captionEn}
              </p>
            </div>
          </div>
        </div>

        {/* Live Opinion Poll: জনমত জরিপ */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <Vote className="w-5 h-5 text-red-600" />
                <h3 className="font-bengali font-bold text-lg text-slate-900 dark:text-white">
                  {language === 'bn' ? 'অনলাইন জনমত জরিপ' : 'Online Opinion Poll'}
                </h3>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-semibold">
                {language === 'bn' ? 'চলমান' : 'Live'}
              </span>
            </div>

            <p className="font-bengali font-semibold text-sm sm:text-base text-slate-800 dark:text-slate-200 mb-4 leading-snug">
              {language === 'bn' ? poll.question : poll.questionEn}
            </p>

            {/* Poll Options */}
            <div className="space-y-2.5">
              {poll.options.map((opt) => {
                const percent = Math.round((opt.votes / poll.totalVotes) * 100) || 0;
                return (
                  <div
                    key={opt.id}
                    onClick={() => !hasVoted && setSelectedOption(opt.id)}
                    className={`p-3 rounded-lg border transition-all cursor-pointer relative overflow-hidden ${
                      selectedOption === opt.id
                        ? 'border-red-600 bg-red-50/50 dark:bg-red-950/30'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    {/* Progress Bar (visible after voting) */}
                    {hasVoted && (
                      <div
                        className="absolute inset-y-0 left-0 bg-red-100 dark:bg-red-950/60 -z-1 transition-all duration-700"
                        style={{ width: `${percent}%` }}
                      ></div>
                    )}

                    <div className="flex items-center justify-between z-10 relative">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                            selectedOption === opt.id
                              ? 'border-red-600 bg-red-600 text-white'
                              : 'border-slate-400'
                          }`}
                        >
                          {selectedOption === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                          {language === 'bn' ? opt.text : opt.textEn}
                        </span>
                      </div>

                      {hasVoted && (
                        <span className="font-mono text-xs font-bold text-red-600 dark:text-red-400">
                          {percent}%
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-mono">
              {language === 'bn' ? `মোট ভোট: ${poll.totalVotes}` : `Total Votes: ${poll.totalVotes}`}
            </span>

            <button
              onClick={handleVote}
              disabled={!selectedOption || hasVoted}
              className={`px-4 py-1.5 rounded text-xs font-bold transition-all cursor-pointer ${
                hasVoted
                  ? 'bg-emerald-600 text-white cursor-default'
                  : selectedOption
                  ? 'bg-red-600 hover:bg-red-700 text-white shadow-xs'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
              }`}
            >
              {hasVoted 
                ? (language === 'bn' ? 'ভোট সম্পন্ন ✓' : 'Voted ✓') 
                : (language === 'bn' ? 'ভোট দিন' : 'Submit Vote')}
            </button>
          </div>
        </div>

      </div>

      {/* Video Modal */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-xl max-w-3xl w-full overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <h4 className="font-bengali font-bold text-white text-base truncate pr-4">
                {language === 'bn' ? activeVideoModal.title : activeVideoModal.titleEn}
              </h4>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-16/9 bg-black relative flex items-center justify-center">
              <img
                src={activeVideoModal.image}
                alt="Video poster"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center animate-pulse">
                  <Play className="w-8 h-8 fill-white text-white ml-1" />
                </div>
                <p className="text-white text-sm font-medium">
                  {language === 'bn' ? 'ভিডিও প্রতিবেদন প্লে হচ্ছে...' : 'Playing Dhaka Post Video Report...'}
                </p>
              </div>
            </div>

            <div className="p-4 flex items-center justify-between text-xs text-slate-400">
              <span>{language === 'bn' ? activeVideoModal.caption : activeVideoModal.captionEn}</span>
              <button
                onClick={() => {
                  const articleToOpen = activeVideoModal;
                  setActiveVideoModal(null);
                  onOpenArticle(articleToOpen);
                }}
                className="text-red-400 hover:underline font-semibold"
              >
                {language === 'bn' ? 'সম্পূর্ণ প্রতিবেদন পড়ুন' : 'Read Full Story'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Photo Modal */}
      {activePhotoModal && (
        <div 
          onClick={() => setActivePhotoModal(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={activePhotoModal}
              alt="Full view"
              className="rounded-lg max-h-[85vh] w-auto mx-auto object-contain shadow-2xl"
            />
            <button
              onClick={() => setActivePhotoModal(null)}
              className="absolute top-3 right-3 p-2 bg-black/70 hover:bg-black text-white rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
