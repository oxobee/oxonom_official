import { motion } from 'motion/react';
import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageSquare, 
  Zap, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CreditCard,
  Instagram,
  Facebook,
  MessageCircle,
  LayoutGrid
} from 'lucide-react';

export default function PackagesPage() {
  useSEO({
    title: 'Paketler ve Fiyatlandırma | OXONOM AI',
    description: 'İşletmenize en uygun otonom asistanı seçin. Sesli, yazılı veya kombo OXONOM AI paketlerimizle operasyonel verimliliğinizi profesyonelce artırın.',
  });

  const categories = [
    {
      id: 'voice',
      name: 'Sesli AI Paketleri',
      description: 'Müşterilerinizle insansı ses kalitesiyle 7/24 iletişim kuran otonom ses ajanları.',
      icon: Phone,
      color: 'brand',
      link: '/ses-paketleri', // Changed from /paketler to the new dedicated page
      features: ['%100 İnsansı Ses', 'Anlık Randevu Alımı', 'Kesintisiz 7/24 Erişim'],
      btnText: 'Ses Paketlerini İncele'
    },
    {
      id: 'messaging',
      name: 'Mesajlaşma Paketleri',
      description: 'WhatsApp, Instagram ve Messenger üzerinden müşterilerinize anlık yanıt veren AI asistanları.',
      icon: MessageSquare,
      color: 'blue',
      link: '/mesajlasma-paketleri',
      features: ['Multi-Channel Destek', 'AI Otomatik Yanıt', 'Satış Odaklı Kurgular'],
      btnText: 'Mesaj Paketlerini İncele',
      popular: true
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-dark rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand" />
            PAKET SEÇİM MERKEZİ
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-dark mb-6 tracking-tight leading-[1.1]"
          >
            İhtiyacınıza Uygun <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-red-400">AI Çözümünü</span> Belirleyin
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Sesli görüşme mi yoksa dijital mesajlaşma mı? İşletmenize en iyi getiriyi sağlayacak kategori üzerinden ilerleyin.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className={`relative overflow-hidden rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 group border h-full flex flex-col ${
                cat.popular 
                  ? 'bg-dark text-white border-gray-800 shadow-2xl shadow-brand/10' 
                  : 'bg-white text-dark border-gray-100 hover:border-brand/30 shadow-xl shadow-dark/5'
              }`}
            >
              {/* Abstract Background Accent */}
              <div className={`absolute -top-12 -right-12 w-48 h-48 rounded-full blur-[60px] opacity-20 transition-transform duration-700 group-hover:scale-150 ${
                cat.id === 'voice' ? 'bg-brand' : cat.id === 'messaging' ? 'bg-blue-500' : 'bg-purple-500'
              }`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                  cat.popular ? 'bg-brand text-white' : 'bg-gray-50 text-brand'
                }`}>
                  <cat.icon className="w-8 h-8" />
                </div>

                {cat.popular && (
                  <div className="inline-block self-start px-3 py-1 bg-gradient-to-r from-brand to-red-500 text-white text-[9px] font-bold uppercase tracking-widest rounded-full mb-4">
                    Tavsiye Edilen
                  </div>
                )}

                <h3 className="text-2xl md:text-3xl font-bold mb-4">{cat.name}</h3>
                <p className={`text-sm md:text-base font-medium leading-relaxed mb-8 flex-grow ${
                  cat.popular ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {cat.description}
                </p>

                <div className="space-y-4 mb-10">
                  {cat.features.map((feat, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        cat.popular ? 'bg-white/10 text-brand' : 'bg-brand/10 text-brand'
                      }`}>
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      <span className={`text-sm font-bold ${cat.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                <Link 
                  to={cat.link}
                  className={`w-full py-5 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 group/btn ${
                    cat.popular 
                      ? 'bg-brand text-white hover:bg-white hover:text-dark' 
                      : 'bg-gray-50 text-dark hover:bg-dark hover:text-white border border-gray-200'
                  }`}
                >
                  {cat.btnText} <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Features (Glassmorphism Section) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white/40 backdrop-blur-md border border-white/60 rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="text-center md:text-left">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand shadow-sm mb-4 mx-auto md:mx-0">
                <CreditCard className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-dark mb-2">Esnek Ödeme</h4>
              <p className="text-xs text-gray-500 font-medium">Bütçenize uygun aylık paketler veya kullandıkça öde.</p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-500 shadow-sm mb-4 mx-auto md:mx-0">
                <LayoutGrid className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-dark mb-2">Multi-Channel</h4>
              <p className="text-xs text-gray-500 font-medium">Tüm kanallarınızı tek bir yapay zeka beyninden yönetin.</p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-green-500 shadow-sm mb-4 mx-auto md:mx-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-dark mb-2">Güvenli Yapı</h4>
              <p className="text-xs text-gray-500 font-medium">KVKK ve GDPR uyumlu veri işleme altyapısı.</p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-purple-500 shadow-sm mb-4 mx-auto md:mx-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-dark mb-2">Hızlı Kurulum</h4>
              <p className="text-xs text-gray-500 font-medium">Saniyeler içinde AI ajanınızı aktif edin.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
