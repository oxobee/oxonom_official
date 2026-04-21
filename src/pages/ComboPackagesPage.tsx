import { motion } from 'motion/react';
import { useSEO } from '../hooks/useSEO';
import {
  Check,
  ArrowRight,
  Phone,
  MessageSquare,
  Zap,
  Instagram,
  Facebook,
  MessageCircle,
  Globe,
  Share2,
  CreditCard,
  Star,
  TrendingDown,
} from 'lucide-react';
import { pricing } from '../constants';
import JsonLd from '../components/JsonLd';

const CHANNEL_META: Record<string, { label: string; icon: React.ReactNode; color: string }> = {
  instagram: { label: 'Instagram', icon: <Instagram className="w-3 h-3" />, color: 'bg-pink-50 text-pink-600 border-pink-100' },
  whatsapp:  { label: 'WhatsApp',  icon: <MessageCircle className="w-3 h-3" />, color: 'bg-green-50 text-green-600 border-green-100' },
  facebook:  { label: 'Facebook',  icon: <Facebook className="w-3 h-3" />, color: 'bg-blue-50 text-blue-600 border-blue-100' },
  web:       { label: 'Web Chat',  icon: <Globe className="w-3 h-3" />, color: 'bg-indigo-50 text-indigo-600 border-indigo-100' },
  tiktok:    { label: 'TikTok',    icon: <Share2 className="w-3 h-3" />, color: 'bg-slate-50 text-slate-600 border-slate-100' },
  api:       { label: 'API',       icon: <Zap className="w-3 h-3" />, color: 'bg-amber-50 text-amber-600 border-amber-100' },
};

export default function ComboPackagesPage() {
  useSEO({
    title: 'Combo Paketler — Sesli + Mesajlaşma | OXONOM',
    description: 'Sesli arama ve mesajlaşmayı birlikte alarak %22-27 tasarruf edin. OXONOM Combo paketlerde Voice AI + Messaging AI tek çatıda.',
    canonical: '/combo-paketler',
    keywords: 'combo paket, sesli ai ve mesajlaşma, oxonom combo, whatsapp ve sesli asistan',
  });

  const comboSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "OXONOM AI Combo",
    "applicationCategory": "BusinessApplication",
    "description": "Sesli arama ve mesajlaşma AI'ını bir arada sunan avantajlı combo paketler.",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "89",
      "highPrice": "1099",
      "priceCurrency": "USD",
      "offerCount": "4"
    }
  };

  return (
    <div className="pt-32 pb-24 bg-gray-950 min-h-screen relative overflow-hidden">
      <JsonLd data={comboSchema} />

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-brand/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-brand rounded-full text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            <Star className="w-3.5 h-3.5" />
            COMBO PAKETLER — SES + MESAJLAŞMA
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-5 tracking-tight leading-[1.1]"
          >
            İki Kanal,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-400">Tek Avantajlı Fiyat</span>
          </motion.h1>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-medium">
            Sesli arama ve mesajlaşma paketlerini ayrı ayrı almanızdan <strong className="text-white">%22-27 daha ucuz.</strong>
          </p>

          {/* Savings highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 mt-6 px-6 py-3 bg-brand/10 border border-brand/20 rounded-2xl"
          >
            <TrendingDown className="w-5 h-5 text-brand" />
            <span className="text-sm font-bold text-white">Combo Growth ile <span className="text-brand">$59</span> tasarruf et — en popüler seçim</span>
          </motion.div>
        </div>

        {/* ── Combo Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {(pricing.combo as any[]).map((pkg, i) => (
            <ComboCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>

        {/* ── Comparison Strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-[2rem] p-8 mb-16 max-w-4xl mx-auto"
        >
          <h3 className="text-lg font-bold text-white mb-6 text-center">Ayrı Satın Al vs Combo Karşılaştırma</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 text-gray-400 font-bold">Paket</th>
                  <th className="text-center py-2 text-gray-400 font-bold">Ayrı Alırsanız</th>
                  <th className="text-center py-2 text-brand font-bold">Combo Fiyat</th>
                  <th className="text-center py-2 text-green-400 font-bold">Tasarruf</th>
                </tr>
              </thead>
              <tbody>
                {(pricing.combo as any[]).map((pkg) => (
                  <tr key={pkg.id} className="border-b border-white/5">
                    <td className="py-3 text-white font-bold">{pkg.name}</td>
                    <td className="py-3 text-center text-gray-400 line-through">{pkg.originalPrice}</td>
                    <td className="py-3 text-center text-white font-black">{pkg.price}</td>
                    <td className="py-3 text-center text-green-400 font-bold">{pkg.saving}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* ── Pay-as-you-go ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
              <CreditCard className="w-7 h-7 text-gray-300" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-1">Paketsiz Kredi Kullanımı</h4>
              <p className="text-gray-400 text-sm">Taahhütsüz, kullandığın kadar öde.</p>
            </div>
          </div>
          <div className="flex gap-6 shrink-0">
            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-center">
              <p className="text-[10px] font-bold text-gray-500 uppercase mb-1">Mesaj</p>
              <p className="text-2xl font-black text-white">{pricing.payAsYouGo.msg.price}</p>
              <p className="text-[10px] text-gray-500">{pricing.payAsYouGo.msg.unit}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-center">
              <p className="text-[10px] font-bold text-gray-500 uppercase mb-1">Dakika</p>
              <p className="text-2xl font-black text-white">{pricing.payAsYouGo.voice.price}</p>
              <p className="text-[10px] text-gray-500">{pricing.payAsYouGo.voice.unit}</p>
            </div>
          </div>
        </motion.div>

        {/* Notes */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-6">
            {pricing.notes.map((note, i) => (
              <p key={i} className="text-xs text-gray-600 font-medium">*{note}</p>
            ))}
          </div>
          <p className="text-xs text-gray-600 font-bold italic">OXONOM AI Fiyatlandırma Politikası © 2026</p>
        </div>
      </div>
    </div>
  );
}

