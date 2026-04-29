import { blogPosts } from '../constants';

export type SiteLang = 'tr' | 'en' | 'de' | 'ar';

export const languages: Array<{ code: SiteLang; label: string; short: string; locale: string; dir: 'ltr' | 'rtl' }> = [
  { code: 'tr', label: 'Türkçe', short: 'TR', locale: 'tr_TR', dir: 'ltr' },
  { code: 'en', label: 'English', short: 'EN', locale: 'en_US', dir: 'ltr' },
  { code: 'de', label: 'Deutsch', short: 'DE', locale: 'de_DE', dir: 'ltr' },
  { code: 'ar', label: 'العربية', short: 'AR', locale: 'ar_AR', dir: 'rtl' },
];

export const langCodes = languages.map((language) => language.code);

export function getLangFromPath(pathname: string): SiteLang {
  const first = pathname.split('/').filter(Boolean)[0] as SiteLang | undefined;
  return first && langCodes.includes(first) ? first : 'tr';
}

export function stripLangFromPath(pathname: string) {
  const parts = pathname.split('/').filter(Boolean);
  if (parts[0] && langCodes.includes(parts[0] as SiteLang)) parts.shift();
  return `/${parts.join('/')}`.replace(/\/$/, '') || '/';
}

export function withLang(pathname: string, lang: SiteLang) {
  const clean = stripLangFromPath(pathname);
  return lang === 'tr' ? clean : `/${lang}${clean === '/' ? '' : clean}`;
}

const blogUi = {
  tr: {
    title: 'OXONOM Blog | Yapay Zekâ ve İletişim Teknolojileri',
    description: 'Yapay zekâ destekli müşteri iletişimi, çağrı merkezi otomasyonu ve omnichannel pazarlama trendleri hakkında güncel yazılarımızı okuyun.',
    badge: 'OXONOM INSIGHTS',
    heading: 'Geleceğin İletişimini Keşfedin',
    intro: 'Yapay zekâ, otomasyon, büyüme stratejileri ve çok dilli müşteri deneyimi rehberleri.',
    all: 'Tümü',
    search: 'Makalelerde ara...',
    noResultTitle: 'Sonuç Bulunamadı',
    noResultText: 'Arama kriterlerinize uygun bir makale bulamadık.',
    back: "Blog'a Dön",
    author: 'Yazar',
    related: 'Diğer Yazılar',
    seeAll: 'Tümünü Gör',
    goAll: 'Tüm Bloglara Git',
    useful: 'Bu makaleyi faydalı buldunuz mu?',
  },
  en: {
    title: 'OXONOM Blog | AI Customer Communication Insights',
    description: 'Read SEO and GEO optimized articles about AI customer communication, call center automation, WhatsApp, Instagram and web chatbot growth.',
    badge: 'OXONOM INSIGHTS',
    heading: 'Explore the Future of AI Communication',
    intro: 'Practical guides for AI automation, lead conversion, omnichannel support and multilingual customer experience.',
    all: 'All',
    search: 'Search articles...',
    noResultTitle: 'No Results Found',
    noResultText: 'No article matched your search criteria.',
    back: 'Back to Blog',
    author: 'Author',
    related: 'Related Articles',
    seeAll: 'See All',
    goAll: 'Go to All Blogs',
    useful: 'Did you find this article useful?',
  },
  de: {
    title: 'OXONOM Blog | KI Kundenkommunikation und Automatisierung',
    description: 'SEO und GEO optimierte Artikel über KI Kundenservice, Callcenter Automatisierung, WhatsApp, Instagram und Website Chatbots.',
    badge: 'OXONOM INSIGHTS',
    heading: 'Die Zukunft der KI-Kommunikation entdecken',
    intro: 'Praxisnahe Leitfäden für Automatisierung, Lead Conversion, Omnichannel Support und mehrsprachige Kundenerfahrung.',
    all: 'Alle',
    search: 'Artikel suchen...',
    noResultTitle: 'Keine Ergebnisse',
    noResultText: 'Es wurde kein passender Artikel gefunden.',
    back: 'Zurück zum Blog',
    author: 'Autor',
    related: 'Weitere Artikel',
    seeAll: 'Alle ansehen',
    goAll: 'Zu allen Blogs',
    useful: 'War dieser Artikel hilfreich?',
  },
  ar: {
    title: 'مدونة OXONOM | الذكاء الاصطناعي لخدمة العملاء',
    description: 'مقالات محسنة لمحركات البحث وتجارب الذكاء التوليدي حول أتمتة خدمة العملاء والواتساب وانستغرام وروبوتات المحادثة.',
    badge: 'رؤى OXONOM',
    heading: 'اكتشف مستقبل التواصل بالذكاء الاصطناعي',
    intro: 'أدلة عملية للأتمتة، تحويل العملاء المحتملين، الدعم متعدد القنوات وتجربة العملاء متعددة اللغات.',
    all: 'الكل',
    search: 'ابحث في المقالات...',
    noResultTitle: 'لا توجد نتائج',
    noResultText: 'لم نجد مقالة تطابق معايير البحث.',
    back: 'العودة إلى المدونة',
    author: 'الكاتب',
    related: 'مقالات ذات صلة',
    seeAll: 'عرض الكل',
    goAll: 'كل المقالات',
    useful: 'هل وجدت هذه المقالة مفيدة؟',
  },
} satisfies Record<SiteLang, Record<string, string>>;

