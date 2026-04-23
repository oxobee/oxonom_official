import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X, ArrowRight, Sparkles, LayoutGrid, Zap, Phone, Puzzle, Star, Instagram, MessageSquare } from 'lucide-react';
import { sectors } from '../constants';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductMegaMenuOpen, setIsProductMegaMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isPackagesMegaMenuOpen, setIsPackagesMegaMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const headerScrolled = isScrolled || !isHome || isProductMegaMenuOpen || isMegaMenuOpen || isPackagesMegaMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center',
          headerScrolled 
            ? 'py-4' 
            : 'py-6'
        )}
      >
        <div className={cn(
          "flex items-center justify-between transition-all duration-500",
          headerScrolled 
            ? "w-[95%] max-w-7xl mx-auto px-6 py-3 bg-white/90 backdrop-blur-2xl border border-gray-200 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] rounded-2xl"
            : "w-full max-w-7xl mx-auto px-6"
        )}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group relative z-50">
            <img 
              src={headerScrolled ? "/logo_light.png" : "/logo_white.png"} 
              alt="OXONOM Logo" 
              className={cn(
                "transition-all duration-300 object-contain",
                headerScrolled ? "h-6" : "h-8"
              )}
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Ürün Mega Menu Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductMegaMenuOpen(true)}
              onMouseLeave={() => setIsProductMegaMenuOpen(false)}
            >
              <button className={cn(
                "flex items-center gap-1.5 text-sm font-bold transition-colors group py-2",
                headerScrolled ? "text-gray-600 hover:text-brand" : "text-white/80 hover:text-white"
              )}>
                Ürün
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isProductMegaMenuOpen && "rotate-180")} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full" />
              </button>

              <AnimatePresence>
                {isProductMegaMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.98 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[95vw] max-w-5xl bg-white/95 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.15)] border border-white/40 overflow-hidden p-2"
                  >
                    <div className="grid grid-cols-12 gap-2 p-2">
                      <div className="col-span-12 md:col-span-8 grid grid-cols-2 gap-2">
                        <Link
                          to="/instagram"
                          onClick={() => setIsProductMegaMenuOpen(false)}
                          className="group relative overflow-hidden rounded-[2rem] p-6 bg-gradient-to-br from-pink-50 to-orange-50 border border-pink-100 hover:border-brand/30 transition-all"
                        >
                          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                          <div className="relative z-10 flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-500 text-white flex items-center justify-center shadow-lg shadow-pink-500/20">
                              <Instagram className="w-6 h-6" />
                            </div>
                            <div className="min-w-0">
                              <h4 className="text-base font-bold text-dark group-hover:text-brand transition-colors mb-1">Instagram</h4>
                              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                                DM + yorum otomasyonu, lead skorlama ve 30+ dil.
                              </p>
                              <div className="mt-3 flex items-center gap-2 text-[10px] font-bold text-brand uppercase tracking-widest opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                                Sayfayı Aç <ArrowRight className="w-3 h-3" />
                              </div>
                            </div>
                          </div>
                        </Link>

                        <Link
                          to="/mesajlasma-paketleri"
                          onClick={() => setIsProductMegaMenuOpen(false)}
                          className="group relative overflow-hidden rounded-[2rem] p-6 bg-white border border-gray-100 hover:border-blue-500/30 hover:shadow-lg transition-all"
                        >
                          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                          <div className="relative z-10 flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 border border-blue-200 flex items-center justify-center">
                              <MessageSquare className="w-6 h-6" />
                            </div>
                            <div className="min-w-0">
                              <h4 className="text-base font-bold text-dark group-hover:text-blue-600 transition-colors mb-1">Mesajlaşma</h4>
                              <p className="text-xs text-gray-500 font-medium leading-relaxed">WhatsApp, Instagram, Facebook ve Web Chat.</p>
                              <div className="mt-3 flex items-center gap-2 text-[10px] font-bold text-blue-600 uppercase tracking-widest opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                                Paketleri İncele <ArrowRight className="w-3 h-3" />
                              </div>
                            </div>
                          </div>
                        </Link>

                        <Link
                          to="/ses-paketleri"
                          onClick={() => setIsProductMegaMenuOpen(false)}
                          className="group relative overflow-hidden rounded-[2rem] p-6 bg-white border border-gray-100 hover:border-brand/30 hover:shadow-lg transition-all"
                        >
                          <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                          <div className="relative z-10 flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand border border-brand/20 flex items-center justify-center">
                              <Zap className="w-6 h-6" />
                            </div>
                            <div className="min-w-0">
                              <h4 className="text-base font-bold text-dark group-hover:text-brand transition-colors mb-1">Sesli Asistan</h4>
                              <p className="text-xs text-gray-500 font-medium leading-relaxed">İnsan doğallığında 7/24 sesli görüşme.</p>
                              <div className="mt-3 flex items-center gap-2 text-[10px] font-bold text-brand uppercase tracking-widest opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                                Paketleri İncele <ArrowRight className="w-3 h-3" />
                              </div>
                            </div>
                          </div>
                        </Link>

                        <Link
                          to="/combo-paketler"
                          onClick={() => setIsProductMegaMenuOpen(false)}
                          className="group relative overflow-hidden rounded-[2rem] p-6 bg-gradient-to-b from-orange-50/60 to-white border border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all"
                        >
                          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                          <div className="relative z-10 flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-600 border border-orange-200 flex items-center justify-center">
                              <Star className="w-6 h-6" />
                            </div>
                            <div className="min-w-0">
                              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 text-orange-700 border border-orange-200 rounded-full text-[9px] font-black uppercase tracking-widest mb-2">
                                Avantajlı
                              </div>
                              <h4 className="text-base font-bold text-dark group-hover:text-orange-700 transition-colors mb-1">Combo</h4>
                              <p className="text-xs text-gray-500 font-medium leading-relaxed">Ses + mesajlaşma bir arada. Daha avantajlı.</p>
                              <div className="mt-3 flex items-center gap-2 text-[10px] font-bold text-orange-700 uppercase tracking-widest opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                                Paketleri İncele <ArrowRight className="w-3 h-3" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="col-span-12 md:col-span-4 rounded-[2rem] bg-dark text-white p-6 border border-gray-800 overflow-hidden relative">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand/20 rounded-full blur-3xl" />

                        <div className="relative z-10">
                          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-brand mb-3">Hızlı Başlangıç</p>
                          <h4 className="text-xl font-bold mb-2">Instagram satışlarınızı hızlandırın.</h4>
                          <p className="text-xs text-gray-300 font-medium leading-relaxed mb-5">
                            DM ve yorumlara anında yanıt, lead nitelendirme ve randevu yönlendirme — hepsi tek yerden.
                          </p>

                          <div className="space-y-2 mb-6">
                            {[
                              'DM + Yorum Otomasyonu',
                              'Anahtar kelime tetikleme',
                              '30+ dil ile doğal iletişim',
                            ].map((t) => (
                              <div key={t} className="flex items-start gap-2">
                                <div className="w-5 h-5 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0 mt-0.5">
                                  <Sparkles className="w-3.5 h-3.5 text-brand" />
                                </div>
                                <span className="text-xs font-bold text-gray-200">{t}</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex flex-col gap-2">
                            <Link
                              to="/mesajlasma-paketleri"
                              onClick={() => setIsProductMegaMenuOpen(false)}
                              className="w-full py-3 bg-brand text-white rounded-2xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-dark transition-all shadow-xl shadow-brand/20 active:scale-95"
                            >
                              Paketleri İncele <ArrowRight className="w-4 h-4" />
                            </Link>
                            <a
                              href="https://wa.me/908503099901"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsProductMegaMenuOpen(false)}
                              className="w-full py-3 bg-white/10 text-white rounded-2xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-dark transition-all border border-white/15 active:scale-95"
                            >
                              Ücretsiz Demo <ArrowRight className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Sektörler Mega Menu Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button className={cn(
                "flex items-center gap-1.5 text-sm font-bold transition-colors group py-2",
                headerScrolled ? "text-gray-600 hover:text-brand" : "text-white/80 hover:text-white"
              )}>
                Sektörler
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isMegaMenuOpen && "rotate-180")} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full" />
              </button>

              {/* Mega Menu Content */}
              <AnimatePresence>
                {isMegaMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.98 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[95vw] max-w-6xl bg-white/95 backdrop-blur-2xl rounded-2xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.15)] border border-white/40 overflow-hidden p-8"
                  >
                    <div className="grid grid-cols-4 gap-x-6 gap-y-4">
                      {sectors.map((sector) => (
                        <Link
                          key={sector.id}
                          to={`/sektorler/${sector.id}`}
                          onClick={() => setIsMegaMenuOpen(false)}
                          className="flex items-start gap-4 p-2 rounded-xl hover:bg-gray-50/80 transition-all group"
                        >
                          <div className="p-2.5 bg-gray-100 rounded-xl text-gray-600 group-hover:bg-brand group-hover:text-white transition-all duration-300 shadow-sm">
                            <sector.icon className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                          </div>
                          <div>
                            <h4 className="text-[14px] font-bold text-dark group-hover:text-brand transition-colors">
                              {sector.name}
                            </h4>
                            <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5 font-medium">
                              {sector.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center shrink-0">
                          <Sparkles className="w-6 h-6 text-brand" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-dark mb-0.5">
                            Özel bir çözüm mü arıyorsunuz?
                          </p>
                          <p className="text-xs text-gray-500 font-medium">
                            İşletmenize özel otonom AI senaryoları için uzman ekibimizle iletişime geçin.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 w-full md:w-auto">
                        <Link 
                          to="/sektorler" 
                          onClick={() => setIsMegaMenuOpen(false)}
                          className="px-5 py-3 text-gray-500 hover:text-dark text-xs font-bold transition-colors"
                        >
                          Tüm Sektörler
                        </Link>
                        <a 
                          href="https://wa.me/908503099901"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 md:flex-none px-8 py-3 bg-brand text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-dark transition-all group shadow-lg shadow-brand/20 active:scale-95"
                        >
                          <Phone className="w-4 h-4" /> Uzmanla Görüşün <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Paketler Mega Menu Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setIsPackagesMegaMenuOpen(true)}
              onMouseLeave={() => setIsPackagesMegaMenuOpen(false)}
            >
              <button className={cn(
                "flex items-center gap-1.5 text-sm font-bold transition-colors group py-2",
                headerScrolled ? "text-gray-600 hover:text-brand" : "text-white/80 hover:text-white"
              )}>
                Paketler
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isPackagesMegaMenuOpen && "rotate-180")} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full" />
              </button>

              {/* Paketler Mega Menu Content */}
              <AnimatePresence>
                {isPackagesMegaMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.98 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[650px] bg-white/95 backdrop-blur-3xl rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] border border-white/40 overflow-hidden p-2"
                  >
                    <div className="grid grid-cols-3 gap-2">
                       <Link
                        to="/ses-paketleri"
                        onClick={() => setIsPackagesMegaMenuOpen(false)}
                        className="group relative flex flex-col gap-3 p-6 rounded-[2rem] hover:bg-brand/5 transition-all duration-500 overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                        <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-sm">
                          <Zap className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-dark group-hover:text-brand transition-colors mb-1">Ses Paketleri</h4>
                          <p className="text-xs text-gray-500 font-medium leading-relaxed">Dakika bazlı AI<br />sesli asistan tarifeleri.</p>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-brand uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                          İncele <ArrowRight className="w-3 h-3" />
                        </div>
                      </Link>

                      <Link
                        to="/mesajlasma-paketleri"
                        onClick={() => setIsPackagesMegaMenuOpen(false)}
                        className="group relative flex flex-col gap-3 p-6 rounded-[2rem] hover:bg-blue-500/5 transition-all duration-500 overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                        <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-sm">
                          <Sparkles className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-dark group-hover:text-blue-500 transition-colors mb-1">Mesaj Paketleri</h4>
                          <p className="text-xs text-gray-500 font-medium leading-relaxed">WhatsApp, Instagram<br />ve tüm kanallar.</p>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                          İncele <ArrowRight className="w-3 h-3" />
                        </div>
                      </Link>

                      <Link
                        to="/combo-paketler"
                        onClick={() => setIsPackagesMegaMenuOpen(false)}
                        className="group relative flex flex-col gap-3 p-6 rounded-[2rem] hover:bg-orange-500/5 transition-all duration-500 overflow-hidden bg-gradient-to-b from-orange-50/50 to-transparent border border-orange-100"
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                        <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-sm">
                          <Star className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="inline-block px-2 py-0.5 bg-orange-500 text-white text-[8px] font-bold rounded-full mb-1 uppercase tracking-wider">Avantajlı</div>
                          <h4 className="text-base font-bold text-dark group-hover:text-orange-500 transition-colors mb-1">Combo Paketler</h4>
                          <p className="text-xs text-gray-500 font-medium leading-relaxed">Ses + Mesajlaşma<br />%22-27 tasarruf.</p>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-orange-500 uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                          İncele <ArrowRight className="w-3 h-3" />
                        </div>
                      </Link>
                    </div>
                    
                    <div className="p-6 bg-gray-50/50 flex flex-col items-center justify-center text-center">
                       <Link 
                        to="/paketler" 
                        onClick={() => setIsPackagesMegaMenuOpen(false)}
                        className="w-full py-4 bg-dark text-white rounded-2xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-brand transition-all shadow-xl shadow-dark/10 group active:scale-95"
                      >
                        Tüm Paket Seçeneklerini Gör <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <p className="mt-4 text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">ÖZELLİK KARŞILAŞTIRMALI FİYATLANDIRMA</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/entegrasyonlar" className={cn(
              "text-sm font-bold transition-colors relative group",
              headerScrolled ? "text-gray-600 hover:text-brand" : "text-white/80 hover:text-white"
            )}>
              Entegrasyonlar
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4 ml-8">
            <Link to="/blog" className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all border",
              headerScrolled ? "border-gray-200 text-dark hover:bg-gray-50" : "border-white/20 text-white hover:bg-white/10"
            )}>
              Blog
              <span className="px-1.5 py-0.5 bg-brand text-white text-[9px] font-black uppercase rounded-md tracking-wider shadow-sm animate-pulse">Yeni</span>
            </Link>

            <a 
              href="https://app.oxonom.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "px-6 py-2.5 rounded-xl text-xs font-bold transition-all hover:scale-105 active:scale-95 shadow-xl",
                headerScrolled ? "bg-dark text-white hover:bg-brand shadow-dark/10" : "bg-white text-dark hover:bg-gray-50 shadow-white/10"
              )}
            >
              Uygulama
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={cn(
              "lg:hidden flex items-center gap-2 px-4 py-2 rounded-full z-50 transition-all font-bold text-xs shadow-lg",
              headerScrolled 
                ? "bg-white text-dark border border-gray-200 shadow-dark/5" 
                : "bg-white/10 text-white backdrop-blur-md border border-white/20 shadow-black/10"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <>
                <X className="w-4 h-4" /> Kapat
              </>
            ) : (
              <>
                <Menu className="w-4 h-4" /> Menü
              </>
            )}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-[60] lg:hidden flex flex-col overflow-hidden"
          >
            {/* Header inside mobile menu */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
              <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <img 
                  src="/logo_light.png" 
                  alt="OXONOM Logo" 
                  className="h-6 object-contain"
                />
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-dark font-bold text-xs"
              >
                <X className="w-4 h-4" /> Kapat
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-8">
	              {/* Main Links */}
	              <div className="flex flex-col gap-3 mb-8">
	                <div className="relative overflow-hidden p-5 bg-gradient-to-br from-dark to-gray-900 rounded-2xl flex flex-col gap-4 shadow-xl shadow-dark/10 border border-gray-800">
	                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />
	                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand/20 rounded-full blur-[40px] -mr-16 -mt-16" />
	                  
	                  <div className="flex items-center justify-between gap-4 relative z-10">
	                    <div className="flex items-center gap-4">
	                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-brand border border-white/10 shadow-inner shrink-0">
	                      <Sparkles className="w-5 h-5" />
	                    </div>
	                    <div>
	                      <span className="font-bold text-lg text-white block mb-0.5">Ürün</span>
	                      <span className="text-xs text-gray-400 font-medium">Yapay Zeka Ajanları</span>
	                    </div>
	                    </div>
	                    <Link to="/instagram" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-brand hover:border-brand transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
	                      <ArrowRight className="w-4 h-4 text-white" />
	                    </Link>
	                  </div>

	                  <div className="grid grid-cols-3 gap-2 relative z-10 mt-2">
	                    <Link to="/instagram" className="p-3 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center gap-2 hover:bg-white/10 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
	                      <Instagram className="w-4 h-4 text-pink-300" />
	                      <span className="text-xs font-bold text-white">Instagram</span>
	                    </Link>
	                    <Link to="/mesajlasma-paketleri" className="p-3 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center gap-2 hover:bg-white/10 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
	                      <MessageSquare className="w-4 h-4 text-blue-300" />
	                      <span className="text-xs font-bold text-white">DM</span>
	                    </Link>
	                    <Link to="/ses-paketleri" className="p-3 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center gap-2 hover:bg-white/10 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
	                      <Zap className="w-4 h-4 text-brand" />
	                      <span className="text-xs font-bold text-white">Ses</span>
	                    </Link>
	                  </div>

	                  <Link to="/instagram" className="relative z-10 w-full py-3 bg-white/10 rounded-xl border border-white/10 flex items-center justify-center gap-2 hover:bg-white/20 transition-colors text-white text-xs font-bold mt-1" onClick={() => setIsMobileMenuOpen(false)}>
	                    Instagram Sayfasını Aç <ArrowRight className="w-3 h-3" />
	                  </Link>
	                </div>

                <div className="relative overflow-hidden p-5 bg-gradient-to-br from-dark to-gray-900 rounded-2xl flex flex-col gap-4 shadow-xl shadow-dark/10 border border-gray-800">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[40px] -mr-16 -mt-16" />
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-blue-400 border border-white/10 shadow-inner shrink-0">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-lg text-white block mb-0.5">Paketler</span>
                      <span className="text-xs text-gray-400 font-medium">Size Uygun Fiyatlar</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 relative z-10 mt-2">
                    <Link to="/ses-paketleri" className="p-3 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center gap-2 hover:bg-white/10 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      <Zap className="w-4 h-4 text-brand" />
                      <span className="text-xs font-bold text-white">Ses</span>
                    </Link>
                    <Link to="/mesajlasma-paketleri" className="p-3 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center gap-2 hover:bg-white/10 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      <Sparkles className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-bold text-white">Mesaj</span>
                    </Link>
                    <Link to="/combo-paketler" className="p-3 bg-orange-500/10 rounded-xl border border-orange-500/20 flex flex-col items-center gap-2 hover:bg-orange-500/20 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      <Star className="w-4 h-4 text-orange-400" />
                      <span className="text-xs font-bold text-orange-300">Combo</span>
                    </Link>
                  </div>
                  <Link to="/paketler" className="relative z-10 w-full py-3 bg-white/10 rounded-xl border border-white/10 flex items-center justify-center gap-2 hover:bg-white/20 transition-colors text-white text-xs font-bold mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                    Tüm Paketleri İncele <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <Link to="/blog" className="mt-4 flex items-center justify-between p-5 rounded-2xl bg-brand/5 border border-brand/20 font-bold text-base text-brand shadow-sm" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand/10 border border-brand/20 rounded-xl flex items-center justify-center">
                       <span className="text-xl">📰</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        Blog
                        <span className="px-1.5 py-0.5 bg-brand text-white text-[9px] font-black uppercase rounded-md tracking-wider shadow-sm animate-pulse">Yeni</span>
                      </div>
                      <div className="text-xs text-gray-500 font-medium mt-0.5">Yapay Zeka Insights</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </Link>

                <Link to="/entegrasyonlar" className="mt-4 flex items-center justify-between p-5 rounded-2xl bg-white border border-gray-100 font-bold text-base text-dark shadow-sm hover:border-brand/30 hover:shadow-md transition-all group" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-50 group-hover:bg-brand/10 border border-gray-100 group-hover:border-brand/20 rounded-xl flex items-center justify-center transition-colors">
                       <Puzzle className="w-5 h-5 text-gray-500 group-hover:text-brand transition-colors" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-dark group-hover:text-brand transition-colors">Entegrasyonlar</div>
                      <div className="text-xs text-gray-500 font-medium mt-0.5">OXONOM Ekosistemi</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-brand transition-colors" />
                </Link>
              </div>

              {/* Sectors */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Sektörel Çözümler</h4>
                  <Link to="/sektorler" className="text-[10px] font-bold text-brand uppercase tracking-wider bg-brand/10 px-3 py-1 rounded-full" onClick={() => setIsMobileMenuOpen(false)}>Tümünü Gör</Link>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {sectors.slice(0, 6).map((sector) => (
                    <Link
                      key={sector.id}
                      to={`/sektorler/${sector.id}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:border-brand/30 hover:shadow-md transition-all group"
                    >
                      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-600 group-hover:bg-brand group-hover:text-white transition-colors shrink-0">
                        <sector.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-base text-dark mb-1 group-hover:text-brand transition-colors">{sector.name}</p>
                        <p className="text-xs text-gray-500 font-medium line-clamp-1">{sector.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other Links */}
              <div className="space-y-2">
                <Link to="/hakkimizda" className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 font-bold text-base text-dark" onClick={() => setIsMobileMenuOpen(false)}>
                  Hakkımızda <ArrowRight className="w-5 h-5 text-gray-400" />
                </Link>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="p-6 border-t border-gray-100 bg-white">
              <a 
                href="https://wa.me/908503099901"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp üzerinden uzmanla görüşün"
                className="w-full py-4 bg-brand text-white rounded-xl font-bold text-base shadow-xl shadow-brand/20 flex items-center justify-center gap-2 active:scale-95"
              >
                <Phone className="w-5 h-5" /> Uzmanla Görüşün <ArrowRight className="w-5 h-5" />
              </a>
              <div className="mt-4 text-center">
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">VEYA UYGULAMAYA GİRİŞ YAPIN</p>
                 <a href="https://app.oxonom.com" aria-label="OXONOM uygulamasına giriş yap" className="inline-block mt-2 text-dark font-bold text-xs hover:text-brand transition-colors underline underline-offset-4">app.oxonom.com</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
