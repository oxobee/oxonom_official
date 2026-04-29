import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  ArrowRight,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Activity,
  LayoutGrid,
  Bell,
  Grid2X2,
  Target,
  Inbox,
  Phone,
  CalendarDays,
  Bot,
  Workflow,
  Plug,
  Settings,
  LogOut,
  MessageCircle,
  Instagram,
  Star,
  Flame,
  CornerUpRight,
} from 'lucide-react';

type DashboardScreen = 'Genel Bakış' | 'CRM' | 'Gelen Kutusu' | 'Çağrılar' | 'Takvim' | 'AI Asistan' | 'İş Akışları' | 'Entegrasyonlar' | 'Hesap Ayarları';

const sidebarItems = [
  { label: 'Genel Bakış' as DashboardScreen, icon: Grid2X2 },
  { label: 'CRM' as DashboardScreen, icon: Target },
  { label: 'Gelen Kutusu' as DashboardScreen, icon: Inbox },
  { label: 'Çağrılar' as DashboardScreen, icon: Phone },
  { label: 'Takvim' as DashboardScreen, icon: CalendarDays },
  { label: 'AI Asistan' as DashboardScreen, icon: Bot },
  { label: 'İş Akışları' as DashboardScreen, icon: Workflow },
  { label: 'Entegrasyonlar' as DashboardScreen, icon: Plug },
  { label: 'Hesap Ayarları' as DashboardScreen, icon: Settings },
];

const statCards = [
  { label: 'Toplam Lead', value: '128', icon: Users, bg: 'bg-blue-50', text: 'text-blue-600' },
  { label: 'Hot Lead', value: '42', icon: Flame, bg: 'bg-red-50', text: 'text-red-500' },
  { label: 'Warm Lead', value: '57', icon: TrendingUp, bg: 'bg-amber-50', text: 'text-amber-600' },
  { label: 'Handoff', value: '14', icon: CornerUpRight, bg: 'bg-purple-50', text: 'text-purple-600' },
  { label: 'Ort. Skor', value: '74', icon: Star, bg: 'bg-green-50', text: 'text-green-600', suffix: '/ 100' },
  { label: 'Bugün Yeni', value: '9', icon: CalendarDays, bg: 'bg-slate-100', text: 'text-slate-600' },
];

