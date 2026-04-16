import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X, ArrowRight, Sparkles, LayoutGrid, Zap } from 'lucide-react';
import { sectors } from '../constants';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isPackagesMegaMenuOpen, setIsPackagesMegaMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const headerScrolled = isScrolled || !isHome || isMegaMenuOpen || isPackagesMegaMenuOpen;

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
              src={headerScrolled ? "https://oxonom.com/img/logo_light.png" : "https://oxonom.com/img/logo_white.png"} 
              alt="OXONOM Logo" 
              className={cn(
                "transition-all duration-300 object-contain",
                headerScrolled ? "h-6" : "h-8"
              )}
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className={cn(
              "text-sm font-bold transition-colors relative group",
              headerScrolled ? "text-gray-600 hover:text-brand" : "text-white/80 hover:text-white"
            )}>
              Ürün
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full" />
            </Link>
            
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
                    <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-brand/10 rounded-lg">
                          <Sparkles className="w-4 h-4 text-brand" />
                        </div>
                        <p className="text-xs font-medium text-gray-500">
                          Tüm sektörler için özel optimize edilmiş AI çözümleri.
                        </p>
                      </div>
                      <Link 
                        to="/sektorler" 
                        className="px-5 py-2.5 bg-dark text-white rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-brand transition-all group shadow-md shadow-dark/10"
                      >
                        Tüm Sektörleri Keşfet <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
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
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-white/95 backdrop-blur-2xl rounded-2xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.15)] border border-white/40 overflow-hidden p-6"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <Link
                        to="/paketler"
                        className="flex flex-col gap-2 p-4 rounded-xl hover:bg-gray-50 transition-all group border border-transparent hover:border-gray-100"
                      >
                        <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center text-brand group-hover:scale-110 transition-transform">
                          <Zap className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-dark group-hover:text-brand transition-colors">Ses Paketleri</h4>
                        <p className="text-xs text-gray-500 font-medium">Yapay zeka sesli asistan paketleri ve tarifeleri.</p>
                      </Link>
                      
                      <Link
                        to="/paketler"
                        className="flex flex-col gap-2 p-4 rounded-xl hover:bg-gray-50 transition-all group border border-transparent hover:border-gray-100"
                      >
                        <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                          <Sparkles className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-dark group-hover:text-blue-500 transition-colors">Mesaj Paketleri</h4>
                        <p className="text-xs text-gray-500 font-medium">WhatsApp ve Omnichannel mesajlaşma paketleri.</p>
                      </Link>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Link 
                        to="/paketler" 
                        className="w-full py-3 bg-dark text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-brand transition-all group shadow-md shadow-dark/10"
                      >
                        Tüm Paketleri İncele <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
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
                  src="https://oxonom.com/img/logo_light.png" 
                  alt="OXONOM Logo" 
                  className="h-6 object-contain"
                  referrerPolicy="no-referrer"
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
                <Link to="/" className="relative overflow-hidden p-5 bg-gradient-to-br from-dark to-gray-900 rounded-2xl flex items-center justify-between group shadow-xl shadow-dark/10 border border-gray-800" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand/20 rounded-full blur-[40px] -mr-16 -mt-16" />
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-brand border border-white/10 shadow-inner shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-lg text-white block mb-0.5">Ürün</span>
                      <span className="text-xs text-gray-400 font-medium">Yapay Zeka Ajanları</span>
                    </div>
                  </div>
                  <div className="relative z-10 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-brand group-hover:border-brand transition-colors">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </Link>

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
                  
                  <div className="grid grid-cols-2 gap-2 relative z-10 mt-2">
                    <Link to="/paketler" className="p-3 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center gap-2 hover:bg-white/10 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      <Zap className="w-4 h-4 text-brand" />
                      <span className="text-xs font-bold text-white">Ses</span>
                    </Link>
                    <Link to="/paketler" className="p-3 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center gap-2 hover:bg-white/10 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      <Sparkles className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-bold text-white">Mesaj</span>
                    </Link>
                  </div>
                  <Link to="/paketler" className="relative z-10 w-full py-3 bg-white/10 rounded-xl border border-white/10 flex items-center justify-center gap-2 hover:bg-white/20 transition-colors text-white text-xs font-bold mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                    Tüm Paketleri İncele <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
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
                <Link to="/" className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 font-bold text-base text-dark" onClick={() => setIsMobileMenuOpen(false)}>
                  Hakkımızda <ArrowRight className="w-5 h-5 text-gray-400" />
                </Link>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="p-6 border-t border-gray-100 bg-white">
              <a 
                href="https://app.oxonom.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-dark text-white rounded-xl font-bold text-base shadow-xl shadow-dark/10 flex items-center justify-center gap-2"
              >
                Uygulamaya Giriş Yap <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
