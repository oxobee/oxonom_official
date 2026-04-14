import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Share2, BrainCircuit, Rocket, MessageSquare, Phone, Database, CheckCircle2, Sparkles, ArrowRight, Zap, Shield, Activity } from 'lucide-react';
import { cn } from '../lib/utils';

const steps = [
  {
    id: 'connect',
    title: 'Sistem Entegrasyonu',
    description: 'Mevcut altyapınıza, WhatsApp, Instagram veya web sitenize saniyeler içinde güvenle bağlanın. Kod yazmanıza gerek yok.',
    icon: Share2,
    demo: {
      title: 'Kanal Bağlantısı',
      icon: MessageSquare,
      content: 'API bağlantıları kuruluyor. Veri akışı şifrelenmiş kanallar üzerinden başlatıldı.',
      status: 'Bağlandı',
      metrics: [
        { label: 'Gecikme', value: '12ms' },
        { label: 'Durum', value: 'Aktif' }
      ]
    }
  },
  {
    id: 'train',
    title: 'Özelleştirilmiş Eğitim',
    description: 'İşletmenize ait PDF, web sitesi veya SSS verilerini yükleyin. AI ajanınız saniyeler içinde tüm işinize hakim olsun.',
    icon: BrainCircuit,
    demo: {
      title: 'Bilgi Tabanı İşleniyor',
      icon: Database,
      content: '1,240 döküman analiz edildi. Sektörel terminoloji ve ürün bilgileri vektör veritabanına eklendi.',
      status: 'Eğitildi',
      metrics: [
        { label: 'Doğruluk', value: '%99.8' },
        { label: 'Veri', value: '2.4GB' }
      ]
    }
  },
  {
    id: 'launch',
    title: 'Canlıya Alma & Otomasyon',
    description: 'Ajanınız 7/24 müşterilerinize hizmet vermeye, satış yapmaya ve destek taleplerini çözmeye başlasın.',
    icon: Rocket,
    demo: {
      title: 'AI Ajan Aktif',
      icon: Phone,
      content: 'Sistem devrede. Gelen talepler otomatik olarak karşılanıyor ve CRM sisteminize işleniyor.',
      status: 'Aktif',
      metrics: [
        { label: 'Kapasite', value: 'Sınırsız' },
        { label: 'Uptime', value: '%99.99' }
      ]
    }
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveStep((current) => (current + 1) % steps.length);
          return 0;
        }
        return prev + 1;
      });
    }, 50); // 5 seconds per step

    return () => clearInterval(timer);
  }, [activeStep]);

  const activeStepData = steps[activeStep];
  const DemoIcon = activeStepData.demo.icon;

  return (
    <section className="py-24 md:py-32 bg-dark text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 text-white rounded-lg text-[10px] font-bold uppercase tracking-widest mb-6 border border-white/10"
          >
            <Zap className="w-3.5 h-3.5 text-brand" />
            HIZLI VE KOLAY KURULUM
          </motion.div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight leading-[1.1]">
            Sadece 3 Adımda <br />
            <span className="text-brand">Yapay Zekaya</span> Geçin
          </h2>
          <p className="text-sm md:text-lg text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
            Karmaşık kodlamalara veya uzun entegrasyon süreçlerine son. Saniyeler içinde kendi AI ajanınızı oluşturun ve hemen kullanmaya başlayın.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Steps List */}
          <div className="lg:col-span-5 space-y-6">
            {steps.map((step, i) => (
              <div
                key={step.id}
                onClick={() => {
                  setActiveStep(i);
                  setProgress(0);
                }}
                className={cn(
                  "relative p-6 md:p-8 rounded-2xl transition-all cursor-pointer group overflow-hidden border",
                  activeStep === i 
                    ? "bg-white/5 border-white/20 shadow-2xl shadow-brand/5" 
                    : "bg-transparent border-transparent hover:bg-white/5"
                )}
              >
                {/* Progress Bar Background */}
                {activeStep === i && (
                  <div 
                    className="absolute bottom-0 left-0 h-1 bg-brand transition-all duration-75 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                )}

                <div className="flex items-start gap-5 relative z-10">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center transition-all shrink-0",
                    activeStep === i ? "bg-brand text-white shadow-lg shadow-brand/20" : "bg-white/5 text-gray-500 group-hover:text-white group-hover:bg-white/10"
                  )}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={cn(
                        "text-[10px] font-bold px-2 py-1 rounded-md tracking-widest",
                        activeStep === i ? "bg-brand/20 text-brand" : "bg-white/5 text-gray-500"
                      )}>
                        ADIM 0{i + 1}
                      </span>
                      <h3 className={cn(
                        "text-lg md:text-xl font-bold transition-colors",
                        activeStep === i ? "text-white" : "text-gray-400 group-hover:text-gray-200"
                      )}>
                        {step.title}
                      </h3>
                    </div>
                    <p className={cn(
                      "text-sm leading-relaxed font-medium transition-colors",
                      activeStep === i ? "text-gray-300" : "text-gray-600 group-hover:text-gray-400"
                    )}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Demo Area */}
          <div className="lg:col-span-7 relative">
            <div className="absolute inset-0 bg-brand/10 rounded-[2.5rem] blur-3xl opacity-50" />
            
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative bg-[#0A0A0A] rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden premium-shadow"
            >
              {/* Mac-like Header */}
              <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between bg-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                </div>
                <div className="px-3 py-1 bg-black/50 rounded-md border border-white/5 text-[10px] font-mono text-gray-500 flex items-center gap-2">
                  <Shield className="w-3 h-3" /> oxonom.ai/setup
                </div>
                <div className="w-10" /> {/* Spacer for balance */}
              </div>

              {/* Dashboard Content */}
              <div className="p-6 md:p-8">
                {/* Header Section */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand/20 rounded-xl flex items-center justify-center text-brand border border-brand/20">
                      {DemoIcon && <DemoIcon className="w-6 h-6" />}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{activeStepData.demo.title}</h4>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">{activeStepData.demo.status}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    {activeStepData.demo.metrics.map((metric, idx) => (
                      <div key={idx} className="text-right hidden sm:block">
                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{metric.label}</div>
                        <div className="text-sm font-mono text-white">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="space-y-6">
                  {/* Terminal/Log Window */}
                  <div className="bg-black/50 rounded-xl border border-white/5 p-4 font-mono text-xs md:text-sm text-gray-400">
                    <div className="flex items-center gap-2 mb-3 text-gray-600 border-b border-white/5 pb-2">
                      <Activity className="w-4 h-4" /> System Logs
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-green-400 mb-2"
                    >
                      &gt; Initializing process...
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-white"
                    >
                      &gt; {activeStepData.demo.content}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ delay: 1, duration: 1, repeat: Infinity }}
                      className="w-2 h-4 bg-white/50 mt-2"
                    />
                  </div>

                  {/* Animated Visuals */}
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + j * 0.1 }}
                        className="h-24 bg-white/5 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-3 relative overflow-hidden group"
                      >
                        {/* Scanning effect */}
                        <motion.div
                          animate={{ y: ['-100%', '200%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: j * 0.2 }}
                          className="absolute inset-0 border-t border-brand/50 bg-gradient-to-b from-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                          <Database className="w-4 h-4 text-gray-400" />
                        </div>
                        <div className="w-12 h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1.5, delay: 0.5 + j * 0.2 }}
                            className="h-full bg-brand"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
