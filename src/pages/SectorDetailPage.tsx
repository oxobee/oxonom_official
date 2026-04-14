import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
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
  Activity,
  Users,
  BarChart3
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';
import { sectors } from '../constants';

export default function SectorDetailPage() {
  const { id } = useParams();
  const sector = sectors.find(s => s.id === id);

  if (!sector) {
    return <Navigate to="/sektorler" replace />;
  }

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb & Back */}
        <Link 
          to="/sektorler" 
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-brand transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          TÜM SEKTÖRLER
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-brand/10 rounded-xl text-brand border border-brand/20">
                <sector.icon className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-gray-100">
                SEKTÖREL ÇÖZÜM
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-dark mb-6 leading-[1.1] tracking-tight">
              {sector.name} İçin <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-red-400">Akıllı İletişim</span>
            </h1>
            
            <p className="text-lg text-gray-500 mb-8 leading-relaxed font-medium max-w-xl">
              {sector.longDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-dark text-white rounded-xl font-bold text-sm shadow-xl shadow-dark/10 hover:bg-brand transition-all flex items-center gap-2 group">
                Hemen Başla <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white border border-gray-200 text-brand rounded-xl font-bold text-sm hover:bg-gray-50 hover:border-brand/30 transition-all flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Ücretsiz Dene
              </button>
            </div>
            
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-100 rounded-lg text-xs font-bold text-green-700">
              <Zap className="w-3.5 h-3.5" /> Kayıt olduğunuzda anında $5 deneme bakiyesi hesabınıza tanımlanır.
            </div>
            
            <div className="mt-8 flex items-center gap-6 text-sm font-bold text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand" /> 7/24 Aktif
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand" /> %99.9 Uptime
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative lg:h-[500px] flex items-center justify-center"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-brand/5 rounded-full blur-3xl" />
            
            {/* Main Interface Card */}
            <div className="relative w-full max-w-md bg-white rounded-[2rem] border border-gray-100 shadow-2xl p-6 md:p-8 z-10">
               {/* Header */}
               <div className="flex items-center justify-between mb-8">
                 <div className="flex items-center gap-3">
                   <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                     <sector.icon className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="font-bold text-dark text-lg">{sector.name} AI</h3>
                     <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-0.5">
                       <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Çevrimiçi
                     </p>
                   </div>
                 </div>
                 <div className="px-3 py-1 bg-gray-50 rounded-full text-[10px] font-bold text-gray-400 border border-gray-100">
                   OTONOM
                 </div>
               </div>

               {/* Mock Conversation */}
               <div className="space-y-4 mb-8">
                 <div className="flex gap-3">
                   <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-xs font-bold text-gray-600">M</div>
                   <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-tl-none p-3.5 text-sm text-dark font-medium leading-relaxed max-w-[85%]">
                     {sector.id === 'saglik' ? 'En erken ne zamana randevu alabilirim?' : 
                      sector.id === 'e-ticaret' ? 'Siparişim nerede kaldı?' : 
                      sector.id === 'finans' ? 'Kredi faiz oranlarınız nedir?' :
                      sector.id === 'gayrimenkul' ? 'Bu ev için ne zaman görüşebiliriz?' :
                      sector.id === 'turizm' ? 'Hafta sonu için boş odanız var mı?' :
                      sector.id === 'restoran' ? 'Akşam 8 için 2 kişilik yer ayırır mısınız?' :
                      'Merhaba, detaylı bilgi almak istiyorum.'}
                   </div>
                 </div>
                 <div className="flex gap-3 flex-row-reverse">
                   <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center shrink-0 text-xs font-bold text-white">AI</div>
                   <div className="bg-blue-50 border border-blue-100 rounded-2xl rounded-tr-none p-3.5 text-sm text-dark font-medium leading-relaxed text-right max-w-[85%]">
                     {sector.id === 'saglik' ? 'Yarın saat 14:00 için randevunuzu oluşturabilirim. Onaylıyor musunuz?' : 
                      sector.id === 'e-ticaret' ? 'Siparişiniz kargoya verilmiş olup, yarın teslim edilecektir.' : 
                      sector.id === 'finans' ? 'Güncel ihtiyaç kredisi faiz oranımız %3.15\'tir. Hesaplama yapmamı ister misiniz?' :
                      sector.id === 'gayrimenkul' ? 'Yarın saat 15:00\'te evi gösterebiliriz. Sizin için uygun mu?' :
                      sector.id === 'turizm' ? 'Evet, deniz manzaralı standart odamız müsait. Rezervasyon yapalım mı?' :
                      sector.id === 'restoran' ? 'Harika! Akşam 20:00 için 2 kişilik masanızı ayırdım. Bekliyoruz!' :
                      'Size nasıl yardımcı olabilirim? Hemen detayları paylaşayım.'}
                   </div>
                 </div>
               </div>

               {/* Stats */}
               <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                 <div>
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">DÖNÜŞÜM</p>
                   <p className="text-xl font-bold text-brand">{sector.stats.conversion}</p>
                 </div>
                 <div>
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">YANIT SÜRESİ</p>
                   <p className="text-xl font-bold text-dark">{sector.stats.responseTime}</p>
                 </div>
               </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 md:-right-12 top-10 md:top-20 bg-dark text-white p-4 rounded-2xl shadow-2xl border border-white/10 z-20 hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">HIZ</p>
                  <p className="text-sm font-bold">Anında Yanıt</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-4 md:-left-12 bottom-10 md:bottom-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-20 hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">GÜVENLİK</p>
                  <p className="text-sm font-bold text-dark">%100 Güvenli</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Data Visualization Section */}
        <div className="mb-32">
          <div className="bg-gray-50 rounded-[2rem] p-6 md:p-16 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[100px] -mr-64 -mt-64 pointer-events-none" />
            
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 text-dark rounded-lg text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
                  <BarChart3 className="w-3.5 h-3.5 text-brand" />
                  VERİ ODAKLI ANALİZ
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">
                  Performansınızı <br />
                  <span className="text-brand">Gerçek Zamanlı</span> İzleyin
                </h2>
                <p className="text-gray-500 mb-8 font-medium leading-relaxed">
                  {sector.name} sektöründe yapay zeka kullanımının operasyonel verimliliğe olan etkisini gerçek zamanlı verilerle analiz edin. Kararlarınızı verilere dayandırın.
                </p>
                <ul className="space-y-4">
                  {['Maliyet Optimizasyonu', 'Müşteri Memnuniyeti Artışı', '7/24 Kesintisiz Hizmet'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm font-bold text-dark bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                      <div className="w-6 h-6 bg-brand/10 rounded-full flex items-center justify-center text-brand shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="lg:col-span-7">
                <div className="h-[300px] md:h-[400px] bg-white rounded-2xl border border-gray-100 p-4 md:p-6 shadow-xl shadow-dark/5">
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <div>
                      <h3 className="font-bold text-dark text-sm md:text-base">Verimlilik Artışı</h3>
                      <p className="text-[10px] md:text-xs text-gray-500 font-medium">Son 6 aylık performans verileri</p>
                    </div>
                    <div className="px-2 py-1 md:px-3 md:py-1 bg-green-50 text-green-600 rounded-full text-[10px] md:text-xs font-bold flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> +%42
                    </div>
                  </div>
                  <ResponsiveContainer width="100%" height="80%">
                    <AreaChart data={sector.chartData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#E50914" stopOpacity={0.2}/>
                          <stop offset="95%" stopColor="#E50914" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis 
                        dataKey="name" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fontSize: 10, fill: '#999', fontWeight: 500 }} 
                        dy={10}
                        minTickGap={15}
                      />
                      <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fontSize: 10, fill: '#999', fontWeight: 500 }} 
                        dx={-10}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          borderRadius: '12px', 
                          border: '1px solid #f0f0f0', 
                          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                          fontSize: '12px',
                          fontWeight: 'bold'
                        }} 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#E50914" 
                        strokeWidth={3}
                        fillOpacity={1} 
                        fill="url(#colorValue)" 
                        animationDuration={2000}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-200 text-dark rounded-lg text-[10px] font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-brand" />
              ÇÖZÜMLER
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Kullanım Senaryoları</h2>
            <p className="text-gray-500 font-medium">
              {sector.name} sektöründe yapay zekanın en çok fark yarattığı alanları keşfedin.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {sector.useCases.map((useCase, i) => (
              <motion.div
                key={useCase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-brand/30 transition-all group shadow-sm hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-all border border-gray-100 group-hover:border-brand">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{useCase}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  {sector.name} süreçlerinizi hızlandırmak ve müşteri memnuniyetini artırmak için özel olarak tasarlandı.
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="bg-dark rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/10 blur-[120px] pointer-events-none rounded-full -mr-96 -mt-96" />
          
          <div className="max-w-4xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg text-[10px] font-bold uppercase tracking-widest mb-8 border border-white/20 backdrop-blur-sm">
              <Zap className="w-3.5 h-3.5 text-brand fill-brand" />
              AI GEO OPTIMIZED
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-[1.1] tracking-tight">
              {sector.name} Sektöründe <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-red-400">Yapay Zeka Devrimi</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-gray-400 text-base leading-relaxed font-medium">
                  Geleneksel yöntemler artık günümüzün hızına yetişemiyor. {sector.name} alanında faaliyet gösteren işletmeler, OXONOM'un sunduğu yapay zeka çözümleriyle rakiplerinin önüne geçiyor.
                </p>
                <div className="flex items-center gap-4 p-5 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-brand shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-white mb-1">KVKK Uyumlu</p>
                    <p className="text-xs text-gray-400">En üst düzey veri güvenliği standartları.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-gray-400 text-base leading-relaxed font-medium">
                  Müşterileriniz artık mesai saatleri dışında da yanıt bekliyor. AI ajanlarımız, {sector.seoKeywords.slice(0, 3).join(', ')} gibi kritik alanlarda uzmanlaşarak işletmenizi 7/24 aktif bir merkeze dönüştürür.
                </p>
                <div className="flex items-center gap-4 p-5 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-brand shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-white mb-1">Doğal Dil İşleme</p>
                    <p className="text-xs text-gray-400">İnsan benzeri, akıcı ve bağlamsal iletişim.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-6">ANAHTAR KELİMELER</p>
              <div className="flex flex-wrap gap-3">
                {sector.seoKeywords.map(keyword => (
                  <span key={keyword} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-gray-300 hover:bg-white/10 transition-colors cursor-default">
                    #{keyword.replace(' ', '')}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-32 text-center bg-gray-50 rounded-[3rem] p-16 border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">İşletmenizi Geleceğe Taşıyın</h2>
            <p className="text-gray-500 font-medium mb-6 max-w-2xl mx-auto">
              {sector.name} sektöründeki rakipleriniz yapay zekayı kullanmaya başladı bile. Siz de hemen bugün ücretsiz deneyin.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-100 rounded-lg text-xs font-bold text-green-700 mb-10">
              <Zap className="w-3.5 h-3.5" /> Kayıt olduğunuzda anında $5 deneme bakiyesi hesabınıza tanımlanır.
            </div>
            <div>
              <Link 
                to="/" 
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-brand text-white rounded-xl font-bold text-base hover:bg-dark transition-all group shadow-xl shadow-brand/20"
              >
                Ücretsiz Dene <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
