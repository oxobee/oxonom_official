import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sectors } from '../constants';

export default function SectorsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSectors = useMemo(() => {
    return sectors.filter(sector => {
      const matchesSearch = sector.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           sector.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [searchQuery]);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 text-dark rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand" />
            SEKTÖREL ÇÖZÜMLER
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-dark mb-6 tracking-tight leading-[1.1]"
          >
            Tüm Sektörler İçin <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-red-400">Yapay Zeka</span> Çözümleri
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Her sektör için özel optimize edilmiş AI ajanlar ile işinizi büyütün. Sektörünüze özel senaryoları keşfedin.
          </motion.p>
        </div>

        {/* Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-16 items-center justify-center bg-white p-4 rounded-3xl border border-gray-100 shadow-xl shadow-dark/5 max-w-2xl mx-auto">
          <div className="relative w-full">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text"
              placeholder="Sektör ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all font-medium text-dark placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredSectors.map((sector, i) => (
              <motion.div
                key={sector.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, delay: i * 0.05, type: "spring", stiffness: 300, damping: 30 }}
                className="group"
              >
                <Link 
                  to={`/sektorler/${sector.id}`}
                  className="block h-full p-8 rounded-[2.5rem] bg-white border border-gray-100 hover:border-brand/30 transition-all duration-500 hover:shadow-2xl hover:shadow-brand/5 flex flex-col relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-600 group-hover:bg-brand group-hover:text-white transition-colors duration-500 border border-gray-100 group-hover:border-brand">
                        <sector.icon className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                      </div>
                      <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-dark group-hover:text-white transition-all duration-500">
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-brand transition-colors">
                      {sector.name}
                    </h3>
                    <p className="text-gray-500 mb-8 flex-grow font-medium leading-relaxed">
                      {sector.description}
                    </p>

                    <div className="space-y-3 pt-6 border-t border-gray-50">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">KULLANIM SENARYOLARI</p>
                      {sector.useCases.slice(0, 3).map((useCase) => (
                        <div key={useCase} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                          {useCase}
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredSectors.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 bg-gray-50 rounded-[3rem] border border-gray-100"
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Search className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-2xl font-bold text-dark mb-2">Sonuç Bulunamadı</h3>
            <p className="text-gray-500">Aramanızla eşleşen bir sektör bulunamadı. Lütfen farklı bir terim deneyin.</p>
          </motion.div>
        )}

        {/* Info-graphic Style Section */}
        <div className="mt-32 p-12 md:p-20 bg-dark rounded-[3rem] text-white overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none blur-[2px]">
            {/* Simple SVG lines to represent flow */}
            <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 50 L150 150 L250 100 L350 250" stroke="url(#paint0_linear)" strokeWidth="3" strokeDasharray="10 10" />
              <circle cx="50" cy="50" r="6" fill="#E50914" />
              <circle cx="150" cy="150" r="6" fill="#E50914" />
              <circle cx="250" cy="100" r="6" fill="#E50914" />
              <circle cx="350" cy="250" r="6" fill="#E50914" />
              <defs>
                <linearGradient id="paint0_linear" x1="50" y1="50" x2="350" y2="250" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E50914" />
                  <stop offset="1" stopColor="#E50914" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white rounded-lg text-[10px] font-bold uppercase tracking-widest mb-6 border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-brand" />
                ÖZEL ÇÖZÜMLER
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Özel Entegrasyon ve <br/><span className="text-brand">Akış Yönetimi</span></h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
                Her sektörün kendine has iş akışları vardır. OXONOM, bu akışları analiz eder ve sizin için en verimli AI diyagramlarını oluşturur.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand font-bold text-xl group-hover:bg-brand group-hover:text-white transition-all">01</div>
                  <p className="font-bold text-lg text-gray-300 group-hover:text-white transition-colors">Veri Analizi ve Öğrenme</p>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand font-bold text-xl group-hover:bg-brand group-hover:text-white transition-all">02</div>
                  <p className="font-bold text-lg text-gray-300 group-hover:text-white transition-colors">Akış Diyagramı Tasarımı</p>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand font-bold text-xl group-hover:bg-brand group-hover:text-white transition-all">03</div>
                  <p className="font-bold text-lg text-gray-300 group-hover:text-white transition-colors">Canlı Yayına Geçiş</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 p-8 rounded-3xl backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">AI FLOW DIAGRAM</div>
              </div>
              <div className="space-y-6">
                <div className="p-4 bg-brand/10 border border-brand/20 rounded-xl text-center font-bold text-brand shadow-lg">Müşteri Talebi</div>
                <div className="flex justify-center"><div className="w-0.5 h-6 bg-gray-800" /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-center text-sm font-medium hover:bg-gray-800 transition-colors">Satış Odaklı</div>
                  <div className="p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-center text-sm font-medium hover:bg-gray-800 transition-colors">Destek Odaklı</div>
                </div>
                <div className="flex justify-center"><div className="w-0.5 h-6 bg-gray-800" /></div>
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-center font-bold text-green-500 shadow-lg">Çözüm ve Kapanış</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
