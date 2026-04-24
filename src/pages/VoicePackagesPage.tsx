import { motion } from 'motion/react';
import { useSEO } from '../hooks/useSEO';
import { 
  ArrowRight,
  Phone,
  CreditCard,
  Mic2,
  Signal,
  Headphones
} from 'lucide-react';
import { pricing } from '../constants';
import JsonLd from '../components/JsonLd';

export default function VoicePackagesPage() {
  useSEO({
    title: 'Sesli AI Asistan Paketleri | OXONOM Otonom Ses',
    description: 'İnsansı ses kalitesine sahip OXONOM otonom ses asistanlarıyla çağrı merkezi maliyetlerini düşürün. Limitsiz ve esnek dakika paketlerini inceleyin.',
  });

  const voiceSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "OXONOM AI Voice",
    "operatingSystem": "All",
    "applicationCategory": "BusinessApplication",
    "description": "Müşterilerinizle insansı ses kalitesiyle 7/24 iletişim kuran otonom ses ajanları.",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "90",
      "highPrice": "2000",
      "priceCurrency": "USD",
      "offerCount": "7"
    }
  };

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen relative overflow-hidden">
      <JsonLd data={voiceSchema} />
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-brand rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5" />
            SESLİ AI PAKETLERİ
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-dark mb-6 tracking-tight leading-[1.1]"
          >
            %100 İnsansı Kalitede <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-red-400">Otonom Görüşmeler</span>
          </motion.h1>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto font-medium">
            Telefon trafiğinizi yapay zeka ile yönetin. Dakika bazlı esnek paketlerle maliyetlerinizi düşürün, verimliliği artırın.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pricing.voice.map((pkg, i) => (
            <VoicePackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>

        {/* Pay-as-you-go CTA */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-12 md:mt-16 bg-gradient-to-br from-brand to-blue-600 rounded-[2.5rem] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-brand/20 relative overflow-hidden"
        >
           {/* Decorative bg */}
           <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
           <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 bg-white/20 text-white blur-3xl pointer-events-none rounded-full" />
           
           <div className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-6 z-10 w-full md:w-auto">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center shrink-0 shadow-inner backdrop-blur-md">
                 <CreditCard className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                 <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">Esnek Kullanım (Kredili)</h4>
                 <p className="text-white/90 text-sm md:text-base font-medium leading-relaxed max-w-2xl">
                   Herhangi bir paket satın alınmadan, doğrudan kredi yüklenerek gerçekleştirilen kullanımlar bu birim fiyat üzerinden ücretlendirilir.
                 </p>
              </div>
           </div>

           <div className="z-10 bg-white rounded-3xl p-5 md:p-8 text-center shrink-0 flex flex-col justify-center min-w-[220px] shadow-xl border border-white/20 hover:scale-105 transition-transform cursor-default">
              <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 md:mb-2 block">TARİFESİZ KULLANIM DAKİKASI</span>
              <div className="text-4xl md:text-5xl font-black text-brand tracking-tighter">$0.80</div>
           </div>
        </motion.div>

        {/* Features Comparison (Glassmorphism) */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-24 p-8 md:p-12 bg-white/40 backdrop-blur-xl border border-white/60 rounded-[3rem] shadow-xl relative overflow-hidden"
        >
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl -mr-32 -mt-32" />
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              <div className="flex flex-col items-center text-center gap-4">
                 <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand shadow-sm">
                    <Mic2 className="w-7 h-7" />
                 </div>
                 <h4 className="font-bold text-dark uppercase tracking-wide">Doğal Ses Tonu</h4>
                 <p className="text-xs text-gray-500 font-medium">Robotik tınılardan uzak, duygulu ve doğal tonlamalı sesler.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                 <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand shadow-sm">
                    <Signal className="w-7 h-7" />
                 </div>
                 <h4 className="font-bold text-dark uppercase tracking-wide">Sıfır Gecikme</h4>
                 <p className="text-xs text-gray-500 font-medium">Gecikmesiz yanıt verme özelliği ile akıcı diyaloglar.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                 <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand shadow-sm">
                    <Headphones className="w-7 h-7" />
                 </div>
                 <h4 className="font-bold text-dark uppercase tracking-wide">Smart Routing</h4>
                 <p className="text-xs text-gray-500 font-medium">Gerektiğinde görüşmeyi anında canlı operatöre devretme.</p>
              </div>
           </div>
        </motion.div>

        <p className="mt-16 border-t border-gray-100 pt-8 text-center text-xs text-gray-400 font-bold italic">
          OXONOM AI SES TEKNOLOJİLERİ © 2026
        </p>
      </div>
    </div>
  );
}

function VoicePackageCard({ pkg, index }: { pkg: any, index: number }) {
  const isPopular = pkg.popular;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`relative bg-white rounded-[2rem] border flex flex-col overflow-hidden transition-all duration-300 ${
        isPopular
          ? 'ring-2 ring-brand border-brand shadow-2xl shadow-brand/15 scale-[1.03] z-10'
          : 'border-gray-100 shadow-xl shadow-dark/5 hover:border-gray-300 hover:-translate-y-1'
      }`}
    >
      {isPopular && (
        <div className="px-5 py-2 bg-brand text-white text-[10px] font-bold uppercase tracking-widest text-center">
          EN ÇOK TERCİH EDİLEN
        </div>
      )}

      {/* Main content */}
      <div className="p-7 flex flex-col flex-grow">
        {/* Plan name */}
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">{pkg.name}</p>

        {/* Capacity — BIG */}
        <div className="mb-4">
          <span className="text-5xl font-black text-dark tracking-tight">{pkg.minutes}</span>
          <span className="text-lg font-bold text-gray-400 ml-1">dk</span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-4" />

        {/* Monthly price */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Aylık</span>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black text-dark">{pkg.totalPrice}</span>
            <span className="text-xs text-gray-400 font-bold">/ay</span>
          </div>
        </div>

        {/* Upsell tip */}
        {pkg.upsell && pkg.upsell !== '-' && (
          <div className="mb-5 px-3 py-2.5 bg-brand/5 border border-brand/10 rounded-xl">
            <p className="text-[10px] font-bold text-brand uppercase tracking-widest">↗ {pkg.upsell}</p>
          </div>
        )}

        <div className="flex-grow" />

        <button className={`w-full py-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 group/btn mt-2 ${
          isPopular
            ? 'bg-brand text-white shadow-xl shadow-brand/20 hover:bg-dark'
            : 'bg-gray-50 text-dark hover:bg-brand hover:text-white border border-gray-200'
        }`}>
          Satın Al <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
