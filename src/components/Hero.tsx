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

const sidebarItems = [
  { label: 'Genel Bakış', icon: Grid2X2 },
  { label: 'CRM', icon: Target },
  { label: 'Gelen Kutusu', icon: Inbox },
  { label: 'Çağrılar', icon: Phone },
  { label: 'Takvim', icon: CalendarDays },
  { label: 'AI Asistan', icon: Bot },
  { label: 'İş Akışları', icon: Workflow },
  { label: 'Entegrasyonlar', icon: Plug },
  { label: 'Hesap Ayarları', icon: Settings },
];

const statCards = [
  { label: 'Toplam Lead', value: '85', icon: Users, color: 'blue', bg: 'bg-blue-50', text: 'text-blue-600' },
  { label: 'Hot Lead', value: '31', icon: Flame, color: 'red', bg: 'bg-red-50', text: 'text-red-500' },
  { label: 'Warm Lead', value: '39', icon: TrendingUp, color: 'orange', bg: 'bg-amber-50', text: 'text-amber-600' },
  { label: 'Handoff', value: '9', icon: CornerUpRight, color: 'purple', bg: 'bg-purple-50', text: 'text-purple-600' },
  { label: 'Ort. Skor', value: '59', icon: Star, color: 'green', bg: 'bg-green-50', text: 'text-green-600', suffix: '/ 100' },
  { label: 'Bugün Yeni', value: '0', icon: CalendarDays, color: 'slate', bg: 'bg-slate-100', text: 'text-slate-600' },
];

