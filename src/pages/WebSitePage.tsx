import { AnimatePresence, motion } from 'motion/react';
import { type ReactNode, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Bot,
  CalendarCheck,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  Database,
  FileQuestion,
  FormInput,
  Globe,
  Languages,
  MessageSquare,
  MousePointerClick,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from 'lucide-react';
import JsonLd from '../components/JsonLd';
import { useSEO } from '../hooks/useSEO';
import { useAutoSnapScroll } from '../hooks/useAutoSnapScroll';

type ScenarioId = 'clinic' | 'commerce' | 'hotel' | 'consulting' | 'beauty' | 'education';
type FaqIndex = number | null;

function StatCard({ icon, title, hint }: { icon: ReactNode; title: string; hint: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 premium-shadow premium-shadow-hover h-full">
      <div className="w-11 h-11 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-base font-bold text-dark">{title}</h3>
      <p className="text-xs text-gray-500 font-medium leading-relaxed mt-2">{hint}</p>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 premium-shadow premium-shadow-hover hover:border-brand/20 h-full">
      <div className="w-12 h-12 rounded-lg bg-brand/5 border border-brand/10 text-brand flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-dark mb-2">{title}</h3>
      <p className="text-sm text-gray-500 font-medium leading-relaxed">{desc}</p>
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
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24 }}
            className="px-5 pb-5"
          >
            <p className="text-sm text-gray-500 font-medium leading-relaxed">{a}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function HeroChatDemo() {
  const [showLead, setShowLead] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-2xl shadow-dark/10 overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between gap-4 bg-gray-50">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-lg bg-dark text-white flex items-center justify-center shrink-0">
            <Bot className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <p className="font-bold text-dark truncate">Oxonom Web Chatbot</p>
            <p className="text-xs text-gray-500 font-medium truncate">Canlı demo • Web sitesi asistanı</p>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-emerald-500" /> Aktif
        </span>
      </div>

      <div className="p-5 bg-gradient-to-b from-white to-gray-50 space-y-3">
        <div className="flex justify-start">
          <div className="max-w-[92%] rounded-xl px-4 py-3 bg-white border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">
            Diş implant fiyatları hakkında bilgi alabilir miyim?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[92%] rounded-xl px-4 py-3 bg-dark text-sm font-medium text-white shadow-lg shadow-dark/15">
            Elbette. Size uygun bilgi verebilmem için kaç diş için implant düşündüğünüzü ve daha önce muayene olup olmadığınızı sorabilir miyim?
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[92%] rounded-xl px-4 py-3 bg-white border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">
            2 diş için düşünüyorum.
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[92%] rounded-xl px-4 py-3 bg-brand text-sm font-medium text-white shadow-lg shadow-brand/20">
            Anladım. Kliniğinizin implant tedavi seçeneklerini, ortalama süreç bilgisini ve müsait randevu saatlerini paylaşabilirim. İsterseniz sizi WhatsApp üzerinden danışmana da aktarabilirim.
          </div>
        </div>

        <AnimatePresence initial={false}>
          {showLead ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="rounded-xl border border-brand/15 bg-brand/5 p-4"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-white border border-brand/15 text-brand flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-dark">Lead kartı oluşturuldu</p>
                  <p className="text-xs text-gray-500 font-medium mt-1">İhtiyaç: implant • Adet: 2 diş • Kanal: web chatbot</p>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div className="pt-2 flex flex-col sm:flex-row gap-2">
          <button
            type="button"
            onClick={() => setShowLead((p) => !p)}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-dark text-white text-xs font-bold hover:bg-brand transition-all active:scale-[0.99]"
          >
            Lead Kartını {showLead ? 'Gizle' : 'Göster'} <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="https://wa.me/908503099901"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white border border-gray-200 text-dark text-xs font-bold hover:border-brand/25 hover:shadow-sm transition-all active:scale-[0.99]"
          >
            WhatsApp'a Aktar <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

function ScenarioDemo({ scenarioId }: { scenarioId: ScenarioId }) {
  const scenario = useMemo(() => {
    const scenarios = [
      {
        id: 'clinic',
        title: 'Klinikler',
        desc: 'Tedavi bilgisi, ön görüşme ve randevu akışları.',
        messages: [
          { from: 'user', text: 'Burun estetiği yapıyor musunuz?' },
          { from: 'bot', text: 'Evet. Size süreç, ön görüşme ve randevu seçenekleri hakkında yardımcı olabilirim. Daha önce muayene oldunuz mu?' },
        ],
      },
      {
        id: 'commerce',
        title: 'E-Ticaret',
        desc: 'Kargo, stok, iade ve ürün önerisi soruları.',
        messages: [
          { from: 'user', text: 'Bu ürünün kargosu ne zaman gelir?' },
          { from: 'bot', text: 'Teslimat süresi bulunduğunuz şehre göre değişir. Sipariş numaranızı paylaşırsanız kargo durumunu kontrol edebilirim.' },
        ],
      },
      {
        id: 'hotel',
        title: 'Oteller',
        desc: 'Müsaitlik, oda seçenekleri ve rezervasyon yönlendirme.',
        messages: [
          { from: 'user', text: 'Hafta sonu 2 kişilik oda var mı?' },
          { from: 'bot', text: 'Tarih aralığını paylaşırsanız uygun oda seçeneklerini kontrol edip sizi rezervasyon akışına yönlendirebilirim.' },
        ],
      },
      {
        id: 'consulting',
        title: 'Hukuk & Danışmanlık',
        desc: 'Ön bilgi toplama, görüşme yönlendirme ve lead skorlama.',
        messages: [
          { from: 'user', text: 'Şirket sözleşmesi için danışmanlık alabilir miyim?' },
          { from: 'bot', text: 'Elbette. Şirket türünüzü ve ihtiyacınız olan sözleşme kapsamını paylaşırsanız sizi uygun danışmanlık akışına yönlendirebilirim.' },
        ],
      },
      {
        id: 'beauty',
        title: 'Güzellik & Estetik',
        desc: 'Fiyat, işlem süreci ve randevu talepleri.',
        messages: [
          { from: 'user', text: 'Lazer epilasyon fiyatı alabilir miyim?' },
          { from: 'bot', text: 'Tabii. Bölgeye göre fiyat değişiyor. Size doğru bilgi verebilmem için hangi bölge için fiyat almak istediğinizi seçebilir misiniz?' },
        ],
      },
      {
        id: 'education',
        title: 'Eğitim',
        desc: 'Program bilgisi, kayıt süreci ve uygun danışman yönlendirme.',
        messages: [
          { from: 'user', text: 'Online İngilizce eğitimi var mı?' },
          { from: 'bot', text: 'Evet. Seviyenizi ve hedefinizi paylaşırsanız size uygun programı ve deneme dersi seçeneklerini önerebilirim.' },
        ],
      },
    ] as const;

    return scenarios.find((s) => s.id === scenarioId) ?? scenarios[0];
  }, [scenarioId]);

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="font-bold text-dark truncate">{scenario.title} Demo</p>
          <p className="text-xs text-gray-400 font-medium truncate">{scenario.desc}</p>
        </div>
        <span className="px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-[10px] font-black uppercase tracking-widest text-gray-500 shrink-0">
          Web
        </span>
      </div>
      <div className="p-5 bg-gradient-to-b from-white to-gray-50">
        <AnimatePresence mode="wait">
          <motion.div
            key={scenario.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.22 }}
            className="space-y-3"
          >
            {scenario.messages.map((m, idx) => (
              <div key={`${scenario.id}-${idx}`} className={`flex ${m.from === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[92%] rounded-xl px-4 py-3 text-sm font-medium shadow-sm ${m.from === 'user' ? 'bg-white border border-gray-200 text-gray-700' : 'bg-dark text-white'}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function WebSitePage() {
  useSEO({
    title: 'Oxonom Web Chatbot | Web Sitesi Yapay Zeka Asistanı',
    description:
      "Oxonom Web Chatbot ile web sitenize 7/24 çalışan yapay zeka asistanı ekleyin. Ziyaretçileri karşılayın, soruları cevaplayın, lead toplayın ve WhatsApp'a yönlendirin.",
    canonical: '/web-site',
    keywords:
      'web chatbot, web sitesi yapay zeka asistanı, ai chatbot, lead toplama, canlı destek otomasyonu, whatsapp yönlendirme, crm entegrasyonu, oxonom',
  });

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Oxonom Web Chatbot',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    url: 'https://oxonom.com/web-site',
    description:
      'Web sitesi ziyaretçilerini karşılayan, soruları yanıtlayan, lead toplayan ve WhatsApp/CRM yönlendirmesi yapan yapay zeka asistanı.',
  };

  const [scenarioId, setScenarioId] = useState<ScenarioId>('clinic');
  const [faqOpenIndex, setFaqOpenIndex] = useState<FaqIndex>(0);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<HTMLDivElement | null>(null);

  useAutoSnapScroll(statsRef, { intervalMs: 6400 });
  useAutoSnapScroll(featuresRef, { intervalMs: 7200 });

  const scrollToScenario = () => {
    const el = document.getElementById('web-scenarios');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const trustItems = [
    '7/24 Aktif',
    'Çok Dilli Yanıt',
    'Lead Toplama',
    'WhatsApp & CRM Entegrasyonu',
    'Kod Gerektirmeyen Kurulum',
  ];

  const problems = [
    { title: 'Mesai dışı gelen talepler kaçıyor', icon: <Clock className="w-5 h-5" /> },
    { title: 'SSS sayfaları okunmuyor', icon: <FileQuestion className="w-5 h-5" /> },
    { title: 'Form doldurma oranı düşük kalıyor', icon: <FormInput className="w-5 h-5" /> },
    { title: 'Satış ekibi aynı soruları tekrar tekrar cevaplıyor', icon: <Users className="w-5 h-5" /> },
    { title: "WhatsApp'a geçiş manuel yapılıyor", icon: <MessageSquare className="w-5 h-5" /> },
    { title: 'Web sitesi pasif bir broşür gibi kalıyor', icon: <Globe className="w-5 h-5" /> },
  ];

  const features = [
    { title: 'Site İçeriğini Anlar', desc: 'Web sitenizdeki hizmetleri, fiyat açıklamalarını, SSS’leri, blogları ve politikaları okuyarak ziyaretçiye doğru bilgi verir.', icon: <Search className="w-5 h-5" /> },
    { title: 'Anında Soru Cevaplar', desc: 'Ziyaretçi ürün, hizmet, fiyat, süreç, teslimat, randevu veya destek hakkında soru sorduğunda anında yanıtlar.', icon: <MessageSquare className="w-5 h-5" /> },
    { title: 'Lead Toplar', desc: 'İsim, telefon, e-posta, ihtiyaç, bütçe, lokasyon gibi bilgileri konuşma içinde doğal şekilde toplar.', icon: <Users className="w-5 h-5" /> },
    { title: 'Randevu ve Rezervasyon Yönlendirir', desc: 'Klinik, güzellik merkezi, danışmanlık, otel veya hizmet işletmeleri için uygun randevu akışları oluşturur.', icon: <CalendarCheck className="w-5 h-5" /> },
    { title: 'Ürün ve Hizmet Önerir', desc: 'E-ticaret ve hizmet sitelerinde ziyaretçinin ihtiyacına göre ürün, paket veya hizmet önerisi yapar.', icon: <Sparkles className="w-5 h-5" /> },
    { title: "WhatsApp'a Aktarır", desc: "Sıcak müşterileri tek tıkla WhatsApp görüşmesine taşır veya satış ekibine yönlendirir.", icon: <MousePointerClick className="w-5 h-5" /> },
    { title: 'Çok Dilli Konuşur', desc: 'Türkçe, İngilizce, Almanca, Arapça, Fransızca ve farklı dillerde ziyaretçiye kendi dilinde cevap verir.', icon: <Languages className="w-5 h-5" /> },
    { title: 'CRM ve Panel Entegrasyonu', desc: 'Toplanan müşteri bilgilerini yönetim paneline, CRM’e veya ilgili ekibe aktarır.', icon: <Database className="w-5 h-5" /> },
  ];

  const scenarios: { id: ScenarioId; label: string }[] = [
    { id: 'clinic', label: 'Klinikler' },
    { id: 'commerce', label: 'E-Ticaret' },
    { id: 'hotel', label: 'Oteller' },
    { id: 'consulting', label: 'Hukuk & Danışmanlık' },
    { id: 'beauty', label: 'Güzellik & Estetik' },
    { id: 'education', label: 'Eğitim' },
  ];

  const faqs = [
    { q: 'Web siteme eklemek zor mu?', a: 'Hayır. Oxonom ekibi kurulumu sizin için hazırlar veya basit bir kod parçası ile sitenize eklenebilir.' },
    { q: 'Bot sitemdeki bilgileri anlayabilir mi?', a: 'Evet. Hizmetleriniz, SSS’leriniz, fiyat açıklamalarınız, blog içerikleriniz ve özel dokümanlarınızla eğitilebilir.' },
    { q: "WhatsApp'a yönlendirme yapabilir mi?", a: "Evet. Sıcak müşterileri WhatsApp'a, satış ekibine veya randevu akışına aktarabilir." },
    { q: 'Çok dilli çalışır mı?', a: 'Evet. Yabancı müşteriler için farklı dillerde yanıt verebilir.' },
    { q: 'Yanlış cevap verirse ne olur?', a: 'Bilgi tabanı, yönlendirme kuralları ve insan temsilciye aktarma senaryoları ile kontrol edilebilir.' },
    { q: 'Hangi sektörler için uygundur?', a: 'Klinikler, e-ticaret, oteller, danışmanlık, hukuk, eğitim, emlak, güzellik merkezleri ve hizmet işletmeleri için uygundur.' },
  ];

  return (
    <main className="pt-32 pb-24 bg-gray-50 min-h-screen relative overflow-hidden">
      <JsonLd data={schema} />

      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <header className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start lg:items-center">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-dark rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm"
              >
                <Bot className="w-3.5 h-3.5 text-brand" />
                Web Site Yapay Zeka Asistanı
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-dark leading-[1.05] mb-5"
              >
                Web Sitenizi 7/24 Satış ve Destek Asistanına Dönüştürün
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-gray-500 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                Oxonom Web Chatbot, sitenize gelen ziyaretçileri anında karşılar, ürün ve hizmetlerinizi anlatır, soruları cevaplar, lead toplar ve uygun müşterileri WhatsApp, randevu veya satış ekibinize yönlendirir.
              </motion.p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="https://wa.me/908503099901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-brand text-white font-bold text-sm hover:bg-brand-dark transition-all shadow-lg shadow-brand/20 active:scale-[0.99]"
                >
                  Ücretsiz Demo İste <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={scrollToScenario}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-white border border-gray-200 text-dark font-bold text-sm hover:border-brand/25 hover:shadow-md transition-all active:scale-[0.99]"
                >
                  Canlı Senaryoyu Gör <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-7 flex gap-2 overflow-x-auto scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0 lg:flex-wrap">
                {trustItems.map((item) => (
                  <span key={item} className="shrink-0 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200 text-[11px] font-bold text-gray-600">
                    <Check className="w-3.5 h-3.5 text-brand" /> {item}
                  </span>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
              <HeroChatDemo />
            </motion.div>
          </div>
        </header>

        <section className="mb-14 md:mb-20" aria-labelledby="problem-title">
          <div className="text-center mb-10">
            <h2 id="problem-title" className="text-3xl md:text-4xl font-bold text-dark mb-3">
              Ziyaretçiler Sitenize Geliyor Ama Cevap Alamadan Çıkıyor
            </h2>
            <p className="text-gray-500 font-medium max-w-3xl mx-auto">
              Web siteniz trafik alıyor olabilir; sorun, o trafiği konuşmaya ve talebe dönüştürebilmek.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {problems.map((p) => (
              <div key={p.title} className="bg-white rounded-xl border border-gray-100 p-5 premium-shadow">
                <div className="w-11 h-11 rounded-lg bg-gray-50 border border-gray-100 text-gray-600 flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h3 className="text-base font-bold text-dark">{p.title}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14 md:mb-20" aria-labelledby="solution-title">
          <div className="text-center mb-10">
            <h2 id="solution-title" className="text-3xl md:text-4xl font-bold text-dark mb-3">Oxonom Web Chatbot Ne Yapar?</h2>
            <p className="text-gray-500 font-medium max-w-3xl mx-auto">
              Ziyaretçiyi karşılar, doğru bilgiyi verir ve sıcak müşteriyi satış kanalınıza taşır.
            </p>
          </div>

          <div
            ref={featuresRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0"
          >
            {features.map((feature) => (
              <div key={feature.title} className="snap-start shrink-0 w-[86vw] max-w-[390px] md:w-auto md:max-w-none">
                <FeatureCard icon={feature.icon} title={feature.title} desc={feature.desc} />
              </div>
            ))}
          </div>
        </section>

        <section id="web-scenarios" className="mb-14 md:mb-20 scroll-mt-28" aria-labelledby="scenario-title">
          <div className="text-center mb-8">
            <h2 id="scenario-title" className="text-3xl md:text-4xl font-bold text-dark mb-3">İnteraktif Sektör Senaryoları</h2>
            <p className="text-gray-500 font-medium max-w-3xl mx-auto">
              Sektörünüzü seçin; ziyaretçinin site içinde nasıl karşılandığını görün.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-xl shadow-dark/5 overflow-hidden premium-shadow">
            <div className="p-4 md:p-6 border-b border-gray-100">
              <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
                {scenarios.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setScenarioId(tab.id)}
                    aria-pressed={scenarioId === tab.id}
                    className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-lg text-xs font-bold border transition-all ${
                      scenarioId === tab.id
                        ? 'bg-dark text-white border-dark'
                        : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-white hover:border-brand/25'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-5 md:p-8 bg-gradient-to-b from-white to-gray-50">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-3">Sektöre özel bilgi tabanı</h3>
                  <p className="text-gray-500 font-medium leading-relaxed mb-6">
                    Oxonom; hizmetlerinize, fiyat açıklamalarınıza, kampanyalarınıza ve sık sorularınıza göre konuşur. Gerektiğinde WhatsApp, randevu veya CRM akışına yönlendirir.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/mesajlasma-paketleri"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-dark text-white font-bold text-sm hover:bg-brand transition-all shadow-lg shadow-dark/10 active:scale-[0.99]"
                    >
                      Mesaj Paketleri <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href="https://wa.me/908503099901"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white border border-gray-200 text-dark font-bold text-sm hover:border-brand/25 hover:shadow-md transition-all active:scale-[0.99]"
                    >
                      Demo Talep Et <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <ScenarioDemo scenarioId={scenarioId} />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-14 md:mb-20" aria-labelledby="steps-title">
          <div className="text-center mb-10">
            <h2 id="steps-title" className="text-3xl md:text-4xl font-bold text-dark mb-3">Nasıl Çalışır?</h2>
            <p className="text-gray-500 font-medium max-w-3xl mx-auto">Kurulum sade, yönetim tek panelden ilerler.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { n: '1', t: 'Web sitenizi analiz eder', d: 'Hizmetler, sayfalar, SSS ve içerikler incelenir.' },
              { n: '2', t: 'Bilgi tabanı oluşturulur', d: 'İşletmenize özel yanıt kuralları ve yönlendirmeler tanımlanır.' },
              { n: '3', t: 'Chatbot sitenize eklenir', d: 'Basit kurulumla web sitenizde görünür hale gelir.' },
              { n: '4', t: 'Konuşur ve yönlendirir', d: 'Lead toplar, WhatsApp’a aktarır ve satış ekibine kayıt açar.' },
            ].map((step) => (
              <div key={step.n} className="bg-white rounded-xl border border-gray-100 p-6 premium-shadow relative">
                <div className="w-10 h-10 rounded-lg bg-brand/5 border border-brand/10 text-brand font-black flex items-center justify-center">
                  {step.n}
                </div>
                <h3 className="mt-4 text-lg font-bold text-dark">{step.t}</h3>
                <p className="mt-2 text-sm text-gray-500 font-medium leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14 md:mb-20" aria-labelledby="panel-title">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 id="panel-title" className="text-3xl md:text-4xl font-bold text-dark mb-3">
                Tüm Görüşmeleri ve Talepleri Tek Panelden Yönetin
              </h2>
              <p className="text-gray-500 font-medium leading-relaxed mb-6">
                Lead akışı, konuşma geçmişi, aktarım kayıtları ve bot performansı tek görünümde takip edilir.
              </p>
              <Link
                to="/mesajlasma-paketleri"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand text-white font-bold text-sm hover:bg-brand-dark transition-all shadow-lg shadow-brand/20 active:scale-[0.99]"
              >
                Paketleri İncele <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-5 premium-shadow overflow-hidden">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { title: 'Yeni leadler', value: '28', icon: <Users className="w-4 h-4" /> },
                  { title: 'Konuşma geçmişi', value: '1.248', icon: <MessageSquare className="w-4 h-4" /> },
                  { title: 'En çok sorulan sorular', value: '14', icon: <FileQuestion className="w-4 h-4" /> },
                  { title: "WhatsApp'a aktarılan", value: '43', icon: <MousePointerClick className="w-4 h-4" /> },
                  { title: 'Randevu talepleri', value: '17', icon: <CalendarCheck className="w-4 h-4" /> },
                  { title: 'Dönüşüm oranı', value: '%32', icon: <BarChart3 className="w-4 h-4" /> },
                  { title: 'Dil bazlı analiz', value: '6 dil', icon: <Languages className="w-4 h-4" /> },
                  { title: 'Bot performansı', value: '%91', icon: <Zap className="w-4 h-4" /> },
                ].map((item) => (
                  <div key={item.title} className="rounded-lg bg-gray-50 border border-gray-100 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="w-8 h-8 rounded-lg bg-white border border-gray-100 text-brand flex items-center justify-center">{item.icon}</span>
                      <span className="text-lg font-black text-dark">{item.value}</span>
                    </div>
                    <p className="mt-3 text-xs font-bold text-gray-500">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-14 md:mb-20" aria-labelledby="benefits-title">
          <div className="text-center mb-10">
            <h2 id="benefits-title" className="text-3xl md:text-4xl font-bold text-dark mb-3">
              Web Siteniz Artık Sadece Bilgi Vermez, Satışa Çalışır
            </h2>
          </div>
          <div
            ref={statsRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 lg:grid-cols-6 md:gap-5 md:overflow-visible md:pb-0"
          >
            {[
              { title: '7/24 müşteri karşılama', hint: 'Gece ve hafta sonu dahil', icon: <Clock className="w-5 h-5 text-brand" /> },
              { title: 'Daha fazla dönüşüm', hint: 'Form ve WhatsApp akışı', icon: <FormInput className="w-5 h-5 text-blue-600" /> },
              { title: 'Daha az destek sorusu', hint: 'Tekrarlı sorular otomatik', icon: <FileQuestion className="w-5 h-5 text-slate-700" /> },
              { title: 'Daha hızlı yanıt', hint: 'Anlık sohbet deneyimi', icon: <Zap className="w-5 h-5 text-orange-600" /> },
              { title: 'Reklam dönüşümü', hint: 'Trafik boşa düşmez', icon: <BarChart3 className="w-5 h-5 text-emerald-600" /> },
              { title: 'Düşük operasyon maliyeti', hint: 'Ekip zamanı korunur', icon: <Workflow className="w-5 h-5 text-indigo-600" /> },
            ].map((item) => (
              <div key={item.title} className="snap-start shrink-0 w-[78vw] max-w-[320px] md:w-auto md:max-w-none">
                <StatCard icon={item.icon} title={item.title} hint={item.hint} />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14 md:mb-20" aria-labelledby="compare-title">
          <div className="text-center mb-10">
            <h2 id="compare-title" className="text-3xl md:text-4xl font-bold text-dark mb-3">Klasik Web Sitesi vs Oxonom Web Chatbot</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-100 p-6 premium-shadow">
              <h3 className="text-xl font-bold text-dark mb-5">Klasik Web Sitesi</h3>
              {['Ziyaretçi bilgiyi kendi arar', 'Form doldurması gerekir', 'Mesai dışında dönüş yoktur', 'SSS sayfaları okunmaz', 'Satış ekibi manuel takip eder'].map((item) => (
                <div key={item} className="flex items-start gap-3 py-3 border-t border-gray-100">
                  <span className="w-5 h-5 rounded-md bg-gray-100 text-gray-400 flex items-center justify-center shrink-0 mt-0.5">-</span>
                  <p className="text-sm font-medium text-gray-600">{item}</p>
                </div>
              ))}
            </div>
            <div className="bg-dark rounded-xl border border-gray-800 p-6 premium-shadow text-white">
              <h3 className="text-xl font-bold mb-5">Oxonom Web Chatbot</h3>
              {['Ziyaretçiyi karşılar', 'Soruları anında cevaplar', 'Lead toplar', "WhatsApp'a aktarır", 'CRM’e kayıt açar', '7/24 çalışır'].map((item) => (
                <div key={item} className="flex items-start gap-3 py-3 border-t border-white/10">
                  <span className="w-5 h-5 rounded-md bg-brand text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <p className="text-sm font-bold text-white/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-14 md:mb-20" aria-labelledby="security-title">
          <div className="bg-white rounded-xl border border-gray-100 p-8 md:p-10 premium-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="w-12 h-12 rounded-lg bg-brand/5 border border-brand/10 text-brand flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h2 id="security-title" className="text-3xl md:text-4xl font-bold text-dark mb-3">
                  Kontrol Sizde, Yanıtlar İşletmenize Özel
                </h2>
                <p className="text-gray-500 font-medium leading-relaxed">
                  Bilgi tabanı, yanıt tonu, yönlendirme kuralları ve hassas konu devri işletmenize göre ayarlanır.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  'Bot yalnızca onaylanan bilgi tabanına göre cevap verir',
                  'Hassas konularda insan temsilciye yönlendirme yapabilir',
                  'Yanıt tonu markaya göre özelleştirilebilir',
                  'Konuşmalar panelden takip edilebilir',
                  'KVKK uyumlu kullanım için gerekli izin metinleri eklenebilir',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-lg bg-gray-50 border border-gray-100 p-4">
                    <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <p className="text-sm font-bold text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-14 md:mb-20" aria-labelledby="faq-title">
          <div className="text-center mb-10">
            <h2 id="faq-title" className="text-3xl md:text-4xl font-bold text-dark mb-3">Sık Sorulan Sorular</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-3">
            {faqs.map((item, idx) => (
              <AccordionItem
                key={item.q}
                q={item.q}
                a={item.a}
                open={faqOpenIndex === idx}
                onToggle={() => setFaqOpenIndex((prev) => (prev === idx ? null : idx))}
              />
            ))}
          </div>
        </section>

        <section aria-labelledby="final-cta-title">
          <div className="bg-white rounded-xl border border-gray-100 p-8 md:p-10 premium-shadow text-center">
            <h2 id="final-cta-title" className="text-2xl md:text-3xl font-bold text-dark mb-3">Web Sitenizdeki Ziyaretçileri Kaçırmayın</h2>
            <p className="text-gray-500 font-medium max-w-3xl mx-auto mb-7">
              Oxonom Web Chatbot ile sitenize gelen her ziyaretçiyi anında karşılayın, sorularını cevaplayın ve satışa hazır leadlere dönüştürün.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/908503099901"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-brand text-white font-bold text-sm hover:bg-brand-dark transition-all shadow-lg shadow-brand/20 active:scale-[0.99]"
              >
                Demo Talep Et <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/908503099901"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-white border border-gray-200 text-dark font-bold text-sm hover:border-brand/25 hover:shadow-md transition-all active:scale-[0.99]"
              >
                WhatsApp'tan Görüş <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>

      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
        <a
          href="https://wa.me/908503099901"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-brand text-white font-bold text-sm shadow-2xl shadow-brand/20 active:scale-[0.99]"
        >
          Ücretsiz Demo İste <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </main>
  );
}

