import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, MessageSquare, Zap, Activity, LayoutGrid } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[2rem] md:rounded-[3rem] bg-dark p-8 sm:p-12 md:p-16 lg:p-24 overflow-hidden text-center text-white shadow-2xl shadow-dark/20 border border-gray-800"
        >
          {/* Premium Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] md:w-full md:h-full bg-brand/20 rounded-full blur-[100px] md:blur-[150px] mix-blend-screen" />
            <div className="absolute -bottom-1/2 -right-1/2 w-[200%] h-[200%] md:w-full md:h-full bg-blue-500/20 rounded-full blur-[100px] md:blur-[150px] mix-blend-screen" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-brand rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 md:mb-8 backdrop-blur-md"
            >
              <Activity className="w-3.5 h-3.5" />
              GERÇEK ZAMANLI RAPORLAMA
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 md:mb-8 leading-[1.1] md:leading-[1.05] tracking-tight"
            >
              Hiçbir veri <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-red-400">karanlıkta kalmasın.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base md:text-xl text-gray-400 mb-10 md:mb-12 font-medium leading-relaxed max-w-3xl mx-auto"
            >
              Gelişmiş analitik panelimiz sayesinde görüşmelerin transkriptlerini, çağrı sürelerini, müşteri eğilimlerini ve başarı oranlarını anlık olarak izleyin.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
            >
              {[
                "Otomatik Çağrı Sınıflandırma",
                "Performans Metrikleri",
                "KPI Takibi",
                "Excel / CSV Dışa Aktarım"
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center text-center backdrop-blur-sm">
                  <span className="text-xs md:text-sm font-bold text-white/80">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            >
              <a 
                href="https://app.oxonom.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-brand text-white rounded-xl md:rounded-2xl font-bold text-sm md:text-base hover:bg-white hover:text-dark transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-brand/20 flex items-center justify-center gap-2 group"
              >
                Hemen Ücretsiz Deneyin <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link 
                to="/paketler" 
                className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-white/5 text-white rounded-xl md:rounded-2xl font-bold text-sm md:text-base hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 border border-white/10 flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <LayoutGrid className="w-5 h-5" /> Paketlere Gözat
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-8 md:mt-12 flex justify-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-xs font-bold text-white backdrop-blur-sm">
                <Zap className="w-3.5 h-3.5 text-yellow-300" /> Kayıt olduğunuzda anında $5 deneme bakiyesi hesabınıza tanımlanır.
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
