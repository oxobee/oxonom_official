import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { Home, Search, Compass, Sparkles } from 'lucide-react';
import JsonLd from '../components/JsonLd';

export default function NotFoundPage() {
  useSEO({
    title: 'Sayfa Bulunamadı - 404 | OXONOM',
    description: 'Aradığınız sayfa taşınmış veya silinmiş olabilir. OXONOM otonom yapay zeka asistanları ile tanışmak için ana sayfaya dönün.',
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* SEO Schema for 404 is not strictly required by Google, but keeping standard structure helps */}

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-20 right-20 text-brand/10 rotate-45 pointer-events-none">
        <Sparkles className="w-32 h-32" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
        className="text-center relative z-10"
      >
        <motion.div
           animate={{ y: [0, -15, 0] }}
           transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
           className="relative inline-block mb-6"
        >
          <div className="text-[150px] md:text-[200px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-brand via-red-500 to-orange-400 drop-shadow-2xl select-none">
            404
          </div>
          {/* Sevimli İcon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/20 backdrop-blur-xl rounded-full border border-white/40 shadow-[0_0_40px_rgba(255,0,0,0.1)] flex items-center justify-center">
             <Compass className="w-20 h-20 text-brand animate-spin-slow" />
          </div>
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">
          Ups! Buralar biraz ıssız...
        </h1>
        <p className="text-gray-500 text-lg md:text-xl font-medium max-w-md mx-auto mb-10 leading-relaxed">
          Aradığın sayfa dijital uzayda kaybolmuş olabilir veya yapay zeka ajanlarımız henüz o sayfayı inşa etmedi.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="flex items-center gap-2 px-8 py-4 bg-brand text-white rounded-2xl font-bold hover:bg-dark transition-all transform hover:-translate-y-1 hover:shadow-xl shadow-brand/20 w-full sm:w-auto justify-center group"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Ana Sayfaya Dön
          </Link>
          <Link
            to="/paketler"
            className="flex items-center gap-2 px-8 py-4 bg-white text-dark border border-gray-200 rounded-2xl font-bold hover:bg-gray-50 transition-all transform hover:-translate-y-1 hover:shadow-md w-full sm:w-auto justify-center group"
          >
            <Search className="w-5 h-5 text-brand group-hover:rotate-12 transition-transform" />
            Paketleri İncele
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
