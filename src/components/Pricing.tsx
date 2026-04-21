import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, MessageSquare, Star, Phone } from 'lucide-react';
import { pricing } from '../constants';

const TABS = [
  { key: 'voice',     label: 'Sesli AI',    icon: <Phone className="w-4 h-4" />,        color: 'brand',  linkTo: '/ses-paketleri' },
  { key: 'messaging', label: 'Mesajlaşma',  icon: <MessageSquare className="w-4 h-4" />, color: 'blue',   linkTo: '/mesajlasma-paketleri' },
  { key: 'combo',     label: 'Combo',        icon: <Star className="w-4 h-4" />,         color: 'orange', linkTo: '/combo-paketler' },
] as const;

type TabKey = typeof TABS[number]['key'];

export default function Pricing() {
  return (
    <section className="py-20 md:py-32 bg-gray-50 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-white text-dark rounded-lg text-[10px] font-bold uppercase tracking-widest mb-5 border border-gray-200 shadow-sm"
          >
            <Zap className="w-3.5 h-3.5 text-brand" />
            KURULUM ÜCRETİ YOK · AYLIK TAAHHÜT YOK
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-dark mb-5 leading-[1.1] tracking-tight"
          >
            Şeffaf Fiyatlandırma,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-red-400">Sıfır Gizli Ücret</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-gray-500 max-w-xl mx-auto font-medium"
          >
            GSM tarifesi gibi sade: ihtiyacın kadar seç, istediğin zaman değiştir.
          </motion.p>
        </div>

        {/* 3 Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {TABS.map((tab, ti) => {
            const plans = (pricing[tab.key] as any[]);
            const accentCls = tab.color === 'brand' ? 'border-brand/20 hover:border-brand/40'
              : tab.color === 'blue' ? 'border-blue-200/60 hover:border-blue-400/50'
              : 'border-orange-200/60 hover:border-orange-400/50';
            const iconCls = tab.color === 'brand' ? 'bg-brand/10 text-brand'
              : tab.color === 'blue' ? 'bg-blue-500/10 text-blue-600'
              : 'bg-orange-500/10 text-orange-500';
            const btnCls = tab.color === 'brand' ? 'bg-brand text-white hover:bg-dark'
              : tab.color === 'blue' ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-orange-500 text-white hover:bg-dark';

            return (
              <motion.div
                key={tab.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ti * 0.1 }}
                className={`bg-white rounded-[2rem] border ${accentCls} shadow-xl shadow-dark/5 p-7 flex flex-col transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconCls}`}>
                    {tab.icon}
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{tab.label}</p>
                    {tab.key === 'combo' && (
                      <span className="inline-block px-2 py-0.5 bg-orange-500 text-white text-[8px] font-bold rounded-full uppercase tracking-wider">%22-27 Tasarruf</span>
                    )}
                  </div>
                </div>

                {/* Mini tariff list */}
                <div className="space-y-2.5 flex-grow mb-6">
                  {plans.slice(0, 4).map((pkg: any) => (
                    <div
                      key={pkg.id}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition-colors ${
                        pkg.popular ? 'bg-dark text-white' : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {tab.key === 'voice' && (
                          <span className={`text-xs font-bold ${pkg.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                            {pkg.minutes} dk
                          </span>
                        )}
                        {tab.key === 'messaging' && (
                          <span className={`text-xs font-bold ${pkg.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                            {pkg.messages} {pkg.messages !== 'Sınırsız' ? 'msg' : ''}
                          </span>
                        )}
                        {tab.key === 'combo' && (
                          <span className={`text-xs font-bold ${pkg.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                            {pkg.minutes}dk + {pkg.messages !== 'Sınırsız' ? pkg.messages + 'msg' : '∞ msg'}
                          </span>
                        )}
                        {pkg.popular && (
                          <span className="text-[9px] font-bold text-brand bg-white/10 px-1.5 py-0.5 rounded-md uppercase">Popüler</span>
                        )}
                      </div>
                      <span className={`font-black text-sm ${pkg.popular ? 'text-white' : 'text-dark'}`}>
                        {tab.key === 'voice' ? pkg.totalPrice : pkg.price}
                        <span className={`text-[10px] font-bold ml-0.5 ${pkg.popular ? 'text-gray-400' : 'text-gray-400'}`}>/ay</span>
                      </span>
                    </div>
                  ))}
                </div>

                {/* Pay-as-go note for voice */}
                {tab.key === 'voice' && (
                  <p className="text-[10px] text-gray-400 font-bold mb-4 text-center">
                    Paketsiz: {pricing.payAsYouGo.voice.price} / dakika
                  </p>
                )}
                {tab.key === 'messaging' && (
                  <p className="text-[10px] text-gray-400 font-bold mb-4 text-center">
                    Paketsiz: {pricing.payAsYouGo.msg.price} / mesaj
                  </p>
                )}

                <Link
                  to={tab.linkTo}
                  className={`w-full py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 group/btn transition-all shadow-lg ${btnCls}`}
                >
                  Tüm Tarifeler <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            to="/paketler"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-dark text-white rounded-xl font-bold text-sm hover:bg-brand transition-all shadow-xl shadow-dark/10 group"
          >
            Tüm Paketleri Karşılaştır <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
