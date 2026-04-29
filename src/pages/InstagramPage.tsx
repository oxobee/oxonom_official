import { motion, AnimatePresence } from 'motion/react';
import { type ReactNode, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  ChevronRight,
  Globe,
  Instagram,
  KeyRound,
  LayoutGrid,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { useAutoSnapScroll } from '../hooks/useAutoSnapScroll';
import JsonLd from '../components/JsonLd';

type Scenario = {
  id: string;
  title: string;
  desc: string;
  example: { user: string; bot: string }[];
  tags: string[];
};

const STATS = [
  { k: '7/24', v: 'DM Yanıtlama', hint: 'Gelen mesajlara anında dönüş' },
  { k: '%70', v: 'Etkileşim Artışı', hint: 'Hızlı yanıt + daha çok dönüşüm' },
  { k: 'Auto', v: 'Yorum Yanıtlama', hint: 'Yorumdan DM’e otomatik akış' },
  { k: 'AI', v: 'Lead Skorlama', hint: 'Niyet analizi + CRM kaydı' },
];

const SCENARIOS: Scenario[] = [
  {
    id: 'dm',
    title: 'Tüm DM’ler → AI Yanıt',
    desc: 'Müşteri DM attığında Oxonom anında cevap verir; fiyat, kampanya, stok, randevu — hepsi otomatik.',
    tags: ['DM', '7/24', 'Satış'],
    example: [
      {
        user: 'Merhaba, fiyatlar nedir?',
        bot: 'Merhaba! Size hemen fiyat listemizi ileteyim. Hangi ürün/hizmet için bilgi almak istersiniz?',
      },
      {
        user: 'Randevu oluşturabilir miyiz?',
        bot: 'Elbette. Bugün ve yarın için uygun saat aralığınızı yazar mısınız? Sizin için yönlendireyim.',
      },
    ],
  },
  {
    id: 'comments',
    title: 'Yorum → Yanıt + DM',
    desc: 'Gönderiye yorum yapan herkese otomatik yanıt verilir, detay bilgi DM’den iletilir. “Fiyat?” yorumları fırsata dönüşür.',
    tags: ['Yorum', 'DM', 'Anahtar Kelime'],
    example: [
      { user: 'Yorum: Fiyat?', bot: 'Yorum yanıtı: Teşekkürler! Size DM’den detaylı bilgi gönderdik.' },
      {
        user: 'DM: Ne kadar?',
        bot: 'Kampanya fiyatımızı paylaşıyorum. Uygun görürseniz hemen randevu / satın alma adımına geçebiliriz.',
      },
    ],
  },
  {
    id: 'keywords',
    title: 'Anahtar Kelime → Aksiyon',
    desc: '“fiyat”, “bilgi”, “randevu”, “kargo” gibi kelimeler algılanır; ilgili senaryo otomatik başlatılır.',
    tags: ['Tetikleme', 'Senaryo', 'Otomasyon'],
    example: [
      { user: 'Kargo ne zaman çıkar?', bot: 'Sipariş numaranızı yazarsanız hemen kontrol edip size teslimat tarihini ileteyim.' },
      { user: 'İndirim var mı?', bot: 'Şu an aktif kampanyamız var. Size uygun seçeneği önermek için bütçe aralığınızı paylaşır mısınız?' },
    ],
  },
  {
    id: 'story',
    title: 'Story Etkileşimi → Otomatik Mesaj',
    desc: 'Story’ye yanıt veren kullanıcılara otomatik DM gönderin. Etkileşimi satışa çevirin.',
    tags: ['Story', 'DM', 'Lead'],
    example: [
      { user: 'Story yanıtı: Bilgi alabilir miyim?', bot: 'Tabii! Story’deki teklif için tüm detayları ve paketleri DM’den paylaşıyorum.' },
      { user: 'Tamam, nasıl başlıyoruz?', bot: 'Harika. Size en uygun paket için birkaç kısa soru soracağım ve yönlendireceğim.' },
    ],
  },
  {
    id: 'welcome',
    title: 'Yeni Takipçi → Karşılama',
    desc: 'Yeni takipçilere otomatik hoş geldin mesajı + hızlı menü gönderin. İlgisini taze yakalayın.',
    tags: ['Hoş geldin', 'Menü', 'Nurture'],
    example: [
      { user: 'Takip etti', bot: 'Hoş geldiniz! Hızlıca yardımcı olayım: Fiyat • Randevu • Kampanya • Paketler' },
      { user: 'Paketler', bot: 'Paketleri incelemeniz için sizi yönlendiriyorum. İsterseniz burada da özet paylaşabilirim.' },
    ],
  },
];

const LANGUAGE_SAMPLES: Record<string, { label: string; sample: string }> = {
  tr: { label: 'Türkçe', sample: 'Elbette! Sorunuzu anladım. Size en net yanıtı hemen paylaşıyorum.' },
};

const INSTAGRAM_FAQS = [
  {
    q: "Instagram DM'lerini Oxonom nasıl yanıtlar?",
    a: 'Oxonom, markanıza özel bilgi bankası ve kurallarla DM’leri bağlama göre anlar; fiyat, kampanya, stok, randevu gibi sorulara anında yanıt verir. Gerekirse konuşmayı tek tıkla insana devreder.',
  },
  {
    q: 'Sadece DM mi? Yorumlara da yanıt verir mi?',
    a: 'Evet. Gönderi yorumlarına otomatik yanıt verebilir; anahtar kelimeye göre ilgili kullanıcıya DM’den detay gönderip süreci satışa taşıyabilir.',
  },
  {
    q: '30+ dil desteği nasıl çalışıyor?',
    a: 'Müşterinin dilini otomatik algılar ve profesyonel bir müşteri temsilcisi gibi doğal bir tonla o dilde yanıt verir. Böylece farklı ülkelerden gelen talepleri tek akışta yönetirsiniz.',
  },
  {
    q: 'Kurulum ve entegrasyon ne kadar sürer?',
    a: 'Temel kurulum kısa sürede tamamlanır. İhtiyaca göre Meta/Instagram bağlantısı, anahtar kelime senaryoları ve CRM entegrasyonu gibi adımlar planlanarak canlıya alınır.',
  },
  {
    q: 'KVKK/GDPR uyumu ve güvenlik nasıl sağlanır?',
    a: 'Veri işleme, izin yönetimi ve güvenli aktarım süreçleri KVKK/GDPR prensiplerine göre kurgulanır. Hassas durumlarda insana devretme ve kayıt/izleme seçenekleriyle tam kontrol sağlanır.',
  },
] as const;

function StatCard({ k, v, hint }: { k: string; v: string; hint: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 overflow-hidden relative premium-shadow premium-shadow-hover">
      <div className="absolute -top-10 -right-10 w-28 h-28 bg-brand/5 rounded-full blur-2xl" />
      <p className="text-2xl font-black text-dark tracking-tight">{k}</p>
      <p className="text-sm font-bold text-gray-700 mt-1">{v}</p>
      <p className="text-xs text-gray-400 font-medium mt-2 leading-relaxed">{hint}</p>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
  accent,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
  accent: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 premium-shadow premium-shadow-hover hover:border-brand/30 h-full min-h-[210px] flex flex-col">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${accent} mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold text-dark mb-2">{title}</h3>
      <p className="text-sm text-gray-500 font-medium leading-relaxed line-clamp-4">{desc}</p>
    </div>
  );
}

function ChatDemo({ scenarioId }: { scenarioId: string }) {
  const scenario = useMemo(() => SCENARIOS.find(s => s.id === scenarioId) ?? SCENARIOS[0], [scenarioId]);

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-2xl shadow-dark/10 overflow-hidden w-full">
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center text-white font-black shrink-0">
            IG
          </div>
          <div className="min-w-0">
            <p className="font-bold text-dark truncate">@oxonom — DM</p>
            <p className="text-xs text-gray-400 font-medium truncate">Demo konuşma • Otomatik yanıt</p>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
          <Sparkles className="w-3 h-3 text-brand" /> AI
        </span>
      </div>

      <div className="p-6 bg-gradient-to-b from-white to-gray-50">
        <AnimatePresence mode="wait">
          <motion.div
            key={scenario.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="space-y-3"
          >
            {scenario.example.slice(0, 2).map((m, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex justify-start">
                  <div className="max-w-[92%] sm:max-w-[80%] rounded-xl px-4 py-3 bg-white border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">
                    {m.user}
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[92%] sm:max-w-[80%] rounded-xl px-4 py-3 bg-blue-600 text-white text-sm font-medium shadow-lg shadow-blue-600/15">
                    {m.bot}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-2 pt-2">
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" />
              <p className="text-xs text-gray-400 font-bold">Oxonom yazıyor…</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-5 border-t border-gray-100 bg-white">
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/mesajlasma-paketleri"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-brand to-pink-600 text-white font-bold text-sm hover:from-brand-dark hover:to-pink-700 transition-all shadow-lg shadow-brand/20 active:scale-[0.99]"
          >
            Paketleri İncele <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://wa.me/908503099901"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white border border-gray-200 text-dark font-bold text-sm hover:border-brand/30 hover:shadow-md transition-all active:scale-[0.99]"
          >
            Ücretsiz Demo <ChevronRight className="w-4 h-4" />
          </a>
        </div>
        <p className="mt-3 text-[11px] text-gray-400 font-medium text-center">
          Not: Örnek konuşma; içerik ve ton markanıza göre özelleştirilir.
        </p>
      </div>
    </div>
  );
}

export default function InstagramPage() {
  useSEO({
    title: 'Instagram',
    description:
      "Instagram DM'lerini ve yorumlarını 7/24 yanıtlayan, lead'i nitelendirip satışa yönlendiren OXONOM AI Instagram asistanı. Yorum otomasyonu + DM + 30+ dil desteği.",
    canonical: '/instagram',
    keywords:
      'instagram dm otomasyon, instagram yorum yanıt, instagram ai asistan, meta business api, lead skorlama, sosyal medya müşteri temsilcisi, 30+ dil, oxonom',
  });

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'OXONOM Instagram AI Asistan',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    url: 'https://oxonom.com/instagram',
    description:
      'Instagram DM ve yorumlarını otomatik yanıtlayan; anahtar kelime tetikleme, story etkileşimi ve lead skorlama yapan otonom müşteri temsilcisi.',
  };

  const [scenarioId, setScenarioId] = useState<Scenario['id']>('dm');
  const [lang, setLang] = useState<string>('tr');
  const [idea, setIdea] = useState<string>('');
  const [soonOpen, setSoonOpen] = useState<boolean>(false);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);
  const [heroQuestion, setHeroQuestion] = useState<string>('');
  const statsSliderRef = useRef<HTMLDivElement | null>(null);
  const featuresSliderRef = useRef<HTMLDivElement | null>(null);
  const scenariosSliderRef = useRef<HTMLDivElement | null>(null);

  const languageSample = LANGUAGE_SAMPLES[lang] ?? LANGUAGE_SAMPLES.tr;
  const selectedScenario = useMemo(() => SCENARIOS.find(s => s.id === scenarioId) ?? SCENARIOS[0], [scenarioId]);

  const heroPreviewUser =
    heroQuestion.trim().length > 0
      ? heroQuestion.trim()
      : (selectedScenario.example[0]?.user ?? 'Merhaba! Bilgi alabilir miyim?');
  const heroPreviewBot =
    lang === 'tr'
      ? (selectedScenario.example[0]?.bot ?? languageSample.sample)
      : languageSample.sample;

  useAutoSnapScroll(statsSliderRef, { intervalMs: 6000 });
  useAutoSnapScroll(featuresSliderRef, { intervalMs: 6400 });
  useAutoSnapScroll(scenariosSliderRef, { intervalMs: 6800 });

  const features = [
    {
      title: 'AI DM Yanıtlama',
      desc: 'Müşteri DM attığında Oxonom anında yanıt verir. Fiyat sorar, randevu ister, bilgi alır — hepsi otomatik.',
      icon: <MessageSquare className="w-5 h-5 text-pink-600" />,
      accent: 'bg-pink-50 text-pink-600 border-pink-200',
    },
    {
      title: 'Yorum Otomasyonu (Yanıt + DM)',
      desc: 'Gönderi yorumlarına otomatik cevap verin; “fiyat?” yazan herkese DM’den detay gönderin. Sadece DM değil, yorumlara da yanıt.',
      icon: <Star className="w-5 h-5 text-orange-600" />,
      accent: 'bg-orange-50 text-orange-700 border-orange-200',
    },
    {
      title: 'Anahtar Kelime Tetikleme',
      desc: '“fiyat”, “bilgi”, “randevu” gibi kelimeleri algılar; ilgili senaryoyu başlatır, sohbeti satışa taşır.',
      icon: <KeyRound className="w-5 h-5 text-blue-600" />,
      accent: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      title: 'Story Yanıtı Otomasyonu',
      desc: 'Story’ye yanıt veren kullanıcılara otomatik mesaj gönderin. Etkileşimi fırsata çevirin.',
      icon: <Zap className="w-5 h-5 text-indigo-600" />,
      accent: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    },
    {
      title: 'Lead Toplama + Skorlama',
      desc: 'Gelen etkileşimleri niyete göre skorlar; uygun lead’leri satış ekibine veya CRM’e otomatik aktarır.',
      icon: <Sparkles className="w-5 h-5 text-brand" />,
      accent: 'bg-brand/5 text-brand border-brand/20',
    },
    {
      title: 'Hızlı Yanıt Şablonları',
      desc: 'Sık kullanılan yanıtları şablon olarak kaydedin. Oxonom, bağlama göre en doğru şablonu seçer ve kişiselleştirir.',
      icon: <LayoutGrid className="w-5 h-5 text-slate-700" />,
      accent: 'bg-slate-50 text-slate-700 border-slate-200',
    },
    {
      title: 'Performans Analizi',
      desc: 'Kaç DM yanıtlandı, kaç lead oluştu, hangi içerik daha çok yorum aldı — hepsini tek panelden izleyin.',
      icon: <BarChart3 className="w-5 h-5 text-indigo-600" />,
      accent: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    },
    {
      title: '30+ Dil, Ana Dili Gibi',
      desc: 'Profesyonel müşteri temsilcisi gibi gerçekçi konuşur; müşterinin dilini algılar ve tüm soruları o dilde yanıtlar (30+).',
      icon: <Globe className="w-5 h-5 text-green-600" />,
      accent: 'bg-green-50 text-green-700 border-green-200',
    },
    {
      title: 'KVKK Uyumlu Altyapı',
      desc: 'Güvenli veri işleme, izin yönetimi ve şeffaf süreçlerle KVKK/GDPR uyumlu kullanım.',
      icon: <ShieldCheck className="w-5 h-5 text-slate-700" />,
      accent: 'bg-slate-50 text-slate-700 border-slate-200',
    },
    {
      title: 'İnsan Devralma',
      desc: 'Karmaşık durumda sizi bilgilendirir; siz konuşmayı devralırsınız. Sorunsuz geçiş ve tam kontrol.',
      icon: <Check className="w-5 h-5 text-purple-600" />,
      accent: 'bg-purple-50 text-purple-700 border-purple-200',
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen relative overflow-hidden">
      <JsonLd data={schema} />

      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-pink-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[900px] h-[520px] bg-brand/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Hero */}
        <div className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start lg:items-center">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-pink-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm"
              >
                <Instagram className="w-3.5 h-3.5" />
                Meta Onaylı • Instagram Business API
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-display font-bold text-dark mb-5 tracking-tight leading-[1.05]"
              >
                Instagram
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-orange-500 to-brand">
                  AI Asistan
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto lg:mx-0 font-medium leading-relaxed"
              >
                DM mesajlarını yapay zekâ ile yanıtlayın, yorumlara otomatik cevap verin ve her etkileşimi satışa dönüştürün.
                Üstelik Oxonom, profesyonel bir müşteri temsilcisi gibi <strong className="text-dark">ana dili kadar doğal</strong> konuşur
                ve <strong className="text-dark">30+ dilde</strong> tüm soruları müşterinizin diliyle yanıtlar.
              </motion.p>

              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {[
                  { id: 'dm', label: 'DM', icon: <MessageSquare className="w-4 h-4" /> },
                  { id: 'comments', label: 'Yorum', icon: <Star className="w-4 h-4" /> },
                  { id: 'story', label: 'Story', icon: <Zap className="w-4 h-4" /> },
                  { id: 'welcome', label: 'Takipçi', icon: <Sparkles className="w-4 h-4" /> },
                ].map(item => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setScenarioId(item.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-xs font-bold transition-all active:scale-[0.99] ${
                      scenarioId === item.id
                        ? 'bg-dark text-white border-dark shadow-sm'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-brand/30 hover:text-dark'
                    }`}
                  >
                    {item.icon} {item.label}
                  </button>
                ))}
                <span className="text-[11px] text-gray-400 font-medium ml-1">Akış seçin (demo).</span>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <Link
                  to="/mesajlasma-paketleri"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-brand to-pink-600 text-white rounded-lg font-bold text-sm hover:from-brand-dark hover:to-pink-700 transition-all shadow-xl shadow-brand/25 active:scale-[0.98]"
                >
                  Paketleri İncele <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/908503099901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-200 text-dark rounded-lg font-bold text-sm hover:border-brand/30 hover:shadow-md transition-all active:scale-[0.98]"
                >
                  Ücretsiz Demo İste <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-white rounded-xl border border-gray-100 premium-shadow p-6 md:p-7 overflow-hidden relative"
            >
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-brand/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.35em] text-brand mb-2">Hızlı Demo</p>
                    <h3 className="text-lg font-bold text-dark">Soru yazın, yanıtı görün.</h3>
                    <p className="text-xs text-gray-500 font-medium mt-1">
                      Seçtiğiniz akışa göre örnek yanıt üretir. Üretimde tüm ton ve içerik markanıza göre özelleştirilir.
                    </p>
                  </div>

                  <div className="hidden sm:flex flex-col items-end gap-2">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                      <Sparkles className="w-3 h-3 text-brand" /> {selectedScenario.title}
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                      <Globe className="w-3 h-3 text-brand" /> 30+ Dil
                    </span>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="sm:col-span-2">
                    <span className="block text-xs font-bold text-gray-500 mb-2">Müşteri sorusu</span>
                    <input
                      value={heroQuestion}
                      onChange={e => setHeroQuestion(e.target.value)}
                      placeholder="Örn: Merhaba, fiyat nedir? • Randevu alabilir miyim?"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 font-bold text-sm text-dark outline-none focus:ring-2 focus:ring-brand/30"
                    />
                    <p className="mt-1 text-[11px] text-gray-400 font-medium">İpucu: “fiyat”, “kampanya”, “randevu” gibi yazın.</p>
                  </label>

                  <label className="sm:col-span-2">
                    <span className="block text-xs font-bold text-gray-500 mb-2">Dil (demo)</span>
                    <select
                      value={lang}
                      onChange={e => setLang(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 font-bold text-sm text-dark outline-none focus:ring-2 focus:ring-brand/30"
                    >
                      {Object.entries(LANGUAGE_SAMPLES).map(([key, val]) => (
                        <option key={key} value={key}>
                          {val.label}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="mt-5 bg-gray-50 rounded-xl border border-gray-100 p-5 overflow-hidden">
                  <p className="text-[10px] font-black uppercase tracking-[0.35em] text-gray-400 mb-4">Önizleme</p>
                  <div className="space-y-3">
                    <div className="flex justify-start">
                      <div className="max-w-[92%] rounded-lg px-4 py-3 bg-white border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">
                        {heroPreviewUser}
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="max-w-[92%] rounded-lg px-4 py-3 bg-gradient-to-r from-brand to-pink-600 text-white text-sm font-medium shadow-lg shadow-brand/15">
                        {heroPreviewBot}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/mesajlasma-paketleri"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-brand to-pink-600 text-white font-bold text-sm hover:from-brand-dark hover:to-pink-700 transition-all shadow-lg shadow-brand/20 active:scale-[0.99]"
                  >
                    Paketleri İncele <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://wa.me/908503099901"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white border border-gray-200 text-dark font-bold text-sm hover:border-brand/30 hover:shadow-md transition-all active:scale-[0.99]"
                  >
                    Ücretsiz Demo <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-12 md:mb-16">
          <div
            ref={statsSliderRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 md:overflow-visible md:pb-0"
          >
            {STATS.map(s => (
              <div key={s.v} className="snap-start shrink-0 w-[78vw] max-w-[320px] md:w-auto md:max-w-none">
                <StatCard k={s.k} v={s.v} hint={s.hint} />
              </div>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-gray-400 font-medium text-center md:hidden">Kaydırarak tüm metrikleri görün.</p>
        </div>

        {/* DM → Appointment block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl border border-gray-100 shadow-xl shadow-dark/5 p-8 md:p-10 overflow-hidden relative premium-shadow"
          >
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
            <p className="text-xs font-black uppercase tracking-[0.35em] text-pink-600 mb-4 relative z-10">DM → Randevu</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 relative z-10">DM’leri randevuya dönüştürün.</h2>
            <p className="text-gray-500 font-medium leading-relaxed mb-8 relative z-10">
              Instagram DM’leri en yüksek satın alma niyetli lead’lerinizdir. Çoğu işletme saatler sonra yanıt verir. Oxonom anında
              karşılık verir, lead’i nitelendirir ve rakip araştırmadan önce aksiyona yönlendirir.
            </p>

            <div className="space-y-4 relative z-10">
              {[
                'Anında DM yanıtı',
                'Story yanıtı otomasyonu',
                'WhatsApp veya randevu sayfasına yönlendirme',
                "Lead otomatik olarak CRM'e kaydedilir",
              ].map((t, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-brand" />
                  </div>
                  <p className="text-gray-700 font-bold leading-snug">{t}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 relative z-10">
              <button
                type="button"
                onClick={() => setScenarioId('dm')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gray-50 border border-gray-200 text-dark font-bold text-sm hover:bg-white hover:border-brand/30 transition-all active:scale-[0.99]"
              >
                DM Senaryosu <ChevronRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setScenarioId('comments')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gray-50 border border-gray-200 text-dark font-bold text-sm hover:bg-white hover:border-brand/30 transition-all active:scale-[0.99]"
              >
                Yorum Senaryosu <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <ChatDemo scenarioId={scenarioId} />
          </motion.div>
        </div>

        {/* Features */}
        <div className="mb-14 md:mb-20">
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-dark rounded-full text-[10px] font-bold uppercase tracking-widest mb-5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand" />
              Instagram Bot Özellikleri
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">Her etkileşimi değere dönüştürün.</h2>
            <p className="text-gray-500 font-medium max-w-3xl mx-auto">
              DM’den satışa, yorumdan müşteriye. Sektörünüze ve markanıza göre özelleştirilmiş otomasyonlar.
            </p>
          </div>

          <div
            ref={featuresSliderRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 xl:grid-cols-5 md:gap-6 md:overflow-visible md:pb-0"
          >
            {features.map(f => (
              <div key={f.title} className="snap-start shrink-0 w-[86vw] max-w-[360px] md:w-auto md:max-w-none">
                <FeatureCard icon={f.icon} title={f.title} desc={f.desc} accent={f.accent} />
              </div>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-gray-400 font-medium text-center md:hidden">Özellik kartlarını kaydırarak inceleyin.</p>
        </div>

        {/* Scenarios */}
        <div className="mb-14 md:mb-20">
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-indigo-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-5 shadow-sm"
            >
              <Zap className="w-3.5 h-3.5" />
              Otomasyon Senaryoları
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">Her gönderi için farklı kural.</h2>
            <p className="text-gray-500 font-medium max-w-3xl mx-auto">
              Birkaç temel senaryo ile başlayın, zamanla işletmenize özel akışlar oluşturun.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-xl shadow-dark/5 p-6 md:p-10 overflow-hidden premium-shadow">
            <div
              ref={scenariosSliderRef}
              className="flex gap-2 overflow-x-auto snap-x snap-mandatory pb-3 scrollbar-hide -mx-2 px-2 md:mx-0 md:px-0 md:flex-wrap md:overflow-visible md:pb-0 mb-8"
            >
              {SCENARIOS.map(s => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setScenarioId(s.id)}
                  aria-pressed={scenarioId === s.id}
                  className={`snap-start shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                    scenarioId === s.id
                      ? 'bg-dark text-white border-dark'
                      : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-white hover:border-brand/30'
                  }`}
                >
                  {s.title}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold text-dark mb-3">{selectedScenario.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed mb-6">{selectedScenario.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedScenario.tags.map(t => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-[10px] font-bold text-gray-500 uppercase tracking-widest"
                    >
                      <Sparkles className="w-3 h-3 text-brand" /> {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/mesajlasma-paketleri"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-brand to-pink-600 text-white font-bold text-sm hover:from-brand-dark hover:to-pink-700 transition-all shadow-lg shadow-brand/20 active:scale-[0.99]"
                  >
                    Paketleri İncele <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://wa.me/908503099901"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white border border-gray-200 text-dark font-bold text-sm hover:border-brand/30 hover:shadow-md transition-all active:scale-[0.99]"
                  >
                    Kurulum Sor <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 md:p-8 overflow-hidden">
                <p className="text-xs font-black uppercase tracking-[0.35em] text-gray-400 mb-4">Örnek</p>
                <div className="space-y-3">
                  {selectedScenario.example.map((m, idx) => (
                    <div key={idx} className="space-y-3">
                      <div className="flex justify-start">
                        <div className="max-w-[92%] rounded-xl px-4 py-3 bg-white border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">
                          {m.user}
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="max-w-[92%] rounded-xl px-4 py-3 bg-blue-600 text-white text-sm font-medium shadow-lg shadow-blue-600/15">
                          {m.bot}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-language */}
        <div className="mb-14 md:mb-20">
          <div className="bg-gradient-to-br from-dark to-[#111] rounded-xl p-8 md:p-12 shadow-2xl shadow-dark/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />
            <div className="absolute right-0 top-0 w-80 h-80 bg-brand/20 rounded-full blur-3xl -mr-32 -mt-32" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/80 mb-5">
                  <Globe className="w-3.5 h-3.5 text-brand" /> 30+ Dil • Otomatik Algılama
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ana dili gibi, her müşteriye.</h2>
                <p className="text-gray-300 font-medium leading-relaxed mb-7">
                  Oxonom, müşterinizin dilini otomatik algılar; soruyu bağlamıyla birlikte anlar ve profesyonel bir müşteri temsilcisi
                  gibi doğal yanıt verir. Satış, destek, randevu, kampanya — tüm sorular müşterinizin diliyle çözülür.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <label className="flex-1">
                    <span className="block text-xs font-bold text-white/70 mb-2">Dili seçin (demo)</span>
                    <select
                      value={lang}
                      onChange={e => setLang(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white font-bold text-sm outline-none focus:ring-2 focus:ring-brand/40"
                    >
                      {Object.entries(LANGUAGE_SAMPLES).map(([key, val]) => (
                        <option key={key} value={key} className="text-dark">
                          {val.label}
                        </option>
                      ))}
                    </select>
                  </label>
                  <Link
                    to="/mesajlasma-paketleri"
                    className="sm:self-end inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-brand to-pink-600 text-white font-bold text-sm hover:from-brand-dark hover:to-pink-700 transition-all shadow-xl shadow-brand/20 active:scale-[0.99]"
                  >
                    Paketleri Gör <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="relative z-10">
                <div className="bg-white/5 border border-white/15 rounded-xl p-6 md:p-8">
                  <p className="text-xs font-black uppercase tracking-[0.35em] text-white/50 mb-4">Örnek Yanıt</p>
                  <div className="space-y-3">
                    <div className="rounded-xl px-4 py-3 bg-white/10 border border-white/15 text-white text-sm font-medium">
                      {languageSample.sample}
                    </div>
                    <div className="rounded-xl px-4 py-3 bg-white/10 border border-white/15 text-white text-sm font-medium">
                      İsterseniz sizi WhatsApp’a yönlendirebilirim veya buradan devam edebiliriz.
                    </div>
                  </div>
                  <p className="mt-4 text-[11px] text-white/60 font-medium">Dil listesi demodur. Üretimde 30+ dil desteklenir.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="mb-6">
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-brand rounded-full text-[10px] font-bold uppercase tracking-widest mb-5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" /> Çok Yakında
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">Tasarım üretimi otomatikleşiyor.</h2>
            <p className="text-gray-500 font-medium max-w-3xl mx-auto">
              Markanız için tasarım üretmek artık zaman alan bir iş değil. Fikir verin, gerisini Oxonom halletsin.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-xl shadow-dark/5 p-6 md:p-10 overflow-hidden relative premium-shadow">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-brand/10 rounded-full blur-3xl" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.35em] text-gray-400 mb-4">Yeni Özellik</p>
                <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">
                  Sadece birkaç kelime yazın.
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-500">
                    Instagram tasarımları saniyeler içinde.
                  </span>
                </h3>

                <div className="space-y-3 text-gray-600 font-medium">
                  {[
                    'Oxonom, markanıza özel profesyonel tasarımlar üretir.',
                    'Oluşturulan içerikler doğrudan takviminize eklenir.',
                    'Açıklamalar sizin yerinize yazılır ve paylaşımlar otomatik yapılır.',
                    'Tek tıkla Reels videolarına dönüşür; post + story + video birlikte üretilebilir.',
                  ].map((t, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-brand" />
                      </div>
                      <p className="leading-relaxed">{t}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-gray-700 font-bold">Kısacası: Fikir verin, gerisini Oxonom halletsin.</p>
              </div>

              <div className="relative z-10">
                <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 md:p-8">
                  <p className="text-xs font-black uppercase tracking-[0.35em] text-gray-400 mb-4">Hızlı Demo</p>

                  <label className="block">
                    <span className="block text-xs font-bold text-gray-500 mb-2">Tasarım fikri</span>
                    <input
                      value={idea}
                      onChange={e => setIdea(e.target.value)}
                      placeholder="Örn: diş kliniği için implant kampanyası, premium, sade"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 font-bold text-sm text-dark outline-none focus:ring-2 focus:ring-brand/30"
                    />
                  </label>

                  <div className="mt-4 flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => setSoonOpen(true)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-brand to-pink-600 text-white font-bold text-sm hover:from-brand-dark hover:to-pink-700 transition-all shadow-lg shadow-brand/20 active:scale-[0.99]"
                    >
                      Tasarla (Yakında) <ChevronRight className="w-4 h-4" />
                    </button>
                    <a
                      href="https://wa.me/908503099901"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white border border-gray-200 text-dark font-bold text-sm hover:border-brand/30 hover:shadow-md transition-all active:scale-[0.99]"
                    >
                      Haberdar Et <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  <AnimatePresence>
                    {soonOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="mt-5 rounded-xl bg-white border border-gray-200 p-4"
                      >
                        <p className="text-sm font-bold text-dark">Bu özellik çok yakında aktif olacak.</p>
                        <p className="text-xs text-gray-500 font-medium mt-1 leading-relaxed">
                          {idea.trim().length > 0
                            ? `Fikriniz kaydedildi: “${idea.trim()}”. Yayına alındığında sizi bilgilendirebiliriz.`
                            : 'Bir fikir yazın; yayına alındığında sizi bilgilendirebiliriz.'}
                        </p>
                        <button
                          type="button"
                          onClick={() => setSoonOpen(false)}
                          className="mt-3 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-dark font-bold text-xs hover:bg-white active:scale-[0.99]"
                        >
                          Kapat <ChevronRight className="w-4 h-4" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <p className="mt-4 text-[11px] text-gray-400 font-medium">
                    Not: Demo alanı bilgilendirme amaçlıdır; üretim özellikleri yayına alındığında aktif olur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-14 md:mt-20">
          <JsonLd
            data={{
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: INSTAGRAM_FAQS.map(faq => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: { '@type': 'Answer', text: faq.a },
              })),
            }}
          />

          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-dark rounded-full text-[10px] font-bold uppercase tracking-widest mb-5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand" />
              Sık Sorulan Sorular
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">Instagram otomasyonu hakkında.</h2>
            <p className="text-gray-500 font-medium max-w-3xl mx-auto">
              Kurulum, yorum yanıtı, DM akışları ve çoklu dil desteğiyle ilgili en çok sorulan sorular.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-3">
              {INSTAGRAM_FAQS.map((faq, index) => {
                const isOpen = faqOpenIndex === index;
                return (
                  <div
                    key={faq.q}
                    className={`bg-white rounded-xl border overflow-hidden transition-all ${
                      isOpen ? 'border-brand/30 shadow-lg shadow-brand/10' : 'border-gray-200 shadow-sm hover:border-brand/25'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setFaqOpenIndex(isOpen ? null : index)}
                      className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-dark pr-6">{faq.q}</span>
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isOpen ? 'bg-brand text-white' : 'bg-gray-50 text-gray-400'
                        }`}
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28 }}
                        >
                          <div className="px-6 pb-6 text-gray-500 font-medium leading-relaxed border-t border-gray-50 pt-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/mesajlasma-paketleri"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-gradient-to-r from-brand to-pink-600 text-white font-bold text-sm hover:from-brand-dark hover:to-pink-700 transition-all shadow-lg shadow-brand/20 active:scale-[0.99]"
              >
                Paketleri İncele <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/908503099901"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-white border border-gray-200 text-dark font-bold text-sm hover:border-brand/30 hover:shadow-md transition-all active:scale-[0.99]"
              >
                Ücretsiz Demo <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* SEO helpers */}
        <div className="sr-only">
          instagram dm otomasyonu, instagram yorum yanıtlama, instagram asistan, meta business api, instagram business api, lead
          skorlama, story yanıt otomasyonu, çoklu dil müşteri temsilcisi, yapay zeka sosyal medya otomasyon, oxonom
        </div>
      </div>
    </div>
  );
}
