import { motion } from 'motion/react';
import { useSEO } from '../hooks/useSEO';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Globe, 
  Share2,
  Clock,
  Phone,
  MessageSquare
} from 'lucide-react';
import { pricing } from '../constants';
import { useState } from 'react';
import JsonLd from '../components/JsonLd';

export default function MessagingPackagesPage() {
  useSEO({
    title: 'WhatsApp & Sosyal Medya AI Paketleri | OXONOM',
    description: 'WhatsApp ve Instagram müşterilerinize saniyeler içinde yanıt verin. Dönüşüm oranınızı katlayacak en uygun OXONOM mesajlaşma AI paketlerini keşfedin.',
  });

  const SocialIcon = ({ channel, colored = false }: { channel: string, colored?: boolean }) => {
    switch (channel.toLowerCase()) {
      case 'instagram': return <Instagram className={`w-4 h-4 ${colored ? 'text-pink-600' : ''}`} />;
      case 'facebook': return <Facebook className={`w-4 h-4 ${colored ? 'text-blue-600' : ''}`} />;
      case 'whatsapp': return <MessageCircle className={`w-4 h-4 ${colored ? 'text-green-500' : ''}`} />;
      case 'tiktok': return <Share2 className={`w-4 h-4 ${colored ? 'text-black dark:text-white' : ''}`} />; 
      default: return <Globe className={`w-4 h-4 ${colored ? 'text-blue-400' : ''}`} />;
    }
  };
  const messagingSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "OXONOM AI Messaging",
    "operatingSystem": "All",
    "applicationCategory": "BusinessApplication",
    "description": "WhatsApp, Instagram ve TikTok üzerinden müşterilerinize anlık yanıt veren AI asistanları.",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "19",
      "highPrice": "599",
      "priceCurrency": "USD",
      "offerCount": "24"
    }
  };

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen relative overflow-hidden">
      <JsonLd data={messagingSchema} />
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            MESAJLAŞMA AI PAKETLERİ
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-dark mb-6 tracking-tight leading-[1.1]"
          >
            Dijital Kanallarda <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Kesintisiz İletişim</span>
          </motion.h1>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto font-medium mb-12">
            Instagram, WhatsApp, TikTok ve daha fazlası. Müşterileriniz nerede olursa olsun, AI asistanınız orada.
          </p>

        </div>

        {/* Content Section */}
        <div className="space-y-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-16"
          >
            {/* Social */}
            <MixedSection 
              title="Social (Instagram)" 
              desc="Sosyal medya hesabınızı güvence altına alın." 
              data={pricing.messaging.social} 
              icons={['instagram']}
            />
            {/* DM Suite */}
            <MixedSection 
              title="DM Suite (Instagram + WhatsApp)" 
              desc="En popüler mesajlaşma kanallarında AI gücü." 
              data={pricing.messaging.dmSuite} 
              icons={['instagram', 'whatsapp']}
              color="green"
            />
            {/* Omni Channel */}
            <MixedSection 
              title="Omni Channel (Instagram + Facebook + WhatsApp)" 
              desc="Tüm ana akım kanalları kapsayan güçlü paketler." 
              data={pricing.messaging.omni} 
              icons={['instagram', 'facebook', 'whatsapp']}
              color="brand"
            />
          </motion.div>
        </div>
        {/* End of Content */}

        {/* Notes */}
        <div className="mt-24 pt-8 border-t border-gray-100">
           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex gap-4">
                 {pricing.notes.map((note, i) => (
                   <p key={i} className="text-xs text-gray-400 font-medium">*{note}</p>
                 ))}
              </div>
              <p className="text-xs text-gray-500 font-bold italic">OXONOM AI Fiyatlandırma Politikası © 2026</p>
           </div>
        </div>
      </div>
    </div>
  );
}

