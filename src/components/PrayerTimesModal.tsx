import React, { useState } from 'react';
import { X, Clock, Moon, Sun, Sunrise, Sunset, Compass } from 'lucide-react';

interface PrayerTimesModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'bn' | 'en';
}

export const PrayerTimesModal: React.FC<PrayerTimesModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const [selectedCity, setSelectedCity] = useState('dhaka');

  if (!isOpen) return null;

  const prayerSchedule = [
    { name: 'ফজর', nameEn: 'Fajr', time: '০৪:৪৮ মি.', timeEn: '04:48 AM', icon: Moon },
    { name: 'সূর্যোদয়', nameEn: 'Sunrise', time: '০৫:৫৬ মি.', timeEn: '05:56 AM', icon: Sunrise },
    { name: 'জোহর', nameEn: 'Dhuhr', time: '১১:৫০ মি.', timeEn: '11:50 AM', icon: Sun },
    { name: 'আসর', nameEn: 'Asr', time: '০৩:৫৬ মি.', timeEn: '03:56 PM', icon: Sun, isCurrent: true },
    { name: 'মাগরিব (সূর্যাস্ত)', nameEn: 'Maghrib (Sunset)', time: '০৫:৩২ মি.', timeEn: '05:32 PM', icon: Sunset },
    { name: 'এশা', nameEn: 'Isha', time: '০৬:৪৭ মি.', timeEn: '06:47 PM', icon: Moon },
  ];

  const cities = [
    { id: 'dhaka', name: 'ঢাকা', nameEn: 'Dhaka', offset: '০ মি.' },
    { id: 'chittagong', name: 'চট্টগ্রাম', nameEn: 'Chittagong', offset: '-৫ মি.' },
    { id: 'sylhet', name: 'সিলেট', nameEn: 'Sylhet', offset: '-৬ মি.' },
    { id: 'rajshahi', name: 'রাজশাহী', nameEn: 'Rajshahi', offset: '+৭ মি.' },
    { id: 'khulna', name: 'খুলনা', nameEn: 'Khulna', offset: '+৩ মি.' },
    { id: 'barisal', name: 'বরিশাল', nameEn: 'Barisal', offset: '+১ মি.' },
    { id: 'rangpur', name: 'রংপুর', nameEn: 'Rangpur', offset: '+৪ মি.' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl max-w-md w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-red-500" />
            <div>
              <h3 className="font-bengali font-bold text-base">
                {language === 'bn' ? 'আজকের নামাজের সময়সূচি' : 'Today’s Prayer Schedule'}
              </h3>
              <p className="text-[11px] text-slate-400">
                {language === 'bn' ? 'ইসলামিক ফাউন্ডেশন বাংলাদেশ অনুযায়ী' : 'According to Islamic Foundation Bangladesh'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* City Filter */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-600 dark:text-slate-300 font-semibold">
              {language === 'bn' ? 'বিভাগ নির্বাচন:' : 'Select Division:'}
            </span>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="text-xs font-medium bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded px-2.5 py-1 text-slate-900 dark:text-white"
            >
              {cities.map((c) => (
                <option key={c.id} value={c.id}>
                  {language === 'bn' ? `${c.name} (${c.offset})` : `${c.nameEn}`}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Schedule List */}
        <div className="p-4 space-y-2">
          {prayerSchedule.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-center justify-between p-2.5 rounded-lg border transition-all ${
                  item.isCurrent
                    ? 'bg-red-50 dark:bg-red-950/40 border-red-300 dark:border-red-900 font-bold'
                    : 'bg-white dark:bg-slate-800/50 border-slate-100 dark:border-slate-800'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`p-1.5 rounded-md ${item.isCurrent ? 'bg-red-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-sm ${item.isCurrent ? 'text-red-600 dark:text-red-400 font-bold' : 'text-slate-800 dark:text-slate-200'}`}>
                    {language === 'bn' ? item.name : item.nameEn}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {item.isCurrent && (
                    <span className="text-[10px] bg-red-600 text-white px-1.5 py-0.5 rounded font-semibold">
                      {language === 'bn' ? 'বর্তমান ওয়াক্ত' : 'Current'}
                    </span>
                  )}
                  <span className="font-mono text-sm font-bold text-slate-800 dark:text-slate-100">
                    {language === 'bn' ? item.time : item.timeEn}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="p-3 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-[11px] text-slate-500">
            {language === 'bn' ? 'সেহরি শেষ ভোর ০৪:৪২ মি. | ইফতার বিকাল ০৫:৩৫ মি.' : 'Sehri Ends: 04:42 AM | Iftar: 05:35 PM'}
          </p>
        </div>

      </div>
    </div>
  );
};
