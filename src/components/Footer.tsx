import React from 'react';
import { Smartphone, Mail, Phone, MapPin, Globe, ChevronRight } from 'lucide-react';

interface FooterProps {
  language: 'bn' | 'en';
  onSelectCategory: (category: string) => void;
  onOpenEpaper: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onSelectCategory,
  onOpenEpaper,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs mt-16 transition-colors">
      
      {/* Top Banner with Brand and App download badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-slate-800/80">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold text-2xl font-bengali-serif">
              ঢা
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-white font-bengali">
                  {language === 'bn' ? 'ঢাকা' : 'DHAKA'}
                </span>
                <span className="text-2xl font-black text-red-600 font-bengali">
                  {language === 'bn' ? 'পোস্ট' : 'POST'}
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                {language === 'bn' ? 'সত্যের সাথে ২৪ ঘণ্টা • বস্তুনিষ্ঠ সাংবাদিকতায় আপসহীন' : '24/7 Truth • Uncompromising Objective Journalism'}
              </p>
            </div>
          </div>

          {/* Apps and E-paper buttons */}
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={onOpenEpaper}
              className="px-4 py-2 rounded bg-slate-900 border border-slate-700 text-white font-medium hover:border-red-500 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>{language === 'bn' ? 'ই-পেপার পড়ুন' : 'Read E-Paper'}</span>
            </button>

            <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded px-3 py-1.5">
              <Smartphone className="w-4 h-4 text-red-500" />
              <div>
                <p className="text-[10px] text-slate-500">{language === 'bn' ? 'মোবাইল অ্যাপ' : 'Mobile App'}</p>
                <p className="text-xs font-semibold text-white">Google Play & App Store</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Links & Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          {/* Column 1: News Categories */}
          <div>
            <h4 className="text-white font-bold text-sm font-bengali mb-3 pb-1 border-b border-slate-800">
              {language === 'bn' ? 'সংবাদ বিভাগ' : 'News Sections'}
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onSelectCategory('national')} className="hover:text-red-500 transition-colors">
                  {language === 'bn' ? 'জাতীয় সংবাদ' : 'National News'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('politics')} className="hover:text-red-500 transition-colors">
                  {language === 'bn' ? 'রাজনীতি ও নির্বাচন' : 'Politics & Elections'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('economy')} className="hover:text-red-500 transition-colors">
                  {language === 'bn' ? 'অর্থনীতি ও বাণিজ্য' : 'Economy & Business'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('international')} className="hover:text-red-500 transition-colors">
                  {language === 'bn' ? 'আন্তর্জাতিক সংবাদ' : 'International News'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('sports')} className="hover:text-red-500 transition-colors">
                  {language === 'bn' ? 'খেলাধুলা ও ক্রিকেট' : 'Sports & Cricket'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Regional & Lifestyle */}
          <div>
            <h4 className="text-white font-bold text-sm font-bengali mb-3 pb-1 border-b border-slate-800">
              {language === 'bn' ? 'সারাদেশ ও জীবনযাপন' : 'Districts & Life'}
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onSelectCategory('district')} className="hover:text-red-500 transition-colors">
                  {language === 'bn' ? '৬৪ জেলার খবর' : '64 District News'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('lifestyle')} className="hover:text-red-500 transition-colors">
                  {language === 'bn' ? 'জীবনধারা ও ফ্যাশন' : 'Lifestyle & Trends'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('tech')} className="hover:text-red-500 transition-colors">
                  {language === 'bn' ? 'তথ্যপ্রযুক্তি ও স্টার্টআপ' : 'Tech & Startups'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('opinion')} className="hover:text-red-500 transition-colors">
                  {language === 'bn' ? 'মতামত ও সম্পাদকীয়' : 'Opinion & Columns'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('video')} className="hover:text-red-500 transition-colors">
                  {language === 'bn' ? 'ভিডিও প্রতিবেদন' : 'Video Stories'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate & Editorial */}
          <div>
            <h4 className="text-white font-bold text-sm font-bengali mb-3 pb-1 border-b border-slate-800">
              {language === 'bn' ? 'সম্পাদকীয় প্যানেল' : 'Editorial Board'}
            </h4>
            <div className="space-y-2.5 text-[11px] leading-relaxed">
              <p>
                <span className="text-white font-semibold block">{language === 'bn' ? 'সম্পাদক ও প্রকাশক:' : 'Editor & Publisher:'}</span>
                {language === 'bn' ? 'মহিউদ্দিন সরকার' : 'Mahiuddin Sarker'}
              </p>
              <p>
                <span className="text-white font-semibold block">{language === 'bn' ? 'নির্বাহী সম্পাদক:' : 'Executive Editor:'}</span>
                {language === 'bn' ? 'আশিকুর রহমান' : 'Ashiqur Rahman'}
              </p>
              <p>
                <span className="text-white font-semibold block">{language === 'bn' ? 'বার্তা প্রধান:' : 'Head of News:'}</span>
                {language === 'bn' ? 'ফারুক আহমেদ' : 'Faruk Ahmed'}
              </p>
            </div>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm font-bengali mb-3 pb-1 border-b border-slate-800">
              {language === 'bn' ? 'যোগাযোগ ও প্রধান কার্যালয়' : 'Contact & Headquarters'}
            </h4>
            <div className="space-y-2 text-[11px]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>
                  {language === 'bn' 
                    ? 'প্লট নং-১৯, বীর উত্তম সিআর দত্ত রোড, সোনারগাঁও সড়ক, কাওরান বাজার, ঢাকা-১২১৫, বাংলাদেশ'
                    : 'Plot 19, Bir Uttam C.R. Datta Road, Sonargaon Avenue, Kawran Bazar, Dhaka-1215, Bangladesh'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <span>+৮৮০ ২ ৮১৮৯৭৬১-৪</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <span>news@dhakapost.com, info@dhakapost.com</span>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-2">
              <span className="text-white font-semibold text-xs block mb-2">
                {language === 'bn' ? 'সামাজিক যোগাযোগ মাধ্যমে আমরা:' : 'Follow Us:'}
              </span>
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-slate-800 hover:bg-red-600 text-white flex items-center justify-center font-bold text-xs cursor-pointer transition-colors">
                  f
                </span>
                <span className="w-8 h-8 rounded bg-slate-800 hover:bg-red-600 text-white flex items-center justify-center font-bold text-xs cursor-pointer transition-colors">
                  X
                </span>
                <span className="w-8 h-8 rounded bg-slate-800 hover:bg-red-600 text-white flex items-center justify-center font-bold text-xs cursor-pointer transition-colors">
                  YT
                </span>
                <span className="w-8 h-8 rounded bg-slate-800 hover:bg-red-600 text-white flex items-center justify-center font-bold text-xs cursor-pointer transition-colors">
                  in
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="bg-black/90 py-4 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} {language === 'bn' ? 'ঢাকা পোস্ট মিডিয়া লিমিটেড। সর্বস্বত্ব সংরক্ষিত।' : 'Dhaka Post Media Ltd. All rights reserved.'}
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">{language === 'bn' ? 'গোপনীয়তা নীতি' : 'Privacy Policy'}</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">{language === 'bn' ? 'ব্যবহারের শর্তাবলি' : 'Terms of Use'}</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">{language === 'bn' ? 'বিজ্ঞাপন দরপত্র' : 'Advertising'}</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
