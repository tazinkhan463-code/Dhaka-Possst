export interface Article {
  id: string;
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  content: string;
  contentEn: string;
  category: 'national' | 'politics' | 'economy' | 'international' | 'sports' | 'entertainment' | 'district' | 'opinion' | 'tech' | 'lifestyle' | 'video';
  categoryLabel: string;
  categoryLabelEn: string;
  division?: 'dhaka' | 'chittagong' | 'rajshahi' | 'khulna' | 'barisal' | 'sylhet' | 'rangpur' | 'mymensingh';
  district?: string;
  districtEn?: string;
  image: string;
  caption?: string;
  captionEn?: string;
  author: string;
  authorEn: string;
  reporterTitle: string;
  reporterTitleEn: string;
  location: string;
  locationEn: string;
  publishedAt: string;
  publishedTimeAgo: string;
  publishedTimeAgoEn: string;
  readTime: string;
  readTimeEn: string;
  isLead?: boolean;
  isBreaking?: boolean;
  isLive?: boolean;
  isMostRead?: boolean;
  mostReadRank?: number;
  isVideo?: boolean;
  videoDuration?: string;
  videoUrl?: string;
  tags: string[];
}

export interface PollData {
  id: string;
  question: string;
  questionEn: string;
  options: {
    id: string;
    text: string;
    textEn: string;
    votes: number;
  }[];
  totalVotes: number;
}

export const BREAKING_NEWS = [
  {
    id: 'b1',
    text: 'মেট্রোরেলের নতুন রুট উদ্বোধন: মতিঝিল থেকে কমলাপুর অংশে ট্রায়াল সফল, যাত্রীসেবা শুরু শিগগিরই',
    textEn: 'New Metro Rail route trial: Motijheel to Kamalapur test successful, passenger trips soon',
    category: 'জাতীয়'
  },
  {
    id: 'b2',
    text: 'আন্তর্জাতিক বাজারে জ্বালানি তেলের দাম কমেছে ৩ শতাংশ, অভ্যন্তরীণ সমন্বয়ের উদ্যোগ',
    textEn: 'Global crude oil prices slide 3%; domestic tariff adjustment under review',
    category: 'অর্থনীতি'
  },
  {
    id: 'b3',
    text: 'মিরপুর টেস্টে ক্যারিবিয়ানদের চেপে ধরেছে টাইগাররা, দ্বিতীয় ইনিংসে সুবিধাজনক অবস্থানে বাংলাদেশ',
    textEn: 'Tigers tighten grip on Mirpur Test, Bangladesh in strong position in second innings',
    category: 'খেলা'
  },
  {
    id: 'b4',
    text: 'বাংলাদেশ ব্যাংক: রেমিট্যান্স প্রবাহে নতুন রেকর্ড, রিজার্ভে ইতিবাচক প্রভাব',
    textEn: 'Bangladesh Bank: New monthly remittance surge boosts foreign exchange reserves',
    category: 'অর্থনীতি'
  }
];

export const INITIAL_POLL: PollData = {
  id: 'poll-2026-1',
  question: 'আসন্ন এশিয়া কাপ ও আইসিসি টুর্নামেন্টে বাংলাদেশ জাতীয় ক্রিকেট দলের পারফরম্যান্স নিয়ে আপনি কি আশাবাদী?',
  questionEn: 'Are you optimistic about the Bangladesh Cricket Team’s prospects in the upcoming Asian and ICC tournaments?',
  options: [
    { id: 'opt1', text: 'হ্যাঁ, দারুণ আশাবাদী', textEn: 'Yes, strongly optimistic', votes: 1420 },
    { id: 'opt2', text: 'না, সংশয় রয়েছে', textEn: 'No, having reservations', votes: 480 },
    { id: 'opt3', text: 'মন্তব্য নেই', textEn: 'No comments', votes: 110 }
  ],
  totalVotes: 2010
};

export const DIVISIONS = [
  { id: 'all', name: 'সব বিভাগ', nameEn: 'All Divisions' },
  { id: 'dhaka', name: 'ঢাকা', nameEn: 'Dhaka' },
  { id: 'chittagong', name: 'চট্টগ্রাম', nameEn: 'Chittagong' },
  { id: 'rajshahi', name: 'রাজশাহী', nameEn: 'Rajshahi' },
  { id: 'khulna', name: 'খুলনা', nameEn: 'Khulna' },
  { id: 'barisal', name: 'বরিশাল', nameEn: 'Barisal' },
  { id: 'sylhet', name: 'সিলেট', nameEn: 'Sylhet' },
  { id: 'rangpur', name: 'রংপুর', nameEn: 'Rangpur' },
  { id: 'mymensingh', name: 'ময়মনসিংহ', nameEn: 'Mymensingh' }
];

export const DISTRICTS_BY_DIVISION: Record<string, { id: string; name: string; nameEn: string }[]> = {
  all: [
    { id: 'all', name: 'সকল জেলা', nameEn: 'All Districts' }
  ],
  dhaka: [
    { id: 'all', name: 'সকল জেলা', nameEn: 'All Districts' },
    { id: 'dhaka_city', name: 'ঢাকা মহানগর', nameEn: 'Dhaka Metro' },
    { id: 'gazipur', name: 'গাজীপুর', nameEn: 'Gazipur' },
    { id: 'narayanganj', name: 'নারায়ণগঞ্জ', nameEn: 'Narayanganj' },
    { id: 'tangail', name: 'টাঙ্গাইল', nameEn: 'Tangail' },
    { id: 'faridpur', name: 'ফরিদপুর', nameEn: 'Faridpur' }
  ],
  chittagong: [
    { id: 'all', name: 'সকল জেলা', nameEn: 'All Districts' },
    { id: 'chittagong_city', name: 'চট্টগ্রাম মহানগর', nameEn: 'Chittagong Metro' },
    { id: 'coxsbazar', name: 'কক্সবাজার', nameEn: 'Cox’s Bazar' },
    { id: 'cumilla', name: 'কুমিল্লা', nameEn: 'Cumilla' },
    { id: 'noakhali', name: 'নোয়াখালী', nameEn: 'Noakhali' }
  ],
  rajshahi: [
    { id: 'all', name: 'সকল জেলা', nameEn: 'All Districts' },
    { id: 'rajshahi_city', name: 'রাজশাহী', nameEn: 'Rajshahi' },
    { id: 'bogra', name: 'বগুড়া', nameEn: 'Bogura' },
    { id: 'pabna', name: 'পাবনা', nameEn: 'Pabna' }
  ],
  khulna: [
    { id: 'all', name: 'সকল জেলা', nameEn: 'All Districts' },
    { id: 'khulna_city', name: 'খুলনা', nameEn: 'Khulna' },
    { id: 'jessore', name: 'যশোর', nameEn: 'Jashore' },
    { id: 'kushtia', name: 'কুষ্টিয়া', nameEn: 'Kushtia' }
  ],
  sylhet: [
    { id: 'all', name: 'সকল জেলা', nameEn: 'All Districts' },
    { id: 'sylhet_city', name: 'সিলেট', nameEn: 'Sylhet' },
    { id: 'moulvibazar', name: 'মৌলভীবাজার', nameEn: 'Moulvibazar' },
    { id: 'habiganj', name: 'হবিগঞ্জ', nameEn: 'Habiganj' }
  ],
  barisal: [
    { id: 'all', name: 'সকল জেলা', nameEn: 'All Districts' },
    { id: 'barisal_city', name: 'বরিশাল', nameEn: 'Barisal' },
    { id: 'patuakhali', name: 'পটুয়াখালী', nameEn: 'Patuakhali' },
    { id: 'bhola', name: 'ভোলা', nameEn: 'Bhola' }
  ],
  rangpur: [
    { id: 'all', name: 'সকল জেলা', nameEn: 'All Districts' },
    { id: 'rangpur_city', name: 'রংপুর', nameEn: 'Rangpur' },
    { id: 'dinajpur', name: 'দিনাজপুর', nameEn: 'Dinajpur' }
  ],
  mymensingh: [
    { id: 'all', name: 'সকল জেলা', nameEn: 'All Districts' },
    { id: 'mymensingh_city', name: 'ময়মনসিংহ', nameEn: 'Mymensingh' },
    { id: 'jamalpur', name: 'জামালপুর', nameEn: 'Jamalpur' }
  ]
};

