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
    green: 'border-emerald-200 bg-gradient-to-br from-emerald-50/80 to-white text-emerald-700',
    amber: 'border-amber-300 bg-white text-amber-700',
    blue: 'border-slate-200 bg-white text-blue-700',
    slate: 'border-slate-200 bg-white text-slate-700',
  }[accent];

  return (
    <div className="mx-auto max-w-[1180px] space-y-6">
      <div className="flex items-center justify-between bg-white/70 px-6 py-5">
        <div>
          <h3 className="text-2xl font-bold text-dark">{title}</h3>
          <p className="text-sm font-medium text-slate-500 mt-1">{subtitle}</p>
        </div>
        <div className="hidden xl:flex rounded-xl bg-slate-100 p-1">
          <span className="rounded-lg bg-white px-4 py-2 text-xs font-bold text-dark shadow-sm">{title}</span>
          <span className="px-4 py-2 text-xs font-bold text-slate-500">Bilgi Bankası</span>
        </div>
      </div>
      <div className={`grid gap-4 ${accent === 'blue' ? 'grid-cols-3' : 'grid-cols-2'}`}>
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
                <span className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${accent === 'amber' ? 'bg-amber-50' : accent === 'green' ? 'bg-emerald-100' : 'bg-slate-50'}`}>
                  {accent === 'blue' ? <Plug className="w-5 h-5" /> : <Zap className="w-5 h-5" />}
                </span>
                <div>
                  <h4 className="font-bold text-dark">{item}</h4>
                  <p className="text-sm text-slate-500 mt-1">{accent === 'blue' ? 'Bağlantıyı tek panelden kurun ve izleyin.' : 'Kurallar, tetikleyiciler ve ekip devri tek panelden yönetilir.'}</p>
                </div>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-black ${accent === 'amber' ? 'bg-amber-50 text-amber-700 border border-amber-200' : 'bg-emerald-100 text-emerald-700'}`}>{accent === 'amber' ? 'Entegrasyon eksik' : 'Aktif'}</span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <button className="py-2 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-600">{accent === 'blue' ? 'Bağla' : 'Test Et'}</button>
              <button className="py-2 rounded-lg bg-[#0b8ed1] text-white text-xs font-bold">{accent === 'blue' ? 'Detay' : 'Düzenle →'}</button>
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
        <div className="space-y-6">
          <div className="bg-white/70 px-6 py-5">
            <h3 className="text-2xl font-bold text-dark">CRM</h3>
            <p className="text-sm font-medium text-slate-500 mt-1">Lead yönetimi ve satış takibi</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex rounded-xl bg-slate-100 p-1">
            {['Leads', 'Lead Formları', 'Teklifler & Ödemeler', 'Takip'].map((tab, index) => (
              <span key={tab} className={`px-5 py-2.5 rounded-lg text-xs font-bold ${index === 0 ? 'bg-white text-dark shadow-sm ring-2 ring-blue-600' : 'text-slate-500'}`}>{tab}</span>
            ))}
            </div>
            <div className="rounded-xl bg-slate-100 p-1 text-xs font-bold text-slate-500"><span className="rounded-lg bg-white px-4 py-2 inline-block text-dark shadow-sm">Tablo</span><span className="px-4">Kanban</span></div>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Tümü 14', '🔥 HOT 4', '🟡 WARM 6', '🔵 COLD 4', 'Bugün 3', 'Temsilci Talep 2'].map((filter, index) => (
              <span key={filter} className={`px-3 py-2 rounded-lg border text-xs font-bold ${index === 0 ? 'bg-dark text-white border-dark' : 'bg-white text-slate-600 border-slate-200'}`}>{filter}</span>
            ))}
          </div>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="grid grid-cols-[1.3fr_1fr_.6fr_1fr_1fr] gap-3 px-5 py-4 bg-slate-50 text-[10px] font-black text-slate-500 uppercase tracking-widest min-w-[820px]">
              <span>Kişi</span><span>Telefon</span><span>Skor</span><span>Durum</span><span>Son Aktivite</span>
            </div>
            <div className="overflow-x-auto">
              {rows.map((row, index) => (
                <motion.div key={row[0]} whileHover={{ backgroundColor: '#f8fafc' }} className="grid grid-cols-[1.3fr_1fr_.6fr_1fr_1fr] gap-3 px-5 py-4 border-t border-slate-100 min-w-[820px] text-sm items-center">
                  <span className="font-bold text-slate-800 flex items-center gap-3"><b className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs">{row[0].split(' ').map((p) => p[0]).join('')}</b>{row[0]}</span>
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
        <div className="grid grid-cols-[360px_1fr] gap-0 bg-white rounded-none border border-slate-100 shadow-sm overflow-hidden min-h-[620px] -m-8">
          <div className="border-r border-slate-100">
            <div className="p-4 border-b border-slate-100">
              <h3 className="font-bold text-dark mb-3">Gelen Kutusu</h3>
              <div className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-400">İsim veya numara ara...</div>
              <div className="mt-3 flex flex-wrap gap-1.5 text-xs font-bold">
                {['Tümü', 'Whatsapp', 'Instagram', 'Voice', 'Yeni'].map((item, index) => (
                  <span key={item} className={`px-2.5 py-1.5 rounded-md ${index === 0 ? 'bg-dark text-white' : 'bg-slate-100 text-slate-500'}`}>{item}</span>
                ))}
              </div>
            </div>
            {['Duru Klinik', 'Atlas Dental', 'Mira Estetik', 'Nova Health', 'Liva Danışmanlık'].map((name, index) => (
              <motion.button key={name} whileHover={{ backgroundColor: '#f8fafc' }} className="w-full flex items-center gap-3 p-4 border-b border-slate-100 text-left h-[86px]">
                <span className={`w-11 h-11 rounded-full flex items-center justify-center text-xs font-black ${index < 2 ? 'bg-rose-100 text-rose-600' : 'bg-blue-50 text-blue-600'}`}>{name.slice(0, 2).toUpperCase()}</span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-dark truncate">{name}</span>
                  <span className="block text-xs text-slate-400 truncate">{index === 0 ? 'Randevu seçeneklerini paylaşabilir misiniz?' : 'Otomatik yanıt gönderildi'}</span>
                </span>
                <span className="ml-auto text-xs text-slate-400">{index + 1} gün</span>
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
        <div className="space-y-6">
          <div className="bg-white/70 px-6 py-5"><h3 className="text-2xl font-bold text-dark">Çağrı Logları</h3><p className="text-slate-500 font-medium">12 arama kaydı</p></div>
          <div className="grid grid-cols-4 gap-4">
            {[
              ['Toplam Arama', '12', Phone, 'bg-blue-50 text-blue-600'],
              ['Cevaplanma', '92%', Phone, 'bg-green-50 text-green-600'],
              ['Ort. Süre', '2:18', CalendarDays, 'bg-amber-50 text-amber-600'],
              ['Cevapsız', '1', Phone, 'bg-red-50 text-red-600'],
            ].map(([label, value, Icon, cls]) => (
              <div key={label as string} className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                <span className={`w-10 h-10 rounded-xl flex items-center justify-center ${cls as string}`}><Icon className="w-5 h-5" /></span>
                <p className="text-xs font-bold text-slate-500 mt-3">{label as string}</p>
                <p className="text-2xl font-black text-dark">{value as string}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="grid grid-cols-[1fr_.7fr_.7fr_1fr_1fr] gap-3 px-5 py-4 bg-slate-50 text-[10px] font-black text-slate-500 uppercase tracking-widest">
              <span>Telefon</span><span>Yön</span><span>Süre</span><span>Durum</span><span>Skor</span>
            </div>
            {['+90 530 120 44 82', '+90 542 870 19 33', '+90 555 204 78 10', '+90 533 612 90 24'].map((phone, index) => (
              <motion.div key={phone} whileHover={{ x: 4 }} className="grid grid-cols-[1fr_.7fr_.7fr_1fr_1fr] gap-3 px-5 py-4 border-b border-slate-100 text-sm">
                <span className="font-bold text-slate-700">{phone}</span><span>Gelen</span><span>{index + 1}:2{index}</span><span className="text-green-600 font-bold">completed</span><span className="text-red-600 font-bold">{index === 2 ? '44/100' : '82/100'}</span>
              </motion.div>
            ))}
          </div>
        </div>
      );
    }

    if (activeItem === 'Takvim') {
      return (
        <div className="space-y-6 max-w-[930px] mx-auto">
          <div className="flex items-center justify-between"><h3 className="text-2xl font-bold text-dark flex items-center gap-3"><CalendarDays className="text-[#0b8ed1]" />Takvim</h3><button className="px-5 py-2.5 bg-[#0b8ed1] text-white rounded-lg text-sm font-bold">+ Yeni Randevu</button></div>
          <div className="flex gap-2">{['Tümü','Platform','Google','AI Asistan','GHL','DentSoft'].map((f, i) => <span key={f} className={`px-4 py-1.5 rounded-full border text-xs font-bold ${i === 0 ? 'bg-[#0b8ed1] text-white border-[#0b8ed1]' : 'bg-white text-slate-500 border-slate-200'}`}>{f}</span>)}</div>
          <div className="grid grid-cols-[1fr_300px] gap-5">
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-4 text-center font-bold border-b border-slate-100">Nisan 2026</div>
              <div className="grid grid-cols-7 text-center text-xs font-bold text-slate-400 border-b border-slate-100">{['PZT','SAL','ÇAR','PER','CUM','CMT','PAZ'].map(d => <span key={d} className="py-2">{d}</span>)}</div>
              <div className="grid grid-cols-7">{Array.from({ length: 35 }).map((_, i) => <motion.div key={i} whileHover={{ backgroundColor: '#eff6ff' }} className={`h-[74px] border-r border-b border-slate-100 p-2 text-sm ${i === 16 ? 'bg-blue-50 text-blue-700 font-black' : 'text-slate-700'}`}>{i + 1 <= 30 ? i + 1 : ''}</motion.div>)}</div>
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
      return <DashboardCards title="AI Asistan" subtitle="Ana asistanlar ve otomasyon modülleri" items={['Sesli Resepsiyonist', 'Mesajlaşma Asistanı', 'Randevu Teyit & Hatırlatma', 'Reaktivasyon Araması']} accent="green" />;
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
      className="relative hidden w-full lg:block"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1440px] rounded-2xl border border-white/20 bg-[#eef6fb] shadow-2xl shadow-dark/30 overflow-hidden">
        <div className="grid grid-cols-[230px_minmax(0,1fr)] min-h-[720px]">
          <aside className="bg-[#060a18] text-white flex flex-col border-r border-white/10">
            <div className="p-4 border-b border-white/10">
              <div className="rounded-xl border border-white/10 bg-white/10 p-3 flex items-center justify-between gap-2 shadow-inner">
                <div className="min-w-0">
                  <img src="/logo_dashboard.png" alt="Oxonom" className="h-5 w-auto object-contain mb-2" />
                  <p className="text-[12px] font-bold text-white/90 truncate">Oxonom Demo Panel</p>
                </div>
                <button className="flex w-9 h-9 rounded-xl border border-white/10 bg-white/5 items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors" aria-label="Bildirimleri aç">
                  <Bell className="w-4 h-4" />
                </button>
              </div>
            </div>

            <nav className="flex-1 p-3 space-y-2">
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
                    <span className="text-xs font-bold text-white/80 truncate">{item.label}</span>
                    {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-sky-300 shadow-[0_0_10px_rgba(125,211,252,0.9)]" />}
                  </button>
                );
              })}
            </nav>

            <div className="p-3 border-t border-white/10 grid grid-cols-[1fr_auto] gap-2">
              <div className="flex rounded-lg bg-white text-[#060a18] text-xs font-black items-center justify-center py-2">TR</div>
              <button className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-white transition-colors" aria-label="Çıkış yap">
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </aside>

          <div className="min-w-0 overflow-hidden">
            <div className="flex items-center justify-between border-b border-amber-300 bg-amber-50/80 px-8 py-2 text-sm font-medium text-amber-800">
              <span>Demo Hesap — Ses ve chatbot testini deneyebilirsiniz</span>
              <span className="flex gap-3"><b className="rounded-full border border-amber-300 bg-white px-3 py-1 font-bold">Ses: 0/10 dk</b><b className="rounded-full border border-amber-300 bg-white px-3 py-1 font-bold">Chat: 0/30 msj</b></span>
            </div>
            <div className="h-[678px] overflow-hidden bg-gradient-to-br from-white via-[#f6fbff] to-cyan-50 p-8">
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
      </div>
    </motion.div>
  );
}

function HeroAutomationVisual() {
  const [activeFlow, setActiveFlow] = useState<'voice' | 'chat' | 'social'>('voice');

  const flows = {
    voice: {
      icon: Phone,
      label: 'Sesli Asistan',
      title: 'Gelen çağrı anında karşılandı',
      message: 'Müşteri randevu talebi oluşturdu. Oxonom uygun saatleri sundu ve CRM kaydını açtı.',
      color: 'from-red-500 to-orange-500',
      metric: '340ms',
    },
    chat: {
      icon: MessageCircle,
      label: 'Web Chat',
      title: 'Ziyaretçi sıcak lead olarak işaretlendi',
      message: 'Web sitesindeki fiyat sorusu yanıtlandı, WhatsApp görüşmesine yönlendirme hazırlandı.',
      color: 'from-blue-500 to-cyan-500',
      metric: '7/24',
    },
    social: {
      icon: Instagram,
      label: 'Sosyal Medya',
      title: 'DM ve yorum akışı satışa bağlandı',
      message: 'Instagram yorumu algılandı, DM yanıtı gönderildi ve paket linki otomatik paylaşıldı.',
      color: 'from-pink-500 to-red-500',
      metric: '30+ dil',
    },
  };

  const active = flows[activeFlow];
  const ActiveIcon = active.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.7, ease: 'easeOut' }}
      className="relative hidden w-full lg:block"
    >
      <div className="relative mx-auto w-full max-w-[1180px] overflow-hidden rounded-2xl border border-white/20 bg-[#090b12] p-6 shadow-2xl shadow-dark/35">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.06]" />
        <motion.div
          className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand/35 blur-[90px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.45, 0.75, 0.45] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-500/25 blur-[100px]"
          animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <div className="relative z-10 grid min-h-[520px] grid-cols-[330px_minmax(0,1fr)_320px] gap-6">
          <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.04] p-5">
            <div>
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white/45">Canlı Akışlar</span>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[10px] font-black text-emerald-300">Aktif</span>
              </div>
              <div className="space-y-3">
                {(Object.keys(flows) as Array<keyof typeof flows>).map((key) => {
                  const flow = flows[key];
                  const Icon = flow.icon;
                  const selected = activeFlow === key;
                  return (
                    <motion.button
                      key={key}
                      onClick={() => setActiveFlow(key)}
                      whileHover={{ x: 4 }}
                      className={`w-full rounded-xl border p-4 text-left transition-all ${
                        selected ? 'border-white/25 bg-white/12 shadow-xl shadow-white/5' : 'border-white/10 bg-white/[0.04] hover:bg-white/[0.08]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br ${flow.color} text-white shadow-lg`}>
                          <Icon className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block text-sm font-black text-white">{flow.label}</span>
                          <span className="text-xs font-medium text-white/45">{flow.metric} otomasyon</span>
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-white/40">Bugünkü Özet</p>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                {['128 lead', '42 hot', '14 devir'].map((item) => (
                  <div key={item} className="rounded-lg bg-white/[0.06] px-2 py-3 text-xs font-black text-white">{item}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <div className="absolute inset-x-10 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute inset-y-10 left-1/2 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

            {[
              { className: 'left-8 top-10', text: 'Çağrı', icon: Phone },
              { className: 'right-8 top-10', text: 'DM', icon: Instagram },
              { className: 'left-8 bottom-10', text: 'Web Chat', icon: MessageCircle },
              { className: 'right-8 bottom-10', text: 'CRM', icon: Target },
            ].map((node, index) => {
              const Icon = node.icon;
              return (
                <motion.div
                  key={node.text}
                  className={`absolute ${node.className} rounded-xl border border-white/10 bg-[#121620] px-4 py-3 text-white shadow-xl`}
                  animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.35 }}
                >
                  <div className="flex items-center gap-2 text-xs font-black">
                    <Icon className="h-4 w-4 text-brand" /> {node.text}
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              key={activeFlow}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="relative z-10 flex h-56 w-56 flex-col items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-white/18 to-white/[0.04] text-center shadow-2xl shadow-brand/20 backdrop-blur-xl"
            >
              <motion.div
                className={`absolute inset-5 rounded-full bg-gradient-to-br ${active.color} opacity-20 blur-xl`}
                animate={{ scale: [1, 1.18, 1] }}
                transition={{ duration: 2.8, repeat: Infinity }}
              />
              <span className={`relative mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${active.color} text-white shadow-xl`}>
                <ActiveIcon className="h-8 w-8" />
              </span>
              <p className="relative text-[10px] font-black uppercase tracking-[0.24em] text-white/45">Oxonom AI</p>
              <p className="relative mt-2 max-w-[150px] text-lg font-black leading-tight text-white">Akışı otomatik yönetir</p>
            </motion.div>
          </div>

          <div className="flex flex-col gap-5">
            <motion.div
              key={active.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl border border-white/10 bg-white p-5 shadow-xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${active.color} text-white`}>
                  <ActiveIcon className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-black text-slate-500">Canlı Demo</span>
              </div>
              <h3 className="text-xl font-black leading-tight text-dark">{active.title}</h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-500">{active.message}</p>
            </motion.div>

            <div className="grid grid-cols-2 gap-3">
              {[
                ['Yanıt', '<1 dk'],
                ['Kanal', active.label],
                ['Durum', 'Tamamlandı'],
                ['Aksiyon', 'CRM kaydı'],
              ].map(([label, value]) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -3 }}
                  className="rounded-xl border border-white/10 bg-white/[0.07] p-4"
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/35">{label}</p>
                  <p className="mt-2 text-sm font-black text-white">{value}</p>
                </motion.div>
              ))}
            </div>

            <Link
              to="/paketler"
              className="mt-auto flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-4 text-sm font-black text-white shadow-xl shadow-brand/25 transition-all hover:bg-red-600"
            >
              Paketleri İncele <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

type HeroCopy = {
  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  primaryCta: string;
  packagesCta: string;
  badges: string[];
  trust: string[];
  note: string;
};

export default function Hero({ copy }: { copy?: HeroCopy }) {
  const text = copy ?? {
    heroBadge: 'AI Model Aktif',
    heroTitle: 'Müşteri iletişiminde insan ötesi hız.',
    heroDescription: 'Çağrıları ve mesajları 7/24 karşılayan, lead niteleyen ve satış ekibine hazır müşteri aktaran otonom temsilci.',
    primaryCta: 'Hemen Ücretsiz Deneyin',
    packagesCta: 'Paketlere Gözat',
    badges: ['Güvenli panel', 'Hızlı yanıt', '7/24 destek'],
    trust: ['Güvenli Altyapı', 'Kullandıkça Öde', '7/24 Aktif Destek'],
    note: 'Dakikalar içinde çalışan otomasyon senaryolarını test edin.',
  };
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] md:pt-36 md:pb-24">
      {/* Premium Background Elements */}
      <div className="absolute inset-x-0 top-0 hidden h-[58%] z-0 overflow-hidden pointer-events-none bg-brand md:block">
        <motion.div style={{ y: y1 }} className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px]" />
        <motion.div style={{ y: y2 }} className="absolute bottom-0 left-[5%] w-[400px] h-[400px] bg-black/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.08]" />
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 md:hidden">
        <div className="relative overflow-hidden bg-brand px-4 pt-36 pb-20 text-center text-white">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.08]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,.18),transparent_44%)]" />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="relative mx-auto max-w-sm"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.22em]">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              {text.heroBadge}
            </div>
            <h1 className="font-display text-[42px] font-black leading-[0.98] tracking-tight">
              {text.heroTitle}
            </h1>
            <p className="mx-auto mt-5 max-w-[330px] text-[15px] font-medium leading-7 text-white/82">
              {text.heroDescription}
            </p>
          </motion.div>
        </div>

        <div className="relative z-20 px-4 pb-10 -mt-9">
          <motion.a
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.45 }}
            href="https://app.oxonom.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="OXONOM uygulamasını ücretsiz deneyin"
            className="mx-auto flex h-[68px] max-w-[390px] items-center justify-center gap-3 rounded-2xl bg-[#070707] px-6 text-base font-black text-white shadow-2xl shadow-black/25 active:scale-[0.98]"
          >
            {text.primaryCta} <ArrowRight className="h-5 w-5" />
          </motion.a>

          <div className="mx-auto mt-8 grid max-w-[390px] grid-cols-3 gap-2">
            {[
              { icon: Shield, text: text.badges[0] },
              { icon: Zap, text: text.badges[1] },
              { icon: Users, text: text.badges[2] },
            ].map((badge) => (
              <div key={badge.text} className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm">
                <badge.icon className="mx-auto mb-2 h-4 w-4 text-brand" />
                <p className="text-[10px] font-black uppercase tracking-tight text-slate-600">{badge.text}</p>
              </div>
            ))}
          </div>

          <Link
            to="/paketler"
            className="mx-auto mt-4 flex max-w-[390px] items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-black text-dark shadow-sm"
          >
            <LayoutGrid className="h-4 w-4 text-brand" /> {text.packagesCta}
          </Link>
        </div>
      </div>

      <div className="relative z-10 mx-auto hidden w-full max-w-7xl px-4 sm:px-6 md:block">
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
              {text.heroBadge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight"
            >
              {text.heroTitle.split(' ').slice(0, -2).join(' ')}{' '}
              <span className="relative inline-flex items-center gap-3 px-6 py-2 md:py-3 mt-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl align-middle">
                <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand shadow-lg shadow-brand/40 shrink-0">
                  <Zap className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </span>
                <span className="text-white font-black tracking-tight">{text.heroTitle.split(' ').slice(-2).join(' ')}</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base md:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              {text.heroDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative z-20 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 translate-y-10 sm:mb-6 sm:translate-y-0"
            >
              <a 
                href="https://app.oxonom.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="OXONOM uygulamasını ücretsiz deneyin"
                className="w-full sm:w-auto px-8 py-5 sm:py-4 bg-dark text-white rounded-xl font-bold text-base sm:text-sm flex items-center justify-center gap-3 hover:bg-black transition-all shadow-2xl shadow-dark/30 group"
              >
                {text.primaryCta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link 
                to="/paketler"
                className="hidden sm:flex w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-bold text-sm items-center justify-center gap-2 hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                <LayoutGrid className="w-4 h-4" /> {text.packagesCta}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-8 hidden md:flex justify-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-xs font-bold text-white backdrop-blur-sm">
                <Zap className="w-3.5 h-3.5 text-yellow-300" /> {text.note}
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="hidden md:flex flex-wrap justify-center gap-6 md:gap-8 pt-6 border-t border-white/10"
            >
              {[
                { icon: Shield, text: text.trust[0] },
                { icon: Zap, text: text.trust[1] },
                { icon: Users, text: text.trust[2] }
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

          <HeroAutomationVisual />
        </div>
      </div>
    </section>
  );
}
