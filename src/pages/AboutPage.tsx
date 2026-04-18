import { motion } from 'motion/react';
import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router-dom';
import JsonLd from '../components/JsonLd';
import { 
  Globe2, 
  Cpu, 
  MessageSquare, 
  Phone, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Target, 
  Rocket,
  Aperture
} from 'lucide-react';

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Oxonom Hakkımızda",
    "description": "Oxonom, işletmelerin iletişim, operasyon ve büyüme süreçlerini yeniden tanımlayan, yapay zekâ odaklı global bir teknoloji şirketidir.",
    "url": "https://oxonom.com/hakkimizda",
    "inLanguage": "tr"
  };

  useSEO({
    title: 'OXONOM Hakkımızda | Global Yapay Zeka Çözümleri',
    description: 'İşletmelerin iletişim süreçlerini yeniden tanımlayan, yenilikçi ve teknoloji odaklı global yapay zeka şirketi OXONOM ile vizyonunuzu geleceğe taşıyın.',
  });

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen relative overflow-hidden">
      <JsonLd data={aboutSchema} />
      
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* HERO SECTION */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-brand rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm"
          >
            <Globe2 className="w-3.5 h-3.5" />
            GLOBAL TEKNOLOJİ PARTNERİNİZ
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-dark mb-8 tracking-tight leading-[1.1] max-w-4xl mx-auto"
          >
            İletişim, Operasyon ve Büyümenin <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-red-400">Yeni Tanımı: OXONOM</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Oxonom, ileri düzey yapay zekâ teknolojilerini sektörel içgörülerle birleştirerek, 
            markaların dünya standartlarında, kesintisiz ve akıllı müşteri deneyimleri sunmasını sağlar.
          </motion.p>
        </div>

        {/* CORE ECOSYSTEM GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32">
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-8"
          >
            <h2 className="text-3xl font-display font-bold text-dark leading-tight">Yalnızca bir Chatbot değil,<br/>Kapsamlı Bir <span>Ekosistem</span></h2>
            <p className="text-gray-600 leading-relaxed font-medium">
              Dijitalleşmenin hız kazandığı günümüzde rekabet; hız, doğruluk ve erişilebilirlik üzerine kuruludur. Geliştirdiğimiz teknolojiler, bağlamı anlayan, doğal iletişim kurabilen ve gerçek zamanlı aksiyon alabilen insan benzeri etkileşimler sağlar.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h4 className="font-bold text-dark">Çok Kanallı İletişim</h4>
                  <p className="text-sm text-gray-500 mt-1">Platformumuz sayesinde WhatsApp, Instagram, web sitesi ve diğer tüm kanalları tek bir merkezden yönetebilirsiniz.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h4 className="font-bold text-dark">Gelen/Giden Çağrı Yönetimi</h4>
                  <p className="text-sm text-gray-500 mt-1">Yapay zekâ destekli sesli çözümlerimiz çağrıları yönetir, randevu oluşturur ve sipariş süreçlerini proaktif yürütür.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Element Placeholder / Abstract Layout */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative h-[500px] w-full rounded-[3rem] bg-gradient-to-br from-brand to-red-500 p-8 overflow-hidden shadow-2xl flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
            <div className="absolute -inset-10 bg-white/10 backdrop-blur-3xl rounded-[4rem] transform rotate-12 scale-110"></div>
            
            <div className="relative z-10 text-center">
              <Cpu className="w-24 h-24 text-white/90 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-2">Akıllı Sistemler</h3>
              <p className="text-white/80 font-medium">Sağlık, E-Ticaret, Perakende ve ötesi...</p>
            </div>
          </motion.div>
        </div>

        {/* INNOVATION & E-COMMERCE */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-white rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-xl shadow-dark/5 mb-32 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
             <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 mb-6">
                   <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4">Sürekli Gelişen Teknoloji</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  Oxonom’un en güçlü yönlerinden biri, inovasyonu merkeze alan yapısıdır. Sadece mevcut ihtiyaçlara çözüm üretmekle kalmaz, farklı sektörlerin dinamiklerine özel yeni nesil yapay zekâ ürünleri geliştirerek ölçeklenebilir ve yüksek performanslı kapasiteler sunar.
                </p>
             </div>
             <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 mb-6">
                   <Aperture className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4">Görselleştirme İnovasyonu</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  İletişim teknolojilerinin ötesinde, e-ticaret ve tekstil sektörü için yapay zekâ destekli görselleştirme sistemlerimizle ürünlerinizi dijital modeller üzerinde gerçekçi şekilde sunabilir, içerikleri hızlı ve düşük maliyetle üretebilirsiniz.
                </p>
             </div>
          </div>
        </motion.div>

        {/* VISION & MISSION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-dark rounded-[3rem] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand/20 rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700" />
            <Target className="w-10 h-10 text-brand mb-8 relative z-10" />
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Vizyonumuz</h3>
            <p className="text-gray-400 leading-relaxed font-medium relative z-10">
              İşletmelerin insan gücüne dayalı süreçlerini akıllı sistemlerle güçlendirerek daha verimli, ölçeklenebilir ve global ölçekte rekabet edebilir yapılar oluşturmasını sağlamak.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-10 bg-gradient-to-br from-brand to-red-500 rounded-[3rem] relative overflow-hidden group"
          >
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/20 rounded-full blur-3xl -ml-10 -mb-10 group-hover:scale-150 transition-transform duration-700" />
            <Rocket className="w-10 h-10 text-white mb-8 relative z-10" />
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Misyonumuz</h3>
            <p className="text-white/90 leading-relaxed font-medium relative z-10">
              Her ölçekte işletmenin erişebileceği güçlü, esnek ve sürekli gelişen yapay zekâ çözümleri sunarak dijital dönüşümü hızlandırmak.
            </p>
          </motion.div>
        </div>

        {/* INTERACTIVE CTA SECTION */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center p-4 bg-brand/5 rounded-full mb-6">
            <Sparkles className="w-8 h-8 text-brand" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-6 tracking-tight">Dijital Dönüşümünüze <br/>Bugün Başlayın</h2>
          <p className="text-gray-500 mb-10 font-medium">Global tecrübemiz ve esnek paket seçeneklerimizle işletmenizin potansiyelini zirveye taşıyalım.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/paketler" 
              className="w-full sm:w-auto px-8 py-4 bg-brand text-white rounded-2xl font-bold hover:bg-dark transition-all flex items-center justify-center gap-2 group shadow-xl shadow-brand/20"
            >
              Paketleri İncele <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-dark border border-gray-200 rounded-2xl font-bold hover:bg-gray-50 transition-all text-center shadow-sm"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
