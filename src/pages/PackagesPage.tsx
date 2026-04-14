import { motion } from 'motion/react';
import { Check, Info, Phone, Globe, ArrowRight, Sparkles, Zap, ShieldCheck, CreditCard, Clock } from 'lucide-react';
import { pricing } from '../constants';

export default function PackagesPage() {
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
            ŞEFFAF FİYATLANDIRMA
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-dark mb-6 tracking-tight leading-[1.1]"
          >
            İşletmeniz İçin <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-red-400">En Uygun Paketi</span> Seçin
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Gizli maliyet yok, karmaşık sözleşmeler yok. Sadece kullandığınız kadar ödeyin veya avantajlı paketlerimizden birini seçin.
          </motion.p>
        </div>

        {/* Packages List (Horizontal Cards) */}
        <div className="mb-20 max-w-5xl mx-auto space-y-6">
          {pricing.packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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

        {/* Pay As You Go Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-5xl mx-auto bg-dark rounded-[2rem] p-8 md:p-12 mb-10 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform group-hover:scale-110 duration-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-white rounded-lg text-[10px] font-bold uppercase tracking-widest mb-4 border border-white/20 backdrop-blur-sm">
                <CreditCard className="w-3.5 h-3.5 text-brand" />
                KULLANDIKÇA ÖDE
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">{pricing.payAsYouGo.name}</h2>
              <p className="text-gray-400 font-medium max-w-md">{pricing.payAsYouGo.description}</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end shrink-0">
              <div className="text-5xl font-bold text-white mb-1 tracking-tight">
                {pricing.payAsYouGo.price}
              </div>
              <div className="text-sm text-gray-400 font-medium mb-6">/ {pricing.payAsYouGo.unit}</div>
              <button className="px-8 py-4 bg-white text-dark rounded-xl font-bold text-sm hover:bg-brand hover:text-white transition-all shadow-xl flex items-center gap-2 group/btn">
                Hemen Başla <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-5xl mx-auto text-center mb-16"
        >
          <p className="text-xs text-gray-400 font-medium">
            * Kullanılmayan dakikalar: Bir sonraki aya %20'si devreder.
          </p>
        </motion.div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-brand to-red-600 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.1]" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px] -mr-32 -mt-32" />
          
          <div className="relative z-10 max-w-xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Size Uygun Paket Bulamadınız mı?
            </h3>
            <p className="text-white/80 font-medium text-lg">
              İhtiyaçlarınıza özel, esnek ve ölçeklenebilir Enterprise paketleri birlikte oluşturalım.
            </p>
          </div>
          
          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <button className="w-full md:w-auto px-8 py-5 bg-white text-dark rounded-xl font-bold text-base hover:bg-dark hover:text-white transition-all shadow-xl flex items-center justify-center gap-2 group">
              Özel Teklif Al <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
