import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  Zap, 
  MessageSquare, 
  ArrowRight,
  Sparkles,
  ShieldCheck,
  LayoutGrid,
  Activity,
  Users,
  BarChart3,
  Phone,
  Play,
  Pause,
  MinusCircle,
  XCircle,
  CheckCircle,
  HelpCircle,
  Globe
} from 'lucide-react';
import { 
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { sectors } from '../constants';
import { cn } from '../lib/utils';

export default function SectorDetailPage() {
  const { id } = useParams();
  const sector = sectors.find(s => s.id === id);
  const [activeScenario, setActiveScenario] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Fallback for missing data to ensure UI doesn't break
  const safeSector = {
    ...sector,
    name: sector?.name || "Sektörel Çözüm",
    icon: sector?.icon || LayoutGrid,
    heroTitle: sector?.heroTitle || `${sector?.name || 'Sektör'} İçin Akıllı İletişim`,
    description: sector?.description || "Sektöre özel yapay zeka çözümleri ve otomasyon sistemleri.",
    longDescription: sector?.longDescription || sector?.description || "İşletmenize özel otonom yapay zeka senaryoları ve verimlilik artıran AI ajanları.",
    useCases: sector?.useCases || [],
    seoKeywords: sector?.seoKeywords || ["yapay zeka", "sektörel çözümler", "ai otomasyon"],
    stats: sector?.stats || { conversion: "%25 Artış", responseTime: "< 2 Saniye" },
    painPoints: sector?.painPoints || [],
    voiceScenarios: sector?.voiceScenarios || [],
    comparison: sector?.comparison || { 
      traditional: ["Manuel işlemler", "Yavaş yanıt", "Sınırlı kapasite"], 
      oxonom: ["AI otomasyonu", "Anlık yanıt", "7/24 ölçeklenebilirlik"] 
    },
    chartData: sector?.chartData || [
      { name: 'Pzt', value: 400 },
      { name: 'Sal', value: 300 },
      { name: 'Çar', value: 600 },
    ],
  };

  useEffect(() => {
    setIsPlaying(false);
  }, [activeScenario]);

  if (!sector) {
    return <Navigate to="/sektorler" replace />;
  }

  return (
    <div className="pt-24 min-h-screen bg-white overflow-x-hidden">
      {/* Structured Data (JSON-LD) for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `${safeSector.name} Yapay Zeka Çözümleri`,
          "provider": {
            "@type": "Organization",
            "name": "OXONOM",
            "url": "https://oxonom.com"
          },
          "description": safeSector.longDescription,
          "areaServed": "Worldwide",
          "serviceType": "AI Automation"
        })}
      </script>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="py-8">
          <Link 
            to="/sektorler" 
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-brand transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            TÜM SEKTÖRLER
          </Link>
        </nav>

        {/* Hero Section */}
        <section className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-40 relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-brand/10 rounded-xl text-brand border border-brand/20">
                <safeSector.icon className="w-6 h-6" />
              </div>
              <span className="px-4 py-1.5 bg-gray-50 text-gray-600 rounded-full text-[10px] font-bold uppercase tracking-widest border border-gray-100">
                SEKTÖREL YAPAY ZEKA MODELİ
              </span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-display font-bold text-dark mb-8 leading-[1.05] tracking-tight">
              {safeSector.heroTitle.includes(' ') && safeSector.heroTitle.split(' ').length > 2 ? (
                <>
                  {safeSector.heroTitle.split(' ').slice(0, -2).join(' ')} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-red-400">
                    {safeSector.heroTitle.split(' ').slice(-2).join(' ')}
                  </span>
                </>
              ) : (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-red-400">
                  {safeSector.heroTitle}
                </span>
              )}
              <span className="sr-only"> - {safeSector.name} Çözümleri</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed font-medium max-w-xl">
              {safeSector.longDescription}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button className="px-10 py-5 bg-dark text-white rounded-2xl font-bold text-base shadow-2xl shadow-dark/20 hover:bg-brand transition-all flex items-center gap-2 group">
                Hemen Ücretsiz Deneyin <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-white border border-gray-200 text-brand rounded-2xl font-bold text-base hover:bg-gray-50 hover:border-brand/30 transition-all flex items-center gap-2">
                <Sparkles className="w-5 h-5" /> Demo Talebi
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-6 p-1 bg-gray-50 rounded-3xl border border-gray-100 max-w-lg">
               <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                     <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">GÜVENLİK</p>
                     <p className="text-sm font-bold text-dark">KVKK & GDPR</p>
                  </div>
               </div>
               <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                     <Clock className="w-6 h-6" />
                  </div>
                  <div>
                     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">ERİŞİM</p>
                     <p className="text-sm font-bold text-dark">7/24 Kesintisiz</p>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* New Optimized Mockup Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="order-1 lg:order-2 relative"
          >
            {/* Background Decorations */}
            <div className="absolute inset-0 bg-brand/5 rounded-full blur-[100px] -z-10 animate-pulse" />
            
            <div className="relative">
              {/* Main Mockup Card */}
              <div className="relative z-10 bg-[#0A0A0A] rounded-[3rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden premium-shadow">
                {/* Dashboard Header */}
                <div className="p-6 border-b border-white/5 bg-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand flex items-center justify-center text-white shadow-lg shadow-brand/40">
                      <safeSector.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base">{safeSector.name} AI Ajanı</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">AKTİF • CANLI</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 border border-white/10">
                       <Activity className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Scenario Tabs */}
                <div className="px-4 py-3 bg-white/5 border-b border-white/5 flex gap-2 overflow-x-auto scrollbar-hide">
                  {safeSector.voiceScenarios.map((scenario, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveScenario(i)}
                      className={cn(
                        "whitespace-nowrap px-5 py-2.5 rounded-xl text-[10px] font-bold transition-all uppercase tracking-widest border shrink-0",
                        activeScenario === i 
                          ? "bg-brand border-brand text-white shadow-lg shadow-brand/20" 
                          : "bg-white/5 border-white/5 text-gray-500 hover:text-gray-300 hover:bg-white/10"
                      )}
                    >
                      {scenario.title}
                    </button>
                  ))}
                </div>

                {/* Interactive Player Body */}
                <div className="p-8 md:p-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeScenario}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-8"
                    >
                      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
                        <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                           <MessageSquare className="w-24 h-24 text-white" />
                        </div>
                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-4">MÜŞTERİ SENARYOSU</p>
                        <p className="text-white text-lg font-medium leading-[1.6] italic">
                          "{safeSector.voiceScenarios[activeScenario]?.desc}"
                        </p>
                      </div>

                      {/* Performance Visualizer */}
                      <div className="flex items-center justify-between gap-6 p-6 bg-white/5 rounded-3xl border border-white/10">
                         <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">HIZ VE DOĞRULUK</span>
                            <div className="flex items-center gap-3">
                               <div className="flex items-end gap-1 h-6">
                                  {[...Array(8)].map((_, i) => (
                                    <motion.div
                                      key={i}
                                      animate={isPlaying ? { height: [4, 18, 4] } : { height: 4 }}
                                      transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                                      className="w-1 bg-brand rounded-full"
                                    />
                                  ))}
                               </div>
                               <span className="text-xl font-bold text-brand">{safeSector.stats.responseTime}</span>
                            </div>
                         </div>
                         <button 
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-dark hover:scale-110 transition-transform shadow-2xl shadow-blue-500/10 shrink-0"
                          >
                            {isPlaying ? <Pause className="w-6 h-6 fill-dark" /> : <Play className="w-6 h-6 fill-dark ml-1" />}
                          </button>
                      </div>

                      {/* AI Response Preview */}
                      <div className="space-y-4">
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-brand/20 flex items-center justify-center text-brand shrink-0 font-bold text-[10px]">AI</div>
                            <div className="bg-brand border border-brand/20 rounded-2xl rounded-tl-none p-4 text-xs md:text-sm text-white leading-relaxed font-medium">
                               {safeSector.voiceScenarios[activeScenario]?.transcript}
                            </div>
                         </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Enhanced Performance Badges - Strategically positioned to AVOID overlap with content */}
              <div className="absolute -top-10 -right-10 z-20 hidden md:block group cursor-default">
                 <motion.div 
                   initial={{ y: 0 }}
                   animate={{ y: [0, -12, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="p-6 bg-dark rounded-[2rem] border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex items-center gap-4"
                 >
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand border border-white/10">
                       <Zap className="w-6 h-6" />
                    </div>
                    <div>
                       <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-0.5">YANIT HIZI</p>
                       <p className="text-lg font-bold text-white">Anında Yanıt</p>
                    </div>
                 </motion.div>
              </div>

              <div className="absolute -bottom-10 -left-10 z-20 hidden md:block group cursor-default">
                 <motion.div 
                   initial={{ y: 0 }}
                   animate={{ y: [0, 12, 0] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                   className="p-6 bg-white rounded-[2rem] border border-gray-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex items-center gap-4"
                 >
                    <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 border border-green-100">
                       <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">GÜVENLİK</p>
                       <p className="text-lg font-bold text-dark">%100 Güvenli</p>
                    </div>
                 </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Problem Section: "Bu Sorunlar Tanıdık mı?" */}
        {safeSector.painPoints.length > 0 && (
          <section className="mb-32">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[10px] font-bold text-brand uppercase tracking-[0.3em] mb-4 block">SEKTÖREL SORUNLAR</span>
              <h3 className="text-3xl md:text-5xl font-bold text-dark mb-6">Bu Sorunlar Tanıdık mı?</h3>
              <p className="text-gray-500 font-medium">
                {safeSector.name} sektöründe her gün binlerce müşteri potansiyelini bu nedenlerle kaybediyorsunuz.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {safeSector.painPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 group hover:bg-white hover:border-brand/20 hover:shadow-2xl hover:shadow-brand/5 transition-all duration-500"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all shadow-sm border border-gray-100">
                      <XCircle className="w-7 h-7" />
                    </div>
                    <div className="text-xl font-bold text-red-600">
                      {point.stat}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-dark mb-4">{point.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    {point.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Comparison Section: İndependent vs OXONOM */}
        <section className="mb-32">
           <div className="bg-dark rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />
             <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/10 blur-[130px] rounded-full -mr-96 -mt-96" />
             
             <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                <div>
                   <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Maliyet ve Performans <br /><span className="text-brand">Karşılaştırması</span></h3>
                   <p className="text-gray-400 text-lg mb-12 font-medium leading-relaxed">
                      Geleneksel yöntemler artık günümüzün hızına ve maliyet beklentilerine yanıt veremiyor. OXONOM ile operasyonunuzu %80 daha uygun maliyetle ölçeklendirin.
                   </p>
                   
                   <div className="space-y-4">
                      <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10">
                         <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-brand">
                            <TrendingUp className="w-6 h-6" />
                         </div>
                         <div>
                            <p className="font-bold text-sm">Sınırsız Eş Zamanlı Arama</p>
                            <p className="text-xs text-gray-400">Yüzlerce kişi aynı anda arasa bile hiçbir meşgul sesi yok.</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10">
                         <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-brand">
                            <Globe className="w-6 h-6" />
                         </div>
                         <div>
                            <p className="font-bold text-sm">Cok Dilli Kesintisiz Hizmet</p>
                            <p className="text-xs text-gray-400">15+ dilde, tatil yapmadan 7/24 kesintisiz destek.</p>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                   {/* Traditional side */}
                   <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
                      <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500 mb-6">
                         <MinusCircle className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-lg mb-6">Mevcut Durum</h4>
                      <ul className="space-y-4">
                         {safeSector.comparison.traditional.map((item, i) => (
                           <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                             <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                             {item}
                           </li>
                         ))}
                      </ul>
                   </div>
                   {/* OXONOM side */}
                   <div className="bg-brand/10 rounded-3xl p-8 border border-brand/20 shadow-2xl shadow-brand/10">
                      <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center text-white mb-6">
                         <CheckCircle className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-lg mb-6">OXONOM Etkisi</h4>
                      <ul className="space-y-4">
                         {safeSector.comparison.oxonom.map((item, i) => (
                           <li key={i} className="flex items-start gap-3 text-sm text-brand-light font-bold">
                             <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                             {item}
                           </li>
                         ))}
                      </ul>
                   </div>
                </div>
             </div>
           </div>
        </section>

        {/* Stats Chart Section */}
        <section className="mb-32">
          <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16 border border-gray-100">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-4">
                <span className="text-[10px] font-bold text-brand uppercase tracking-[0.3em] mb-4 block">PERFORMANS ANALİZİ</span>
                <h3 className="text-3xl font-bold text-dark mb-6">Verilerle {safeSector.name} Dönüşümü</h3>
                <p className="text-gray-500 mb-8 font-medium">
                  Yapay zeka asistanlarımız her etkileşimi veriye dönüştürerek size stratejik içgörüler sunar.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">DÖNÜŞÜM</p>
                    <p className="text-xl font-bold text-brand">{safeSector.stats.conversion}</p>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">YANIT HIZI</p>
                    <p className="text-xl font-bold text-dark">{safeSector.stats.responseTime}</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="h-[350px] bg-white rounded-3xl border border-gray-100 p-8 shadow-sm relative overflow-hidden">
                   <div className="flex items-center justify-between mb-8">
                      <div>
                        <h4 className="font-bold text-dark">Operasyonel Verimlilik</h4>
                        <p className="text-xs text-gray-400">Haftalık işlem trafiği analizi</p>
                      </div>
                      <div className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-bold flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" /> +%42 artış
                      </div>
                   </div>
                   <ResponsiveContainer width="100%" height="80%">
                    <AreaChart data={safeSector.chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#E50914" stopOpacity={0.2}/>
                          <stop offset="95%" stopColor="#E50914" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#999' }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#999' }} />
                      <Tooltip 
                        contentStyle={{ 
                          borderRadius: '16px', 
                          border: '1px solid #eee', 
                          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                          fontSize: '12px',
                          fontWeight: 'bold'
                        }} 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#E50914" 
                        strokeWidth={4}
                        fillOpacity={1} 
                        fill="url(#colorValue)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final SEO Content Area */}
        <section className="max-w-4xl mx-auto mb-32">
           <article className="prose prose-lg prose-red max-w-none">
              <h3 className="text-3xl font-bold text-dark mb-8 text-center">{safeSector.name} Sektöründe Geleceği OXONOM ile Yakalayın</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Günümüz dünyasında {safeSector.name} alanında rekabet edebilmek, sadece kaliteli hizmet sunmakla değil, bu hizmete ulaşımı ne kadar kolaylaştırdığınızla ilgilidir. 
                OXONOM'un sunduğu **{safeSector.seoKeywords.join(', ')}** odaklı yapay zeka çözümleri, işletmenizi statik bir yapıdan, 7/24 yaşayan ve müşterileriyle bağ kuran dinamik bir organizasyona dönüştürür.
              </p>
              <div className="bg-brand/5 border-l-4 border-brand p-8 rounded-r-3xl my-12">
                 <p className="text-dark font-bold text-xl italic mb-4">"Tek bir kaçan arama, bazen binlerce liralık bir satışın veya sadık bir hastanın kaybı demektir."</p>
                 <p className="text-gray-500 font-bold text-sm">— OXONOM Sektör Analiz Ekibi</p>
              </div>
           </article>
        </section>

        {/* Bottom CTA */}
        <section className="mb-24">
          <div className="text-center bg-gray-900 rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px]" />
             <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-lg text-xs font-bold text-brand mb-8 border border-white/10">
                  <Zap className="w-4 h-4" /> DENEYİN VE GÖRÜN
                </div>
                <h3 className="text-3xl md:text-5xl font-bold mb-8">Hemen Bugün {safeSector.name} AI <br />Ajanınızı Beraber Tasarlayalım</h3>
                <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
                   15 dakikalık ücretsiz demo görüşmemizde, işletmenize özel yapay zeka senaryolarını canlı olarak deneyimleyin.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="w-full sm:w-auto px-10 py-5 bg-brand text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-dark transition-all shadow-xl shadow-brand/20">
                     Ücretsiz Demo Al
                  </button>
                  <button className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                     Bize Sorun
                  </button>
                </div>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
}

             Ücretsiz Dene <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
