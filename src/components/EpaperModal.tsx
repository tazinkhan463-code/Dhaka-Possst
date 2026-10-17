import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download, Calendar, ZoomIn, ZoomOut, Newspaper } from 'lucide-react';
import { EPAPER_PAGES } from '../data/newsData';

interface EpaperModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'bn' | 'en';
}

export const EpaperModal: React.FC<EpaperModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDate, setSelectedDate] = useState('2026-10-17');
  const [zoomLevel, setZoomLevel] = useState(100);

  if (!isOpen) return null;

  const totalPages = EPAPER_PAGES.length;

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-xl max-w-5xl w-full h-[90vh] flex flex-col overflow-hidden shadow-2xl text-white">
        
        {/* Top Control Bar */}
        <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
          
          {/* Brand & Edition */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center font-bold font-bengali text-lg">
              ঢা
            </div>
            <div>
              <h3 className="font-bengali font-bold text-sm sm:text-base">
                {language === 'bn' ? 'ঢাকা পোস্ট ই-পেপার' : 'Dhaka Post E-Paper'}
              </h3>
              <p className="text-[11px] text-slate-400">
                {language === 'bn' ? 'মুদ্রিত পত্রিকার অবিকল ডিজিটাল সংস্করণ' : 'Authentic Printed Replica Digital Edition'}
              </p>
            </div>
          </div>

          {/* Date Picker & Page Nav */}
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            {/* Date */}
            <div className="flex items-center gap-1.5 bg-slate-800 px-2.5 py-1 rounded text-xs">
              <Calendar className="w-3.5 h-3.5 text-red-500" />
              <input 
                type="date" 
                value={selectedDate} 
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bg-transparent text-white text-xs focus:outline-hidden cursor-pointer"
              />
            </div>

            {/* Page navigation */}
            <div className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded text-xs">
              <button 
                onClick={handlePrev} 
                disabled={currentPage === 1}
                className="p-0.5 hover:text-red-400 disabled:opacity-40"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-mono px-1 font-semibold">
                {language === 'bn' ? `পৃষ্ঠা ${currentPage}/${totalPages}` : `Page ${currentPage}/${totalPages}`}
              </span>
              <button 
                onClick={handleNext} 
                disabled={currentPage === totalPages}
                className="p-0.5 hover:text-red-400 disabled:opacity-40"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center gap-1 bg-slate-800 px-2 py-1 rounded text-xs">
              <button
                onClick={() => setZoomLevel((z) => Math.max(z - 15, 80))}
                className="p-0.5 hover:text-red-400"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono text-[11px] px-1">{zoomLevel}%</span>
              <button
                onClick={() => setZoomLevel((z) => Math.min(z + 15, 140))}
                className="p-0.5 hover:text-red-400"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Paper Viewer Area */}
        <div className="flex-1 overflow-auto bg-slate-950 p-4 sm:p-6 flex justify-center">
          <div 
            className="bg-white text-slate-900 rounded shadow-2xl p-6 sm:p-8 max-w-3xl w-full transition-transform duration-200"
            style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
          >
            {/* Broadsheet Masthead */}
            <div className="border-b-2 border-black pb-3 mb-4 text-center">
              <div className="flex justify-between items-center text-[10px] text-slate-600 border-b border-slate-300 pb-1 mb-2">
                <span>রেজিস্টার্ড নং ডিএ-৭৭৩</span>
                <span>ঢাকা, শনিবার, ১৭ অক্টোবর ২০২৬ | ১ কার্তিক ১৪৩৩</span>
                <span>মূল্য: ৮ টাকা</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black font-bengali-serif tracking-tight text-red-600">
                ঢাকা পোস্ট
              </h1>
              <p className="text-xs uppercase font-serif tracking-widest text-slate-700 mt-1">
                DHAKA POST • DAILY BANGLADESH BROADSHEET
              </p>
            </div>

            {/* Page Header Bar */}
            <div className="bg-slate-100 p-2 text-xs font-bold font-bengali flex justify-between border-b border-slate-300 mb-4">
              <span>{EPAPER_PAGES[currentPage - 1].title}</span>
              <span className="font-mono">{selectedDate}</span>
            </div>

            {/* Newspaper 3-column front mockup */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-slate-800">
              
              {/* Left Column: Big Lead Story */}
              <div className="md:col-span-8 border-r border-slate-200 pr-4">
                <span className="text-xs font-bold text-red-600 block mb-1">
                  {language === 'bn' ? 'প্রধান প্রতিবেদন' : 'Lead Headline'}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-bengali leading-snug mb-2">
                  মেট্রোরেলের কমলাপুর অংশে ট্রায়াল রান সফল: বাণিজ্যিক যাত্রা আগামী মাসেই
                </h2>
                <div className="aspect-16/9 bg-slate-200 rounded mb-3 overflow-hidden">
                  <img
                    src="/src/assets/images/hero_dhaka_lead_1792210132571.jpg"
                    alt="Epaper lead"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="columns-2 gap-4 text-xs leading-relaxed text-slate-700 text-justify">
                  <p className="mb-2">
                    রাজধানীর উত্তরা থেকে মতিঝিল হয়ে কমলাপুর পর্যন্ত দ্রুতগতির নিরবচ্ছিন্ন ট্রানজিট রাজধানী ঢাকার যোগাযোগ মানচিত্রে এক ঐতিহাসিক রূপান্তর আনতে যাচ্ছে। ডিএমটিসিএল কর্তৃপক্ষ নিশ্চিত করেছে যে ট্রায়াল রান সফল হয়েছে।
                  </p>
                  <p>
                    রেলওয়ের কেন্দ্রীয় স্টেশনের সঙ্গে মেট্রোরেলের ইন্টারচেঞ্জ প্রতিষ্ঠিত হওয়ায় দেশের ৬৪ জেলা থেকে ট্রেনে আসা সাধারণ যাত্রীরা মাত্র কয়েক মিনিটের মধ্যে গুলশান, মিরপুর কিংবা উত্তরায় পৌঁছে যাবেন।
                  </p>
                </div>
              </div>

              {/* Right Column: Side Columns */}
              <div className="md:col-span-4 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    অর্থনীতি ও বাণিজ্য
                  </span>
                  <h3 className="font-bengali font-bold text-sm leading-snug">
                    রেকর্ড পরিমাণ রেমিট্যান্স প্রবাহ: বৈদেশিক মুদ্রার রিজার্ভে ইতিবাচক ধারা
                  </h3>
                  <p className="text-[11px] text-slate-600 mt-1 line-clamp-3">
                    বৈধ চ্যানেলে প্রণোদনা বৃদ্ধির সুবাদে প্রবাসী আয়ে বড় ধরনের উল্লম্ফন দেখা গেছে।
                  </p>
                </div>

                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    খেলাধুলা
                  </span>
                  <h3 className="font-bengali font-bold text-sm leading-snug">
                    মিরপুর টেস্টে শান্ত-হৃদয়ের সেঞ্চুরি জুটি: জয়ের পথে টাইগাররা
                  </h3>
                </div>

                <div className="p-3 bg-red-50 rounded border border-red-200 text-center">
                  <p className="text-xs font-bold text-red-700">ডিজিটাল সংস্করণ ডাউনলোড</p>
                  <p className="text-[10px] text-slate-600 mt-0.5">সম্পূর্ণ ৮ পাতার পেপার সংগ্রহ করুন</p>
                  <button 
                    onClick={() => alert(language === 'bn' ? 'পিডিএফ ডাউনলোড শুরু হচ্ছে...' : 'Starting PDF download...')}
                    className="mt-2 w-full py-1 bg-red-600 hover:bg-red-700 text-white rounded text-xs font-semibold flex items-center justify-center gap-1"
                  >
                    <Download className="w-3 h-3" />
                    <span>PDF ডাউনলোড</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Footer Page Bar */}
        <div className="bg-slate-950 px-4 py-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>{language === 'bn' ? 'ঢাকা পোস্ট মিডিয়া লিমিটেড কর্তৃক সর্বস্বত্ব সংরক্ষিত' : 'All rights reserved by Dhaka Post Media Ltd.'}</span>
          <div className="flex items-center gap-2">
            {EPAPER_PAGES.map((p) => (
              <button
                key={p.page}
                onClick={() => setCurrentPage(p.page)}
                className={`w-6 h-6 rounded flex items-center justify-center font-mono text-xs transition-colors ${
                  currentPage === p.page ? 'bg-red-600 text-white font-bold' : 'bg-slate-800 hover:bg-slate-700'
                }`}
              >
                {p.page}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