export const ARTICLES_DATA: Article[] = [
  {
    id: 'art-1',
    title: 'মেট্রোরেলের কমলাপুর অংশের কাজ শেষ পর্যায়ে: আগামী মাসেই বাণিজ্যিকভাবে যুক্ত হওয়ার সম্ভাবনা',
    titleEn: 'Kamalapur Metro Rail extension nears finish line: Commercial operations likely next month',
    summary: 'উত্তরা থেকে মতিঝিল হয়ে কমলাপুর পর্যন্ত দ্রুতগতির নিরবচ্ছিন্ন ট্রানজিট রাজধানী ঢাকার যোগাযোগ মানচিত্রে আমূল পরিবর্তন আনবে। প্রতিদিন প্রায় ৬ লাখ যাত্রী এই রুটে স্বাচ্ছন্দ্যে চলাচল করতে পারবেন বলে জানিয়েছে ডিএমটিসিএল কর্তৃপক্ষ।',
    summaryEn: 'The seamless rapid transit extension from Uttara via Motijheel to Kamalapur is poised to transform Dhaka’s urban transport landscape, accommodating over 600,000 commuters daily.',
    content: `রাজধানীর যোগাযোগ ব্যবস্থার আধুনিকায়নে অন্যতম মাইলফলক ঢাকা মেট্রোরেল (এমআরটি লাইন-৬) এর মতিঝিল থেকে কমলাপুর পর্যন্ত বর্ধিত অংশের নির্মাণ কাজ প্রায় সমাপ্ত হয়েছে। 

ঢাকা ম্যাস ট্রানজিট কোম্পানি লিমিটেড (ডিএমটিসিএল) এর দায়িত্বশীল সূত্র জানিয়েছে, বিদ্যুৎ সংযোগ ও ট্রায়াল রান সফলভাবে সম্পন্ন হওয়ার পর নিরাপত্তা সনদ পর্যবেক্ষণ করা হচ্ছে। আগামী মাসেই এই রুটে নিয়মিত বাণিজ্যিক ট্রেন পরিচালনা করার চূড়ান্ত প্রস্তুতি সম্পন্ন করা হয়েছে।

কমলাপুর রেলওয়ে স্টেশনের সাথে সরাসরি মেট্রোরেলের সংযোগ স্থাপিত হওয়ায় দেশের বিভিন্ন প্রান্ত থেকে ট্রেনে আসা যাত্রীরা সরাসরি ঢাকার যেকোনো গন্তব্যে মাত্র কয়েক মিনিটের মধ্যে নির্বিঘ্নে পৌঁছাতে পারবেন। এর ফলে নগরীর মূল প্রবেশদ্বারগুলোতে দীর্ঘদিনের যানজটের সমস্যা অনেকটাই নিরসন হবে বলে প্রত্যাশা করছেন নগর পরিকল্পনাবিদরা।

প্রকল্প পরিচালকের তথ্যমতে, পরিবেশবান্ধব ও সম্পূর্ণ শীতাতপ নিয়ন্ত্রিত এই ট্রেনগুলোতে স্বয়ংক্রিয় টিকিট সিস্টেম এবং প্রতিবন্ধীদের জন্য বিশেষ সুযোগ-সুবিধা নিশ্চিত করা হয়েছে। নতুন এই স্টেশনটি আধুনিক স্থাপত্য শৈলীর চমৎকার নিদর্শন হিসেবে গড়ে তোলা হয়েছে।`,
    contentEn: `The construction of the Motijheel to Kamalapur extension of MRT Line-6, a milestone in the modernization of Dhaka’s transit network, has reached its final phase.

Officials from Dhaka Mass Transit Company Limited (DMTCL) confirmed that after successful trial runs and power testing, safety certifications are being audited. Commercial train services on this high-priority stretch are scheduled to begin next month.

With the elevated metro directly connecting Kamalapur Railway Station, rail passengers entering from nationwide divisions can transit across Dhaka within minutes, substantially relieving bottleneck gridlock at key terminal entry corridors.`,
    category: 'national',
    categoryLabel: 'জাতীয়',
    categoryLabelEn: 'National',
    image: '/src/assets/images/hero_dhaka_lead_1792210132571.jpg',
    caption: 'ঢাকার ব্যস্ত রাজপথের ওপর দিয়ে ছুটে চলেছে দ্রুতগতির মেট্রোরেল। ছবি: ঢাকা পোস্ট',
    captionEn: 'Dhaka Metro Rail gliding over the evening rush in the capital. Photo: Dhaka Post',
    author: 'শামীম আহমেদ',
    authorEn: 'Shamim Ahmed',
    reporterTitle: 'বিশেষ প্রতিবেদক, ঢাকা',
    reporterTitleEn: 'Special Correspondent, Dhaka',
    location: 'ঢাকা',
    locationEn: 'Dhaka',
    publishedAt: '১৭ অক্টোবর ২০২৬, দুপুর ২:১৫',
    publishedTimeAgo: '১৫ মিনিট আগে',
    publishedTimeAgoEn: '15 mins ago',
    readTime: '৪ মিনিট পঠন',
    readTimeEn: '4 min read',
    isLead: true,
    isBreaking: true,
    isMostRead: true,
    mostReadRank: 1,
    tags: ['মেট্রোরেল', 'ঢাকা', 'যোগাযোগ', 'কমলাপুর', 'ডিএমটিসিএল']
  },
  {
    id: 'art-2',
    title: 'নির্বাচন ও সাংবিধানিক সংস্কার নিয়ে রাজনৈতিক দলগুলোর সঙ্গে সংলাপের নতুন রূপরেখা ঘোষণা',
    titleEn: 'New roadmap unveiled for multi-party national dialogue on constitutional reforms',
    summary: 'রাষ্ট্রীয় সংস্কার কার্যক্রম এগিয়ে নিতে জাতীয় ঐকমত্য প্রতিষ্ঠার লক্ষ্যে আগামী সপ্তাহ থেকে ধারাবাহিক আলোচনা অনুষ্ঠিত হবে। সকল নিবন্ধিত রাজনৈতিক দলের প্রতিনিধি ও সুশীল সমাজের ব্যক্তিদের এতে আমন্ত্রণ জানানো হয়েছে।',
    summaryEn: 'Aiming to build national consensus on systemic governance reforms, high-level consultations with registered political parties and civil society will commence next week.',
    content: `জাতীয় সংস্কার কমিশনের পক্ষ থেকে রাজনৈতিক দলগুলোর সঙ্গে উন্মুক্ত আলোচনা ও মতবিনিময় সভার নতুন সময়সূচি ঘোষণা করা হয়েছে।

আজ সকালে রাজধানী ঢাকায় আয়োজিত এক জনাকীর্ণ সংবাদ সম্মেলনে এই রূপরেখা উপস্থাপন করেন কমিশনের মুখপাত্র। তিনি উল্লেখ করেন, গ্রহণযোগ্য নির্বাচনী ব্যবস্থা, বিচার বিভাগের পূর্ণ স্বাধীনতা এবং গণতান্ত্রিক প্রতিষ্ঠানগুলোর নিরপেক্ষ ভূমিকা নিশ্চিত করাই এই প্রক্রিয়ার প্রধান উদ্দেশ্য।

প্রধান রাজনৈতিক দলগুলোর নীতি-নির্ধারকেরা ইতিবাচক সাড়া দিয়েছেন এবং লিখিত মতামত পেশ করার প্রতিশ্রুতি দিয়েছেন। বৈঠকে নির্বাচনী আইনের যুগোপযোগী পরিবর্তন ও আচরণবিধি কঠোরভাবে মেনে চলার বিষয়েও বিশেষ গুরুত্ব দেওয়া হবে।`,
    contentEn: `The National Reform Commission has announced an open dialogue schedule with major political factions and civil society leaders in Dhaka.

At a crowded press briefing this morning, spokespersons emphasized that strengthening democratic institutional autonomy, transparent electoral machinery, and judicial independence remain the focal points of the proposed blueprint.`,
    category: 'politics',
    categoryLabel: 'রাজনীতি',
    categoryLabelEn: 'Politics',
    image: '/src/assets/images/news_politics_summit_1792210133795.jpg',
    caption: 'প্রেস কনফারেন্সে গুরুত্বপূর্ণ রূপরেখা তুলে ধরছেন মুখপাত্ররা। ছবি: ঢাকা পোস্ট',
    captionEn: 'Briefing attendees at the Dhaka political dialogue session. Photo: Dhaka Post',
    author: 'ফারহানা ইসলাম',
    authorEn: 'Farhana Islam',
    reporterTitle: 'রাজনৈতিক প্রতিবেদক',
    reporterTitleEn: 'Political Reporter',
    location: 'ঢাকা',
    locationEn: 'Dhaka',
    publishedAt: '১৭ অক্টোবর ২০২৬, দুপুর ১:৪০',
    publishedTimeAgo: '৪৫ মিনিট আগে',
    publishedTimeAgoEn: '45 mins ago',
    readTime: '৩ মিনিট পঠন',
    readTimeEn: '3 min read',
    isMostRead: true,
    mostReadRank: 2,
    tags: ['রাজনীতি', 'নির্বাচন', 'সংস্কার', 'সংলাপ']
  },
  {
    id: 'art-3',
    title: 'মিরপুর শের-ই-বাংলায় অসাধারণ ব্যাটিং দৃঢ়তা: শক্ত অবস্থানে বাংলাদেশ, শান্ত ও হৃদয়ের সেঞ্চুরি জুটি',
    titleEn: 'Resilient batting masterclass at Mirpur: Shanto and Hridoy century stand puts Tigers on top',
    summary: 'চতুর্থ দিনের শেষ বিকেলে বোলারদের দাপট সামলে বড় সংগ্রহের পথে এগিয়ে চলেছে টাইগাররা। হোম গ্রাউন্ডে গ্যালারিভরা দর্শকের তুমুল করতালির মধ্যে স্বাগতিকদের লিড আড়াইশ ছাড়াল।',
    summaryEn: 'Displaying calm composure under lights on Day 4, Bangladesh solidified control at Mirpur as Shanto and Hridoy forged an undefeated partnership to stretch the target beyond 250.',
    content: `মিরপুর শের-ই-বাংলা জাতীয় ক্রিকেট স্টেডিয়ামে সফরকারী দলের বিরুদ্ধে দ্বিতীয় টেস্টে দাপুটে অবস্থানে রয়েছে বাংলাদেশ ক্রিকেট দল।

দিনের শুরুতে দ্রুত দুটি উইকেট পতনের পর অধিনায়ক নাজমুল হোসেন শান্ত এবং তৌহিদ হৃদয়ের মধ্যকার অপরাজিত ১২৮ রানের পার্টনারশিপ দলকে দারুণ নির্ভরতা এনে দেয়। শান্তর নিখুঁত কভার ড্রাইভ এবং হৃদয়ের বাউন্ডারি দর্শকদের উদ্দীপিত করে তোলে।

ম্যাচ শেষে ব্যাটিং পরামর্শক জানান, 'উইকেটের আচরণ বুঝে ব্যাটসম্যানরা চমৎকার ধৈর্য দেখিয়েছেন। স্পিনারদের টার্ন সামলে যেভাবে স্ট্রাইক রোটেট করা হয়েছে, তা আন্তর্জাতিক মানের ক্রিকেট মানসিকতার প্রমাণ।' কাল শেষ দিনে দ্রুত উইকেট তুলে নিয়ে জয় নিশ্চিত করাই মূল লক্ষ্য বাংলাদেশের।`,
    contentEn: `Bangladesh consolidated an imposing position in the second Test at Mirpur Sher-e-Bangla National Cricket Stadium, propelled by a calculated counter-attack under floodlights.

Following two early setbacks in the morning session, skipper Najmul Hossain Shanto and Towhid Hridoy stitched an unbeaten 128-run stand, delighting a partisan home crowd.`,
    category: 'sports',
    categoryLabel: 'খেলা',
    categoryLabelEn: 'Sports',
    image: '/src/assets/images/news_cricket_match_1792210133220.jpg',
    caption: 'মিরপুরের আলো ঝলমলে মাঠে আত্মবিশ্বাসী শট নিচ্ছেন বাংলাদেশি ব্যাটসম্যান। ছবি: ঢাকা পোস্ট',
    captionEn: 'Flamboyant strokeplay under Mirpur floodlights. Photo: Dhaka Post',
    author: 'মাজহারুল হক',
    authorEn: 'Mazharul Haque',
    reporterTitle: 'ক্রীড়া সম্পাদক',
    reporterTitleEn: 'Sports Editor',
    location: 'মিরপুর, ঢাকা',
    locationEn: 'Mirpur, Dhaka',
    publishedAt: '১৭ অক্টোবর ২০২৬, দুপুর ১২:৩০',
    publishedTimeAgo: '২ ঘণ্টা আগে',
    publishedTimeAgoEn: '2 hours ago',
    readTime: '৪ মিনিট পঠন',
    readTimeEn: '4 min read',
    isMostRead: true,
    mostReadRank: 3,
    tags: ['ক্রিকেট', 'টাইগার্স', 'মিরপুর', 'বাংলাদেশ টেস্ট']
  },
  {
    id: 'art-4',
    title: 'বাংলাদেশের তথ্যপ্রযুক্তি খাতে ১০০ কোটি ডলারের বৈদেশিক বিনিয়োগের মাইলফলক অতিক্রম',
    titleEn: 'Bangladesh tech ecosystem crosses $1 Billion foreign venture investment milestone',
    summary: 'কৃত্রিম বুদ্ধিমত্তা, ফিনটেক ও লজিস্টিকস প্ল্যাটফর্মে আন্তর্জাতিক ভেঞ্চার ক্যাপিটাল প্রতিষ্ঠানগুলোর আস্থা ক্রমেই বাড়ছে। গত এক বছরে দেশের সফটওয়্যার রপ্তানি আয় বৃদ্ধি পেয়েছে ২২ শতাংশ।',
    summaryEn: 'Buoyed by deep tech and micro-merchant fintech software adoption, global institutional funds funnelled unprecedented capital into homegrown Bangladeshi scale-ups.',
    content: `বাংলাদেশের স্টার্টআপ এবং সফটওয়্যার শিল্পে বৈশ্বিক বিনিয়োগকারীদের অংশগ্রহণ অতীতের সকল রেকর্ড ছাড়িয়েছে। বাংলাদেশ অ্যাসোসিয়েশন অব সফটওয়্যার অ্যান্ড ইনফরমেশন সার্ভিসেস (বেসিস) প্রকাশিত সর্বশেষ প্রতিবেদনে এই তথ্য উঠে এসেছে।

ঢাকার কারওয়ান বাজার ও গুলশানের টেক হাবগুলোতে গড়ে ওঠা কৃত্রিম বুদ্ধিমত্তা ও মোবাইল ফিনান্সিয়াল সার্ভিসেস ভিত্তিক প্রতিষ্ঠানগুলো সবচেয়ে বেশি বৈশ্বিক তহবিল সংগ্রহ করেছে। সিলিকন ভ্যালি ও সিঙ্গাপুরভিত্তিক খ্যাতনামা ভেঞ্চার ক্যাপিটাল ফার্মগুলো সরাসরি স্থানীয় উদ্যোক্তাদের সঙ্গে যুক্ত হচ্ছে।

খাত সংশ্লিষ্টরা বলছেন, তরুণ প্রোগ্রামারদের মেধা ও দক্ষ জনবলের সহজলভ্যতাই বাংলাদেশকে দক্ষিণ এশিয়ার অন্যতম উদীয়মান টেক হাবে রূপান্তরিত করছে।`,
    contentEn: `Foreign direct venture capital inflows into Bangladeshi tech startups have surpassed $1 billion, underscored by soaring exports in enterprise SaaS, fintech, and AI automation.

Tech founders in Dhaka noted that expanding digital payment infrastructure and rich software engineering talent are attracting tier-1 venture partners from Singapore, Japan, and Silicon Valley.`,
    category: 'tech',
    categoryLabel: 'প্রযুক্তি',
    categoryLabelEn: 'Tech',
    image: '/src/assets/images/news_tech_bangladesh_1792210134672.jpg',
    caption: 'ঢাকার আধুনিক টেক স্টার্টআপ অফিসে কাজ করছেন একদল প্রতিভাবান তরুণ সফটওয়্যার প্রকৌশলী। ছবি: ঢাকা পোস্ট',
    captionEn: 'Dhaka-based software engineers collaborating on next-gen fintech solutions. Photo: Dhaka Post',
    author: 'তানভীর হাসান',
    authorEn: 'Tanvir Hasan',
    reporterTitle: 'আইটি প্রতিবেদক',
    reporterTitleEn: 'Technology Correspondent',
    location: 'ঢাকা',
    locationEn: 'Dhaka',
    publishedAt: '১৭ অক্টোবর ২০২৬, সকাল ১১:১৫',
    publishedTimeAgo: '৩ ঘণ্টা আগে',
    publishedTimeAgoEn: '3 hours ago',
    readTime: '৩ মিনিট পঠন',
    readTimeEn: '3 min read',
    isMostRead: true,
    mostReadRank: 4,
    tags: ['প্রযুক্তি', 'স্টার্টআপ', 'বিনিয়োগ', 'সফটওয়্যার', 'এআই']
  },
  {
    id: 'art-5',
    title: 'ছবিতে বাংলাদেশ: মেঘনার বুকে সূর্যাস্ত ও মাঝি জীবনের চিরায়ত প্রতিচ্ছবি',
    titleEn: 'In Pictures: Golden hour twilight over the timeless waters of Meghna river',
    summary: 'হেমন্তের শান্ত বিকেলে নদীর বুকে ভেসে চলা পালতোলা নাও আর প্রান্তিক মানুষের জীবনচিত্র নিয়ে বিশেষ আলোকচিত্র অ্যালবাম।',
    summaryEn: 'A mesmerizing visual journey capturing traditional riverine lifestyles, wooden dinghies, and sunset reflections along the Meghna estuary.',
    content: `নদীমাতৃক বাংলাদেশের রূপ-সৌন্দর্য যুগে যুগে মুগ্ধ করেছে কবি, শিল্পী ও পরিব্রাজকদের। 

মেঘনা নদীর শান্ত জলরাশিতে সূর্যাস্তের মনোরম দৃশ্য আমাদের মনে করিয়ে দেয় চিরায়ত বাংলার সহজ-সরল লোকজীবনের কথা। জেলেরা যখন দিনশেষে জাল গুটিয়ে ফিরে আসেন, তখনের সেই পরিবেশ স্নিগ্ধতা ও শান্তিময়তায় ভরে ওঠে। 

ঢাকা পোস্টের ক্যামেরায় ধারণ করা হয়েছে নদীবিধৌত জনপদের এই অনবদ্য মুহূর্তগুলো।`,
    contentEn: `The picturesque delta of Bangladesh continues to charm travelers and storytellers. This documentary photo feature captures rivermen returning home against the backdrop of vibrant twilight skies.`,
    category: 'lifestyle',
    categoryLabel: 'ফিচার',
    categoryLabelEn: 'Feature',
    image: '/src/assets/images/news_river_gallery_1792210134257.jpg',
    caption: 'সূর্যাস্তের আলোয় সোনালী হয়ে ওঠা মেঘনা নদীর বুক চিরে চলেছে দেশি নৌকা। ছবি: ঢাকা পোস্ট',
    captionEn: 'Traditional boats navigating the golden glow of Meghna River at sunset. Photo: Dhaka Post',
    author: 'রাশেদ রানা',
    authorEn: 'Rashed Rana',
    reporterTitle: 'আলোকচিত্রী সাংবাদিক',
    reporterTitleEn: 'Staff Photojournalist',
    location: 'চাঁদপুর / মুন্সীগঞ্জ',
    locationEn: 'Chandpur / Munshiganj',
    publishedAt: '১৭ অক্টোবর ২০২৬, সকাল ১০:০০',
    publishedTimeAgo: '৪ ঘণ্টা আগে',
    publishedTimeAgoEn: '4 hours ago',
    readTime: '২ মিনিট পঠন',
    readTimeEn: '2 min read',
    isMostRead: true,
    mostReadRank: 5,
    tags: ['ছবিতে বাংলাদেশ', 'মেঘনা', 'প্রকৃতি', 'নদী']
  },
  {
    id: 'art-6',
    title: 'রেমিট্যান্সের চমকপ্রদ প্রবৃদ্ধি: চলতি মাসে ব্যাংকিং চ্যানেলে এলো রেকর্ড পরিমাণ বৈদেশিক মুদ্রা',
    titleEn: 'Remittance surge: Record foreign currency flows through formal banking corridors',
    summary: 'বৈধ পথে প্রবাসী আয় পাঠানোর বিশেষ প্রণোদনা এবং ব্যাংকগুলোর তাৎক্ষণিক নিষ্পত্তির সুফল পাচ্ছেন প্রবাসীরা। রপ্তানি আয়ের সাথে রেমিট্যান্সের এই প্রবাহ জাতীয় অর্থনীতিতে স্বস্তি এনে দিয়েছে।',
    summaryEn: 'Driven by seamless digital banking remittance apps and competitive exchange incentives, expatriate inflows reached unprecedented peaks this quarter.',
    content: `প্রবাসী কর্মীদের কষ্টার্জিত রেমিট্যান্স প্রবাহে আবারও আশাব্যঞ্জক উল্লম্ফন লক্ষ্য করা গেছে। বাংলাদেশ ব্যাংকের সর্বশেষ তথ্য অনুযায়ী, চলতি মাসে এখন পর্যন্ত প্রায় ২ বিলিয়ন ডলারের সমপরিমাণ প্রবাসী আয় দেশের ব্যাংকগুলোতে জমা হয়েছে।

মধ্যপ্রাচ্য, যুক্তরাজ্য, যুক্তরাষ্ট্র ও ইউরোপের দেশগুলো থেকে এই অর্থ মূলত পরিবার-পরিজনের জন্য পাঠানো হয়েছে। বিশেষজ্ঞরা বলছেন, মোবাইল ব্যাংকিং সুবিধা ও কার্ব মার্কেটের তুলনায় ব্যাংকিং রেটের ব্যবধান কমে আসায় হুন্ডির প্রবণতা নাটকীয়ভাবে হ্রাস পেয়েছে।`,
    contentEn: `Expatriate workers remitted record foreign currency through verified banking channels, bolstering national import cover and strengthening liquidity stability.`,
    category: 'economy',
    categoryLabel: 'অর্থনীতি',
    categoryLabelEn: 'Economy',
    image: '/src/assets/images/news_tech_bangladesh_1792210134672.jpg',
    caption: 'ডিজিটাল লেনদেন ও রেমিট্যান্স নিষ্পত্তিতে ব্যস্ত ব্যাংকিং ফ্রন্ট। ছবি: ঢাকা পোস্ট',
    captionEn: 'Digital remittance processing and banking operations in Dhaka. Photo: Dhaka Post',
    author: 'মুহিতুর রহমান',
    authorEn: 'Muhitur Rahman',
    reporterTitle: 'অর্থনীতি বিশ্লেষক',
    reporterTitleEn: 'Economic Analyst',
    location: 'মতিঝিল, ঢাকা',
    locationEn: 'Motijheel, Dhaka',
    publishedAt: '১৭ অক্টোবর ২০২৬, সকাল ৯:২০',
    publishedTimeAgo: '৫ ঘণ্টা আগে',
    publishedTimeAgoEn: '5 hours ago',
    readTime: '৩ মিনিট পঠন',
    readTimeEn: '3 min read',
    tags: ['অর্থনীতি', 'রেমিট্যান্স', 'বাংলাদেশ ব্যাংক', 'ডলার']
  },
  {
    id: 'art-7',
    title: 'কক্সবাজার সমুদ্র সৈকতে পর্যটকদের উপচে পড়া ভিড়, সেন্টমার্টিন রুটে চলছে অতিরিক্ত জাহাজ',
    titleEn: 'Tourist influx at Cox’s Bazar beach; luxury catamarans operate on Saint Martin route',
    summary: 'টানা ছুটিকে কেন্দ্র করে বিশ্বের দীর্ঘতম বালুকাময় সমুদ্র সৈকতে নেমেছে পর্যটকের ঢল। স্থানীয় হোটেল-রিসোর্টগুলোতে শতভাগ বুকিং এবং পর্যটকদের নিরাপত্তায় সজাগ রয়েছে ট্যুরিস্ট পুলিশ।',
    summaryEn: 'Holiday travelers flock to the world’s longest natural sandy beach in Cox’s Bazar, as beach patrols tighten hospitality guidelines and safety drills.',
    content: `প্রকৃতির নয়নাভিরাম রূপ উপভোগ করতে কক্সবাজার ও সেন্টমার্টিন দ্বীপে সমবেত হয়েছেন হাজার হাজার ভ্রমণপিপাসু মানুষ। 

কক্সবাজারের সুগন্ধা, লাবণী ও কলাতলী পয়েন্টে সকাল থেকেই পর্যটকদের পদচারণায় মুখর। সৈকতে যেকোনো অপ্রীতিকর ঘটনা এড়াতে সার্বক্ষণিক নজরদারিতে রয়েছে ওয়াচ টাওয়ার এবং লাইফগার্ড টিম। পর্যটন ব্যবসায়ী সমিতি জানিয়েছে, স্থানীয় অর্থনীতিতে এর ইতিবাচক প্রভাব পড়ছে।`,
    contentEn: `Thousands of holidaymakers descended upon Cox’s Bazar and Saint Martin Island to savor golden beaches and azure waters, welcoming an economic boon for local coastal hospitality.`,
    category: 'district',
    categoryLabel: 'সারাদেশ',
    categoryLabelEn: 'Districts',
    division: 'chittagong',
    district: 'coxsbazar',
    districtEn: 'Cox’s Bazar',
    image: '/src/assets/images/news_river_gallery_1792210134257.jpg',
    caption: 'কক্সবাজার উপকূলে পর্যটকদের ভিড় ও সাগরের গর্জন। ছবি: ঢাকা পোস্ট',
    captionEn: 'Scenic coastal gathering in Cox’s Bazar. Photo: Dhaka Post',
    author: 'কামাল উদ্দিন',
    authorEn: 'Kamal Uddin',
    reporterTitle: 'কক্সবাজার জেলা প্রতিনিধি',
    reporterTitleEn: 'Cox’s Bazar Correspondent',
    location: 'কক্সবাজার',
    locationEn: 'Cox’s Bazar',
    publishedAt: '১৭ অক্টোবর ২০২৬, সকাল ৮:৫০',
    publishedTimeAgo: '৬ ঘণ্টা আগে',
    publishedTimeAgoEn: '6 hours ago',
    readTime: '২ মিনিট পঠন',
    readTimeEn: '2 min read',
    tags: ['সারাদেশ', 'কক্সবাজার', 'পর্যটন', 'সৈকত']
  },
  {
    id: 'art-8',
    title: 'বগুড়ার মহাস্থানগড়ে নতুন প্রত্নতাত্ত্বিক খননে প্রাচীন জনপদের বিস্ময়কর নিদর্শনের সন্ধান',
    titleEn: 'Archaeological excavations at Mahasthangarh Bogura uncover ancient urban artifacts',
    summary: 'পুণ্ড্রনগরের সীমানায় মাটির গভীরে মিলল প্রায় আড়াই হাজার বছর প্রাচীন টেরাকোটা ও পয়ঃনিষ্কাশন নালার সন্ধান। প্রাচীন বাংলার নগর সভ্যতার ক্রমবিকাশ অধ্যয়নে নতুন মাত্রা যুক্ত হলো।',
    summaryEn: 'Excavators in Bogura unearthed terracotta relics, glazed pottery, and drainage channels dating back 2,500 years, shedding fresh light on Bengal’s earliest urban settlements.',
    content: `বগুড়া জেলার প্রাচীন পুণ্ড্রবর্ধন বা মহাস্থানগড় এলাকায় পরিচালিত নবম পর্যায়ের প্রত্নতাত্ত্বিক অনুসন্ধানে বৈজ্ঞানিক ও ঐতিহাসিক দিক থেকে অত্যন্ত তাৎপর্যপূর্ণ আবিষ্কার হয়েছে।

প্রত্নতত্ত্ব অধিদপ্তরের বিশেষজ্ঞ দল জানিয়েছেন, খননকালে দ্বিতীয় খ্রিস্টপূর্বাব্দের উন্নত পয়ঃনিষ্কাশন চ্যানেল, প্রাচীন মৃৎপাত্রের টুকরা এবং বিশেষ স্থাপত্যের ভিত্তিচিহ্ন পাওয়া গেছে। এই প্রাপ্তি প্রমাণ করে যে ওই যুগেও এখানে একটি সুসংগঠিত নগর প্রশাসন ও ব্যবসা কেন্দ্র গড়ে উঠেছিল।`,
    contentEn: `Archeologists conducting systematic digs around Mahasthangarh in Bogura have uncovered structural masonry, coins, and drainage systems illuminating ancient Bengal civil design.`,
    category: 'district',
    categoryLabel: 'সারাদেশ',
    categoryLabelEn: 'Districts',
    division: 'rajshahi',
    district: 'bogra',
    districtEn: 'Bogura',
    image: '/src/assets/images/hero_dhaka_lead_1792210132571.jpg',
    caption: 'মহাস্থানগড়ের খননক্ষেত্রে প্রাচীন স্থাপত্য কাঠামোর অংশবিশেষ। ছবি: ঢাকা পোস্ট',
    captionEn: 'Archaeological relics at historic Mahasthangarh. Photo: Dhaka Post',
    author: 'নুরুল আমিন',
    authorEn: 'Nurul Amin',
    reporterTitle: 'বগুড়া প্রতিনিধি',
    reporterTitleEn: 'Bogura Correspondent',
    location: 'মহাস্থানগড়, বগুড়া',
    locationEn: 'Mahasthangarh, Bogura',
    publishedAt: '১৭ অক্টোবর ২০২৬, সকাল ৮:১০',
    publishedTimeAgo: '৭ ঘণ্টা আগে',
    publishedTimeAgoEn: '7 hours ago',
    readTime: '৩ মিনিট পঠন',
    readTimeEn: '3 min read',
    tags: ['সারাদেশ', 'বগুড়া', 'প্রত্নতত্ত্ব', 'ইতিহাস']
  },
  {
    id: 'art-9',
    title: 'জাতিসংঘ জলবায়ু সম্মেলনে উন্নয়নশীল দেশগুলোর জন্য ক্ষতিপূরণ তহবিলের দাবি জোরালো',
    titleEn: 'UN Climate Summit: Developing nations push for binding loss-and-damage compensation',
    summary: 'জলবায়ু পরিবর্তনের ঝুঁকিতে থাকা উপকূলীয় দেশগুলোর পক্ষে জোরালো বক্তব্য উপস্থাপন করলেন বাংলাদেশের পরিবেশ ও বন উপদেষ্টা। নবায়নযোগ্য জ্বালানি প্রসারে সহজ শর্তে ঋণ বরাদ্দের আহ্বান।',
    summaryEn: 'Bangladesh climate delegates voiced urgent demands at the UN summit, urging industrialized economies to honor multilateral green funding pledges for coastal resilience.',
    content: `বিশ্বের পরিবেশ সুরক্ষায় আয়োজিত বিশ্ব জলবায়ু সম্মেলনে তীব্র আলোচনার কেন্দ্রবিন্দুতে উঠে এসেছে ক্ষতিগ্রস্ত দেশগুলোর ক্ষতিপূরণ প্রসঙ্গ। 

সম্মেলনের উচ্চপর্যায়ের অধিবেশনে বাংলাদেশের প্রতিনিধি দল স্মরণ করিয়ে দেন যে, ন্যূনতম কার্বন নিঃসরণ করেও জলবায়ু বিপর্যয়ের সবচেয়ে বড় শিকারে পরিণত হচ্ছে বদ্বীপ বাংলাদেশ। উপকূলীয় বাঁধ নির্মাণ, সাইক্লোন শেল্টার আধুনিকায়ন এবং কৃষকদের জন্য লবণাক্ততাসহিষ্ণু ফসলের বীজ উদ্ভাবনে তাৎক্ষণিক আন্তর্জাতিক সহায়তা ছাড়া অভিযোজন সম্ভব নয়।`,
    contentEn: `Bangladesh’s environmental delegation championed the urgent replenishment of loss-and-damage funds at the UN Climate Summit, stressing vulnerable deltaic geographies.`,
    category: 'international',
    categoryLabel: 'আন্তর্জাতিক',
    categoryLabelEn: 'International',
    image: '/src/assets/images/news_politics_summit_1792210133795.jpg',
    caption: 'আন্তর্জাতিক জলবায়ু অধিবেশনের মঞ্চ। ছবি: ঢাকা পোস্ট',
    captionEn: 'Global leaders convene on climate resilience policy. Photo: Dhaka Post',
    author: 'সালেহ চৌধুরী',
    authorEn: 'Saleh Chowdhury',
    reporterTitle: 'আন্তর্জাতিক ডেস্ক',
    reporterTitleEn: 'International Desk',
    location: 'জেনেভা / ঢাকা',
    locationEn: 'Geneva / Dhaka',
    publishedAt: '১৭ অক্টোবর ২০২৬, সকাল ৭:৩০',
    publishedTimeAgo: '৮ ঘণ্টা আগে',
    publishedTimeAgoEn: '8 hours ago',
    readTime: '৩ মিনিট পঠন',
    readTimeEn: '3 min read',
    tags: ['আন্তর্জাতিক', 'জলবায়ু', 'জাতিসংঘ', 'পরিবেশ']
  },
  {
    id: 'art-10',
    title: 'বিশেষ ভিডিও প্রতিবেদন: যানজটমুক্ত রাজধানীর রূপরেখায় উড়ালসড়ক ও রিং রোড প্রকল্প',
    titleEn: 'Special Video Report: Elevated expressways and circular bypass vision for Dhaka',
    summary: 'ঢাকার অভ্যন্তরীণ যোগাযোগ নির্বিঘ্ন করতে চলমান মেগা প্রকল্পগুলোর বাস্তব অগ্রগতি নিয়ে ঢাকা পোস্টের বিশেষ মাঠপর্যায়ের অনুসন্ধান।',
    summaryEn: 'In-depth video analysis examining orbital bypass networks, flyovers, and automated traffic command centers under construction around Dhaka.',
    content: `রাজধানী ঢাকাকে একটি আধুনিক ও বাসযোগ্য মেগাসিটিতে রূপান্তর করার অংশ হিসেবে ঢাকা এলিভেটেড এক্সপ্রেসওয়ে এবং প্রস্তাবিত আউটার রিং রোডের কাজ এগিয়ে চলেছে।

আমাদের বিশেষ ভিডিও প্রতিবেদনে বিশ্লেষণ করা হয়েছে কীভাবে এই পথগুলো চালু হলে আন্তঃজেলা বাস ও ট্রাক সরাসরি ঢাকার ভেতরে না ঢুকে বাইপাস দিয়ে চলাচল করতে পারবে। ফলে শহরের প্রাণকেন্দ্রে যানবাহনের স্বাভাবিক গতি বৃদ্ধি পাবে।`,
    contentEn: `Dhaka Post’s ground investigative report inspects elevated arteries, showing how freight traffic can circumvent city thoroughfares to slash inner-city congestion.`,
    category: 'video',
    categoryLabel: 'ভিডিও',
    categoryLabelEn: 'Video',
    image: '/src/assets/images/hero_dhaka_lead_1792210132571.jpg',
    caption: 'ঢাকা এলিভেটেড এক্সপ্রেসওয়ের ড্রোন শট। ভিডিও: ঢাকা পোস্ট মাল্টিমিডিয়া',
    captionEn: 'Aerial perspective of Dhaka Elevated Expressway. Video: Dhaka Post Multimedia',
    author: 'ঢাকা পোস্ট মাল্টিমিডিয়া টিম',
    authorEn: 'Dhaka Post Multimedia Team',
    reporterTitle: 'ভিডিও জার্নালিজম ইউনিট',
    reporterTitleEn: 'Video Journalism Unit',
    location: 'ঢাকা',
    locationEn: 'Dhaka',
    publishedAt: '১৭ অক্টোবর ২০২৬, সকাল ৬:৪৫',
    publishedTimeAgo: '৯ ঘণ্টা আগে',
    publishedTimeAgoEn: '9 hours ago',
    readTime: '৫ মিনিট ভিডিও',
    readTimeEn: '5 min video',
    isVideo: true,
    videoDuration: '০৪:১৫',
    videoUrl: 'https://www.youtube.com',
    tags: ['ভিডিও', 'উড়ালসড়ক', 'ঢাকা', 'মেগা প্রকল্প']
  },
  {
    id: 'art-11',
    title: 'সম্পাদকীয়: তরুণদের উদ্ভাবনী শক্তি ও ভবিষ্যৎ কর্মসংস্থান সৃষ্টিতে নীতি সহায়তার গুরুত্ব',
    titleEn: 'Editorial: Fostering youth entrepreneurship and modern job creation via progressive policy',
    summary: 'ডিগ্রিভিত্তিক শিক্ষার পাশাপাশি প্রায়োগিক প্রযুক্তি দক্ষতা ও স্টার্টআপ বান্ধব ট্যাক্স প্রণোদনা এখন সময়ের জরুরি দাবি। দেশের মেধার সর্বোত্তম বিকাশ ঘটাতে কার্যকর কর্মপরিকল্পনা প্রয়োজন।',
    summaryEn: 'Translating academic potential into competitive global knowledge-economy careers demands streamlined regulatory incentives and industry-academia synergy.',
    content: `জনমিতিক লভ্যাংশ বা ডেমোগ্রাফিক ডিভিডেন্ডের সুবর্ণ সময়ে অবস্থান করছে বাংলাদেশ। দেশের মোট জনসংখ্যার প্রায় অর্ধেকই তরুণ ও কর্মক্ষম। তবে এই সম্ভাবনাময় জনগোষ্ঠীকে দক্ষ মানবসম্পদে রূপান্তর করতে না পারলে আগামী দিনে সংকট তীব্র হতে পারে।

প্রথাগত মুখস্থনির্ভর শিক্ষাব্যবস্থার বাইরে বেরিয়ে কৃত্রিম বুদ্ধিমত্তা, সাইবার নিরাপত্তা, রোবোটিক্স এবং বৈশ্বিক আউটসোর্সিংয়ে তরুণদের প্রশিক্ষণ নিশ্চিত করা দরকার। পাশাপাশি তরুণ উদ্যোক্তাদের জন্য সহজ শর্তে সিড ফান্ডিং বা জামানতবিহীন ঋণ সুবিধা সম্প্রসারণ করা রাষ্ট্রের অগ্রাধিকার হওয়া উচিত।`,
    contentEn: `Harnessing demographic dividends requires bold educational reform emphasizing adaptive vocational skills, analytical technology, and frictionless capital access for new ventures.`,
    category: 'opinion',
    categoryLabel: 'মতামত',
    categoryLabelEn: 'Opinion',
    image: '/src/assets/images/news_tech_bangladesh_1792210134672.jpg',
    caption: 'মেধা ও প্রযুক্তির সম্মিলন। ছবি: ঢাকা পোস্ট',
    captionEn: 'Creative enterprise and young talent. Photo: Dhaka Post',
    author: 'মো. আনিসুল হক',
    authorEn: 'Md. Anisul Haque',
    reporterTitle: 'কলামিস্ট ও শিক্ষাবিদ',
    reporterTitleEn: 'Columnist & Academic',
    location: 'ঢাকা',
    locationEn: 'Dhaka',
    publishedAt: '১৭ অক্টোবর ২০২৬, সকাল ৬:০০',
    publishedTimeAgo: '১০ ঘণ্টা আগে',
    publishedTimeAgoEn: '10 hours ago',
    readTime: '৪ মিনিট পঠন',
    readTimeEn: '4 min read',
    tags: ['মতামত', 'সম্পাদকীয়', 'শিক্ষা', 'কর্মসংস্থান', 'তরুণ']
  },
  {
    id: 'art-12',
    title: 'সিলেটের চা বাগানে পর্যটনের ভরা মৌসুম: সবুজ গালিচায় প্রকৃতির সান্নিধ্যে দর্শনার্থীরা',
    titleEn: 'Peak travel season in Sylhet tea valleys: Serene verdant escapes draw eco-tourists',
    summary: 'শ্রীমঙ্গল ও মৌলভীবাজারের ছায়াঘেরা পাহাড়ি চা বাগানগুলোতে ছুটির দিনে ভিড় জমিয়েছেন প্রকৃতিপ্রেমীরা। স্থানীয় হোমস্টে ও রিসোর্টগুলো পরিবেশবান্ধব আতিথেয়তার নতুন দৃষ্টান্ত গড়ছে।',
    summaryEn: 'Rolling undulating tea estates in Sreemangal and Moulvibazar welcome visitors seeking tranquility amidst gentle mist and lush greenery.',
    content: `চা-বাগানের দেশ খ্যাত সিলেট অঞ্চলে এখন প্রকৃতিপ্রেমীদের মিলনমেলা। পাহাড়ের ঢালজুড়ে যত দূর চোখ যায় শুধুই সবুজের সমারোহ।

স্থানীয় পর্যটন উদ্যোক্তারা জানান, ছুটির দিনগুলোতে পারিবারিক ও বন্ধুদের দল নিয়ে হাজারো মানুষ শ্রীমঙ্গলের লাউয়াছড়া জাতীয় উদ্যান, মাধবপুর লেক ও খাসিয়া পুঞ্জির সংস্কৃতি উপভোগ করতে আসছেন। সবুজ বনভূমির জীববৈচিত্র্য সংরক্ষণে দর্শনার্থীদের আরও দায়িত্বশীল হওয়ার আহ্বান জানিয়েছেন বন কর্মকর্তারা।`,
    contentEn: `Eco-travelers relish the verdant terraces of Sylhet’s tea garden belt, celebrating tranquil nature trails and indigenous rainforest biodiversity.`,
    category: 'district',
    categoryLabel: 'সারাদেশ',
    categoryLabelEn: 'Districts',
    division: 'sylhet',
    district: 'moulvibazar',
    districtEn: 'Moulvibazar',
    image: '/src/assets/images/news_river_gallery_1792210134257.jpg',
    caption: 'মৌলভীবাজারের নয়নাভিরাম সবুজ চা বাগান। ছবি: ঢাকা পোস্ট',
    captionEn: 'Lush greenery of Sreemangal tea estates. Photo: Dhaka Post',
    author: 'দেবাশীষ সেন',
    authorEn: 'Debashis Sen',
    reporterTitle: 'সিলেট বিশেষ প্রতিনিধি',
    reporterTitleEn: 'Sylhet Special Correspondent',
    location: 'শ্রীমঙ্গল, মৌলভীবাজার',
    locationEn: 'Sreemangal, Moulvibazar',
    publishedAt: '১৬ অক্টোবর ২০২৬, রাত ৯:৩০',
    publishedTimeAgo: '১ দিন আগে',
    publishedTimeAgoEn: '1 day ago',
    readTime: '২ মিনিট পঠন',
    readTimeEn: '2 min read',
    tags: ['সারাদেশ', 'সিলেট', 'চা বাগান', 'ভ্রমণ']
  }
];

export const EPAPER_PAGES = [
  { page: 1, title: 'জাতীয় ও প্রধান খবর (পৃষ্ঠা ১)' },
  { page: 2, title: 'রাজনীতি ও সংসদ (পৃষ্ঠা ২)' },
  { page: 3, title: 'বাণিজ্য ও অর্থনীতি (পৃষ্ঠা ৩)' },
  { page: 4, title: 'সম্পাদকীয় ও মতামত (পৃষ্ঠা ৪)' },
  { page: 5, title: 'সারাদেশ ও জেলা সংবাদ (পৃষ্ঠা ৫)' },
  { page: 6, title: 'আন্তর্জাতিক বিশ্ব (পৃষ্ঠা ৬)' },
  { page: 7, title: 'খেলাধুলা ও বিনোদন (পৃষ্ঠা ৭)' },
  { page: 8, title: 'তথ্যপ্রযুক্তি ও ফিচার (পৃষ্ঠা ৮)' }
];