function PackageCard({ pkg, index, color }: { pkg: any, index: number, color: string }) {
  const accentColor = color === 'blue' ? 'border-blue-500' : 'border-brand';
  const bgColor = color === 'blue' ? 'bg-blue-600' : 'bg-brand';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`relative bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl shadow-dark/5 flex flex-col h-full group transition-all duration-300 ${
        pkg.popular ? `ring-2 ring-inset ${accentColor} scale-[1.02]` : 'hover:border-gray-300'
      }`}
    >
      {pkg.popular && (
        <div className={`absolute top-0 right-8 -translate-y-1/2 px-4 py-1.5 ${bgColor} text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg`}>
          EN ÇOK TERCİH EDİLEN
        </div>
      )}

      {pkg.upsell && pkg.upsell !== '-' && (
        <div className="absolute top-4 right-4 text-brand bg-brand/10 px-3 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase">
          {pkg.upsell}
        </div>
      )}

      <div className="flex gap-2 mb-6">
         <Instagram className="w-4 h-4 text-pink-600/50" />
         <Facebook className="w-4 h-4 text-blue-600/50" />
         <MessageCircle className="w-4 h-4 text-green-500/50" />
         <Share2 className="w-4 h-4 text-gray-900/50" />
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold text-dark mb-2 uppercase tracking-wide">{pkg.name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black text-dark tracking-tight">{pkg.price}</span>
          <span className="text-sm text-gray-400 font-bold uppercase tracking-widest">/ ay</span>
        </div>
      </div>

      <div className="space-y-5 flex-grow mb-10">
        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
          <Zap className={`w-5 h-5 ${color === 'blue' ? 'text-blue-500' : 'text-brand'}`} />
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">KAPASİTE</p>
            <p className="font-bold text-dark">{pkg.messages}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Check className="w-5 h-5 text-green-500 shrink-0" />
          <span className="text-sm font-bold text-gray-600 tracking-tight">{pkg.perMsg}</span>
        </div>
        <div className="flex items-center gap-3">
          <Check className="w-5 h-5 text-green-500 shrink-0" />
          <span className="text-sm font-bold text-gray-600 tracking-tight">{pkg.desc}</span>
        </div>
      </div>

      <button className={`w-full py-5 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 group/btn ${
        pkg.popular ? `${bgColor} text-white shadow-xl shadow-dark/10` : 'bg-dark text-white hover:bg-brand active:scale-95'
      }`}>
        Satın Al <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
}

function MixedSection({ title, desc, data, icons, color = 'blue' }: { title: string, desc: string, data: any[], icons: string[], color?: string }) {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-gray-200 pb-6">
        <div>
          <h3 className="text-2xl font-bold text-dark mb-2">{title}</h3>
          <p className="text-gray-500 font-medium">{desc}</p>
        </div>
        <div className="flex gap-2">
           {icons.map(icon => (
             <div key={icon} className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-gray-100 transition-transform hover:scale-110">
                {icon === 'instagram' && <Instagram className="w-6 h-6 text-pink-600" />}
                {icon === 'facebook' && <Facebook className="w-6 h-6 text-blue-600" />}
                {icon === 'whatsapp' && <MessageCircle className="w-6 h-6 text-green-500" />}
                {icon === 'tiktok' && <Share2 className="w-6 h-6 text-black dark:text-white" />}
                {icon === 'web' && <Globe className="w-6 h-6 text-blue-400" />}
             </div>
           ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((pkg, i) => (
          <PackageCard key={pkg.id} pkg={pkg} index={i} color={color} />
        ))}
      </div>
    </div>
  );
}

function ComboCard({ pkg, index }: { pkg: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`relative bg-dark rounded-[2.5rem] p-10 border border-white/10 shadow-2xl flex flex-col h-full group overflow-hidden ${
        pkg.popular ? 'ring-2 ring-brand' : ''
      }`}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full blur-[40px] -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />

      <div className="relative z-10 flex-grow">
        {pkg.popular && (
          <div className="inline-block px-3 py-1 bg-brand text-white text-[9px] font-bold uppercase tracking-widest rounded-full mb-6">
            EN POPÜLER SEÇENEK
          </div>
        )}
        <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">{pkg.name}</h3>
        <div className="flex items-baseline gap-1 mb-10">
          <span className="text-5xl font-black text-white tracking-tight">{pkg.price}</span>
          <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">/ ay</span>
        </div>

        <div className="space-y-6 mb-12">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand border border-white/10">
               <MessageSquare className="w-5 h-5" />
             </div>
             <div>
               <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-0.5">MESAJ HAKKI</p>
               <p className="text-lg font-bold text-white">{pkg.messages}</p>
             </div>
          </div>
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 border border-white/10">
               <Phone className="w-5 h-5" />
             </div>
             <div>
               <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-0.5">SESLİ GÖRÜŞME</p>
               <p className="text-lg font-bold text-white">{pkg.minutes} Dakika</p>
             </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 mb-10">
          <p className="text-xs text-gray-400 font-medium mb-1">BİRİM MALİYETLER</p>
          <p className="text-sm font-bold text-gray-300">{pkg.perUnits}</p>
        </div>
      </div>

      <button className="relative z-10 w-full py-5 bg-white text-dark rounded-2xl font-bold text-sm hover:bg-brand hover:text-white transition-all shadow-xl active:scale-95">
        Hemen Başla
      </button>
    </motion.div>
  );
}
