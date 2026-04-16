import { motion } from 'motion/react';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Clock,
  Phone,
  Mic2,
  Headphones,
  Signal
} from 'lucide-react';
import { pricing } from '../constants';
import JsonLd from '../components/JsonLd';

export default function VoicePackagesPage() {
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

        {/* Notes */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-100 pt-8">
           <div className="flex gap-4">
              {pricing.notes.map((note, i) => (
                <p key={i} className="text-xs text-gray-400 font-medium">*{note}</p>
              ))}
           </div>
           <p className="text-xs text-gray-400 font-bold italic">OXONOM AI SES TEKNOLOJİLERİ © 2026</p>
        </div>
      </div>
    </div>
  );
}

function VoicePackageCard({ pkg, index }: { pkg: any, index: number }) {
  const isElite = pkg.id === 'elite' || pkg.id === 'platin';
  const isMostPopular = pkg.id === 'gumus';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`relative bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl shadow-dark/5 flex flex-col h-full group transition-all duration-300 ${
        isMostPopular ? 'ring-2 ring-brand ring-inset scale-[1.05] z-10' : 'hover:border-gray-300 hover:-translate-y-1'
      }`}
    >
      {isMostPopular && (
        <div className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1.5 bg-brand text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
          EN ÇOK TERCİH EDİLEN
        </div>
      )}

      {isElite && (
        <div className="absolute top-4 right-4 text-brand">
          <Sparkles className="w-5 h-5 fill-brand/20" />
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-bold text-dark mb-2 uppercase tracking-wide ">{pkg.name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black text-dark tracking-tight">{pkg.totalPrice}</span>
          <span className="text-sm text-gray-400 font-bold uppercase tracking-widest">/ ay</span>
        </div>
      </div>

      <div className="space-y-5 flex-grow mb-10">
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl group-hover:bg-brand/5 transition-colors">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand shadow-sm">
             <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">SÜRE</p>
            <p className="font-bold text-dark text-lg">{pkg.minutes} Dakika</p>
          </div>
        </div>

        <div className="space-y-3 px-1">
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-green-500" />
            <span className="text-sm font-bold text-gray-600 tracking-tight">{pkg.pricePerMin} / birim maliyet</span>
          </div>
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-green-500" />
            <span className="text-sm font-bold text-gray-600 tracking-tight">%100 İnsansı Ses Kalitesi</span>
          </div>
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-green-500" />
            <span className="text-sm font-bold text-gray-600 tracking-tight">Akıllı Randevu Asistanı</span>
          </div>
        </div>
      </div>

      <button className={`w-full py-5 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 group/btn ${
        isMostPopular 
          ? 'bg-brand text-white shadow-xl shadow-brand/20 hover:bg-dark hover:shadow-dark/10' 
          : 'bg-gray-50 text-dark hover:bg-brand hover:text-white border border-gray-200'
      }`}>
        Satın Al <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
}
