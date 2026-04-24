import { AnimatePresence, motion } from 'motion/react';
import { type ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  Check,
  ChevronDown,
  ChevronRight,
  Facebook,
  MessageSquare,
  PenTool,
  Sparkles,
  Zap,
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { useAutoSnapScroll } from '../hooks/useAutoSnapScroll';
import JsonLd from '../components/JsonLd';

type DemoTabId = 'message' | 'comment' | 'design' | 'schedule';
type HeroPanelId = 'inbox' | 'comment' | 'planner' | 'design';

function StatCard({ k, v, hint }: { k: string; v: string; hint: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 overflow-hidden relative premium-shadow premium-shadow-hover">
      <div className="absolute -top-10 -right-10 w-28 h-28 bg-blue-500/10 rounded-full blur-2xl" />
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
  cta,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
  accent: string;
  cta?: ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 premium-shadow premium-shadow-hover hover:border-blue-500/20 h-full flex flex-col">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center border ${accent} mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold text-dark mb-2">{title}</h3>
      <p className="text-sm text-gray-500 font-medium leading-relaxed mb-5">{desc}</p>
      {cta ? <div className="mt-auto">{cta}</div> : null}
    </div>
  );
}

function AccordionItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-bold text-dark">{q}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="px-5 pb-5"
          >
            <p className="text-sm text-gray-500 font-medium leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function HeroPanelMockup() {
  const [panel, setPanel] = useState<HeroPanelId>('inbox');

  useEffect(() => {
    const order: HeroPanelId[] = ['inbox', 'comment', 'planner', 'design'];
    const timer = window.setInterval(() => {
      setPanel((prev) => {
        const idx = Math.max(0, order.indexOf(prev));
        return order[(idx + 1) % order.length] ?? 'inbox';
      });
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  const headerLabel = useMemo(() => {
    switch (panel) {
      case 'inbox':
        return 'Inbox';
      case 'comment':
        return 'Yorumlar';
      case 'planner':
        return 'Planlayıcı';
      case 'design':
        return 'Tasarım';
      default:
        return 'Inbox';
    }
  }, [panel]);

  return (
    <div className="relative rounded-xl bg-gradient-to-br from-[#0B1B36] to-[#081225] border border-white/10 shadow-[0_35px_90px_-25px_rgba(0,0,0,0.45)] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#1877F2]/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-white/5 rounded-full blur-3xl" />

      <div className="relative z-10 p-5 border-b border-white/10 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-lg bg-[#1877F2] text-white flex items-center justify-center font-black shrink-0 shadow-lg shadow-[#1877F2]/20">
            <Facebook className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <p className="font-bold text-white truncate">oxonom — Facebook Sayfası</p>
            <p className="text-xs text-white/60 font-medium truncate">AI Panel • Otomatik yanıt + planlama</p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/70">
            {headerLabel}
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.12)]" />
        </div>
      </div>

      <div className="relative z-10 p-5">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2 -mx-1 px-1">
          {(
            [
              { id: 'inbox', label: 'Mesaj', accent: 'text-white' },
              { id: 'comment', label: 'Yorum', accent: 'text-white/80' },
              { id: 'planner', label: 'Takvim', accent: 'text-white/80' },
              { id: 'design', label: 'Tasarım', accent: 'text-white/80' },
            ] as const
          ).map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setPanel(t.id)}
              className={`shrink-0 px-3 py-2 rounded-lg border text-[11px] font-black uppercase tracking-widest transition-colors ${
                panel === t.id ? 'bg-white text-[#0B1B36] border-white' : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-4">
          <AnimatePresence mode="wait">
            {panel === 'inbox' ? (
              <motion.div
                key="inbox"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/60">Yeni Mesaj</p>
                  <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/60">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1877F2] text-white animate-pulse shadow-lg shadow-[#1877F2]/20">1</span>
                    Bildirim
                  </span>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-xs text-white/70 font-bold mb-2">Kullanıcı</p>
                  <div className="rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-sm font-medium text-white/85">
                    Merhaba, fiyat bilgisi alabilir miyim?
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-xs text-white/70 font-bold mb-2">AI Cevap Önerisi</p>
                  <div className="rounded-lg bg-white text-[#0B1B36] px-4 py-3 text-sm font-medium shadow-sm">
                    Merhaba! Size en uygun paketi önerebilmem için işletme türünüzü öğrenebilir miyim?
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <button type="button" className="flex-1 py-2.5 rounded-lg bg-[#1877F2] text-white text-xs font-bold hover:opacity-95 active:scale-[0.99]">
                      Gönder
                    </button>
                    <button type="button" className="px-4 py-2.5 rounded-lg bg-white/10 border border-white/10 text-white text-xs font-bold hover:bg-white/15 active:scale-[0.99]">
                      Düzenle
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : null}

            {panel === 'comment' ? (
              <motion.div
                key="comment"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/60">Yorum Yanıtı</p>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-xs text-white/70 font-bold mb-2">Yorum</p>
                  <div className="rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-sm font-medium text-white/85">
                    Bu ürün hâlâ stokta var mı?
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-xs text-white/70 font-bold mb-2">AI Yanıt</p>
                  <div className="rounded-lg bg-white text-[#0B1B36] px-4 py-3 text-sm font-medium shadow-sm">
                    Merhaba, evet stokta mevcut. Detaylı bilgi için bize mesaj gönderebilirsiniz.
                  </div>
                  <button type="button" className="mt-3 w-full py-2.5 rounded-lg bg-[#1877F2] text-white text-xs font-bold hover:opacity-95 active:scale-[0.99]">
                    Yanıtla
                  </button>
                </div>
              </motion.div>
            ) : null}

            {panel === 'planner' ? (
              <motion.div
                key="planner"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/60">Planlanmış Gönderiler</p>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4 space-y-3">
                  {[
                    { day: 'Pazartesi', time: '10:00', title: 'Kampanya postu' },
                    { day: 'Çarşamba', time: '18:00', title: 'Bilgilendirici içerik' },
                    { day: 'Cuma', time: '12:30', title: 'Reels paylaşımı' },
                  ].map((i) => (
                    <div key={`${i.day}-${i.time}`} className="flex items-center justify-between gap-3 rounded-lg bg-white/10 border border-white/10 px-4 py-3">
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-white">{i.title}</p>
                        <p className="text-[11px] text-white/60 font-medium">{i.day}</p>
                      </div>
                      <span className="text-[11px] font-black text-white/80 shrink-0">{i.time}</span>
                    </div>
                  ))}
                </div>
                <button type="button" className="w-full py-2.5 rounded-lg bg-white/10 border border-white/10 text-white text-xs font-bold hover:bg-white/15 active:scale-[0.99]">
                  Takvimi Aç
                </button>
              </motion.div>
            ) : null}

            {panel === 'design' ? (
              <motion.div
                key="design"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/60">Tasarım Oluşturuluyor</p>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-xs text-white/70 font-bold mb-2">Prompt</p>
                  <div className="rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-sm font-medium text-white/85">
                    Diş kliniği için implant kampanyası tasarla
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="rounded-lg border border-white/10 overflow-hidden">
                    <div className="h-28 bg-gradient-to-r from-white/10 via-white/5 to-white/10 animate-pulse" />
                    <div className="p-4">
                      <div className="h-3 w-2/3 bg-white/10 rounded-full animate-pulse" />
                      <div className="mt-2 h-3 w-1/2 bg-white/10 rounded-full animate-pulse" />
                      <div className="mt-4 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-[#1877F2]"
                          initial={{ width: '22%' }}
                          animate={{ width: ['22%', '74%', '38%'] }}
                          transition={{ duration: 2.1, repeat: Infinity, ease: 'easeInOut' }}
                        />
                      </div>
                      <p className="mt-3 text-[11px] text-white/60 font-medium">Marka renkleri uygulanıyor • Metinler optimize ediliyor</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default function FacebookPage() {
  useSEO({
    title: 'Facebook Otomasyonu',
    description:
      "Facebook sayfanız için Messenger otomasyonu, yorum yanıtları, AI tasarım üretimi ve otomatik paylaşım takvimi. Oxonom ile Facebook yönetimini 7/24 yapay zeka ile hızlandırın.",
    canonical: '/facebook',
    keywords:
      'facebook otomasyonu, messenger otomatik yanıt, facebook yorum yanıt, facebook içerik planlama, sosyal medya ai asistan, müşteri temsilcisi, oxonom',
  });

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'OXONOM Facebook Otomasyonu',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    url: 'https://oxonom.com/facebook',
    description:
      'Facebook sayfaları için Messenger otomasyonu, yorum yanıtları, AI tasarım üretimi ve otomatik paylaşım takvimi sağlayan otonom yapay zeka çözümü.',
  };

  const [demoTab, setDemoTab] = useState<DemoTabId>('message');
  const [designPrompt, setDesignPrompt] = useState<string>('Diş kliniği için implant kampanyası tasarla');
  const [designLoading, setDesignLoading] = useState<boolean>(false);
  const [designPreview, setDesignPreview] = useState<string>('İmplant Kampanyası');
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);

  const statsSliderRef = useRef<HTMLDivElement | null>(null);
  const featuresSliderRef = useRef<HTMLDivElement | null>(null);

  useAutoSnapScroll(statsSliderRef, { intervalMs: 6200 });
  useAutoSnapScroll(featuresSliderRef, { intervalMs: 7000 });

  const STATS = [
    { k: '7/24', v: 'Otomatik Yanıt', hint: 'Messenger + yorumlara anında dönüş' },
    { k: '1 dk', v: 'İçerik Üretimi', hint: 'AI tasarım + açıklama önerileri' },
    { k: 'Tek', v: 'Panel Yönetimi', hint: 'Mesaj, yorum, planlama aynı yerde' },
    { k: 'FB', v: 'Optimize', hint: 'Facebook sayfaları için uyumlu akışlar' },
  ];

  const FEATURES = [
    {
      title: 'Messenger Otomasyonu',
      desc: 'Facebook sayfanıza gelen mesajları yapay zeka ile anında cevaplayın. Sık sorulan sorular, fiyat bilgisi, randevu talepleri ve yönlendirmeler otomatik yönetilsin.',
      icon: <MessageSquare className="w-5 h-5 text-[#1877F2]" />,
      accent: 'bg-blue-50 text-blue-600 border-blue-200',
      cta: (
        <Link
          to="/mesajlasma-paketleri"
          className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          Mesaj Paketlerini İncele <ArrowRight className="w-4 h-4" />
        </Link>
      ),
    },
    {
      title: 'Yorum Yanıtlama',
      desc: 'Gönderilerinize gelen yorumlara markanıza uygun, doğal ve hızlı cevaplar verin. Olumlu yorumları güçlendirin, soru içeren yorumları satış fırsatına dönüştürün.',
      icon: <Zap className="w-5 h-5 text-indigo-600" />,
      accent: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      cta: (
        <Link
          to="/mesajlasma-paketleri"
          className="inline-flex items-center gap-2 text-xs font-bold text-indigo-700 hover:text-indigo-800 transition-colors"
        >
          Otomasyon Paketleri <ArrowRight className="w-4 h-4" />
        </Link>
      ),
    },
    {
      title: 'AI Tasarım Oluşturucu',
      desc: 'Markanız için Facebook gönderisi, kapak görseli, kampanya tasarımı, story ve reels uyumlu kreatifler oluşturun.',
      icon: <PenTool className="w-5 h-5 text-slate-700" />,
      accent: 'bg-slate-50 text-slate-700 border-slate-200',
      cta: (
        <a
          href="https://wa.me/908503099901"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-dark transition-colors"
        >
          Demo Talep Et <ChevronRight className="w-4 h-4" />
        </a>
      ),
    },
    {
      title: 'Otomatik Paylaşım Takvimi',
      desc: 'Hazırlanan içerikleri takvime ekleyin. Oxonom belirlediğiniz gün ve saatte içeriklerinizi otomatik paylaşsın.',
      icon: <Calendar className="w-5 h-5 text-emerald-600" />,
      accent: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      cta: (
        <Link
          to="/combo-paketler"
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
        >
          Combo Paketler <ArrowRight className="w-4 h-4" />
        </Link>
      ),
    },
  ];

  const DEMO_TABS: { id: DemoTabId; label: string }[] = [
    { id: 'message', label: 'Mesaj Cevabı' },
    { id: 'comment', label: 'Yorum Cevabı' },
    { id: 'design', label: 'Tasarım Oluşturma' },
    { id: 'schedule', label: 'Otomatik Paylaşım' },
  ];

  const FAQs = [
    {
      q: 'Oxonom Facebook mesajlarına otomatik cevap verebilir mi?',
      a: 'Evet. Messenger üzerinden gelen mesajları 7/24 yanıtlayabilir; fiyat, stok, randevu ve yönlendirme gibi talepleri otomatik yönetebilir.',
    },
    {
      q: 'Yorumlara marka tonuma uygun cevap verir mi?',
      a: 'Evet. Marka dili/tonu ve kurallarınız tanımlanır; Oxonom yorumlara doğal ve tutarlı yanıtlar üretir. Gerektiğinde insana devretme akışı eklenebilir.',
    },
    {
      q: 'Tasarımları Facebook ölçülerine göre oluşturur mu?',
      a: 'Evet. Gönderi, kapak, kampanya ve video/short formatlarına uygun çıktılar üretmek üzere şablon ve ölçülerle kurgulanabilir.',
    },
    {
      q: 'İçerikleri otomatik paylaşabilir mi?',
      a: 'Evet. İçerikler takvime eklenir; belirlediğiniz gün/saatte otomatik paylaşım yapılacak şekilde planlanabilir.',
    },
    {
      q: 'Birden fazla Facebook sayfası yönetilebilir mi?',
      a: 'Evet. Birden fazla sayfa için ayrı kural setleri, içerik planları ve raporlama akışları tanımlanabilir.',
    },
  ] as const;

  const SECTORS = [
    {
      title: 'Klinikler ve diş klinikleri',
      hint: 'Randevu taleplerine otomatik dönüş + kampanya içeriklerini planlı paylaşım.',
      icon: '🦷',
    },
    {
      title: 'E-ticaret markaları',
      hint: 'Stok/teslimat sorularını cevaplayın; yorumdan satışa DM akışı kurun.',
      icon: '🛒',
    },
    {
      title: 'Restoran ve kafeler',
      hint: 'Menü soruları, rezervasyon talepleri ve günlük kampanyalar için hızlı otomasyon.',
      icon: '🍽️',
    },
    {
      title: 'Güzellik merkezleri',
      hint: 'Fiyat bilgisi + uygunluk sorgusu; yorumlara anında dönüş ve randevu yönlendirme.',
      icon: '✨',
    },
    {
      title: 'Eğitim kurumları',
      hint: 'Kayıt ve burs soruları; duyuruları takvimle düzenli paylaşım.',
      icon: '🎓',
    },
    {
      title: 'Yerel işletmeler',
      hint: 'Adres, çalışma saatleri, kampanya ve yorum yönetimini tek panelde toplayın.',
      icon: '📍',
    },
  ] as const;

  const selectedTab = useMemo(() => demoTab, [demoTab]);

  const scrollToDemo = () => {
    const el = document.getElementById('fb-demo');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleGenerateDesign = () => {
    if (designLoading) return;
    setDesignLoading(true);
    const normalized = designPrompt.trim();
    window.setTimeout(() => {
      setDesignPreview(normalized.length > 0 ? normalized : 'Kampanya Tasarımı');
      setDesignLoading(false);
    }, 1400);
  };

  return (
    <main className="pt-32 pb-24 bg-gray-50 min-h-screen relative overflow-hidden">
      <JsonLd data={schema} />

      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[900px] h-[520px] bg-slate-900/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Hero */}
        <header className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start lg:items-center">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm"
              >
                <Facebook className="w-3.5 h-3.5" />
                Meta • Facebook Pages / Messenger API
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-dark leading-[1.05] mb-5"
              >
                Facebook Sayfanızı Yapay Zeka ile Otomatik Yönetin
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-gray-500 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                Oxonom; mesajlara cevap verir, yorumları yanıtlar, tasarımlar oluşturur ve içeriklerinizi sizin yerinize otomatik paylaşır.
              </motion.p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  to="/mesajlasma-paketleri"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-[#1877F2] text-white font-bold text-sm hover:opacity-95 transition-all shadow-lg shadow-blue-500/20 active:scale-[0.99]"
                >
                  Hemen Başla <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  type="button"
                  onClick={scrollToDemo}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-white border border-gray-200 text-dark font-bold text-sm hover:border-blue-500/20 hover:shadow-md transition-all active:scale-[0.99]"
                >
                  Demo İzle <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto lg:mx-0">
                {[
                  'Messenger mesajlarına 7/24 otomatik yanıt',
                  'Yorumları satış fırsatına dönüştüren akışlar',
                  'AI ile kampanya tasarımı + metin üretimi',
                  'Takvimle planlı ve otomatik paylaşım',
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 p-4 premium-shadow">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="text-sm font-bold text-dark leading-snug">{t}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
              <HeroPanelMockup />
              <p className="mt-3 text-[11px] text-gray-400 font-medium text-center lg:text-left">
                Not: Bu bir simülasyondur. Kurallar ve ton, markanıza göre özelleştirilir.
              </p>
            </motion.div>
          </div>
        </header>

        {/* Stats */}
        <section className="mb-14 md:mb-20" aria-label="Mini istatistikler">
          <div
            ref={statsSliderRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0"
          >
            {STATS.map((s) => (
              <div key={s.v} className="snap-start shrink-0 w-[82vw] max-w-[360px] md:w-auto md:max-w-none">
                <StatCard k={s.k} v={s.v} hint={s.hint} />
              </div>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-gray-400 font-medium text-center md:hidden">Kartları kaydırarak inceleyin.</p>
        </section>

        {/* Features */}
        <section className="mb-14 md:mb-20" aria-label="Özellikler">
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-[#1877F2] rounded-full text-[10px] font-bold uppercase tracking-widest mb-5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Facebook Otomasyonu
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">Mesaj, yorum ve içerik tek akışta.</h2>
            <p className="text-gray-500 font-medium max-w-3xl mx-auto">
              Facebook sayfanızda etkileşimi hızlandırın, süreçleri otomatikleştirin ve dönüşümü artırın.
            </p>
          </div>

          <div
            ref={featuresSliderRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0"
          >
            {FEATURES.map((f) => (
              <div key={f.title} className="snap-start shrink-0 w-[86vw] max-w-[420px] md:w-auto md:max-w-none">
                <FeatureCard icon={f.icon} title={f.title} desc={f.desc} accent={f.accent} cta={f.cta} />
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/mesajlasma-paketleri"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-dark text-white font-bold text-sm hover:bg-[#1877F2] transition-all shadow-lg shadow-dark/10 active:scale-[0.99]"
            >
              Mesaj Paketleri <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/908503099901"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white border border-gray-200 text-dark font-bold text-sm hover:border-blue-500/20 hover:shadow-md transition-all active:scale-[0.99]"
            >
              Ücretsiz Demo <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Interactive demo */}
        <section id="fb-demo" className="mb-14 md:mb-20 scroll-mt-28" aria-label="Etkileşimli demo">
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-indigo-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-5 shadow-sm"
            >
              <Zap className="w-3.5 h-3.5" />
              Canlı Simülasyon
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">Gerçek akış gibi hissedin.</h2>
            <p className="text-gray-500 font-medium max-w-3xl mx-auto">
              Sekmeler arasında geçiş yapın; Oxonom’un Facebook sayfanızda neleri otomatikleştirdiğini hızlıca görün.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-xl shadow-dark/5 overflow-hidden premium-shadow">
            <div className="p-4 md:p-6 border-b border-gray-100">
              <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
                {DEMO_TABS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setDemoTab(t.id)}
                    aria-pressed={demoTab === t.id}
                    className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-lg text-xs font-bold border transition-all ${
                      demoTab === t.id
                        ? 'bg-dark text-white border-dark'
                        : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-white hover:border-blue-500/20'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-5 md:p-8 bg-gradient-to-b from-white to-gray-50">
              <AnimatePresence mode="wait">
                {selectedTab === 'message' ? (
                  <motion.div key="message" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-dark mb-3">Mesajlara anında dönüş.</h3>
                        <p className="text-gray-500 font-medium leading-relaxed mb-6">
                          Facebook sayfanıza gelen Messenger mesajlarını AI ile karşılayın; doğru soruları sorup talebi yönetin.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Link
                            to="/mesajlasma-paketleri"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#1877F2] text-white font-bold text-sm hover:opacity-95 transition-all shadow-lg shadow-blue-500/20 active:scale-[0.99]"
                          >
                            Mesaj Paketleri <ArrowRight className="w-4 h-4" />
                          </Link>
                          <a
                            href="https://wa.me/908503099901"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white border border-gray-200 text-dark font-bold text-sm hover:border-blue-500/20 hover:shadow-md transition-all active:scale-[0.99]"
                          >
                            Demo Talep Et <ChevronRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-[#1877F2] text-white flex items-center justify-center font-black">
                              FB
                            </div>
                            <div>
                              <p className="font-bold text-dark">@oxonom — Messenger</p>
                              <p className="text-xs text-gray-400 font-medium">Demo konuşma • Otomatik yanıt</p>
                            </div>
                          </div>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                            <Sparkles className="w-3 h-3 text-blue-600" /> AI
                          </span>
                        </div>
                        <div className="p-5 space-y-3 bg-gradient-to-b from-white to-gray-50">
                          <div className="flex justify-start">
                            <div className="max-w-[92%] rounded-xl px-4 py-3 bg-white border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">
                              Merhaba, fiyat bilgisi alabilir miyim?
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <div className="max-w-[92%] rounded-xl px-4 py-3 bg-[#1877F2] text-sm font-medium text-white shadow-lg shadow-blue-500/20">
                              Merhaba! Size en uygun paketi önerebilmem için işletme türünüzü öğrenebilir miyim?
                            </div>
                          </div>
                          <div className="flex justify-start">
                            <div className="max-w-[92%] rounded-xl px-4 py-3 bg-white border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">
                              E-ticaret mağazasıyız. Kargo süresi nedir?
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <div className="max-w-[92%] rounded-xl px-4 py-3 bg-[#0B1B36] text-sm font-medium text-white shadow-lg shadow-dark/15">
                              Harika! Sipariş numaranızı paylaşırsanız kargo durumunu kontrol edip size hemen iletebilirim.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : null}

                {selectedTab === 'comment' ? (
                  <motion.div key="comment" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-dark mb-3">Yorumları fırsata çevirin.</h3>
                        <p className="text-gray-500 font-medium leading-relaxed mb-6">
                          “Stok var mı?” gibi sorulara hızlı ve doğal yanıt verin; gerekirse kullanıcıyı mesajlaşmaya yönlendirin.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Link
                            to="/mesajlasma-paketleri"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-dark text-white font-bold text-sm hover:bg-[#1877F2] transition-all shadow-lg shadow-dark/10 active:scale-[0.99]"
                          >
                            Otomasyon Paketleri <ArrowRight className="w-4 h-4" />
                          </Link>
                          <a
                            href="https://wa.me/908503099901"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white border border-gray-200 text-dark font-bold text-sm hover:border-blue-500/20 hover:shadow-md transition-all active:scale-[0.99]"
                          >
                            Ücretsiz Demo <ChevronRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                          <p className="font-bold text-dark">Gönderi Yorumları</p>
                          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">AI Yanıt</span>
                        </div>
                        <div className="p-5 bg-gradient-to-b from-white to-gray-50 space-y-3">
                          <div className="rounded-xl bg-white border border-gray-200 p-4 shadow-sm">
                            <p className="text-xs font-bold text-gray-500 mb-2">Yorum</p>
                            <p className="text-sm font-medium text-gray-700">Bu ürün hâlâ stokta var mı?</p>
                          </div>
                          <div className="rounded-xl bg-[#0B1B36] border border-slate-900 p-4 shadow-lg shadow-dark/15">
                            <p className="text-xs font-bold text-white/70 mb-2">Oxonom</p>
                            <p className="text-sm font-medium text-white">
                              Merhaba, evet stokta mevcut. Detaylı bilgi için bize mesaj gönderebilirsiniz.
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button type="button" className="flex-1 py-2.5 rounded-lg bg-[#1877F2] text-white text-xs font-bold hover:opacity-95 active:scale-[0.99]">
                              Yanıtla
                            </button>
                            <button type="button" className="px-4 py-2.5 rounded-lg bg-white border border-gray-200 text-dark text-xs font-bold hover:border-blue-500/20 active:scale-[0.99]">
                              Düzenle
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : null}

                {selectedTab === 'design' ? (
                  <motion.div key="design" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-dark mb-3">Bir cümleyle tasarım üretin.</h3>
                        <p className="text-gray-500 font-medium leading-relaxed mb-6">
                          Kampanya fikrinizi yazın. Oxonom, Facebook’a uygun bir görsel + açıklama kurgusunu hızlıca hazırlasın.
                        </p>
                        <div className="flex flex-col gap-3">
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Prompt</label>
                          <input
                            value={designPrompt}
                            onChange={(e) => setDesignPrompt(e.target.value)}
                            placeholder="Örn: E-ticaret için kargo kampanyası görseli"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-dark font-medium outline-none focus:border-blue-500/30"
                          />
                          <button
                            type="button"
                            onClick={handleGenerateDesign}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#1877F2] text-white font-bold text-sm hover:opacity-95 transition-all shadow-lg shadow-blue-500/20 active:scale-[0.99] disabled:opacity-60"
                            disabled={designLoading}
                          >
                            {designLoading ? 'Oluşturuluyor…' : 'Tasarımı Oluştur'} <ArrowRight className="w-4 h-4" />
                          </button>
                          <p className="text-[11px] text-gray-400 font-medium">
                            İpucu: Prompta sektör + kampanya + hedefi yazın (örn: “randevu”, “indirim”, “stok”).
                          </p>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                          <p className="font-bold text-dark">Örnek Tasarım</p>
                          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Facebook</span>
                        </div>
                        <div className="p-5 bg-gradient-to-b from-white to-gray-50">
                          <div className="rounded-xl border border-gray-200 overflow-hidden">
                            <div className="h-36 bg-gradient-to-br from-[#1877F2] via-indigo-600 to-[#0B1B36] relative">
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_55%)]" />
                              <div className="absolute bottom-4 left-4 right-4">
                                <p className="text-white font-black text-lg leading-tight line-clamp-2">{designPreview}</p>
                                <p className="text-white/70 text-xs font-medium mt-1 line-clamp-1">Oxonom AI • Kampanya Tasarımı</p>
                              </div>
                              {designLoading ? (
                                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] font-black uppercase tracking-widest text-white animate-pulse">
                                  Render
                                </div>
                              ) : null}
                            </div>
                            <div className="p-4">
                              <p className="text-sm font-bold text-dark">Açıklama Önerisi</p>
                              <p className="mt-2 text-sm text-gray-500 font-medium leading-relaxed">
                                Kampanyamız hakkında detaylı bilgi için bize mesaj atın. Size en uygun seçeneği birlikte belirleyelim.
                              </p>
                              <div className="mt-4 flex items-center gap-2">
                                <Link
                                  to="/mesajlasma-paketleri"
                                  className="flex-1 py-2.5 rounded-lg bg-dark text-white text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#1877F2] transition-all active:scale-[0.99]"
                                >
                                  Paketleri İncele <ArrowRight className="w-4 h-4" />
                                </Link>
                                <a
                                  href="https://wa.me/908503099901"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-4 py-2.5 rounded-lg bg-white border border-gray-200 text-dark text-xs font-bold hover:border-blue-500/20 active:scale-[0.99]"
                                >
                                  Demo
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : null}

                {selectedTab === 'schedule' ? (
                  <motion.div key="schedule" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-dark mb-3">Takvime ekleyin, otomatik paylaşın.</h3>
                        <p className="text-gray-500 font-medium leading-relaxed mb-6">
                          İçerikleriniz planlı aksın. Oxonom, belirlediğiniz gün ve saatte gönderilerinizi otomatik paylaşsın.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Link
                            to="/combo-paketler"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0B1B36] text-white font-bold text-sm hover:bg-[#1877F2] transition-all shadow-lg shadow-dark/10 active:scale-[0.99]"
                          >
                            Paylaşım + Otomasyon <ArrowRight className="w-4 h-4" />
                          </Link>
                          <a
                            href="https://wa.me/908503099901"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white border border-gray-200 text-dark font-bold text-sm hover:border-blue-500/20 hover:shadow-md transition-all active:scale-[0.99]"
                          >
                            Kurulum Sor <ChevronRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                          <p className="font-bold text-dark">Takvim</p>
                          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Otomatik</span>
                        </div>
                        <div className="p-5 bg-gradient-to-b from-white to-gray-50 space-y-3">
                          {[
                            { day: 'Pazartesi', time: '10:00', title: 'Kampanya postu', tag: 'Kampanya' },
                            { day: 'Çarşamba', time: '18:00', title: 'Bilgilendirici içerik', tag: 'Eğitim' },
                            { day: 'Cuma', time: '12:30', title: 'Reels paylaşımı', tag: 'Video' },
                          ].map((i) => (
                            <div key={`${i.day}-${i.time}`} className="rounded-xl bg-white border border-gray-200 p-4 shadow-sm">
                              <div className="flex items-center justify-between gap-3">
                                <div className="min-w-0">
                                  <p className="text-sm font-bold text-dark truncate">{i.title}</p>
                                  <p className="text-xs text-gray-500 font-medium">{i.day} • {i.time}</p>
                                </div>
                                <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-black uppercase tracking-widest text-blue-600 shrink-0">
                                  {i.tag}
                                </span>
                              </div>
                            </div>
                          ))}
                          <div className="flex items-center gap-2">
                            <button type="button" className="flex-1 py-2.5 rounded-lg bg-[#1877F2] text-white text-xs font-bold hover:opacity-95 active:scale-[0.99]">
                              Otomatik Paylaşımı Aç
                            </button>
                            <button type="button" className="px-4 py-2.5 rounded-lg bg-white border border-gray-200 text-dark text-xs font-bold hover:border-blue-500/20 active:scale-[0.99]">
                              Düzenle
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mb-14 md:mb-20" aria-label="Nasıl çalışır">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">Nasıl çalışır?</h2>
            <p className="text-gray-500 font-medium max-w-3xl mx-auto">
              3 adımda Facebook otomasyonunuzu yayına alın.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: '1', t: 'Facebook sayfanızı bağlayın', d: 'Sayfa yetkilerini verin; Messenger ve yorum akışlarını aktif edin.' },
              { n: '2', t: 'Marka dilinizi tanımlayın', d: 'Yanıt kuralları, sık sorular, yönlendirmeler ve senaryoları belirleyin.' },
              { n: '3', t: 'Oxonom otomatik yönetsin', d: 'Mesajlar, yorumlar ve içerikler tek panelden otomatik aksın.' },
            ].map((s) => (
              <div key={s.n} className="bg-white rounded-xl border border-gray-100 p-6 premium-shadow">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 font-black flex items-center justify-center">
                  {s.n}
                </div>
                <h3 className="mt-4 text-lg font-bold text-dark">{s.t}</h3>
                <p className="mt-2 text-sm text-gray-500 font-medium leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sectors */}
        <section className="mb-14 md:mb-20" aria-label="Sektörlere göre kullanım">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">Sektöre göre kullanım</h2>
            <p className="text-gray-500 font-medium max-w-3xl mx-auto">
              Facebook sayfanızın trafiğine göre farklı otomasyonlar kurun.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTORS.map((s) => (
              <div key={s.title} className="bg-white rounded-xl border border-gray-100 p-6 premium-shadow premium-shadow-hover hover:border-blue-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-xl shrink-0">
                    {s.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-dark mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{s.hint}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA band */}
        <section className="mb-14 md:mb-20" aria-label="CTA">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0B1B36] to-[#081225] border border-white/10 p-8 md:p-10">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#1877F2]/25 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Facebook yönetimini manuel yapmayı bırakın.</h2>
                <p className="text-white/70 font-medium max-w-2xl">
                  Oxonom ile mesaj, yorum, tasarım ve paylaşım süreçlerini tek panelden otomatik yönetin.
                </p>
              </div>
              <Link
                to="/mesajlasma-paketleri"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-[#1877F2] text-white font-bold text-sm hover:opacity-95 transition-all shadow-lg shadow-blue-500/20 active:scale-[0.99]"
              >
                Facebook Otomasyonunu Başlat <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14 md:mb-20" aria-label="SSS">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">Sık Sorulan Sorular</h2>
            <p className="text-gray-500 font-medium max-w-3xl mx-auto">Kurulum, kullanım ve yetenekler hakkında kısa yanıtlar.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {FAQs.map((f, idx) => (
              <AccordionItem
                key={f.q}
                q={f.q}
                a={f.a}
                open={faqOpenIndex === idx}
                onToggle={() => setFaqOpenIndex((p) => (p === idx ? null : idx))}
              />
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section aria-label="Final CTA">
          <div className="bg-white rounded-xl border border-gray-100 p-8 md:p-10 premium-shadow overflow-hidden relative">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-slate-900/5 rounded-full blur-3xl" />
            <div className="relative z-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-dark mb-3">
                Facebook sayfanız artık daha hızlı, daha aktif ve daha akıllı çalışsın.
              </h2>
              <p className="text-gray-500 font-medium max-w-3xl mx-auto mb-7">
                Mesajları ve yorumları otomatik yönetin; tasarımlar üretin; içerikleri planlayın ve paylaşın.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/mesajlasma-paketleri"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-dark text-white font-bold text-sm hover:bg-[#1877F2] transition-all shadow-lg shadow-dark/10 active:scale-[0.99]"
                >
                  Ücretsiz Başla <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/908503099901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-white border border-gray-200 text-dark font-bold text-sm hover:border-blue-500/20 hover:shadow-md transition-all active:scale-[0.99]"
                >
                  Demo Talep Et <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