function DashboardHeroMockup({ opacity }: { opacity: any }) {
  const [activeItem, setActiveItem] = useState('Genel Bakış');
  const [activeStat, setActiveStat] = useState('Toplam Lead');

  const leadBars = [
    { label: 'HOT', value: '31 (36%)', width: '36%', color: 'bg-red-500' },
    { label: 'WARM', value: '39 (46%)', width: '46%', color: 'bg-amber-400' },
    { label: 'COLD', value: '15 (18%)', width: '18%', color: 'bg-blue-400' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 22 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.4, type: 'spring', damping: 22, stiffness: 110 }}
      className="relative lg:col-span-7 w-full"
      style={{ opacity }}
    >
      <div className="relative z-10 mx-auto max-w-[980px] rounded-2xl border border-white/20 bg-[#eef6fb] shadow-2xl shadow-dark/30 overflow-hidden">
        <div className="grid grid-cols-[78px_1fr] sm:grid-cols-[180px_1fr] lg:grid-cols-[168px_1fr] min-h-[520px] md:min-h-[560px]">
          <aside className="bg-[#060a18] text-white flex flex-col border-r border-white/10">
            <div className="p-3 sm:p-4 border-b border-white/10">
              <div className="rounded-xl border border-white/10 bg-white/10 p-2.5 sm:p-3 flex items-center justify-between gap-2 shadow-inner">
                <div className="min-w-0">
                  <img src="/logo_dashboard.png" alt="Oxonom" className="h-4 sm:h-5 w-auto object-contain mb-2" />
                  <p className="hidden sm:block text-[11px] font-bold text-white/90 truncate">Dental Excellence Turkey</p>
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

          <div className="p-4 sm:p-6 md:p-8 overflow-hidden">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-dark">Dashboard</h3>
                <p className="text-sm md:text-base font-medium text-slate-500 mt-1">Genel performans özeti</p>
              </div>
              <div className="hidden md:flex items-center gap-2 rounded-xl bg-white/70 border border-white px-3 py-2 text-xs font-bold text-slate-500 shadow-sm">
                <Activity className="w-4 h-4 text-green-500" />
                Canlı veri
              </div>
            </div>

            <motion.div whileHover={{ y: -2 }} className="bg-white rounded-xl border border-slate-200/70 shadow-sm p-4 sm:p-5 mb-5">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <Plug className="w-4 h-4 text-slate-500" />
                  <p className="text-sm md:text-base font-bold text-slate-700">Entegrasyon Durumu</p>
                </div>
                <button className="text-xs font-bold text-blue-500 hover:text-blue-700">Ayarlar</button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                {[
                  { label: 'WhatsApp', icon: MessageCircle, color: 'text-green-500', state: 'Yapılandırılmamış' },
                  { label: 'Instagram', icon: Instagram, color: 'text-pink-500', state: 'Yapılandırılmamış' },
                  { label: 'Ses (Gelen)', icon: Phone, color: 'text-blue-500', state: 'LiveKit', live: true },
                  { label: 'Ses (Giden)', icon: Phone, color: 'text-indigo-500', state: 'Yapılandırılmamış' },
                  { label: 'Takvim', icon: CalendarDays, color: 'text-blue-500', state: 'Yapılandırılmamış' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center justify-between gap-3 text-xs md:text-sm">
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

            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 mb-5">
              {statCards.map((stat, index) => {
                const Icon = stat.icon;
                const active = activeStat === stat.label;
                return (
                  <motion.button
                    key={stat.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 + index * 0.04 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    onClick={() => setActiveStat(stat.label)}
                    className={`bg-white rounded-xl border p-3 sm:p-4 text-left shadow-sm transition-all ${active ? 'border-blue-300 shadow-blue-500/10' : 'border-slate-100 hover:border-slate-200'}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.text} flex items-center justify-center shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </span>
                      <span>
                        <span className="block text-[11px] sm:text-xs font-bold text-slate-500">{stat.label}</span>
                        <span className="text-2xl sm:text-3xl font-black text-dark leading-none">{stat.value}</span>
                        {stat.suffix && <span className="ml-1 text-xs font-medium text-slate-400">{stat.suffix}</span>}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-5">
              <motion.div whileHover={{ y: -2 }} className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 sm:p-5 min-h-[260px]">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm md:text-base font-bold text-slate-700">Son 14 Gün</h4>
                  <div className="hidden sm:flex items-center gap-4 text-[11px] font-bold">
                    <span className="text-blue-500">Konuşma</span>
                    <span className="text-red-500">Hot Lead</span>
                    <span className="text-amber-500">Handoff</span>
                  </div>
                </div>
                <svg viewBox="0 0 680 240" className="w-full h-[220px]" role="img" aria-label="Son 14 gün performans grafiği">
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
                    { d: 'M38 150 C70 55 92 42 126 132 S190 78 236 102 S300 198 344 198 S430 176 480 198 S520 154 558 190 S610 198 660 198', color: '#5671e8', delay: 0 },
                    { d: 'M38 190 C72 132 88 112 136 126 S180 148 214 178 S286 188 326 198 S430 180 476 198 S540 190 660 198', color: '#ef5350', delay: 0.12 },
                    { d: 'M38 196 C70 150 96 144 122 178 S170 196 208 198 S280 176 328 198 S460 198 660 198', color: '#f2a12b', delay: 0.24 },
                  ].map((line) => (
                    <motion.path
                      key={line.color}
                      d={line.d}
                      fill="none"
                      stroke={line.color}
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0.2 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.6, delay: line.delay, ease: 'easeInOut' }}
                    />
                  ))}
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
                      {activeStat === 'Handoff' ? '9' : '11'}
                    </motion.span>
                    <span className="text-xl font-bold text-slate-400 mb-1">%</span>
                  </div>
                  <p className="mt-2 text-xs font-medium text-slate-500">Seçili kart: {activeStat}</p>
                </motion.div>
              </div>
            </div>
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
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-brand min-h-[90vh] flex items-center">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y: y1 }} className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px]" />
        <motion.div style={{ y: y2 }} className="absolute bottom-0 left-[5%] w-[400px] h-[400px] bg-black/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.08]" />
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="text-center lg:text-left lg:col-span-5">
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
              Müşteri iletişiminde <br className="hidden sm:block" />
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
              className="text-base md:text-xl text-white/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Binlerce çağrıyı aynı anda karşılayın veya arayın. Duygu analizi yapan, sistemlerinize entegre yeni nesil otonom temsilci.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6"
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
              className="mb-12 flex justify-center lg:justify-start"
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
              className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8 pt-8 border-t border-white/10"
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

          <DashboardHeroMockup opacity={opacity} />
        </div>
      </div>
    </section>
  );
}
