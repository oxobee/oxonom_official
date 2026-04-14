import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Play, Sparkles, Shield, Zap, TrendingUp, Users, MousePointer2, BarChart3, MessageSquare, PhoneCall, Activity } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-brand min-h-[90vh] flex items-center">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y: y1 }} className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px]" />
        <motion.div style={{ y: y2 }} className="absolute bottom-0 left-[5%] w-[400px] h-[400px] bg-black/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.08]" />
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="text-center lg:text-left lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-8 border border-white/20 backdrop-blur-md shadow-lg shadow-black/10"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              OXONOM V2.0 AI MODEL AKTİF
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight"
            >
              Müşteri iletişiminde <br className="hidden sm:block" />
              <span className="relative inline-flex items-center gap-3 px-6 py-2 md:py-3 mt-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl align-middle">
                <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand shadow-lg shadow-brand/40 shrink-0">
                  <Zap className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </span>
                <span className="text-white font-black tracking-tight">insan ötesi hız.</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base md:text-xl text-white/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Binlerce çağrıyı aynı anda karşılayın veya arayın. Duygu analizi yapan, sistemlerinize entegre yeni nesil otonom temsilci.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6"
            >
              <a 
                href="https://app.oxonom.com"
                className="w-full sm:w-auto px-8 py-4 bg-dark text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-black transition-all shadow-2xl shadow-dark/30 group"
              >
                Uygulamaya Giriş Yap <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/20 transition-all backdrop-blur-sm">
                <Sparkles className="w-4 h-4" /> Ücretsiz Dene
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-12 flex justify-center lg:justify-start"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-xs font-bold text-white backdrop-blur-sm">
                <Zap className="w-3.5 h-3.5 text-yellow-300" /> Kayıt olduğunuzda anında $5 deneme bakiyesi hesabınıza tanımlanır.
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8 pt-8 border-t border-white/10"
            >
              {[
                { icon: Shield, text: "Kurulum Ücreti Yok" },
                { icon: Zap, text: "Kullandıkça Öde" },
                { icon: Users, text: "7/24 Aktif Destek" }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <badge.icon className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider">{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Interactive Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, type: 'spring', damping: 20, stiffness: 100 }}
            className="relative hidden lg:block lg:col-span-7"
            style={{ opacity }}
          >
            <div className="relative z-10 bg-dark/40 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
              {/* Mockup Header */}
              <div className="bg-dark/60 border-b border-white/10 px-4 py-3 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="px-4 py-1 bg-white/5 rounded-md border border-white/10 text-[10px] font-bold text-white/60 flex items-center gap-2">
                  <Shield className="w-3 h-3" /> app.oxonom.com
                </div>
              </div>
              
              {/* Mockup Content */}
              <div className="p-4 md:p-6 grid md:grid-cols-2 gap-4 md:gap-6 bg-gray-50/5">
                {/* Left Panel: Call Status */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center relative">
                  <div className="absolute top-4 right-4 px-2.5 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-bold tracking-widest flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    INBOUND
                  </div>
                  
                  <div className="w-20 h-20 bg-brand rounded-3xl flex items-center justify-center shadow-lg shadow-brand/20 mt-8 mb-6">
                    <PhoneCall className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Sound Waves */}
                  <div className="flex items-center gap-1 mb-8 h-8">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ height: ["20%", "100%", "20%"] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                        className="w-1.5 bg-brand rounded-full"
                      />
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold text-dark mb-1">Oxonom AI Model v2</h3>
                  <p className="text-sm font-mono text-gray-500 mb-8">Süre: 01:24</p>
                  
                  <div className="w-full flex justify-between items-end pt-6 border-t border-gray-100">
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">YANIT SÜRESİ</p>
                      <p className="text-lg font-bold text-dark">340ms</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">DUYGU ANALİZİ</p>
                      <div className="flex items-center gap-1.5 text-green-600">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                        <span className="text-sm font-bold">Nötr/Olumlu</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Panel: Transcript */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-gray-400" />
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">CANLI TRANSKRİPT</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono text-gray-500">CRM: Bağlı</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col gap-4">
                    {/* User Message */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-gray-600">M</span>
                      </div>
                      <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-tl-none p-4 text-sm text-dark font-medium leading-relaxed">
                        Merhaba, diş temizliği için randevu almak istiyorum.
                      </div>
                    </div>
                    
                    {/* Agent Message */}
                    <div className="flex gap-3 flex-row-reverse">
                      <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center shrink-0 shadow-md shadow-brand/20">
                        <span className="text-xs font-bold text-white">OX</span>
                      </div>
                      <div className="bg-red-50 border border-red-100 rounded-2xl rounded-tr-none p-4 text-sm text-dark font-medium leading-relaxed text-right">
                        Merhaba! Tabii, size yardımcı olabilirim. Hangi gün ve saat sizin için uygun olur?
                      </div>
                    </div>
                    
                    {/* Typing Indicator */}
                    <div className="flex gap-3 flex-row-reverse mt-auto">
                      <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-tr-none px-4 py-3 flex items-center gap-1">
                        <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                        <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                        <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
