import { motion } from 'motion/react';
import { useSEO } from '../hooks/useSEO';
import {
  Check,
  ArrowRight,
  Sparkles,
  Instagram,
  Facebook,
  MessageCircle,
  Globe,
  Share2,
  MessageSquare,
  CreditCard,
  Phone,
  Star,
  ChevronRight,
} from 'lucide-react';
import { pricing } from '../constants';
import JsonLd from '../components/JsonLd';
import { Link } from 'react-router-dom';

const CHANNEL_META: Record<string, { label: string; icon: React.ReactNode; color: string }> = {
  instagram: { label: 'Instagram', icon: <Instagram className="w-3.5 h-3.5" />, color: 'bg-pink-50 text-pink-600 border-pink-200' },
  whatsapp:  { label: 'WhatsApp',  icon: <MessageCircle className="w-3.5 h-3.5" />, color: 'bg-green-50 text-green-600 border-green-200' },
  facebook:  { label: 'Facebook',  icon: <Facebook className="w-3.5 h-3.5" />, color: 'bg-blue-50 text-blue-600 border-blue-200' },
  web:       { label: 'Web Chat',  icon: <Globe className="w-3.5 h-3.5" />, color: 'bg-indigo-50 text-indigo-600 border-indigo-200' },
  tiktok:    { label: 'TikTok',    icon: <Share2 className="w-3.5 h-3.5" />, color: 'bg-slate-50 text-slate-700 border-slate-200' },
};

export default function MessagingPackagesPage() {
  useSEO({
    title: 'Mesajlaşma AI Paketleri | OXONOM',
    description: 'Instagram, WhatsApp, Facebook ve Web Chat kanallarında 7/24 AI asistan. Tüm platformları tek pakette yönetin.',
    canonical: '/mesajlasma-paketleri',
    keywords: 'whatsapp ai bot, instagram ai, mesajlaşma paketi, ai chatbot, oxonom mesajlaşma',
  });

  const messagingSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "OXONOM AI Messaging",
    "operatingSystem": "All",
    "applicationCategory": "BusinessApplication",
    "description": "Instagram, WhatsApp, Facebook ve Web Chat üzerinden müşterilerinize 7/24 AI ile yanıt verin.",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "19",
      "highPrice": "299",
      "priceCurrency": "USD",
      "offerCount": "4"
    }
  };

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen relative overflow-hidden">
      <JsonLd data={messagingSchema} />

      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-16">
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
            className="text-4xl md:text-6xl font-display font-bold text-dark mb-5 tracking-tight leading-[1.1]"
          >
            Tüm Kanallar,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Tek Akıllı Asistan</span>
          </motion.h1>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto font-medium mb-8">
            Instagram, WhatsApp, Facebook, Web Chat ve TikTok — hangi kanaldan gelirse gelsin, AI asistanınız hazır.
          </p>
          {/* Channel badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            {Object.entries(CHANNEL_META).map(([key, meta]) => (
              <span key={key} className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${meta.color}`}>
                {meta.icon} {meta.label}
              </span>
            ))}
          </div>
        </div>

        {/* ── Pricing Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {(pricing.messaging as any[]).map((pkg, i) => (
            <MessagingCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>

        {/* ── Pay-as-you-go ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-500/20 relative overflow-hidden max-w-5xl mx-auto mb-16"
        >
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="flex items-center gap-5 z-10">
            <div className="w-14 h-14 bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center shrink-0">
              <CreditCard className="w-7 h-7 text-white" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-1">Paketsiz Kredi Kullanımı</h4>
              <p className="text-white/80 text-sm max-w-md">Paket satın almadan doğrudan kredi ile kullanım. Sabit aylık taahhüt yok.</p>
            </div>
          </div>
          <div className="z-10 bg-white rounded-3xl p-6 text-center shrink-0 min-w-[200px] shadow-xl hover:scale-105 transition-transform">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">MESAJ BAŞINA</span>
            <div className="text-4xl font-black text-blue-600 tracking-tighter">{pricing.payAsYouGo.msg.price}</div>
            <span className="text-[10px] text-gray-400 font-medium">{pricing.payAsYouGo.msg.unit}</span>
          </div>
        </motion.div>

        {/* ── Combo Teaser ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dark rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden max-w-5xl mx-auto"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand/10 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand/20 text-brand rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                <Star className="w-3 h-3" /> Fırsat
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Sesli + Mesajlaşma Combo</h2>
              <p className="text-gray-400 font-medium max-w-md text-sm">
                Her iki kanalı birlikte alarak <strong className="text-white">%17-21 tasarruf</strong> edin.
                Combo paketler ayrı ayrı satın almaktan daha avantajlı.
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                {(pricing.combo as any[]).map(c => (
                  <div key={c.id} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white font-bold text-sm">
                    {c.name} <span className="text-brand ml-1">{c.price}</span>
                    <span className="text-gray-500 text-[10px] ml-1 line-through">{c.originalPrice}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link
              to="/combo-paketler"
              className="shrink-0 px-8 py-4 bg-brand text-white rounded-2xl font-bold text-sm flex items-center gap-2 hover:bg-white hover:text-dark transition-all shadow-xl shadow-brand/30 whitespace-nowrap"
            >
              Combo Paketleri İncele <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        <p className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500 font-bold italic">
          OXONOM AI Fiyatlandırma Politikası © 2026
        </p>
      </div>
    </div>
  );
}

function MessagingCard({ pkg, index }: { pkg: any; index: number }) {
  const isPopular = pkg.popular;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className={`relative bg-white rounded-[2rem] border flex flex-col overflow-hidden transition-all duration-300 ${
        isPopular
          ? 'ring-2 ring-blue-500 border-blue-500 shadow-2xl shadow-blue-500/15 scale-[1.03] z-10'
          : 'border-gray-100 shadow-xl shadow-dark/5 hover:border-gray-300 hover:-translate-y-1'
      }`}
    >
      {isPopular && (
        <div className="px-5 py-2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest text-center">
          EN ÇOK TERCİH EDİLEN
        </div>
      )}

      <div className="p-7 flex flex-col flex-grow">
        {/* Plan name */}
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">{pkg.name}</p>

        {/* Capacity BIG */}
        <div className="mb-4">
          <span className="text-5xl font-black text-dark tracking-tight">{pkg.messages}</span>
          <span className="text-sm font-bold text-gray-400 ml-1">{pkg.messages === 'Sınırsız' ? '' : 'mesaj'}</span>
        </div>

        <div className="border-t border-gray-100 mb-4" />

        {/* Monthly price */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Aylık</span>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black text-dark">{pkg.price}</span>
            <span className="text-xs text-gray-400 font-bold">/ay</span>
          </div>
        </div>

        {/* Channel badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {pkg.channels.map((ch: string) => {
            const meta = CHANNEL_META[ch];
            return meta ? (
              <span key={ch} className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border ${meta.color}`}>
                {meta.icon} {meta.label}
              </span>
            ) : null;
          })}
        </div>

        {/* Upsell tip */}
        {pkg.upsell && pkg.upsell !== '-' && (
          <div className="mb-4 px-3 py-2.5 bg-blue-50 border border-blue-100 rounded-xl">
            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">↗ {pkg.upsell}</p>
          </div>
        )}

        <div className="flex-grow" />

        <button
          className={`w-full py-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 group/btn mt-2 ${
            isPopular
              ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/20 hover:bg-blue-700'
              : 'bg-gray-50 text-dark hover:bg-dark hover:text-white border border-gray-200'
          }`}
        >
          Satın Al <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
