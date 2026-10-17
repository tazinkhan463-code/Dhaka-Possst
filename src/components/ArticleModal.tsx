import React, { useState, useEffect } from 'react';
import { 
  X, Clock, Bookmark, Share2, Volume2, VolumeX, 
  ZoomIn, ZoomOut, Check, MessageSquare, ThumbsUp, 
  Send, MapPin, Tag, ChevronRight, User
} from 'lucide-react';
import { Article } from '../data/newsData';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  language: 'bn' | 'en';
  onToggleBookmark: (article: Article) => void;
  isBookmarked: boolean;
  relatedArticles: Article[];
  onSelectArticle: (article: Article) => void;
}

interface Comment {
  id: string;
  author: string;
  text: string;
  time: string;
  likes: number;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  language,
  onToggleBookmark,
  isBookmarked,
  relatedArticles,
  onSelectArticle,
}) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 'c1',
      author: 'তানভীর আহমেদ',
      text: 'মেট্রোরেলের এই রুটটি চালু হলে মতিঝিল ও পুরান ঢাকার মানুষের ভোগান্তি অনেক কমে যাবে। দারুণ খবর!',
      time: '২০ মিনিট আগে',
      likes: 14
    },
    {
      id: 'c2',
      author: 'ড. রফিকুল ইসলাম',
      text: 'সঠিক সময়ে কাজ শেষ করা এবং নিরাপত্তা মান বজায় রাখাই এখন বড় চ্যালেঞ্জ। শুভকামনা।',
      time: '১ ঘণ্টা আগে',
      likes: 8
    }
  ]);
  const [newCommentText, setNewCommentText] = useState('');
  const [newCommentName, setNewCommentName] = useState('');

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Audio Speech Reader using window.speechSynthesis
  const toggleSpeech = () => {
    if (!('speechSynthesis' in window) || !article) return;

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    const textToRead = language === 'bn' 
      ? `${article.title}. ${article.summary}.` 
      : `${article.titleEn}. ${article.summaryEn}.`;

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = language === 'bn' ? 'bn-BD' : 'en-US';
    utterance.rate = 0.95;

    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newComment: Comment = {
      id: `c_${Date.now()}`,
      author: newCommentName.trim() || (language === 'bn' ? 'পাঠক' : 'Anonymous Reader'),
      text: newCommentText.trim(),
      time: language === 'bn' ? 'এইমাত্র' : 'Just now',
      likes: 1
    };

    setComments([newComment, ...comments]);
    setNewCommentText('');
  };

  const handleLikeComment = (commentId: string) => {
    setComments((prev) =>
      prev.map((c) => (c.id === commentId ? { ...c, likes: c.likes + 1 } : c))
    );
  };

  if (!article) return null;

  const fontClass = 
    fontSize === 'large' ? 'text-lg sm:text-xl leading-relaxed sm:leading-loose' :
    fontSize === 'xlarge' ? 'text-xl sm:text-2xl leading-loose' :
    'text-base sm:text-lg leading-relaxed';

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-center overflow-y-auto p-2 sm:p-4 md:p-6 animate-in fade-in duration-150">
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl max-w-4xl w-full my-auto overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Action Header */}
        <div className="sticky top-0 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-red-600 text-white text-xs font-bold px-2.5 py-0.5 rounded">
              {language === 'bn' ? article.categoryLabel : article.categoryLabelEn}
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">
              {language === 'bn' ? article.readTime : article.readTimeEn}
            </span>
          </div>

          {/* Controls: Audio Reader, Font Sizer, Bookmark, Share, Close */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio Reader */}
            <button
              onClick={toggleSpeech}
              className={`p-1.5 rounded-md flex items-center gap-1 text-xs font-medium transition-colors cursor-pointer ${
                isPlayingAudio 
                  ? 'bg-red-600 text-white' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-red-600'
              }`}
              title={isPlayingAudio ? 'অডিও বন্ধ করুন' : 'সংবাদ শুনুন'}
            >
              {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span className="hidden sm:inline">
                {isPlayingAudio 
                  ? (language === 'bn' ? 'থামান' : 'Stop') 
                  : (language === 'bn' ? 'শুনুন' : 'Listen')}
              </span>
            </button>

            {/* Font Size Selector */}
            <div className="hidden sm:flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-0.5 rounded-md text-xs">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-1 rounded transition-colors ${fontSize === 'normal' ? 'bg-white dark:bg-slate-700 font-bold text-slate-900 dark:text-white shadow-xs' : 'text-slate-500'}`}
                title="সাধারণ ফন্ট"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-1 rounded transition-colors ${fontSize === 'large' ? 'bg-white dark:bg-slate-700 font-bold text-slate-900 dark:text-white shadow-xs' : 'text-slate-500'}`}
                title="বড় ফন্ট"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-2 py-1 rounded transition-colors ${fontSize === 'xlarge' ? 'bg-white dark:bg-slate-700 font-bold text-slate-900 dark:text-white shadow-xs' : 'text-slate-500'}`}
                title="অনেক বড় ফন্ট"
              >
                A++
              </button>
            </div>

            {/* Bookmark */}
            <button
              onClick={() => onToggleBookmark(article)}
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                isBookmarked 
                  ? 'text-red-600 bg-red-50 dark:bg-red-950/40' 
                  : 'text-slate-500 hover:text-red-600 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              title="সংরক্ষণ করুন"
            >
              <Bookmark className="w-4 h-4" fill={isBookmarked ? 'currentColor' : 'none'} />
            </button>

            {/* Share link */}
            <button
              onClick={handleCopyLink}
              className="p-1.5 rounded-md text-slate-500 hover:text-red-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative cursor-pointer"
              title="শেয়ার করুন"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="p-4 sm:p-8 max-h-[80vh] overflow-y-auto">
          
          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-bengali text-slate-900 dark:text-white leading-tight">
            {language === 'bn' ? article.title : article.titleEn}
          </h1>

          {/* Subtitle / Lead Deck */}
          <p className="mt-3 sm:mt-4 text-base sm:text-lg font-medium text-slate-600 dark:text-slate-300 leading-relaxed border-l-3 border-red-600 pl-4 py-0.5">
            {language === 'bn' ? article.summary : article.summaryEn}
          </p>

          {/* Byline & Timestamps */}
          <div className="my-5 py-3 border-y border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-y-2 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">
                  {language === 'bn' ? article.author : article.authorEn}
                </p>
                <p className="text-[11px] text-slate-500">
                  {language === 'bn' ? article.reporterTitle : article.reporterTitleEn}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-red-600" />
                <span>{language === 'bn' ? article.location : article.locationEn}</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.publishedAt}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 mb-6">
            <img
              src={article.image}
              alt={language === 'bn' ? article.title : article.titleEn}
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[500px] object-cover"
            />
            {article.caption && (
              <p className="p-2.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/80 italic">
                {language === 'bn' ? article.caption : article.captionEn}
              </p>
            )}
          </div>

          {/* Narrative Body */}
          <div className={`font-bengali text-slate-800 dark:text-slate-200 space-y-4 whitespace-pre-line ${fontClass}`}>
            {language === 'bn' ? article.content : article.contentEn}
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-slate-400 flex items-center gap-1 font-semibold">
                  <Tag className="w-3 h-3" />
                  {language === 'bn' ? 'ট্যাগ:' : 'Tags:'}
                </span>
                {article.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Social Share Bar */}
          <div className="my-8 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg flex items-center justify-between flex-wrap gap-3">
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              {language === 'bn' ? 'প্রতিবেদনটি বন্ধুদের সাথে শেয়ার করুন:' : 'Share this story with your friends:'}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors"
              >
                Facebook
              </button>
              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded bg-sky-500 text-white text-xs font-bold hover:bg-sky-600 transition-colors"
              >
                X (Twitter)
              </button>
              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors"
              >
                WhatsApp
              </button>
            </div>
          </div>

          {/* Related Articles Strip */}
          {relatedArticles.length > 0 && (
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h3 className="font-bengali font-bold text-lg text-slate-900 dark:text-white mb-4">
                {language === 'bn' ? 'আরও পড়ুন' : 'Related Stories'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedArticles.slice(0, 3).map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectArticle(rel)}
                    className="group cursor-pointer p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-red-500 transition-colors"
                  >
                    <div className="aspect-16/10 rounded overflow-hidden mb-2 bg-slate-100 dark:bg-slate-800">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h4 className="font-bengali font-bold text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-red-600 transition-colors line-clamp-2">
                      {language === 'bn' ? rel.title : rel.titleEn}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Comments Section */}
          <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5 text-red-600" />
              <h3 className="font-bengali font-bold text-lg text-slate-900 dark:text-white">
                {language === 'bn' ? `মন্তব্য (${comments.length})` : `Comments (${comments.length})`}
              </h3>
            </div>

            {/* Comment Form */}
            <form onSubmit={handleAddComment} className="mb-6 space-y-3">
              <input
                type="text"
                placeholder={language === 'bn' ? 'আপনার নাম (ঐচ্ছিক)' : 'Your Name (optional)'}
                value={newCommentName}
                onChange={(e) => setNewCommentName(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-red-600"
              />
              <textarea
                placeholder={language === 'bn' ? 'এই প্রতিবেদনের ওপর আপনার গঠনমূলক মতামত লিখুন...' : 'Write your comment on this story...'}
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                rows={3}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-red-600"
                required
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 text-white rounded-md text-xs sm:text-sm font-bold hover:bg-red-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{language === 'bn' ? 'মন্তব্য প্রকাশ করুন' : 'Submit Comment'}</span>
                </button>
              </div>
            </form>

            {/* Existing Comments */}
            <div className="space-y-3">
              {comments.map((comm) => (
                <div 
                  key={comm.id}
                  className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-xs text-slate-800 dark:text-slate-200">
                      {comm.author}
                    </span>
                    <span className="text-[11px] text-slate-400">{comm.time}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-normal">
                    {comm.text}
                  </p>
                  <div className="mt-2 flex items-center justify-end">
                    <button
                      onClick={() => handleLikeComment(comm.id)}
                      className="flex items-center gap-1 text-[11px] text-slate-500 hover:text-red-600 transition-colors cursor-pointer"
                    >
                      <ThumbsUp className="w-3 h-3" />
                      <span>{comm.likes}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