function ComboCard({ pkg, index }: { pkg: any; index: number }) {
  const isPopular = pkg.popular;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className={`relative rounded-[2rem] p-7 flex flex-col h-full transition-all duration-300 overflow-hidden ${
        isPopular
          ? 'bg-gradient-to-b from-brand/20 to-dark border-2 border-brand scale-[1.02] shadow-2xl shadow-brand/20'
          : 'bg-white/5 border border-white/10 hover:border-white/20'
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 right-7 -translate-y-1/2 px-4 py-1.5 bg-brand text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg z-10">
          EN POPÜLER
        </div>
      )}

      {/* Savings badge */}
      <div className="inline-flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 text-green-400 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wide mb-5 w-fit">
        <TrendingDown className="w-3 h-3" /> {pkg.saving}
      </div>

      {/* Name & Price */}
      <div className="mb-4">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{pkg.name}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black text-white tracking-tight">{pkg.price}</span>
          <span className="text-sm text-gray-500 font-bold">/ay</span>
        </div>
        <p className="text-xs text-gray-500 line-through mt-0.5">{pkg.originalPrice} yerine</p>
      </div>

      {/* Voice + Msg summary */}
      <div className="flex gap-3 mb-5">
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/5 border border-white/10 rounded-xl">
          <Phone className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-xs font-bold text-white">{pkg.minutes} dk</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/5 border border-white/10 rounded-xl">
          <MessageSquare className="w-3.5 h-3.5 text-brand" />
          <span className="text-xs font-bold text-white">{pkg.messages} msg</span>
        </div>
      </div>

      {/* Channels */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {pkg.channels.map((ch: string) => {
          const meta = CHANNEL_META[ch];
          return meta ? (
            <span key={ch} className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border ${meta.color}`}>
              {meta.icon} {meta.label}
            </span>
          ) : null;
        })}
      </div>

      {/* Features */}
      <ul className="space-y-2.5 flex-grow mb-7">
        {pkg.features.map((f: string, i: number) => (
          <li key={i} className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
            <span className="text-sm text-gray-300 font-medium">{f}</span>
          </li>
        ))}
      </ul>

      {/* Upsell */}
      {pkg.upsell && pkg.upsell !== '-' && (
        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wide mb-3">↑ {pkg.upsell}</p>
      )}

      <button
        className={`w-full py-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 group/btn ${
          isPopular
            ? 'bg-brand text-white shadow-xl shadow-brand/30 hover:bg-white hover:text-dark'
            : 'bg-white/10 text-white border border-white/10 hover:bg-brand hover:border-brand active:scale-95'
        }`}
      >
        Hemen Başla <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
}
