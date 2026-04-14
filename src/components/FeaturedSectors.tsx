import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, LayoutGrid, Sparkles, Zap, ShieldCheck, BarChart3 } from 'lucide-react';
import { sectors } from '../constants';

export default function FeaturedSectors() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-dark rounded-[2rem] md:rounded-[3rem] overflow-hidden relative shadow-2xl">
          {/* Inner Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/20 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none" />

          <div className="relative z-10 p-8 sm:p-12 md:p-16 lg:p-24">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-[10px] font-bold uppercase tracking-widest mb-6 md:mb-8 backdrop-blur-sm"
                >
                  <Sparkles className="w-3.5 h-3.5 text-brand" />
                  SEKTÖREL ÇÖZÜMLER
                </motion.div>
                
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 md:mb-6 leading-[1.1] tracking-tight">
                  Sektörünüze Özel <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-red-400">Yapay Zeka</span> Ajanları
                </h2>
                
                <p className="text-base md:text-lg text-gray-400 mb-8 md:mb-10 max-w-xl leading-relaxed font-medium">
                  Sadece bir chatbot değil, sektörünüzün dinamiklerine hakim, eğitilmiş ve optimize edilmiş profesyonel bir iş ortağına sahip olun.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
                  {[
                    { icon: Zap, text: 'Hızlı Entegrasyon' },
                    { icon: ShieldCheck, text: 'Veri Güvenliği' },
                    { icon: BarChart3, text: 'Sektörel Eğitim' },
                    { icon: CheckCircle2, text: '7/24 Aktif Çalışma' }
                  ].map((item, idx) => (
                    <motion.div 
                      key={item.text}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3 md:gap-4 text-white/90 font-bold text-sm"
                    >
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-brand shadow-inner shrink-0">
                        <item.icon className="w-4 h-4" />
                      </div>
                      {item.text}
                    </motion.div>
                  ))}
                </div>

                <Link 
                  to="/sektorler"
                  className="inline-flex items-center justify-center w-full sm:w-auto gap-3 px-8 py-4 bg-brand text-white rounded-xl font-bold text-sm hover:bg-white hover:text-dark transition-all group shadow-xl shadow-brand/20"
                >
                  Tüm Sektörleri Keşfet <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right Content - App-like Interface Mockup */}
              <div className="relative mt-8 lg:mt-0 hidden sm:block">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, type: "spring" }}
                  className="bg-gray-900/80 border border-gray-800 rounded-2xl p-4 md:p-6 backdrop-blur-xl shadow-2xl relative z-10"
                  style={{ perspective: '1000px' }}
                >
                  {/* Mockup Header */}
                  <div className="flex items-center justify-between mb-6 md:mb-8 border-b border-gray-800 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500" />
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500" />
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                      <LayoutGrid className="w-3 h-3" /> SEKTÖR SEÇİMİ
                    </div>
                  </div>

                  {/* Sector Grid inside Mockup */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 pb-16 md:pb-20">
                    {sectors.slice(0, 9).map((sector, i) => (
                      <motion.div
                        key={sector.id}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (i * 0.05) }}
                        className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-3 md:p-4 flex flex-col items-center justify-center gap-2 md:gap-3 hover:bg-brand/20 hover:border-brand/30 transition-all cursor-pointer group"
                      >
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-900 rounded-lg md:rounded-xl flex items-center justify-center text-gray-400 group-hover:text-brand transition-colors shadow-inner">
                          <sector.icon className="w-4 h-4 md:w-5 md:h-5" />
                        </div>
                        <span className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center group-hover:text-white transition-colors line-clamp-1">
                          {sector.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mockup Footer/Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-gray-900 to-transparent rounded-b-2xl pointer-events-none flex items-end justify-center pb-4 md:pb-6">
                    <div className="px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[9px] md:text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-2">
                      <Sparkles className="w-3 h-3 text-brand" /> +15 Daha Fazla Sektör
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Elements around Mockup */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-red-500/20 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
