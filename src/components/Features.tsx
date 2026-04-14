import { motion } from 'motion/react';
import { Mic, MessageSquare, TrendingUp, Zap, Shield, Globe, Cpu, BarChart3, Headphones, Sparkles } from 'lucide-react';

const features = [
  {
    title: 'Sesli AI Agent',
    description: 'Doğal dil işleme (NLP) ile insan kalitesinde ses tonuyla görüşmeler yapın. Randevu planlama, sipariş alma ve müşteri doğrulama süreçlerini saniyeler içinde tamamlayın.',
    icon: Mic,
    color: 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-blue-500/30',
    borderColor: 'hover:border-blue-500/30',
    bgGradient: 'from-blue-50/50 to-transparent',
    details: ['Gecikmesiz Yanıt', 'Duygu Analizi', 'Çoklu Dil Desteği']
  },
  {
    title: 'Omnichannel Chat',
    description: 'WhatsApp, Instagram, Telegram ve Web sitenizde tek bir merkezden hizmet verin. Müşterilerinizin geçmiş verilerini kullanarak kişiselleştirilmiş çözümler sunun.',
    icon: MessageSquare,
    color: 'bg-gradient-to-br from-emerald-400 to-green-600 text-white shadow-green-500/30',
    borderColor: 'hover:border-green-500/30',
    bgGradient: 'from-green-50/50 to-transparent',
    details: ['CRM Entegrasyonu', 'Zengin Medya Desteği', 'Akıllı Yönlendirme']
  },
  {
    title: 'Operasyonel Zeka',
    description: 'Veri odaklı kararlar alın. AI ajanlarınız her görüşmeyi analiz eder, trendleri belirler ve işletmenizi büyütmeniz için size stratejik raporlar sunar.',
    icon: TrendingUp,
    color: 'bg-gradient-to-br from-brand to-red-600 text-white shadow-brand/30',
    borderColor: 'hover:border-brand/30',
    bgGradient: 'from-red-50/50 to-transparent',
    details: ['Anlık Raporlama', 'Trend Analizi', 'ROI Takibi']
  }
];

const secondaryFeatures = [
  { icon: Shield, title: 'Güvenli Altyapı', desc: 'Uçtan uca şifreleme ve KVKK uyumlu veri işleme.' },
  { icon: Globe, title: 'Global Erişim', desc: 'Dünyanın her yerinden düşük gecikmeli bağlantı.' },
  { icon: Cpu, title: 'Gelişmiş LLM', desc: 'En güncel dil modelleri ile yüksek anlama kapasitesi.' },
  { icon: BarChart3, title: 'Detaylı Analiz', desc: 'Her etkileşimi veriye dönüştüren dashboard.' },
  { icon: Headphones, title: 'Hibrit Destek', desc: 'Gerektiğinde canlı operatöre pürüzsüz aktarım.' },
  { icon: Zap, title: 'Hızlı Kurulum', desc: 'Dakikalar içinde aktif olan hazır şablonlar.' },
];

export default function Features() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-64 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 text-dark rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand" />
            GÜÇLÜ ÖZELLİKLER
          </motion.div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-dark mb-4 md:mb-6 tracking-tight leading-[1.1]">
            İşletmenizi Yapay Zeka ile <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-red-400">Yeniden Tanımlayın</span>
          </h2>
          <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
            Sadece bir chatbot değil, işletmenizin her departmanında çalışan, öğrenen ve gelişen akıllı iş ortakları.
          </p>
        </div>

        {/* Main Features - Bento Grid Style */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`p-8 md:p-10 rounded-[2rem] bg-white border border-gray-100 shadow-xl shadow-dark/5 group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-dark/10`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-gray-50 to-transparent rounded-full -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150" />
              
              <div className={`relative z-10 w-16 h-16 md:w-20 md:h-20 ${feature.color} rounded-2xl md:rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg border border-white/20`}>
                <feature.icon className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">{feature.title}</h3>
                <p className="text-base text-gray-500 leading-relaxed mb-8 font-medium">
                  {feature.description}
                </p>
                <div className="space-y-4 pt-8 border-t border-gray-100">
                  {feature.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                      <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-brand transition-colors" />
                      </div>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {secondaryFeatures.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.05), duration: 0.4 }}
              className="relative overflow-hidden bg-gray-50/50 hover:bg-white p-6 md:p-8 rounded-[1.5rem] border border-gray-100 text-center group hover:border-brand/20 transition-all duration-500 hover:shadow-xl hover:shadow-brand/5"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto bg-white rounded-2xl flex items-center justify-center text-gray-400 mb-5 group-hover:bg-brand group-hover:text-white group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-sm border border-gray-100 group-hover:border-brand/20">
                  <item.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-dark mb-2 group-hover:text-brand transition-colors duration-300">{item.title}</h4>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
