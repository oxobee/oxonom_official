import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ShieldCheck, Zap, Clock, Sparkles } from 'lucide-react';
import { pricing } from '../constants';

export default function Pricing() {
  return (
    <section className="py-20 md:py-32 bg-gray-50 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-white text-dark rounded-lg text-[10px] font-bold uppercase tracking-widest mb-4 md:mb-6 border border-gray-200 shadow-sm"
          >
            <Zap className="w-3.5 h-3.5 text-brand" />
            KURULUM ÜCRETİ YOK
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-dark mb-4 md:mb-6 leading-[1.1] tracking-tight"
          >
            İster Tarifeli İster Tarifesiz <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-red-400">
              Size Uygun Paketler
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-500 mb-8 leading-relaxed font-medium max-w-2xl mx-auto"
          >
            Karmaşık sözleşmeler ve gizli maliyetler yok. İhtiyacınıza göre seçebileceğiniz 
            esnek paketlerle hemen bugün yapay zeka gücünü kullanmaya başlayın.
          </motion.p>
        </div>

        <div className="mb-12 max-w-5xl mx-auto space-y-6">
          {pricing.voice.slice(0, 4).map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className={`relative overflow-hidden rounded-[2rem] transition-all duration-500 group ${
                i === 1 
                  ? 'bg-dark text-white shadow-2xl shadow-dark/20 border border-gray-800 scale-[1.02] z-10' 
                  : 'bg-white text-dark shadow-xl shadow-dark/5 border border-gray-100 hover:border-brand/30'
              }`}
            >
              {/* Background Accents */}
              {i === 1 && (
                <>
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/20 rounded-full blur-[100px] -mr-64 -mt-64 pointer-events-none" />
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />
                </>
              )}
              {i !== 1 && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-110 pointer-events-none" />
              )}

              <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10">
                {/* Icon & Title */}
                <div className="flex items-center gap-6 w-full md:w-1/3">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-2xl shrink-0 transition-colors duration-500 ${
                    i === 1 ? 'bg-brand text-white shadow-lg shadow-brand/20' : 'bg-gray-50 text-brand group-hover:bg-brand/10'
                  }`}>
                    {pkg.icon}
                  </div>
                  <div>
                    {i === 1 && (
                      <div className="inline-block px-3 py-1 bg-gradient-to-r from-brand to-red-500 text-white text-[9px] font-bold uppercase tracking-widest rounded-full mb-2">
                        En Çok Tercih Edilen
                      </div>
                    )}
                    <h3 className="text-2xl font-bold">{pkg.name}</h3>
                  </div>
                </div>

                {/* Features / Details */}
                <div className="flex-grow flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 w-full md:w-auto border-y md:border-y-0 md:border-x border-gray-100/20 py-6 md:py-0 md:px-10">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Clock className={`w-4 h-4 ${i === 1 ? 'text-brand' : 'text-gray-400'}`} />
                      <span className={`text-sm font-bold ${i === 1 ? 'text-gray-300' : 'text-gray-500'}`}>Süre</span>
                    </div>
                    <div className="text-xl font-bold">{pkg.minutes} Dk</div>
                  </div>
                  <div className="hidden sm:block w-px h-12 bg-gray-200/20" />
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Check className={`w-4 h-4 ${i === 1 ? 'text-brand' : 'text-gray-400'}`} />
                      <span className={`text-sm font-bold ${i === 1 ? 'text-gray-300' : 'text-gray-500'}`}>Birim Fiyat</span>
                    </div>
                    <div className="text-xl font-bold">{pkg.pricePerMin} / dk</div>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex flex-col items-center md:items-end w-full md:w-1/4 shrink-0">
                  <div className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    {pkg.totalPrice}
                  </div>
                  <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 group/btn ${
                    i === 1 
                      ? 'bg-brand text-white shadow-xl shadow-brand/20 hover:bg-white hover:text-dark' 
                      : 'bg-gray-50 text-dark hover:bg-dark hover:text-white border border-gray-200'
                  }`}>
                    Hemen Satın Al <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/paketler"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-dark text-white rounded-xl font-bold text-sm hover:bg-brand transition-all shadow-xl shadow-dark/10 group"
          >
            Tüm Paketleri ve Detayları İncele <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