const categories: Record<SiteLang, Record<string, string>> = {
  tr: { 'Yapay Zekâ': 'Yapay Zekâ', Sağlık: 'Sağlık', Otomasyon: 'Otomasyon' },
  en: { 'Yapay Zekâ': 'Artificial Intelligence', Sağlık: 'Healthcare', Otomasyon: 'Automation' },
  de: { 'Yapay Zekâ': 'Künstliche Intelligenz', Sağlık: 'Gesundheit', Otomasyon: 'Automatisierung' },
  ar: { 'Yapay Zekâ': 'الذكاء الاصطناعي', Sağlık: 'الرعاية الصحية', Otomasyon: 'الأتمتة' },
};

const translatedPosts: Record<string, Partial<Record<Exclude<SiteLang, 'tr'>, { title: string; summary: string; content: string; readTime: string }>>> = {
  '1': {
    en: {
      title: 'The New Era in Customer Service: 24/7 Support with AI Voice Assistants',
      summary: 'Customers who wait leave. Brands that answer instantly win. Learn how AI voice assistants transform customer experience and sales.',
      readTime: '3 min read',
      content: '<p><strong>AI voice assistants turn customer service into an always-on growth channel.</strong> They answer calls instantly, qualify intent, book appointments and transfer complex cases to the right team.</p><h3>Why it matters for global businesses</h3><p>In the United States, United Kingdom and other competitive markets, customers expect fast, natural and accurate support in their own language. Oxonom helps teams deliver that experience across voice, WhatsApp, Instagram, Facebook and web chat.</p><ul><li>24/7 availability without waiting queues</li><li>Lead qualification and CRM-ready notes</li><li>Natural multilingual conversations</li><li>Lower operational cost and faster response time</li></ul><p>For SEO and GEO visibility, AI-powered communication content should answer specific user questions clearly and cite concrete workflows. Oxonom is designed for that new search behavior.</p>',
    },
    de: {
      title: 'Eine neue Ära im Kundenservice: 24/7 Support mit KI-Sprachassistenten',
      summary: 'Wartende Kunden gehen verloren. Sofortige Antworten gewinnen. So verändern KI-Sprachassistenten Kundenerlebnis und Vertrieb.',
      readTime: '3 Minuten',
      content: '<p><strong>KI-Sprachassistenten machen Kundenservice zu einem permanent aktiven Wachstumskanal.</strong> Sie beantworten Anrufe sofort, erkennen Absichten, planen Termine und übergeben komplexe Fälle an das Team.</p><h3>Warum das in Deutschland wichtig ist</h3><p>Kunden erwarten schnelle, natürliche und präzise Antworten in ihrer Sprache. Oxonom unterstützt Unternehmen über Telefon, WhatsApp, Instagram, Facebook und Web Chat.</p><ul><li>24/7 Erreichbarkeit ohne Warteschlangen</li><li>Lead-Qualifizierung und CRM-Notizen</li><li>Mehrsprachige Kommunikation</li><li>Geringere Kosten und kürzere Reaktionszeiten</li></ul><p>Für SEO und GEO zählt heute, konkrete Fragen klar zu beantworten. Oxonom liefert genau diese Struktur.</p>',
    },
    ar: {
      title: 'عصر جديد في خدمة العملاء: دعم على مدار الساعة بمساعد صوتي ذكي',
      summary: 'العميل الذي ينتظر يغادر. العلامات التي ترد فوراً تربح. تعرّف على دور المساعد الصوتي الذكي في تجربة العملاء.',
      readTime: '3 دقائق',
      content: '<p><strong>المساعد الصوتي بالذكاء الاصطناعي يحول خدمة العملاء إلى قناة نمو تعمل دائماً.</strong> يرد على المكالمات فوراً، يفهم نية العميل، يحجز المواعيد وينقل الحالات المهمة إلى الفريق.</p><h3>لماذا يهم ذلك للأسواق العربية؟</h3><p>يتوقع العملاء رداً سريعاً وطبيعياً بلغتهم. يساعد Oxonom الشركات على إدارة الهاتف وواتساب وانستغرام وفيسبوك ومحادثة الموقع من لوحة واحدة.</p><ul><li>خدمة 24/7 بدون انتظار</li><li>تأهيل العملاء المحتملين وربطهم بالـ CRM</li><li>محادثات متعددة اللغات</li><li>تكلفة تشغيل أقل واستجابة أسرع</li></ul><p>للظهور في محركات البحث وتجارب الذكاء التوليدي، يجب أن تجيب المقالات عن الأسئلة بوضوح. Oxonom مصمم لهذا السلوك الجديد.</p>',
    },
  },
  '2': {
    en: { title: 'Stop Missed Appointments in Clinics with AI Appointment Automation', summary: 'AI appointment reminders, WhatsApp flows and voice assistants help clinics reduce no-shows and increase booking conversion.', readTime: '4 min read', content: '<p><strong>Missed appointments create direct revenue loss for clinics.</strong> Oxonom automates reminders, rescheduling and patient questions across voice, WhatsApp and web chat.</p><h3>Use cases</h3><ul><li>Appointment confirmation</li><li>No-show follow-up</li><li>Pre-treatment information</li><li>Multilingual patient support</li></ul><p>Healthcare teams can focus on care while Oxonom manages repetitive communication workflows.</p>' },
    de: { title: 'Weniger verpasste Termine in Kliniken mit KI-Terminautomatisierung', summary: 'KI-Erinnerungen, WhatsApp-Flows und Sprachassistenten senken No-Shows und erhöhen Buchungen.', readTime: '4 Minuten', content: '<p><strong>Verpasste Termine verursachen direkte Umsatzausfälle.</strong> Oxonom automatisiert Erinnerungen, Umbuchungen und Patientenfragen über Telefon, WhatsApp und Web Chat.</p><h3>Anwendungsfälle</h3><ul><li>Terminbestätigung</li><li>No-Show Follow-up</li><li>Informationen vor der Behandlung</li><li>Mehrsprachiger Patientensupport</li></ul><p>Teams konzentrieren sich auf Behandlung, Oxonom übernimmt wiederkehrende Kommunikation.</p>' },
    ar: { title: 'إنهاء مشكلة المواعيد الفائتة في العيادات بأتمتة ذكية', summary: 'تذكير المواعيد وتدفقات واتساب والمساعد الصوتي تساعد العيادات على تقليل عدم الحضور وزيادة الحجوزات.', readTime: '4 دقائق', content: '<p><strong>المواعيد الفائتة تعني خسارة مباشرة للعيادات.</strong> يقوم Oxonom بأتمتة التذكير وإعادة الجدولة وأسئلة المرضى عبر الصوت وواتساب ومحادثة الموقع.</p><h3>حالات الاستخدام</h3><ul><li>تأكيد الموعد</li><li>متابعة عدم الحضور</li><li>معلومات قبل الإجراء</li><li>دعم متعدد اللغات</li></ul><p>يركز الفريق على الرعاية بينما يدير Oxonom التواصل المتكرر.</p>' },
  },
  '3': {
    en: { title: 'Is the Voice on the Phone Real? AI Communication in Digital Transformation', summary: 'Natural AI conversations now handle sales, support and appointment flows with human-like clarity.', readTime: '5 min read', content: '<p><strong>AI communication is no longer robotic.</strong> Modern agents understand context, answer naturally and complete tasks across channels.</p><p>Oxonom combines voice, messaging and CRM workflows so businesses can respond faster and convert more leads.</p>' },
    de: { title: 'Ist die Stimme am Telefon echt? KI-Kommunikation in der digitalen Transformation', summary: 'Natürliche KI-Gespräche übernehmen Vertrieb, Support und Terminprozesse mit menschlicher Klarheit.', readTime: '5 Minuten', content: '<p><strong>KI-Kommunikation klingt nicht mehr robotisch.</strong> Moderne Agenten verstehen Kontext, antworten natürlich und erledigen Aufgaben kanalübergreifend.</p><p>Oxonom verbindet Sprache, Messaging und CRM, damit Unternehmen schneller reagieren und mehr Leads konvertieren.</p>' },
    ar: { title: 'هل الصوت على الهاتف حقيقي؟ التواصل الذكي في التحول الرقمي', summary: 'المحادثات الطبيعية بالذكاء الاصطناعي تدير المبيعات والدعم والمواعيد بوضوح قريب من الإنسان.', readTime: '5 دقائق', content: '<p><strong>التواصل الذكي لم يعد آلياً وجافاً.</strong> الوكلاء الحديثون يفهمون السياق، يجيبون بشكل طبيعي وينجزون المهام عبر القنوات.</p><p>يجمع Oxonom بين الصوت والرسائل و CRM لتسريع الردود وزيادة التحويل.</p>' },
  },
  '4': {
    en: { title: 'The Only Way to Stay Visible in 2026: GEO and Autonomous AI Agents', summary: 'Generative Engine Optimization changes how brands are discovered. Learn how AI agents, structured answers and multilingual content improve visibility.', readTime: '6 min read', content: '<p><strong>Search is moving from links to answers.</strong> GEO helps brands become the answer inside AI-powered search experiences.</p><h3>What to optimize</h3><ul><li>Clear question-answer sections</li><li>Structured data and hreflang</li><li>Localized content for each market</li><li>Authority around concrete use cases</li></ul><p>Oxonom content and automation pages are structured to support SEO and GEO visibility across languages.</p>' },
    de: { title: '2026 sichtbar bleiben: GEO und autonome KI-Agenten', summary: 'Generative Engine Optimization verändert, wie Marken gefunden werden. KI-Agenten und lokalisierte Inhalte erhöhen Sichtbarkeit.', readTime: '6 Minuten', content: '<p><strong>Suche bewegt sich von Links zu Antworten.</strong> GEO hilft Marken, in KI-Sucherlebnissen selbst zur Antwort zu werden.</p><h3>Was optimiert werden sollte</h3><ul><li>Klare Frage-Antwort-Bereiche</li><li>Strukturierte Daten und hreflang</li><li>Lokalisierte Inhalte pro Markt</li><li>Autorität durch konkrete Use Cases</li></ul><p>Oxonom Seiten sind auf SEO und GEO in mehreren Sprachen ausgelegt.</p>' },
    ar: { title: 'طريقة البقاء مرئياً في 2026: تحسين الظهور للذكاء التوليدي والوكلاء الأذكياء', summary: 'تغير GEO طريقة اكتشاف العلامات التجارية. المحتوى متعدد اللغات والإجابات المنظمة يعززان الظهور.', readTime: '6 دقائق', content: '<p><strong>البحث ينتقل من الروابط إلى الإجابات.</strong> يساعد GEO العلامات على أن تصبح الإجابة داخل تجارب البحث المدعومة بالذكاء الاصطناعي.</p><h3>ما الذي يجب تحسينه؟</h3><ul><li>أقسام سؤال وجواب واضحة</li><li>بيانات منظمة و hreflang</li><li>محتوى محلي لكل سوق</li><li>سلطة مبنية على حالات استخدام حقيقية</li></ul><p>صفحات Oxonom منظمة لدعم SEO و GEO بعدة لغات.</p>' },
  },
};