function DashboardCards({
  title,
  subtitle,
  items,
  accent,
}: {
  title: string;
  subtitle: string;
  items: string[];
  accent: 'green' | 'amber' | 'blue' | 'slate';
}) {
  const tone = {
    green: 'border-emerald-200 bg-emerald-50/40 text-emerald-700',
    amber: 'border-amber-200 bg-amber-50/50 text-amber-700',
    blue: 'border-blue-200 bg-blue-50/45 text-blue-700',
    slate: 'border-slate-200 bg-white text-slate-700',
  }[accent];

  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-2xl md:text-4xl font-bold text-dark">{title}</h3>
        <p className="text-sm md:text-base font-medium text-slate-500 mt-1">{subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
            whileHover={{ y: -3, scale: 1.01 }}
            className={`rounded-xl border p-5 shadow-sm ${tone}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-xl bg-white/70 border border-white flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="font-bold text-dark">{item}</h4>
                  <p className="text-sm text-slate-500 mt-1">Kurallar, tetikleyiciler ve ekip devri tek panelden yönetilir.</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-white/70 text-[10px] font-black">Aktif</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button className="py-2 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-600">Test Et</button>
              <button className="py-2 rounded-lg bg-blue-600 text-white text-xs font-bold">Düzenle →</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function DashboardHeroMockup() {
  const [activeItem, setActiveItem] = useState<DashboardScreen>('Genel Bakış');
  const [activeStat, setActiveStat] = useState('Toplam Lead');
  const [chartHover, setChartHover] = useState(false);

  const leadBars = [
    { label: 'HOT', value: '42 (33%)', width: '33%', color: 'bg-red-500' },
    { label: 'WARM', value: '57 (45%)', width: '45%', color: 'bg-amber-400' },
    { label: 'COLD', value: '29 (22%)', width: '22%', color: 'bg-blue-400' },
  ];

  const renderOverview = () => (
    <>
      <motion.div whileHover={{ y: -2 }} className="bg-white rounded-xl border border-slate-200/70 shadow-sm p-3 sm:p-4 md:p-5 mb-4 md:mb-5">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Plug className="w-4 h-4 text-slate-500" />
            <p className="text-sm md:text-base font-bold text-slate-700">Entegrasyon Durumu</p>
          </div>
          <button className="text-xs font-bold text-blue-500 hover:text-blue-700">Ayarlar</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-3">
          {[
            { label: 'WhatsApp', icon: MessageCircle, color: 'text-green-500', state: 'Hazır' },
            { label: 'Instagram', icon: Instagram, color: 'text-pink-500', state: 'Bağlı' },
            { label: 'Ses (Gelen)', icon: Phone, color: 'text-blue-500', state: 'Canlı', live: true },
            { label: 'Ses (Giden)', icon: Phone, color: 'text-indigo-500', state: 'Planlandı' },
            { label: 'Takvim', icon: CalendarDays, color: 'text-blue-500', state: 'Aktif' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center justify-between gap-2 md:gap-3 text-xs md:text-sm min-w-0">
                <div className="flex items-center gap-2 min-w-0">
                  <span className={`w-2 h-2 rounded-full ${item.live ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                  <Icon className={`w-4 h-4 ${item.color}`} />
                  <span className="font-bold text-slate-700 truncate">{item.label}</span>
                </div>
                <span className="text-slate-400 font-medium truncate">{item.state}</span>
              </div>
            );
          })}
        </div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2 md:gap-3 mb-4 md:mb-5">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          const active = activeStat === stat.label;
          return (
            <motion.button
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + index * 0.04 }}
              whileHover={{ y: -4, scale: 1.02 }}
              onClick={() => setActiveStat(stat.label)}
              className={`bg-white rounded-xl border p-2.5 sm:p-3 lg:p-4 text-left shadow-sm transition-all min-w-0 ${active ? 'border-blue-300 shadow-blue-500/10' : 'border-slate-100 hover:border-slate-200'}`}
            >
              <div className="flex items-center gap-2 lg:gap-3 min-w-0">
                <span className={`w-9 h-9 lg:w-10 lg:h-10 rounded-xl ${stat.bg} ${stat.text} flex items-center justify-center shrink-0`}>
                  <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[10px] sm:text-xs font-bold text-slate-500 truncate">{stat.label}</span>
                  <span className="text-2xl lg:text-3xl font-black text-dark leading-none">{stat.value}</span>
                  {stat.suffix && <span className="ml-1 text-xs font-medium text-slate-400">{stat.suffix}</span>}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_300px] gap-4 md:gap-5">
        <motion.div
          whileHover={{ y: -2 }}
          onMouseEnter={() => setChartHover(true)}
          onMouseLeave={() => setChartHover(false)}
          className="bg-white rounded-xl border border-slate-100 shadow-sm p-3 sm:p-5 min-h-[240px] min-w-0 cursor-crosshair"
        >
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm md:text-base font-bold text-slate-700">Son 14 Gün</h4>
            <div className="hidden sm:flex items-center gap-4 text-[11px] font-bold">
              <span className="text-blue-500">Konuşma</span>
              <span className="text-red-500">Hot Lead</span>
              <span className="text-amber-500">Handoff</span>
            </div>
          </div>
          <svg viewBox="0 0 680 240" className="w-full h-[200px] md:h-[220px]" role="img" aria-label="Son 14 gün performans grafiği">
            <defs>
              <linearGradient id="gridFade" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#f8fafc" />
              </linearGradient>
            </defs>
            {[0, 1, 2, 3, 4].map((row) => (
              <line key={`row-${row}`} x1="38" x2="660" y1={30 + row * 42} y2={30 + row * 42} stroke="url(#gridFade)" strokeDasharray="4 6" />
            ))}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col) => (
              <line key={`col-${col}`} y1="24" y2="198" x1={38 + col * 78} x2={38 + col * 78} stroke="#eef2f7" strokeDasharray="4 6" />
            ))}
            <line x1="38" x2="660" y1="198" y2="198" stroke="#1f2937" strokeWidth="1" opacity="0.5" />
            {[
              { d: 'M38 150 C74 64 94 48 132 126 S190 74 240 102 S304 198 350 198 S436 168 486 198 S528 144 566 188 S612 198 660 198', color: '#5671e8', delay: 0 },
              { d: 'M38 190 C74 126 96 116 140 126 S184 146 218 176 S286 188 330 198 S438 176 484 198 S542 188 660 198', color: '#ef5350', delay: 0.12 },
              { d: 'M38 196 C72 150 98 144 126 178 S174 196 212 198 S284 176 330 198 S462 198 660 198', color: '#f2a12b', delay: 0.24 },
            ].map((line) => (
              <motion.path
                key={line.color}
                d={line.d}
                fill="none"
                stroke={line.color}
                strokeWidth={chartHover ? 5 : 3}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0.2 }}
                animate={{ pathLength: 1, opacity: chartHover ? 0.95 : 1 }}
                transition={{ duration: chartHover ? 0.35 : 1.6, delay: chartHover ? 0 : line.delay, ease: 'easeInOut' }}
              />
            ))}
            {chartHover && (
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <line x1="132" x2="132" y1="26" y2="198" stroke="#94a3b8" strokeDasharray="4 4" />
                <circle cx="132" cy="126" r="6" fill="#5671e8" stroke="#fff" strokeWidth="3" />
                <rect x="92" y="42" width="86" height="36" rx="10" fill="#0f172a" opacity="0.92" />
                <text x="106" y="64" fill="#fff" fontSize="12" fontWeight="700">18 görüşme</text>
              </motion.g>
            )}
            {['7 Nis', '8 Nis', '9 Nis', '10 Nis', '11 Nis', '12 Nis', '13 Nis'].map((day, index) => (
              <text key={day} x={38 + index * 96} y="226" fill="#94a3b8" fontSize="13">{day}</text>
            ))}
          </svg>
        </motion.div>

        <div className="space-y-5">
          <motion.div whileHover={{ y: -2 }} className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
            <h4 className="text-base font-bold text-slate-700 mb-5">Lead Dağılımı</h4>
            <div className="space-y-4">
              {leadBars.map((bar, index) => (
                <div key={bar.label}>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-600 mb-2">
                    <span>{bar.label}</span>
                    <span>{bar.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${bar.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: bar.width }}
                      transition={{ duration: 1.2, delay: 0.3 + index * 0.15, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
            <p className="text-base font-bold text-slate-700 mb-3">Handoff Oranı</p>
            <div className="flex items-end gap-1">
              <motion.span
                key={activeStat}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-black text-dark"
              >
                {activeStat === 'Handoff' ? '14' : '11'}
              </motion.span>
              <span className="text-xl font-bold text-slate-400 mb-1">%</span>
            </div>
            <p className="mt-2 text-xs font-medium text-slate-500">Seçili kart: {activeStat}</p>
          </motion.div>
        </div>
      </div>
    </>
  );

  const renderScreen = () => {
    if (activeItem === 'Genel Bakış') return renderOverview();

    if (activeItem === 'CRM') {
      const rows = [
        ['Selin Arda', '+905301112244', '88', 'Teklif Bekliyor', 'Bugün 10:42'],
        ['Kerem Uslu', '+905422224466', '76', 'Randevu', 'Bugün 09:18'],
        ['Nehir Soylu', '+905333335577', '63', 'Aktif', 'Dün 17:05'],
        ['Baran Kılıç', '+905444446688', '51', 'Yeni', 'Dün 14:31'],
        ['Ece Tural', '+905555557799', '39', 'Takip', '24 Nis 12:10'],
      ];
      return (
        <div className="space-y-5">
          <div>
            <h3 className="text-2xl md:text-4xl font-bold text-dark">CRM</h3>
            <p className="text-sm md:text-base font-medium text-slate-500 mt-1">Lead yönetimi ve satış takibi</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Leads', 'Lead Formları', 'Teklifler & Ödemeler', 'Takip'].map((tab, index) => (
              <span key={tab} className={`px-4 py-2 rounded-lg text-xs font-bold border ${index === 0 ? 'bg-dark text-white border-dark' : 'bg-white text-slate-600 border-slate-200'}`}>{tab}</span>
            ))}
          </div>
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="grid grid-cols-[1.3fr_1fr_.6fr_1fr_1fr] gap-3 px-4 py-3 bg-slate-50 text-[10px] font-black text-slate-500 uppercase tracking-widest min-w-[720px]">
              <span>Kişi</span><span>Telefon</span><span>Skor</span><span>Durum</span><span>Son Aktivite</span>
            </div>
            <div className="overflow-x-auto">
              {rows.map((row, index) => (
                <motion.div key={row[0]} whileHover={{ backgroundColor: '#f8fafc' }} className="grid grid-cols-[1.3fr_1fr_.6fr_1fr_1fr] gap-3 px-4 py-3 border-t border-slate-100 min-w-[720px] text-sm">
                  <span className="font-bold text-slate-800">{row[0]}</span>
                  <span className="text-slate-600">{row[1]}</span>
                  <span><b className={`px-2 py-1 rounded-full text-xs ${index < 2 ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-700'}`}>{row[2]}</b></span>
                  <span className="text-blue-600 font-medium">{row[3]}</span>
                  <span className="text-slate-400">{row[4]}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (activeItem === 'Gelen Kutusu') {
      return (
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-0 bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden min-h-[430px]">
          <div className="border-r border-slate-100">
            <div className="p-4 border-b border-slate-100">
              <h3 className="font-bold text-dark mb-3">Gelen Kutusu</h3>
              <div className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-400">İsim veya numara ara...</div>
            </div>
            {['Duru Klinik', 'Atlas Dental', 'Mira Estetik', 'Nova Health', 'Liva Danışmanlık'].map((name, index) => (
              <motion.button key={name} whileHover={{ backgroundColor: '#f8fafc' }} className="w-full flex items-center gap-3 p-4 border-b border-slate-100 text-left">
                <span className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-black">{name.slice(0, 2).toUpperCase()}</span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-dark truncate">{name}</span>
                  <span className="block text-xs text-slate-400 truncate">{index === 0 ? 'Randevu seçeneklerini paylaşabilir misiniz?' : 'Otomatik yanıt gönderildi'}</span>
                </span>
              </motion.button>
            ))}
          </div>
          <div className="flex items-center justify-center bg-slate-50 p-8 text-center">
            <div>
              <Inbox className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-sm font-bold text-slate-500">Bir konuşma seç</p>
              <p className="text-xs text-slate-400 mt-1">Mesaj geçmişi ve AI önerileri burada açılır.</p>
            </div>
          </div>
        </div>
      );
    }

    if (activeItem === 'Çağrılar') {
      return (
        <div className="space-y-5">
          <div><h3 className="text-2xl md:text-4xl font-bold text-dark">Çağrı Logları</h3><p className="text-slate-500 font-medium">12 arama kaydı</p></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              ['Toplam Arama', '12', Phone, 'bg-blue-50 text-blue-600'],
              ['Cevaplanma', '92%', Phone, 'bg-green-50 text-green-600'],
              ['Ort. Süre', '2:18', CalendarDays, 'bg-amber-50 text-amber-600'],
              ['Cevapsız', '1', Phone, 'bg-red-50 text-red-600'],
            ].map(([label, value, Icon, cls]) => (
              <div key={label as string} className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm">
                <span className={`w-10 h-10 rounded-xl flex items-center justify-center ${cls as string}`}><Icon className="w-5 h-5" /></span>
                <p className="text-xs font-bold text-slate-500 mt-3">{label as string}</p>
                <p className="text-2xl font-black text-dark">{value as string}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
            {['+90 530 120 44 82', '+90 542 870 19 33', '+90 555 204 78 10', '+90 533 612 90 24'].map((phone, index) => (
              <motion.div key={phone} whileHover={{ x: 4 }} className="grid grid-cols-[1fr_.7fr_.7fr_1fr] gap-3 px-4 py-3 border-b border-slate-100 text-sm min-w-[640px]">
                <span className="font-bold text-slate-700">{phone}</span><span>Gelen</span><span>{index + 1}:2{index}</span><span className="text-green-600 font-bold">completed</span>
              </motion.div>
            ))}
          </div>
        </div>
      );
    }

    if (activeItem === 'Takvim') {
      return (
        <div className="space-y-5">
          <div className="flex items-center justify-between"><h3 className="text-2xl md:text-4xl font-bold text-dark">Takvim</h3><button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold">+ Yeni Randevu</button></div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-5">
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-4 text-center font-bold border-b border-slate-100">Nisan 2026</div>
              <div className="grid grid-cols-7 text-center text-xs font-bold text-slate-400 border-b border-slate-100">{['PZT','SAL','ÇAR','PER','CUM','CMT','PAZ'].map(d => <span key={d} className="py-2">{d}</span>)}</div>
              <div className="grid grid-cols-7">{Array.from({ length: 35 }).map((_, i) => <motion.div key={i} whileHover={{ backgroundColor: '#eff6ff' }} className={`h-16 border-r border-b border-slate-100 p-2 text-sm ${i === 16 ? 'bg-blue-50 text-blue-700 font-black' : 'text-slate-700'}`}>{i + 1 <= 30 ? i + 1 : ''}</motion.div>)}</div>
            </div>
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
              <p className="font-bold text-dark">17 Nisan Cuma</p>
              <p className="text-sm text-slate-400 mb-5">3 randevu</p>
              {['10:00 Kontrol görüşmesi', '14:30 Demo sunumu', '17:00 Takip araması'].map(t => <div key={t} className="p-3 rounded-lg bg-blue-50 text-blue-700 text-sm font-bold mb-2">{t}</div>)}
            </div>
          </div>
        </div>
      );
    }

    if (activeItem === 'AI Asistan') {
      return <DashboardCards title="AI Asistan" subtitle="Ana asistanlar ve otomasyon modülleri" items={['Sesli Resepsiyonist', 'Mesajlaşma Asistanı', 'Randevu Teyit', 'Reaktivasyon Araması']} accent="green" />;
    }

    if (activeItem === 'İş Akışları') {
      return <DashboardCards title="İş Akışları" subtitle="Otomatikleştirilmiş senaryolar" items={['Lead İlk Temas', 'Follow-up Akışı', 'Randevu Hatırlatma', 'Memnuniyet Anketi', 'No-show Takip', 'Satış Sonrası Kontrol']} accent="amber" />;
    }

    if (activeItem === 'Entegrasyonlar') {
      return <DashboardCards title="Entegrasyonlar" subtitle="Üçüncü parti bağlantılar" items={['WhatsApp Bağlantısı', 'Instagram DM', 'Google Takvim', 'Netgsm', 'Verimor', 'Dentsoft']} accent="blue" />;
    }

    return <DashboardCards title="Hesap Ayarları" subtitle="Modüller ve kullanım tercihleri" items={['Gelişmiş Analitik', 'Temel Analitik', 'Takvim Yönetimi', 'CRM Entegrasyonu', 'Manuel Takip', 'Destek Talebi']} accent="slate" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 22 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.4, type: 'spring', damping: 22, stiffness: 110 }}
      className="relative w-full"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1180px] rounded-2xl border border-white/20 bg-[#eef6fb] shadow-2xl shadow-dark/30 overflow-hidden">
        <div className="grid grid-cols-[64px_minmax(0,1fr)] sm:grid-cols-[180px_minmax(0,1fr)] lg:grid-cols-[224px_minmax(0,1fr)] min-h-[480px] md:min-h-[540px]">
          <aside className="bg-[#060a18] text-white flex flex-col border-r border-white/10">
            <div className="p-3 sm:p-4 border-b border-white/10">
              <div className="rounded-xl border border-white/10 bg-white/10 p-2.5 sm:p-3 flex items-center justify-between gap-2 shadow-inner">
                <div className="min-w-0">
                  <img src="/logo_dashboard.png" alt="Oxonom" className="h-4 sm:h-5 w-auto object-contain mb-2" />
                  <p className="hidden sm:block text-[11px] font-bold text-white/90 truncate">Oxonom Demo Panel</p>
                </div>
                <button className="hidden sm:flex w-8 h-8 rounded-xl border border-white/10 bg-white/5 items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors" aria-label="Bildirimleri aç">
                  <Bell className="w-4 h-4" />
                </button>
              </div>
            </div>

            <nav className="flex-1 p-2 sm:p-3 space-y-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const active = activeItem === item.label;
                return (
                  <button
                    key={item.label}
                    onClick={() => setActiveItem(item.label)}
                    className={`w-full flex items-center gap-3 rounded-xl border px-2.5 py-2.5 text-left transition-all ${
                      active
                        ? 'bg-white/8 border-blue-400/30 shadow-[0_0_18px_rgba(96,165,250,0.25)]'
                        : 'border-transparent hover:bg-white/5'
                    }`}
                  >
                    <span className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 ${active ? 'border-blue-300/40 bg-blue-400/10 text-blue-100' : 'border-white/10 bg-white/5 text-white/60'}`}>
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="hidden sm:block text-xs font-bold text-white/80 truncate">{item.label}</span>
                    {active && <span className="hidden sm:block ml-auto w-1.5 h-1.5 rounded-full bg-sky-300 shadow-[0_0_10px_rgba(125,211,252,0.9)]" />}
                  </button>
                );
              })}
            </nav>

            <div className="p-2 sm:p-3 border-t border-white/10 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2">
              <div className="hidden sm:flex rounded-lg bg-white text-[#060a18] text-xs font-black items-center justify-center py-2">TR</div>
              <button className="w-full sm:w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-white transition-colors" aria-label="Çıkış yap">
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </aside>

          <div className="min-w-0 p-3 sm:p-5 md:p-7 lg:p-8 overflow-hidden">
            <motion.div
              key={activeItem}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              {renderScreen()}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#f8fafc]">
      {/* Premium Background Elements */}
      <div className="absolute inset-x-0 top-0 h-[58%] z-0 overflow-hidden pointer-events-none bg-brand">
        <motion.div style={{ y: y1 }} className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px]" />
        <motion.div style={{ y: y2 }} className="absolute bottom-0 left-[5%] w-[400px] h-[400px] bg-black/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.08]" />
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="flex flex-col items-center gap-10 md:gap-12">
          {/* Content */}
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-8 border border-white/20 backdrop-blur-md shadow-lg shadow-black/10"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              OXONOM V2.0 AI MODEL AKTİF
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight"
            >
              Müşteri iletişiminde{' '}
              <span className="relative inline-flex items-center gap-3 px-6 py-2 md:py-3 mt-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl align-middle">
                <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand shadow-lg shadow-brand/40 shrink-0">
                  <Zap className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </span>
                <span className="text-white font-black tracking-tight">insan ötesi hız.</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base md:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              Binlerce çağrıyı aynı anda karşılayın veya arayın. Duygu analizi yapan, sistemlerinize entegre yeni nesil otonom temsilci.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
            >
              <a 
                href="https://app.oxonom.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="OXONOM uygulamasını ücretsiz deneyin"
                className="w-full sm:w-auto px-8 py-4 bg-dark text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-black transition-all shadow-2xl shadow-dark/30 group"
              >
                Hemen Ücretsiz Deneyin <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link 
                to="/paketler"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                <LayoutGrid className="w-4 h-4" /> Paketlere Gözat
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-8 flex justify-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-xs font-bold text-white backdrop-blur-sm">
                <Zap className="w-3.5 h-3.5 text-yellow-300" /> Kayıt olduğunuzda anında $5 deneme bakiyesi hesabınıza tanımlanır.
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-6 md:gap-8 pt-6 border-t border-white/10"
            >
              {[
                { icon: Shield, text: "Kurulum Ücreti Yok" },
                { icon: Zap, text: "Kullandıkça Öde" },
                { icon: Users, text: "7/24 Aktif Destek" }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <badge.icon className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider">{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <DashboardHeroMockup />
        </div>
      </div>
    </section>
  );
}
