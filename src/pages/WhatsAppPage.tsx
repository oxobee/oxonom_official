import { AnimatePresence, motion } from 'motion/react';
import { type ReactNode, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bell,
  CalendarCheck,
  Check,
  ChevronDown,
  ChevronRight,
  Handshake,
  MessageCircle,
  Package,
  Sparkles,
  ShoppingBag,
  Utensils,
  Zap,
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { useAutoSnapScroll } from '../hooks/useAutoSnapScroll';
import JsonLd from '../components/JsonLd';

type ScenarioId = 'clinic' | 'commerce' | 'restaurant' | 'beauty' | 'consulting';
type FlowStepId = 'new_message' | 'intent' | 'appointment' | 'slots' | 'confirm' | 'calendar' | 'reminder';

const WA_GREEN = '#25D366';
const WA_DARK = '#0B0B0B';

function StatCard({ k, v, hint }: { k: string; v: string; hint: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 overflow-hidden relative premium-shadow premium-shadow-hover">
      <div className="absolute -top-10 -right-10 w-28 h-28 bg-emerald-500/10 rounded-full blur-2xl" />
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
    <div className="bg-white rounded-xl border border-gray-100 p-6 premium-shadow premium-shadow-hover hover:border-emerald-500/20 h-full flex flex-col">
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

function WhatsAppHeroMockup() {
  const [showNotes, setShowNotes] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-2xl shadow-dark/10 overflow-hidden w-full">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between gap-4" style={{ backgroundColor: '#F6FFFA' }}>
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="w-10 h-10 rounded-lg text-white flex items-center justify-center font-black shrink-0 shadow-lg"
            style={{ backgroundColor: WA_GREEN, boxShadow: '0 18px 34px -18px rgba(37, 211, 102, 0.55)' }}
          >
            <MessageCircle className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <p className="font-bold text-dark truncate">Klinik — WhatsApp</p>
            <p className="text-xs text-gray-500 font-medium truncate">AI yanıtladı • Randevu bilgisi kontrol edildi</p>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 text-[10px] font-bold text-gray-500 uppercase tracking-widest shadow-sm">
          <Sparkles className="w-3 h-3" style={{ color: WA_GREEN }} /> AI
        </span>
      </div>

      <div className="p-5 bg-gradient-to-b from-white to-emerald-50/40">
        <div className="space-y-3">
          <div className="flex justify-start">
            <div className="max-w-[92%] rounded-xl px-4 py-3 bg-white border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">
              Merhaba Adel Hanım, kliniğimizdeki randevunuz yaklaşmıştır. Randevudan önce aklınıza takılan sorular varsa yanıtlayabilirim.
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[92%] rounded-xl px-4 py-3 text-sm font-medium text-white shadow-lg" style={{ backgroundColor: WA_GREEN, boxShadow: '0 20px 40px -22px rgba(37, 211, 102, 0.6)' }}>
              İşlemden önce aç gelmem gerekiyor mu?
            </div>
          </div>
          <div className="flex justify-start">
            <div className="max-w-[92%] rounded-xl px-4 py-3 bg-white border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">
              İşlemin türüne göre değişebilir. Size net bilgi verebilmem için randevu türünüzü kontrol ediyorum. Dilerseniz doktor notlarını da paylaşabilirim.
            </div>
          </div>
          <AnimatePresence initial={false}>
            {showNotes ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="flex justify-start"
              >
                <div className="max-w-[92%] rounded-xl px-4 py-3 bg-emerald-50 border border-emerald-100 text-sm font-medium text-emerald-900">
                  Doktor notu: İşlemden önce 2 saat ağır yemek önerilmez. Hassasiyet varsa kısa bilgilendirme yapılır.
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowNotes((p) => !p)}
            className="flex-1 py-3 rounded-lg bg-white border border-gray-200 text-dark text-xs font-bold hover:border-emerald-500/20 hover:shadow-md transition-all active:scale-[0.99]"
          >
            {showNotes ? 'Notları Gizle' : 'Doktor Notlarını Göster'}
          </button>
          <Link
            to="/mesajlasma-paketleri"
            className="px-4 py-3 rounded-lg text-white text-xs font-bold hover:opacity-95 transition-all shadow-lg active:scale-[0.99]"
            style={{ backgroundColor: WA_GREEN, boxShadow: '0 16px 34px -18px rgba(37, 211, 102, 0.6)' }}
          >
            Paketler
          </Link>
        </div>
      </div>
    </div>
  );
}

function WhatsAppChatDemo({ scenarioId }: { scenarioId: ScenarioId }) {
  const scenario = useMemo(() => {
    const scenarios = [
      {
        id: 'clinic',
        title: 'Klinik',
        desc: 'Randevu hatırlatma + işlem öncesi bilgilendirme akışı.',
        messages: [
          {
            from: 'bot',
            text: 'Merhaba Adel Hanım, yarın saat 14:30’daki randevunuz yaklaşmaktadır. Randevudan önce aklınıza takılan bir soru varsa yardımcı olabilirim.',
          },
          { from: 'user', text: 'Diş taşı temizliği ne kadar sürüyor?' },
          {
            from: 'bot',
            text: 'Diş taşı temizliği genellikle 20-30 dakika sürer. İşlem sonrası kısa süreli hassasiyet olabilir. Dilerseniz randevu öncesi dikkat etmeniz gerekenleri de paylaşabilirim.',
          },
        ],
        badge: 'Randevu',
      },
      {
        id: 'commerce',
        title: 'E-Ticaret',
        desc: 'Sipariş durumu + değişim/iade sorularına otomatik yanıt.',
        messages: [
          { from: 'bot', text: 'Merhaba, siparişiniz kargoya verilmiştir. Tahmini teslimat süresi 2 iş günüdür.' },
          { from: 'user', text: 'Ürünü değiştirebilir miyim?' },
          {
            from: 'bot',
            text: 'Elbette. Değişim için ürünün kullanılmamış olması ve 14 gün içinde talep oluşturmanız gerekir. Size değişim adımlarını gönderebilirim.',
          },
        ],
        badge: 'Sipariş',
      },
      {
        id: 'restaurant',
        title: 'Restoran',
        desc: 'Rezervasyon + masa uygunluğu + onay mesajları.',
        messages: [
          { from: 'user', text: 'Bu akşam 4 kişilik yer var mı?' },
          {
            from: 'bot',
            text: 'Bu akşam için 19:30 ve 21:00 saatlerinde 4 kişilik uygun masa görünüyor. Hangisini sizin için ayıralım?',
          },
        ],
        badge: 'Rezervasyon',
      },
      {
        id: 'beauty',
        title: 'Güzellik Merkezi',
        desc: 'Fiyat toplama + doğru sorularla teklif hazırlama.',
        messages: [
          { from: 'user', text: 'Lazer epilasyon için fiyat alabilir miyim?' },
          {
            from: 'bot',
            text: 'Tabii. Bölgeye göre fiyat değişiyor. Size doğru bilgi verebilmem için hangi bölge için fiyat almak istediğinizi seçebilir misiniz?',
          },
        ],
        badge: 'Fiyat',
      },
      {
        id: 'consulting',
        title: 'Danışmanlık',
        desc: 'Uygun saat önerisi + randevu talebi toplama.',
        messages: [
          { from: 'user', text: 'Görüşme randevusu almak istiyorum.' },
          {
            from: 'bot',
            text: 'Memnuniyetle. Bu hafta Salı 11:00, Perşembe 15:00 ve Cuma 10:30 uygun görünüyor. Size en uygun saati seçebilirsiniz.',
          },
        ],
        badge: 'Planlama',
      },
    ] as const;

    return scenarios.find((s) => s.id === scenarioId) ?? scenarios[0];
  }, [scenarioId]);

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="font-bold text-dark truncate">{scenario.title} • WhatsApp</p>
          <p className="text-xs text-gray-400 font-medium truncate">{scenario.desc}</p>
        </div>
        <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] font-black uppercase tracking-widest text-emerald-700 shrink-0">
          {scenario.badge}
        </span>
      </div>

      <div className="p-5 bg-gradient-to-b from-white to-emerald-50/40 space-y-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={scenario.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="space-y-3"
          >
            {scenario.messages.map((m, idx) => (
              <div key={`${scenario.id}-${idx}`} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[92%] rounded-xl px-4 py-3 text-sm font-medium shadow-sm ${
                    m.from === 'user'
                      ? 'text-white'
                      : 'bg-white border border-gray-200 text-gray-700'
                  }`}
                  style={m.from === 'user' ? { backgroundColor: WA_GREEN, boxShadow: '0 18px 36px -22px rgba(37, 211, 102, 0.6)' } : undefined}
                >
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

export default function WhatsAppPage() {
  useSEO({
    title: 'WhatsApp Otomasyonu | Oxonom',
    description:
      'Oxonom ile WhatsApp mesajlarını yanıtlayın, otomatik bilgilendirme gönderin, randevu ve rezervasyon süreçlerini yapay zeka ile yönetin.',
    canonical: '/whatsapp',
    keywords:
      'whatsapp otomasyonu, whatsapp business, otomatik yanıt, randevu hatırlatma, rezervasyon yönetimi, e-ticaret sipariş bilgilendirme, oxonom',
  });

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'OXONOM WhatsApp Otomasyonu',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    url: 'https://oxonom.com/whatsapp',
    description:
      'WhatsApp mesajlarını AI ile yanıtlayan; otomatik bilgilendirme, randevu/rezervasyon ve e-ticaret soru yanıtlama akışları sağlayan otonom yapay zeka çözümü.',
  };

  const statsSliderRef = useRef<HTMLDivElement | null>(null);
  const featuresSliderRef = useRef<HTMLDivElement | null>(null);
  const tabsRef = useRef<HTMLDivElement | null>(null);

  useAutoSnapScroll(statsSliderRef, { intervalMs: 6400 });
  useAutoSnapScroll(featuresSliderRef, { intervalMs: 7200 });
  useAutoSnapScroll(tabsRef, { intervalMs: 7600 });

  const [scenarioId, setScenarioId] = useState<ScenarioId>('clinic');
  const [flowStep, setFlowStep] = useState<FlowStepId>('new_message');
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);

  const scrollToDemo = () => {
    const el = document.getElementById('wa-demo');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const STATS = [
    { k: '7/24', v: 'Otomatik Yanıt', hint: 'Gelen mesajlara anında dönüş' },
    { k: 'Auto', v: 'Hatırlatma', hint: 'Randevu/rezervasyon bilgilendirmesi' },
    { k: 'Sip.', v: 'Bilgilendirme', hint: 'Sipariş-kargo-iade akışları' },
    { k: 'Tek', v: 'Panel', hint: 'Mesaj, bilgilendirme, akış yönetimi' },
  ];

  const FEATURES = [
    {
      title: 'Gelen Mesaj Yanıtlama',
      desc: 'WhatsApp’tan gelen müşteri sorularını yapay zeka ile anında yanıtlayın. Fiyat, hizmet, stok, çalışma saati ve sık sorulan sorular otomatik cevaplanır.',
      icon: <MessageCircle className="w-5 h-5" style={{ color: WA_GREEN }} />,
      accent: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      cta: (
        <Link to="/mesajlasma-paketleri" className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors">
          Mesaj Paketleri <ArrowRight className="w-4 h-4" />
        </Link>
      ),
    },
    {
      title: 'Otomatik Bilgilendirme Mesajları',
      desc: 'Randevu yaklaşınca, sipariş durumu değişince veya rezervasyon onaylanınca müşterilere otomatik WhatsApp mesajları gönderin.',
      icon: <Bell className="w-5 h-5 text-indigo-600" />,
      accent: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      cta: (
        <a
          href="https://wa.me/908503099901"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-bold text-indigo-700 hover:text-indigo-800 transition-colors"
        >
          Demo Talep Et <ChevronRight className="w-4 h-4" />
        </a>
      ),
    },
    {
      title: 'Randevu Oluşturma',
      desc: 'Klinikler, güzellik merkezleri, danışmanlar ve hizmet işletmeleri için WhatsApp üzerinden uygun saatleri sunun, randevu talebi alın ve süreci otomatik yönetin.',
      icon: <CalendarCheck className="w-5 h-5 text-slate-700" />,
      accent: 'bg-slate-50 text-slate-700 border-slate-200',
      cta: (
        <Link to="/mesajlasma-paketleri" className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-dark transition-colors">
          Kurulum ve Senaryolar <ArrowRight className="w-4 h-4" />
        </Link>
      ),
    },
    {
      title: 'Rezervasyon Yönetimi',
      desc: 'Restoran, otel, etkinlik ve hizmet işletmeleri için rezervasyon taleplerini WhatsApp üzerinden karşılayın, müsaitlik bilgisini paylaşın ve onay akışı oluşturun.',
      icon: <Utensils className="w-5 h-5 text-orange-600" />,
      accent: 'bg-orange-50 text-orange-700 border-orange-200',
      cta: (
        <Link to="/combo-paketler" className="inline-flex items-center gap-2 text-xs font-bold text-orange-700 hover:text-orange-800 transition-colors">
          Combo Paketler <ArrowRight className="w-4 h-4" />
        </Link>
      ),
    },
    {
      title: 'E-Ticaret Soru Yanıtlama',
      desc: 'Ürün stok durumu, kargo bilgisi, iade süreci, beden/renk seçenekleri ve sipariş durumu gibi sorulara otomatik yanıt verin.',
      icon: <ShoppingBag className="w-5 h-5 text-blue-600" />,
      accent: 'bg-blue-50 text-blue-700 border-blue-200',
      cta: (
        <Link to="/mesajlasma-paketleri" className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-800 transition-colors">
          E-Ticaret Otomasyonu <ArrowRight className="w-4 h-4" />
        </Link>
      ),
    },
    {
      title: 'İnsan Temsilciye Aktarma',
      desc: 'Yapay zekanın yanıtlamaması gereken durumlarda konuşmayı otomatik olarak ekip üyesine aktarın.',
      icon: <Handshake className="w-5 h-5 text-purple-600" />,
      accent: 'bg-purple-50 text-purple-700 border-purple-200',
      cta: (
        <a
          href="https://wa.me/908503099901"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-bold text-purple-700 hover:text-purple-800 transition-colors"
        >
          Uzmanla Görüşün <ChevronRight className="w-4 h-4" />
        </a>
      ),
    },
  ];

  const SCENARIO_TABS: { id: ScenarioId; label: string; icon: ReactNode }[] = [
    { id: 'clinic', label: 'Klinik', icon: <Package className="w-4 h-4 text-emerald-600" /> },
    { id: 'commerce', label: 'E-Ticaret', icon: <ShoppingBag className="w-4 h-4 text-blue-600" /> },
    { id: 'restaurant', label: 'Restoran', icon: <Utensils className="w-4 h-4 text-orange-600" /> },
    { id: 'beauty', label: 'Güzellik Merkezi', icon: <Sparkles className="w-4 h-4 text-purple-600" /> },
    { id: 'consulting', label: 'Danışmanlık', icon: <Zap className="w-4 h-4 text-indigo-600" /> },
  ];

  const FLOW_STEPS: { id: FlowStepId; title: string; desc: string; icon: ReactNode; details: string[] }[] = [
    {
      id: 'new_message',
      title: 'Yeni mesaj geldi',
      desc: 'WhatsApp üzerinden gelen mesaj algılanır.',
      icon: <MessageCircle className="w-4 h-4" style={{ color: WA_GREEN }} />,
      details: ['WhatsApp Business hattı dinlenir', 'Mesaj içeriği güvenli biçimde işlenir', 'Gerekirse dil algılama yapılır'],
    },
    {
      id: 'intent',
      title: 'AI niyet analizi yaptı',
      desc: 'Mesajın amacı anlaşılır: fiyat, randevu, kargo, rezervasyon…',
      icon: <Sparkles className="w-4 h-4 text-indigo-600" />,
      details: ['Sık sorular + özel kurallar çalışır', 'Anahtar kelimeler tetiklenir', 'Yanıt tonu marka diline uyar'],
    },
    {
      id: 'appointment',
      title: 'Randevu sorusu algılandı',
      desc: 'Randevu/rezervasyon ihtiyacı algılanır.',
      icon: <CalendarCheck className="w-4 h-4 text-slate-700" />,
      details: ['Randevu türü sorulur', 'Gerekirse notlar ve hazırlık bilgisi sunulur', 'Uygunluk sorgusuna geçilir'],
    },
    {
      id: 'slots',
      title: 'Uygun saatler sunuldu',
      desc: 'Kullanıcıya seçenekler gönderilir; seçim alınır.',
      icon: <Package className="w-4 h-4 text-emerald-700" />,
      details: ['Saat aralıkları listelenir', 'Alternatif öneri yapılır', 'Seçime göre onaya geçilir'],
    },
    {
      id: 'confirm',
      title: 'Onay alındı',
      desc: 'Kullanıcı seçimi doğrular.',
      icon: <Check className="w-4 h-4 text-emerald-700" />,
      details: ['Ad-soyad ve iletişim doğrulanır', 'Konum / adres bilgisi eklenebilir', 'Son bilgilendirme mesajı gönderilir'],
    },
    {
      id: 'calendar',
      title: 'Takvime eklendi',
      desc: 'Kayıt oluşturulur ve ajandaya işlenir.',
      icon: <CalendarCheck className="w-4 h-4 text-indigo-600" />,
      details: ['CRM/ajanda kaydı açılır', 'Ekip bilgilendirilir', 'Gerektiğinde manuel müdahale alanı açılır'],
    },
    {
      id: 'reminder',
      title: 'Hatırlatma mesajı planlandı',
      desc: 'Randevu öncesi otomatik bilgilendirme gönderilir.',
      icon: <Bell className="w-4 h-4 text-orange-600" />,
      details: ['X saat önce otomatik hatırlatma', 'Hazırlık notları ekleme', 'İptal/erteleme akışı'],
    },
  ];

  const activeStep = useMemo(() => FLOW_STEPS.find((s) => s.id === flowStep) ?? FLOW_STEPS[0], [FLOW_STEPS, flowStep]);

  const FAQs = [
    {
      q: 'Oxonom WhatsApp mesajlarına otomatik cevap verebilir mi?',
      a: 'Evet. WhatsApp Business üzerinden gelen mesajları 7/24 yanıtlayabilir; fiyat, stok, çalışma saatleri, sık sorular gibi talepleri otomatik yönetebilir.',
    },
    {
      q: 'Müşterilere otomatik hatırlatma mesajı gönderebilir mi?',
      a: 'Evet. Randevu/rezervasyon yaklaşınca veya sipariş durumu değişince otomatik bilgilendirme mesajları gönderecek şekilde akışlar kurulabilir.',
    },
    {
      q: 'Randevu veya rezervasyon oluşturabilir mi?',
      a: 'Evet. Uygun saat önerme, onay alma, takvime/CRM’e kaydetme ve hatırlatma planlama adımları otomatikleştirilebilir.',
    },
    {
      q: 'E-ticaret sipariş sorularını yanıtlayabilir mi?',
      a: 'Evet. Kargo, iade, değişim, ürün/beden/renk soruları ve sipariş durumu gibi konular için otomatik yanıt akışları kurgulanabilir.',
    },
    {
      q: 'Gerektiğinde insan temsilciye aktarım yapabilir mi?',
      a: 'Evet. Hassas veya karmaşık durumlarda konuşmayı ekip üyesine devretme kuralı tanımlanabilir.',
    },
    {
      q: 'Birden fazla WhatsApp hattı yönetilebilir mi?',
      a: 'Evet. Birden fazla hat için ayrı senaryolar, marka dili ve raporlama akışları oluşturulabilir.',
    },
  ] as const;

  const SECTORS = [
    { title: 'Klinikler ve diş klinikleri', hint: 'Randevu hatırlatma, işlem öncesi bilgilendirme ve hasta sorularını yanıtlama.', icon: '🦷' },
    { title: 'E-ticaret markaları', hint: 'Sipariş durumu, kargo, iade, değişim ve ürün sorularını otomatik yanıtlama.', icon: '🛒' },
    { title: 'Restoran ve kafeler', hint: 'Rezervasyon alma, masa uygunluğu sunma ve onay mesajı gönderme.', icon: '🍽️' },
    { title: 'Oteller ve turizm işletmeleri', hint: 'Rezervasyon talepleri, müsaitlik ve bilgilendirme mesajlarını otomatik yönetme.', icon: '🏨' },
    { title: 'Güzellik merkezleri', hint: 'Fiyat toplama, uygunluk sorgusu ve randevu yönlendirme akışları.', icon: '✨' },
    { title: 'Eğitim ve danışmanlık firmaları', hint: 'Görüşme planlama, bilgi talepleri ve hatırlatma mesajları.', icon: '🎓' },
  ] as const;

  return (
    <main className="pt-32 pb-24 bg-gray-50 min-h-screen relative overflow-hidden">
      <JsonLd data={schema} />

      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm"
                style={{ color: WA_GREEN }}
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp Business • Otomasyon
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-dark leading-[1.05] mb-5"
              >
                WhatsApp Mesajlarınızı Yapay Zeka ile Otomatik Yönetin
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-gray-500 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                Oxonom; gelen mesajları yanıtlar, müşterilere otomatik bilgilendirme gönderir, randevu ve rezervasyon süreçlerini sizin yerinize yönetir.
              </motion.p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  to="/mesajlasma-paketleri"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-white font-bold text-sm hover:opacity-95 transition-all shadow-lg active:scale-[0.99]"
                  style={{ backgroundColor: WA_GREEN, boxShadow: '0 18px 34px -18px rgba(37, 211, 102, 0.6)' }}
                >
                  WhatsApp Otomasyonunu Başlat <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  type="button"
                  onClick={scrollToDemo}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-white border border-gray-200 text-dark font-bold text-sm hover:border-emerald-500/20 hover:shadow-md transition-all active:scale-[0.99]"
                >
                  Demo Senaryoyu Gör <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto lg:mx-0">
                {[
                  '7/24 otomatik yanıt ve bilgilendirme',
                  'Randevu / rezervasyon akışları',
                  'E-ticaret sipariş ve ürün soruları',
                  'Gerekirse insana devretme',
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 p-4 premium-shadow">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4" style={{ color: WA_GREEN }} />
                    </div>
                    <p className="text-sm font-bold text-dark leading-snug">{t}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
              <WhatsAppHeroMockup />
              <p className="mt-3 text-[11px] text-gray-400 font-medium text-center lg:text-left">
                Not: Bu bir simülasyondur. Kurallar ve ton, markanıza göre özelleştirilir.
              </p>
            </motion.div>
          </div>
        </header>

        {/* Stats */}
        <section className="mb-14 md:mb-20" aria-label="Mini metrikler">
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-[10px] font-bold uppercase tracking-widest mb-5 shadow-sm"
              style={{ color: WA_GREEN }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              WhatsApp Otomasyonu
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">WhatsApp’ta her mesaj bir fırsat.</h2>
            <p className="text-gray-500 font-medium max-w-3xl mx-auto">
              Daha hızlı dönüş, daha tutarlı iletişim ve daha az manuel iş yükü.
            </p>
          </div>

          <div
            ref={featuresSliderRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0"
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
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-bold text-sm hover:opacity-95 transition-all shadow-lg active:scale-[0.99]"
              style={{ backgroundColor: WA_DARK, boxShadow: '0 18px 40px -22px rgba(0,0,0,0.35)' }}
            >
              Mesaj Paketleri <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/908503099901"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white border border-gray-200 text-dark font-bold text-sm hover:border-emerald-500/20 hover:shadow-md transition-all active:scale-[0.99]"
            >
              Ücretsiz Demo <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Interactive scenarios */}
        <section id="wa-demo" className="mb-14 md:mb-20 scroll-mt-28" aria-label="Etkileşimli senaryolar">
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-indigo-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-5 shadow-sm"
            >
              <Zap className="w-3.5 h-3.5" />
              Senaryo Simülasyonu
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">Sektörünüze göre akış seçin.</h2>
            <p className="text-gray-500 font-medium max-w-3xl mx-auto">
              Sekmeler arasında geçiş yapın; WhatsApp sohbetinin nasıl otomatikleştiğini görün.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-xl shadow-dark/5 overflow-hidden premium-shadow">
            <div className="p-4 md:p-6 border-b border-gray-100">
              <div ref={tabsRef} className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
                {SCENARIO_TABS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setScenarioId(t.id)}
                    aria-pressed={scenarioId === t.id}
                    className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-lg text-xs font-bold border transition-all flex items-center gap-2 ${
                      scenarioId === t.id
                        ? 'bg-dark text-white border-dark'
                        : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-white hover:border-emerald-500/20'
                    }`}
                  >
                    {t.icon} {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-5 md:p-8 bg-gradient-to-b from-white to-gray-50">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-3">WhatsApp’ta otomatik akışlar</h3>
                  <p className="text-gray-500 font-medium leading-relaxed mb-6">
                    Her sektör için farklı dil ve kurallar tanımlayın. Oxonom; mesajları yanıtlasın, doğru soruları sorup süreci otomatik yönetsin.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/mesajlasma-paketleri"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-bold text-sm hover:opacity-95 transition-all shadow-lg active:scale-[0.99]"
                      style={{ backgroundColor: WA_GREEN, boxShadow: '0 18px 34px -18px rgba(37, 211, 102, 0.6)' }}
                    >
                      WhatsApp Paketleri <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href="https://wa.me/908503099901"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white border border-gray-200 text-dark font-bold text-sm hover:border-emerald-500/20 hover:shadow-md transition-all active:scale-[0.99]"
                    >
                      Demo Talep Et <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <WhatsAppChatDemo scenarioId={scenarioId} />
              </div>
            </div>
          </div>
        </section>

        {/* Flow builder */}
        <section className="mb-14 md:mb-20" aria-label="Akış oluşturucu">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">Mesaj Akışınızı Sürükle-Bırak Mantığıyla Kurun</h2>
            <p className="text-gray-500 font-medium max-w-3xl mx-auto">
              Kartlara tıklayın; sağ tarafta adımın açıklaması ve çıktısı güncellensin.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-6 bg-white rounded-xl border border-gray-100 p-5 premium-shadow">
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-gray-400 mb-4">Akış</p>
              <div className="space-y-3">
                {FLOW_STEPS.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setFlowStep(s.id)}
                    className={`w-full text-left rounded-lg border px-4 py-3 transition-all flex items-start gap-3 ${
                      flowStep === s.id
                        ? 'bg-emerald-50 border-emerald-200 shadow-sm'
                        : 'bg-white border-gray-200 hover:border-emerald-500/20'
                    }`}
                    aria-pressed={flowStep === s.id}
                  >
                    <div className={`w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 ${flowStep === s.id ? 'bg-white border-emerald-200' : 'bg-gray-50 border-gray-200'}`}>
                      {s.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-dark">{s.title}</p>
                      <p className="text-xs text-gray-500 font-medium leading-relaxed">{s.desc}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300 ml-auto mt-1" />
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-white rounded-xl border border-gray-100 p-6 premium-shadow overflow-hidden relative">
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-[10px] font-black uppercase tracking-[0.35em] text-gray-400">Seçili Adım</p>
                    <h3 className="text-2xl font-bold text-dark mt-1">{activeStep.title}</h3>
                    <p className="text-gray-500 font-medium leading-relaxed mt-2">{activeStep.desc}</p>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    <Sparkles className="w-3 h-3" style={{ color: WA_GREEN }} /> OXONOM AI
                  </span>
                </div>

                <div className="mt-6 space-y-2">
                  {activeStep.details.map((d) => (
                    <div key={d} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-md bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" style={{ color: WA_GREEN }} />
                      </div>
                      <span className="text-sm font-medium text-gray-600">{d}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/mesajlasma-paketleri"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-bold text-sm hover:opacity-95 transition-all shadow-lg active:scale-[0.99]"
                    style={{ backgroundColor: WA_GREEN, boxShadow: '0 18px 34px -18px rgba(37, 211, 102, 0.6)' }}
                  >
                    Akışı Kur <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://wa.me/908503099901"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white border border-gray-200 text-dark font-bold text-sm hover:border-emerald-500/20 hover:shadow-md transition-all active:scale-[0.99]"
                  >
                    Kurulum Sor <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mb-14 md:mb-20" aria-label="Nasıl çalışır">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">Nasıl çalışır?</h2>
            <p className="text-gray-500 font-medium max-w-3xl mx-auto">
              3 adımda WhatsApp otomasyonunuzu yayına alın.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: '1', t: 'WhatsApp hesabınızı bağlayın', d: 'WhatsApp Business hattınızı bağlayın ve akışları aktif edin.' },
              { n: '2', t: 'Marka bilgilerinizi tanımlayın', d: 'Hizmetler, ürünler ve yanıt kurallarını belirleyin.' },
              { n: '3', t: 'Oxonom otomatik yönetsin', d: 'Mesajlar, bilgilendirmeler ve randevu akışları otomatik aksın.' },
            ].map((s) => (
              <div key={s.n} className="bg-white rounded-xl border border-gray-100 p-6 premium-shadow">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-700 font-black flex items-center justify-center">
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
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">Sektörlere Göre Kullanım</h2>
            <p className="text-gray-500 font-medium max-w-3xl mx-auto">
              WhatsApp trafiğinize göre farklı otomasyonlar kurun.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTORS.map((s) => (
              <div key={s.title} className="bg-white rounded-xl border border-gray-100 p-6 premium-shadow premium-shadow-hover hover:border-emerald-500/20">
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
          <div className="relative overflow-hidden rounded-xl border border-white/10 p-8 md:p-10" style={{ background: `linear-gradient(135deg, ${WA_DARK} 0%, #0F2B1E 100%)` }}>
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(37, 211, 102, 0.22)' }} />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  WhatsApp artık sadece mesaj kutusu değil, otomatik çalışan müşteri temsilciniz.
                </h2>
                <p className="text-white/70 font-medium max-w-2xl">
                  Oxonom ile müşteri iletişimini hızlandırın, randevu ve satış fırsatlarını kaçırmayın.
                </p>
              </div>
              <Link
                to="/mesajlasma-paketleri"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-white font-bold text-sm hover:opacity-95 transition-all shadow-lg shadow-emerald-500/10 active:scale-[0.99]"
                style={{ backgroundColor: WA_GREEN }}
              >
                WhatsApp Otomasyonunu Kur <ArrowRight className="w-4 h-4" />
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
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-slate-900/5 rounded-full blur-3xl" />
            <div className="relative z-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-dark mb-3">
                WhatsApp iletişiminizi 7/24 çalışan akıllı bir sisteme dönüştürün.
              </h2>
              <p className="text-gray-500 font-medium max-w-3xl mx-auto mb-7">
                Mesajları otomatik yönetin, bilgilendirme gönderin, randevu/rezervasyon süreçlerini hızlandırın.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/mesajlasma-paketleri"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-white font-bold text-sm hover:opacity-95 transition-all shadow-lg active:scale-[0.99]"
                  style={{ backgroundColor: WA_DARK, boxShadow: '0 18px 40px -22px rgba(0,0,0,0.35)' }}
                >
                  Ücretsiz Başla <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/908503099901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-white border border-gray-200 text-dark font-bold text-sm hover:border-emerald-500/20 hover:shadow-md transition-all active:scale-[0.99]"
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