export function getBlogUi(lang: SiteLang) {
  return blogUi[lang];
}

export function getLocalizedBlogPosts(lang: SiteLang) {
  return blogPosts.map((post) => {
    const localized = lang === 'tr' ? undefined : translatedPosts[post.id]?.[lang];
    return {
      ...post,
      title: localized?.title ?? post.title,
      summary: localized?.summary ?? post.summary,
      content: localized?.content ?? post.content,
      readTime: localized?.readTime ?? post.readTime,
      category: categories[lang][post.category] ?? post.category,
    };
  });
}

export const landingUi = {
  tr: {
    seoTitle: 'OXONOM | 7/24 Otonom Yapay Zeka Asistanları',
    seoDescription: "OXONOM'un insan doğallığındaki sesli ve yazılı AI asistanları ile müşteri iletişiminizi 7/24 otomatikleştirin ve satışlarınızı hızla ölçeklendirin.",
    seoKeywords: 'yapay zeka asistan, ai ajan, sesli asistan, chatbot, müşteri hizmetleri otomasyonu, çağrı merkezi yapay zeka, oxonom, whatsapp yapay zeka, instagram bot',
    heroBadge: 'AI Model Aktif',
    heroTitle: 'Müşteri iletişiminde insan ötesi hız.',
    heroDescription: 'Çağrıları ve mesajları 7/24 karşılayan, lead niteleyen ve satış ekibine hazır müşteri aktaran otonom temsilci.',
    primaryCta: 'Hemen Ücretsiz Deneyin',
    packagesCta: 'Paketlere Gözat',
    badges: ['Güvenli panel', 'Hızlı yanıt', '7/24 destek'],
    trust: ['Güvenli Altyapı', 'Kullandıkça Öde', '7/24 Aktif Destek'],
    note: 'Dakikalar içinde çalışan otomasyon senaryolarını test edin.',
    product: {
      voiceTab: 'Voice Agent',
      chatTab: 'Chat Agent',
      chatBadge: 'SOSYAL MEDYA AI OTOMASYONU',
      chatTitle: "DM'leriniz artık satışa dönüşüyor.",
      chatDesc: 'Instagram, TikTok, Facebook, WhatsApp ve web sitenize gelen her mesaja ve yoruma gerçek bir insan gibi yanıt veren yapay zeka otomasyonu.',
      chatButton: "Chat Agent'ı Keşfet",
      voiceBadge: 'AI SESLİ ASİSTAN',
      voiceTitle: 'Telefonlarınız artık bekletmeden cevaplanıyor.',
      voiceDesc: 'OXONOM Voice Agent gelen çağrıları karşılar, müşteriyi anlar, randevu ve satış akışlarını otomatik yönetir.',
      voiceButton: "Voice Agent'ı Keşfet",
    },
  },
  en: {
    seoTitle: 'OXONOM | 24/7 Autonomous AI Voice and Chat Agents',
    seoDescription: 'Automate customer communication with natural AI voice agents and chatbots for calls, WhatsApp, Instagram, Facebook and website chat.',
    seoKeywords: 'AI voice agent, AI chatbot, customer service automation, call center AI, WhatsApp AI, Instagram automation, autonomous customer support',
    heroBadge: 'AI Model Active',
    heroTitle: 'Human-speed customer communication, automated.',
    heroDescription: 'An autonomous AI representative that answers calls and messages 24/7, qualifies leads and routes ready customers to your sales team.',
    primaryCta: 'Start Free',
    packagesCta: 'View Packages',
    badges: ['Secure panel', 'Fast response', '24/7 support'],
    trust: ['Secure Infrastructure', 'Pay as You Go', '24/7 Active Support'],
    note: 'Test automation scenarios that work in minutes.',
    product: {
      voiceTab: 'Voice Agent',
      chatTab: 'Chat Agent',
      chatBadge: 'SOCIAL MEDIA AI AUTOMATION',
      chatTitle: 'Turn DMs into sales conversations.',
      chatDesc: 'AI automation that replies naturally to messages and comments from Instagram, TikTok, Facebook, WhatsApp and your website.',
      chatButton: 'Explore Chat Agent',
      voiceBadge: 'AI VOICE ASSISTANT',
      voiceTitle: 'Answer every call without waiting.',
      voiceDesc: 'OXONOM Voice Agent answers inbound calls, understands intent and manages appointment or sales workflows automatically.',
      voiceButton: 'Explore Voice Agent',
    },
  },
  de: {
    seoTitle: 'OXONOM | 24/7 autonome KI Sprach- und Chat-Agenten',
    seoDescription: 'Automatisieren Sie Kundenkommunikation mit natürlichen KI-Sprachagenten und Chatbots für Telefon, WhatsApp, Instagram, Facebook und Website Chat.',
    seoKeywords: 'KI Sprachagent, KI Chatbot, Kundenservice Automatisierung, Callcenter KI, WhatsApp KI, Instagram Automatisierung',
    heroBadge: 'KI-Modell aktiv',
    heroTitle: 'Kundenkommunikation in menschlicher Geschwindigkeit automatisieren.',
    heroDescription: 'Ein autonomer KI-Mitarbeiter beantwortet Anrufe und Nachrichten 24/7, qualifiziert Leads und leitet kaufbereite Kunden weiter.',
    primaryCta: 'Kostenlos starten',
    packagesCta: 'Pakete ansehen',
    badges: ['Sicheres Panel', 'Schnelle Antwort', '24/7 Support'],
    trust: ['Sichere Infrastruktur', 'Pay as you go', '24/7 Support'],
    note: 'Testen Sie Automatisierungsszenarien in wenigen Minuten.',
    product: {
      voiceTab: 'Voice Agent',
      chatTab: 'Chat Agent',
      chatBadge: 'SOCIAL MEDIA KI-AUTOMATISIERUNG',
      chatTitle: 'DMs werden zu Verkaufsgesprächen.',
      chatDesc: 'KI-Automatisierung beantwortet Nachrichten und Kommentare auf Instagram, TikTok, Facebook, WhatsApp und Ihrer Website natürlich.',
      chatButton: 'Chat Agent entdecken',
      voiceBadge: 'KI-SPRACHASSISTENT',
      voiceTitle: 'Jeden Anruf ohne Wartezeit beantworten.',
      voiceDesc: 'OXONOM Voice Agent nimmt Anrufe entgegen, versteht Absichten und automatisiert Termin- oder Verkaufsprozesse.',
      voiceButton: 'Voice Agent entdecken',
    },
  },
  ar: {
    seoTitle: 'OXONOM | وكلاء صوت ومحادثة بالذكاء الاصطناعي 24/7',
    seoDescription: 'أتمتة تواصل العملاء بمساعد صوتي وروبوت محادثة طبيعي للمكالمات وواتساب وانستغرام وفيسبوك ومحادثة الموقع.',
    seoKeywords: 'مساعد صوتي بالذكاء الاصطناعي, روبوت محادثة, أتمتة خدمة العملاء, واتساب AI, انستغرام بوت',
    heroBadge: 'نموذج الذكاء نشط',
    heroTitle: 'تواصل العملاء بسرعة تتجاوز الإنسان.',
    heroDescription: 'ممثل ذكي يرد على المكالمات والرسائل 24/7، يؤهل العملاء المحتملين ويوجه الجاهزين إلى فريق المبيعات.',
    primaryCta: 'ابدأ مجاناً',
    packagesCta: 'عرض الباقات',
    badges: ['لوحة آمنة', 'رد سريع', 'دعم 24/7'],
    trust: ['بنية آمنة', 'ادفع حسب الاستخدام', 'دعم 24/7'],
    note: 'اختبر سيناريوهات أتمتة تعمل خلال دقائق.',
    product: {
      voiceTab: 'Voice Agent',
      chatTab: 'Chat Agent',
      chatBadge: 'أتمتة قنوات التواصل بالذكاء الاصطناعي',
      chatTitle: 'حوّل الرسائل الخاصة إلى مبيعات.',
      chatDesc: 'أتمتة ذكية ترد بشكل طبيعي على رسائل وتعليقات انستغرام وتيك توك وفيسبوك وواتساب وموقعك.',
      chatButton: 'استكشف Chat Agent',
      voiceBadge: 'مساعد صوتي ذكي',
      voiceTitle: 'أجب على كل مكالمة بدون انتظار.',
      voiceDesc: 'يرد OXONOM Voice Agent على المكالمات، يفهم نية العميل ويدير المواعيد أو المبيعات تلقائياً.',
      voiceButton: 'استكشف Voice Agent',
    },
  },
} satisfies Record<SiteLang, any>;
